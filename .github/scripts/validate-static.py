"""Validate a static artifact without executing application code or accessing the network."""
import sys, json, re, hashlib
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit, unquote
root=Path(sys.argv[1] if len(sys.argv)>1 else '.').resolve()
errors=[]; pages={}; assets=set()
class Document(HTMLParser):
 def __init__(self): super().__init__();self.ids=set();self.refs=[];self.canonical=[];self.robots=[];self.csp=False;self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='meta' and a.get('name')=='robots':self.robots.append(a.get('content',''))
  if tag=='meta' and a.get('http-equiv','').lower()=='content-security-policy':self.csp=True
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  for key in ['href','src','poster']:
   if a.get(key):self.refs.append((tag,a[key]))
  if a.get('srcset'):
   for entry in a['srcset'].split(','):self.refs.append(('image',entry.strip().split(' ')[0]))
assert (root/'index.html').is_file(), 'index.html must be at repository root'
assert (root/'.nojekyll').is_file(), '.nojekyll missing'
assert (root/'CNAME').read_text().strip()=='izignamx.com', 'Production CNAME changed'
for file in root.rglob('*.html'):
 if '.git' in file.parts or '.github' in file.parts:continue
 relative=file.relative_to(root).as_posix();route='/'+relative.removesuffix('index.html') if file.name=='index.html' else '/'+relative
 text=file.read_text();doc=Document();doc.feed(text);pages[route]=doc
 if not doc.h1:errors.append([relative,'no h1'])
 if not doc.csp:errors.append([relative,'no static CSP'])
 if '\x00' in text:errors.append([relative,'unescaped null byte'])
 if re.search(r'\snonce="',text):errors.append([relative,'reused dynamic nonce'])
 if '/__auth/login' in text:errors.append([relative,'platform auth dependency'])
 if file.name!='404.html' and len(doc.canonical)!=1:errors.append([relative,'canonical count'])
 for tag,reference in doc.refs:
  url=urlsplit(urljoin('https://izignamx.com'+route,reference))
  if url.scheme not in ['https','http'] or url.netloc!='izignamx.com':continue
  local=unquote(url.path).lstrip('/');target=root/local
  if target.is_dir():target=target/'index.html'
  if not target.is_file():errors.append([relative,'missing local resource',reference])
  elif url.fragment and tag=='a' and target.suffix=='.html':
   assets.add((relative,str(target),unquote(url.fragment)))
for origin,target,fragment in assets:
 doc=Document();doc.feed(Path(target).read_text())
 if fragment not in doc.ids:errors.append([origin,'missing fragment',fragment])
for f in root.rglob('*'):
 if not f.is_file() or '.git' in f.parts or '.github' in f.parts:continue
 rel=f.relative_to(root).as_posix()
 if f.name.startswith('.env') or f.suffix=='.map' or rel.startswith(('src/','node_modules/','server/','packages/')):errors.append([rel,'source or sensitive artifact in static tree'])
for f in root.rglob('*.css'):
 if '.git' in f.parts:continue
 for match in re.finditer(r'url\([\s\'"]*(/[^\s\)\'"]+)',f.read_text()):
  if not (root/match[1].lstrip('/')).is_file():errors.append([str(f.relative_to(root)),'missing css asset',match[1]])
release=json.loads((root/'release.json').read_text())
assert release['pages']==46, 'Unexpected route inventory'
summary={'contentPages':release['pages'],'compatibilityRedirects':release['aliases'],'htmlDocuments':len(pages),'errors':errors}
print(json.dumps(summary,indent=2))
if errors:sys.exit(1)
