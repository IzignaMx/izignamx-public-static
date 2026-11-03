"""Offline regression tests for the production CDN invalidation boundary."""
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import MagicMock
from urllib.error import HTTPError

SCRIPT = Path(__file__).with_name('purge_cdn.py')
ROOT = SCRIPT.parents[2]
MODULE = None
if SCRIPT.is_file():
    spec = importlib.util.spec_from_file_location('purge_cdn', SCRIPT)
    MODULE = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(MODULE)


class PurgeTests(unittest.TestCase):
    def setUp(self):
        self.folder = tempfile.TemporaryDirectory()
        self.addCleanup(self.folder.cleanup)
        self.root = Path(self.folder.name)
        for filename in ('index.html', 'en/index.html', 'legacy/index.html', '404.html',
                         'robots.txt', 'sitemap.xml', 'sitemap-index.xml', 'sitemap-0.xml',
                         'assets/app.js', '.github/not-public.html'):
            target = self.root / filename
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text('fixture', encoding='utf-8')
        (self.root / 'CNAME').write_text('izignamx.com\n')
        (self.root / 'release.json').write_text(json.dumps({'pages': 2, 'aliases': 1}))

    def module(self):
        self.assertIsNotNone(MODULE, 'Missing CDN invalidation implementation')
        return MODULE

    def config(self):
        return {'CLOUDFLARE_ZONE_ID': 'a' * 32, 'CLOUDFLARE_API_TOKEN': 'dummy-token',
                'GITHUB_REF': 'refs/heads/main', 'GITHUB_EVENT_NAME': 'push',
                'GITHUB_REPOSITORY': 'IzignaMx/izignamx-public-static'}

    def opener(self, data=None):
        opener = MagicMock()
        response = opener.return_value.__enter__.return_value
        response.status = 200
        response.read.return_value = json.dumps(
            data if data is not None else {'success': True, 'errors': []}
        ).encode()
        return opener

    def test_inventory_covers_directory_urls_aliases_and_explicit_html(self):
        urls = self.module().build_urls(self.root)
        self.assertEqual(len(urls), 12)
        self.assertEqual(len(urls), len(set(urls)))
        for path in ('/', '/index.html', '/en/', '/en/index.html', '/legacy/',
                     '/legacy/index.html', '/404.html', '/release.json', '/robots.txt',
                     '/sitemap.xml', '/sitemap-index.xml', '/sitemap-0.xml'):
            self.assertIn('https://izignamx.com' + path, urls)
        self.assertFalse(any('/assets/' in url or '/.github/' in url for url in urls))

    def test_wrong_cname_rejected(self):
        (self.root / 'CNAME').write_text('book.izignamx.com')
        with self.assertRaisesRegex(ValueError, 'CNAME'):
            self.module().build_urls(self.root)

    def test_incomplete_inventory_rejected(self):
        (self.root / 'en/index.html').unlink()
        with self.assertRaisesRegex(ValueError, 'inventory'):
            self.module().build_urls(self.root)

    def test_boolean_counts_rejected(self):
        (self.root / 'release.json').write_text('{"pages":true,"aliases":2}')
        with self.assertRaises(ValueError):
            self.module().build_urls(self.root)

    def test_symlink_rejected(self):
        (self.root / 'en/index.html').unlink()
        (self.root / 'en/index.html').symlink_to(self.root / 'index.html')
        with self.assertRaisesRegex(ValueError, 'symlink'):
            self.module().build_urls(self.root)

    def test_missing_credentials_fail_without_values_in_error(self):
        for key in ('CLOUDFLARE_ZONE_ID', 'CLOUDFLARE_API_TOKEN'):
            env = self.config()
            del env[key]
            with self.assertRaisesRegex(ValueError, key):
                self.module().credentials(env)

    def test_credentials_require_trusted_main_context(self):
        for key, value in (('GITHUB_REF', 'refs/heads/test'),
                           ('GITHUB_EVENT_NAME', 'pull_request'),
                           ('GITHUB_REPOSITORY', 'another/repo'),
                           ('CLOUDFLARE_ZONE_ID', '../zone')):
            env = self.config()
            env[key] = value
            with self.assertRaises(ValueError):
                self.module().credentials(env)
        env = self.config()
        env['GITHUB_EVENT_NAME'] = 'workflow_dispatch'
        self.assertEqual(self.module().credentials(env), ('a' * 32, 'dummy-token'))

    def test_purge_uses_bounded_files_requests_only(self):
        urls = ['https://izignamx.com/page%d/' % i for i in range(31)]
        opener = self.opener()
        self.assertEqual(self.module().purge(urls, 'a' * 32, 'dummy-token', opener), 31)
        self.assertEqual(opener.call_count, 2)
        sizes = []
        for call in opener.call_args_list:
            request = call.args[0]
            self.assertEqual(request.method, 'POST')
            self.assertEqual(request.full_url,
                             'https://api.cloudflare.com/client/v4/zones/' + 'a' * 32 + '/purge_cache')
            payload = json.loads(request.data)
            self.assertEqual(set(payload), {'files'})
            sizes.append(len(payload['files']))
            self.assertEqual(request.get_header('Authorization'), 'Bearer dummy-token')
            self.assertEqual(call.kwargs['timeout'], 20)
        self.assertEqual(sizes, [30, 1])

    def test_all_urls_validated_before_any_request(self):
        for url in ('https://evil.test/', 'https://book.izignamx.com/',
                    'http://izignamx.com/', 'https://izignamx.com/?bypass=1',
                    'https://izignamx.com/#fragment'):
            opener = self.opener()
            with self.assertRaises(ValueError):
                self.module().purge(['https://izignamx.com/', url], 'a' * 32,
                                    'dummy-token', opener)
            opener.assert_not_called()

    def test_api_false_or_nonboolean_success_is_failure(self):
        for data in ({'success': False, 'errors': []}, {'success': 'true', 'errors': []},
                     {'success': 1, 'errors': []}, {'success': True, 'errors': [{}]}):
            with self.assertRaises(RuntimeError):
                self.module().purge(['https://izignamx.com/'], 'a' * 32,
                                    'dummy-token', self.opener(data))

    def test_http_failure_is_not_converted_to_success(self):
        opener = self.opener()
        opener.side_effect = HTTPError('https://api.cloudflare.com/', 403,
                                       'dummy-token must not appear', {}, None)
        with self.assertRaisesRegex(RuntimeError, 'HTTP 403') as caught:
            self.module().purge(['https://izignamx.com/'], 'a' * 32, 'dummy-token', opener)
        self.assertNotIn('dummy-token', str(caught.exception))

    def test_authorized_request_cannot_follow_redirect(self):
        with self.assertRaises(RuntimeError):
            self.module().NoRedirect().redirect_request(None, None, 302, '', {}, 'https://evil.test/')

    def test_dry_run_needs_no_credentials(self):
        self.module()
        result = subprocess.run([sys.executable, str(SCRIPT), '--root', str(self.root),
                                 '--dry-run'], env={'PATH': os.environ.get('PATH', '')},
                                text=True, capture_output=True, check=False)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(len(json.loads(result.stdout)['urls']), 12)
        self.assertTrue(json.loads(result.stdout)['dryRun'])

    def test_workflow_orders_purge_between_pages_and_strict_verification(self):
        workflow = (ROOT / '.github/workflows/verify-live.yml').read_text()
        self.assertIn('workflow_dispatch:', workflow)
        self.assertIn("if: github.ref == 'refs/heads/main'", workflow)
        self.assertIn('purge_cdn.py --check-config', workflow)
        self.assertIn('python3 .github/scripts/validate-static.py .', workflow)
        self.assertIn('python3 .github/scripts/purge_cdn.py\n', workflow)
        self.assertLess(workflow.index('Wait for Pages deployment'),
                        workflow.index('python3 .github/scripts/purge_cdn.py\n'))
        self.assertLess(workflow.index('python3 .github/scripts/purge_cdn.py\n'),
                        workflow.index('python3 .github/scripts/verify-live.py'))
        self.assertNotIn('continue-on-error', workflow)
        self.assertNotIn('|| true', workflow)
        self.assertNotIn('pull_request', workflow)


if __name__ == '__main__':
    unittest.main()
