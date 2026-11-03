# Production delivery and CDN invalidation

## Incident and acceptance

The original delivery job 41566655594 correctly failed after Pages deployed
93908894a1ea5dd5434c49f814727e316a5fc899. Diagnostic rerun 41567623293,
job 125695627835, observed ordinary `/`, `/en/about/` and `/es-mx/process/`
requests serving September HTML at 2026-11-03 02:49 UTC. `/release.json`
matched 1.6.0 while `/index.html` had the new home heading. The release was
therefore not consistently delivered by the custom domain.

The correction is a missing delivery step, not permission to suppress the
failed check. The sequence is now:

1. Check the required CDN configuration and validate the local static artifact.
2. Wait for successful GitHub Pages deployment of the exact workflow SHA.
3. Invalidate only this site's HTML URLs and publication metadata.
4. Run the original `.github/scripts/verify-live.py` without changing it.

Pages still publishes independently using the existing branch configuration.
The preflight gates this verification workflow, not the separate Pages job.
A green Pages job or a successful purge API response is not final acceptance.

## Required configuration before merging/enabling the correction

In this repository's Settings -> Secrets and variables -> Actions, configure:

| Kind | Name | Value |
| --- | --- | --- |
| Variable | `CLOUDFLARE_ZONE_ID` | The 32-character zone ID for izignamx.com |
| Secret | `CLOUDFLARE_API_TOKEN` | A Cloudflare token with only Cache Purge permission, scoped to that zone |

Do not put the token in repository files, PR comments, logs or chat. Presence
checks do not verify permissions. Only a real authorized API request can do so.
Missing or invalid configuration is a hard failure with the missing name,
never a silent skip. No credential presence was verified when preparing this PR.

PR validation runs unit tests and `--dry-run` without credentials and without
network calls. Production invalidation is allowed only for `push` or
`workflow_dispatch` on `refs/heads/main` in IzignaMx/izignamx-public-static.

## Scope and safety

The inventory is generated from the checked-out HTML files and release counts.
It covers directory URLs and explicit `index.html` URLs, including compatibility
aliases, plus 404.html, release.json, robots.txt and the three sitemap files.
For 1.6.0 this is 150 explicit URLs, submitted in batches of at most 30.
No images, fonts, videos, immutable hashed bundles, subdomains, DNS settings,
cache rules or zone-wide purge operations are changed.

The helper uses only the Python standard library. It refuses redirects on the
authorized API request, foreign origins, incomplete inventories, HTML symlinks,
missing credentials and unsuccessful API responses, including HTTP 200 with
`success: false`. It never prints credentials or raw API error bodies. A failed
batch fails the job. Retrying the delivery workflow repeats bounded invalidation.

## Retry and closure

After the correction is merged and configuration is ready, run `Verify published
custom domain` manually from main, or let a main push trigger it. It still checks
the exact Pages deployment SHA before invalidating anything. Re-running an older
workflow uses that older revision and does not acquire this new invalidation step.

Closure requires a successful final ordinary-URL verification, not URLs with
cache-busting query parameters and not replacement of `/` with `/index.html`.
Historical failed runs remain an incident record. Do not delete them to hide it.

The existing verifier checks seven critical routes. Purging 150 URLs does not
mean all 150 routes have received an end-to-end acceptance test.

## Remaining limits

A successful purge request acknowledges API acceptance, not proof of final
content. Custom cache keys with language, country, device or other headers may
need matching header-aware requests. The final check must still fail if stale
content remains. Do not automatically escalate to purge-everything.

Observed responses advertised `Cache-Control: max-age=432000` (five days).
CDN invalidation cannot clear already-cached browser documents. Review browser
and edge HTML cache policies separately through an authorized Cloudflare change.
This PR deliberately does not change those policies or claim device coverage.

Publication automation must preserve this repository's `.github` operations
when importing a future static export. Only the public static artifact should
be imported, never private application source or credentials.

## References

- Cloudflare purge-by-URL behavior and custom-key limits: https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/
- Cloudflare API, Cache Purge permission and response contract: https://developers.cloudflare.com/api/resources/cache/methods/purge/
- GitHub workflow retry semantics: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs

## Evidence at PR preparation

Fourteen offline regression tests passed after first failing for the missing
helper and workflow step. Static validation passed for 48 content pages,
24 aliases and 73 HTML documents. Dry run generated 150 scoped URLs.
The original verifier and all website content/assets are unchanged.
Actual Cloudflare authorization, invalidation and final production verification
remain unverified until the configuration above is supplied and the workflow runs.
