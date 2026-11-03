"""Import one checksum-verified static distribution on the publication feature branch."""
import hashlib
import json
import shutil
import subprocess
import sys
import tarfile
import tempfile
import zipfile
from pathlib import Path

EXPECTED_SOURCE = 'ec753c25a48ca0a955da1888c6f210e38a1e1ef8'
assert subprocess.check_output(['git', 'branch', '--show-current'], text=True).strip() == 'feat/brand-v2-storytelling'
root = Path.cwd()
archive = Path(sys.argv[1]).resolve()
expected_digest = sys.argv[2]
assert hashlib.sha256(archive.read_bytes()).hexdigest() == expected_digest, 'Artifact checksum mismatch'

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

retained = {p.relative_to(root).as_posix(): digest(p) for directory in ['assets', 'fonts'] for p in (root / directory).rglob('*') if p.is_file()}
assert (root / 'CNAME').read_text().strip() == 'izignamx.com'
with tempfile.TemporaryDirectory() as directory:
    temp = Path(directory)
    with zipfile.ZipFile(archive) as zipped:
        assert zipped.namelist() == ['static-review.tar.gz'], 'Unexpected outer archive members'
        assert zipped.getinfo('static-review.tar.gz').file_size < 50000000
        with zipped.open('static-review.tar.gz') as source, (temp / 'static.tar.gz').open('wb') as target:
            shutil.copyfileobj(source, target)
    stage = temp / 'static'
    stage.mkdir()
    with tarfile.open(temp / 'static.tar.gz', 'r:gz') as tar:
        members = tar.getmembers()
        assert len(members) < 5000 and sum(m.size for m in members) < 256000000
        for member in members:
            name = Path(member.name)
            assert not name.is_absolute() and '..' not in name.parts and '.git' not in name.parts, member.name
            assert member.isfile() or member.isdir(), 'No links or special files allowed'
            assert not any(part.startswith('.env') for part in name.parts), member.name
            assert name.suffix != '.map', member.name
            if '.github' in name.parts and member.isfile():
                assert name.as_posix() in {'.github/workflows/validate-static.yml', '.github/scripts/validate-static.py'}, member.name
        tar.extractall(stage, filter='data')
    release = json.loads((stage / 'release.json').read_text())
    assert release['version'] == '1.6.0' and release['pages'] == 48 and release['aliases'] == 24
    assert release['sourceRevision'] == EXPECTED_SOURCE, 'Unexpected source revision'
    assert (stage / 'CNAME').read_text().strip() == 'izignamx.com'
    subprocess.run([sys.executable, str(stage / '.github/scripts/validate-static.py'), str(stage)], check=True)
    # Overlay keeps the previous hashed resources available for cached older HTML.
    shutil.copytree(stage, root, dirs_exist_ok=True)
    for name, before in retained.items():
        assert digest(root / name) == before, 'Existing asset was replaced: ' + name
    subprocess.run([sys.executable, '.github/scripts/validate-static.py', '.'], check=True)
    print(json.dumps({'version': release['version'], 'sourceRevision': EXPECTED_SOURCE, 'preservedAssets': len(retained), 'contentPages': 48, 'aliases': 24, 'sourceArchivePublished': False}, indent=2))
