# rollout verify

Generated 2026-09-21T09:44:15.162Z.

rollout verify (https://main--redballtennis-24next-1--paolomoz.aem.page)
============================================================
Checked 14 · 13 verified · 1 failed · types: fragment:4 page:9 index:1
not delivered: 14 (probed — --include-undelivered)
pending-target links: 8 page(s) (advisory — the targets are coverage rows not yet delivered)
rollout verify — findings by class: 9 finding(s) in 2 class(es), 9 page(s)
| class | count | severity | worst example | pointer |
|---|---|---|---|---|
| pending-target link | 8 | info | chrome-footer — links to undelivered coverage rows: / | stardust/rollout/verify/summary.md#pending-target-link-8 |
| fetch error | 1 | error | en-home-confirmation-html — fetch error: fetch failed | stardust/rollout/verify/summary.md#fetch-error-1 |
report: stardust/rollout/verify/summary.md (table, then per-page rows per class) · data: stardust/rollout/verify/summary.json

## Per-page rows

One section per class, ranked as in the table. Triage per class; never paste these into the conversation.

### pending-target link (8)

- chrome-footer [info] — links to undelivered coverage rows: /
- chrome-nav [info] — links to undelivered coverage rows: /, /en/home/play, /en/home/host
- content-redballtennis-en-home-html [info] — links to undelivered coverage rows: /en/home/play, /en/home/host
- en-home-free-racquet-pack-html [info] — links to undelivered coverage rows: /en/home/play, /en/home/host
- en-home-html [info] — links to undelivered coverage rows: /en/home/play, /en/home/host
- en-home-stay-current-national-usta-awards-wheelchair-tennis-grants-html [info] — links to undelivered coverage rows: /en/home/play, /en/home/host
- en/home/404 [info] — links to undelivered coverage rows: /
- footer [info] — links to undelivered coverage rows: /

### fetch error (1)

- en-home-confirmation-html [error] — fetch error: fetch failed
