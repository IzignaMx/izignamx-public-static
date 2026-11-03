"""Invalidate only this static site's HTML and metadata, never the whole zone."""
import argparse
import json
import os
from pathlib import Path
import re
import sys
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

ORIGIN = 'https://izignamx.com'
METADATA = ('release.json', 'robots.txt', 'sitemap.xml', 'sitemap-index.xml', 'sitemap-0.xml')
BATCH_SIZE = 30
MAX_URLS = 500
MAX_RESPONSE_BYTES = 65536


class NoRedirect(HTTPRedirectHandler):
    """Never forward the API authorization header to a redirect destination."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise RuntimeError('Cloudflare API redirect refused')


def build_urls(root: Path) -> list[str]:
    """Generate a bounded inventory from local files, including HTML aliases."""
    root = root.resolve()
    if (root / 'CNAME').read_text(encoding='utf-8').strip() != 'izignamx.com':
        raise ValueError('Unexpected production CNAME')
    release = json.loads((root / 'release.json').read_text(encoding='utf-8'))
    counts = [release.get('pages'), release.get('aliases')]
    if any(type(value) is not int or value < 0 for value in counts):
        raise ValueError('Invalid release inventory counts')
    documents = [file for file in root.rglob('*.html')
                 if not any(part.startswith('.') for part in file.relative_to(root).parts)]
    if any(file.is_symlink() for file in documents):
        raise ValueError('HTML symlink is not allowed in the purge inventory')
    if len(documents) != sum(counts) + 1 or not (root / 'index.html').is_file():
        raise ValueError('HTML inventory differs from the validated release')
    urls = set()
    for file in documents:
        path = file.relative_to(root).as_posix()
        urls.add(ORIGIN + '/' + quote(path, safe='/'))
        if file.name == 'index.html':
            urls.add(ORIGIN + '/' + quote(path[:-len('index.html')], safe='/'))
    for name in METADATA:
        file = root / name
        if not file.is_file() or file.is_symlink():
            raise ValueError('Missing or unsafe release metadata: ' + name)
        urls.add(ORIGIN + '/' + name)
    if not 0 < len(urls) <= MAX_URLS:
        raise ValueError('Purge inventory exceeds the reviewed URL bound')
    return sorted(urls)


def credentials(env) -> tuple[str, str]:
    """Fail closed on missing configuration or an untrusted workflow context."""
    if (env.get('GITHUB_REPOSITORY') != 'IzignaMx/izignamx-public-static'
            or env.get('GITHUB_REF') != 'refs/heads/main'
            or env.get('GITHUB_EVENT_NAME') not in ('push', 'workflow_dispatch')):
        raise ValueError('CDN purge requires a trusted main-branch delivery run')
    zone = env.get('CLOUDFLARE_ZONE_ID', '').strip()
    token = env.get('CLOUDFLARE_API_TOKEN', '').strip()
    if not re.fullmatch(r'[a-fA-F0-9]{32}', zone):
        raise ValueError('Configure the CLOUDFLARE_ZONE_ID Actions variable')
    if not token or any(ord(char) < 33 or ord(char) > 126 for char in token):
        raise ValueError('Configure the CLOUDFLARE_API_TOKEN Actions secret with Cache Purge permission')
    return zone, token


def purge(urls: list[str], zone: str, token: str, opener=None) -> int:
    """Submit explicit URL batches. API acceptance is not delivery verification."""
    if not re.fullmatch(r'[a-fA-F0-9]{32}', zone) or not token:
        raise ValueError('Invalid Cloudflare purge credentials')
    if not 0 < len(urls) <= MAX_URLS:
        raise ValueError('Empty or oversized purge inventory')
    for url in urls:
        parsed = urlsplit(url)
        if (parsed.scheme != 'https' or parsed.netloc != 'izignamx.com'
                or parsed.query or parsed.fragment or not parsed.path.startswith('/')):
            raise ValueError('Purge URL is outside the approved production origin')
    send = opener or build_opener(NoRedirect()).open
    endpoint = 'https://api.cloudflare.com/client/v4/zones/' + zone + '/purge_cache'
    for offset in range(0, len(urls), BATCH_SIZE):
        batch = urls[offset:offset + BATCH_SIZE]
        request = Request(endpoint, data=json.dumps({'files': batch}).encode('utf-8'),
                          method='POST', headers={'Authorization': 'Bearer ' + token,
                                                  'Content-Type': 'application/json'})
        try:
            with send(request, timeout=20) as response:
                if response.status != 200:
                    raise RuntimeError('Cloudflare did not accept the purge request')
                body = response.read(MAX_RESPONSE_BYTES + 1)
            if len(body) > MAX_RESPONSE_BYTES:
                raise RuntimeError('Cloudflare response exceeds the diagnostic bound')
            data = json.loads(body)
        except HTTPError as error:
            raise RuntimeError('Cloudflare purge failed: HTTP ' + str(error.code)) from None
        except (URLError, TimeoutError, OSError):
            raise RuntimeError('Cloudflare purge transport failed; retry the delivery job') from None
        except (ValueError, UnicodeError):
            raise RuntimeError('Cloudflare returned an invalid JSON response') from None
        if not isinstance(data, dict) or data.get('success') is not True or data.get('errors') != []:
            raise RuntimeError('Cloudflare rejected the purge request')
        print('Cloudflare accepted URL batch ' + str(offset // BATCH_SIZE + 1), flush=True)
    return len(urls)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path('.'))
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument('--dry-run', action='store_true')
    mode.add_argument('--check-config', action='store_true')
    args = parser.parse_args()
    try:
        if args.check_config:
            credentials(os.environ)
            print('Required CDN configuration is present; permissions are not yet verified.')
            return 0
        urls = build_urls(args.root)
        if args.dry_run:
            print(json.dumps({'dryRun': True, 'count': len(urls), 'urls': urls}, indent=2))
            return 0
        zone, token = credentials(os.environ)
        count = purge(urls, zone, token)
        print(f'Purge accepted for {count} URLs. Ordinary-route verification must still pass.')
        return 0
    except (ValueError, RuntimeError, OSError) as error:
        print('CDN invalidation failed: ' + str(error), file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
