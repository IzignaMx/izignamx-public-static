# IzignaMx public static website — 1.5.0

This repository contains the pre-rendered website at its root. GitHub Pages serves `index.html` directly from `main / (root)`. Keep `.nojekyll` and the existing `CNAME` (`izignamx.com`).

The HTML, JavaScript, styles, images and media are self-contained. They do not require a Node server, Cloudflare Worker or Higgsfield login. There are 46 content pages, 23 compatibility redirects and a custom 404 page. The book remains at https://book.izignamx.com/.

The edition retains its original layout, interactive forms, exhibition, observatory and three procedural 3D experiments. Contact messages are prepared locally and are not sent automatically.

The complete application source is maintained separately in `IzignaMx/izignamx` on `new_version_3.0`. From that source's `app/` directory, run `bun install --frozen-lockfile`, `bun run test`, and `bun run build:static`. Copy the contents of `app/dist/static/`, not the containing folder, here.

The read-only validation workflow verifies the static tree. `release.json` records the release identity. Meta CSP authorizes exact inline script hashes. GitHub Pages does not execute the original Worker's header logic. Response-only controls and cache invalidation remain the delivery network's responsibility.

Compatibility redirects are HTML-based. Previous unprefixed English paths lead to `/en/.../`. The reviewed Spanish homepage is `/`, with `/es-mx/` retained as an alias.
