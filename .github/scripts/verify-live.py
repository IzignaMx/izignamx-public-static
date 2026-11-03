"""Read-only smoke check of the ordinary custom-domain URLs after a release."""
import json
import time
import sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request, urlopen

ORIGIN = 'https://izignamx.com'
expected = json.loads(Path('release.json').read_text())

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.headings = 0
        self.canonical = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == 'h1': self.headings += 1
        if tag == 'link' and values.get('rel') == 'canonical': self.canonical.append(values.get('href'))
    def handle_data(self, data):
        self.text.append(data)

def read(route):
    request = Request(ORIGIN + route, headers={'User-Agent': 'IzignaMx-Release-Verification/1.0'})
    with urlopen(request, timeout=15) as response:
        assert response.status == 200, f'Unexpected HTTP status for {route}'
        assert response.url.startswith(ORIGIN + '/'), 'Unexpected redirect origin'
        return response.read().decode('utf-8')

routes = {
    '/': 'Tecnología que abre caminos.',
    '/en/': 'Technology that opens paths.',
    '/es-mx/about/': 'no es una traducción literal',
    '/en/about/': 'not a literal translation',
    '/es-mx/process/': 'Cuatro fases para entender el recorrido.',
    '/es-mx/insights/entrega-con-autonomia/': 'Una entrega digital con autonomía',
    '/en/insights/entrega-con-autonomia/': 'A digital handoff with autonomy',
}

# Allow Pages publication and normal CDN propagation without changing cache or DNS settings.
deadline = time.monotonic() + 300
last_error = None
while time.monotonic() < deadline:
    try:
        actual = json.loads(read('/release.json'))
        for key in ('version', 'sourceRevision', 'pages'):
            assert actual.get(key) == expected.get(key), f'Live {key} still differs from this release'
        for route, phrase in routes.items():
            page = Page()
            html = read(route)
            page.feed(html)
            text = ' '.join(' '.join(page.text).split())
            assert page.headings == 1, f'{route}: expected one h1'
            assert phrase in text, f'{route}: current editorial content not visible'
            assert page.canonical == [ORIGIN + route], f'{route}: canonical mismatch'
            assert '/__auth/login' not in html, f'{route}: platform login dependency'
        result = {'status': 'success', 'origin': ORIGIN, 'version': actual['version'], 'sourceRevision': actual['sourceRevision'], 'routes': list(routes), 'cacheBypass': False, 'messagesSent': False}
        print(json.dumps(result, indent=2), flush=True)
        sys.exit(0)
    except Exception as error:
        last_error = str(error)
        print('Delivery not yet verified:', last_error, flush=True)
        time.sleep(10)
raise SystemExit('Custom-domain delivery could not be verified: ' + str(last_error))
