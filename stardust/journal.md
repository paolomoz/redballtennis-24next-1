# Journal — redballtennis.com replica migration

Chronological log of every prompt execution. Most recent at the bottom.
See `skills/stardust/reference/journal-format.md` for entry format.

---

## 2026-09-21T07:07:12Z — Setup + Phase 1 EXTRACT + Phase 2 PRESERVE DIRECTION (hands-off)

**Prompt:** Migrate redballtennis.com to EDS as an exact replica, into the existing repo paolomoz/redballtennis-24next-1 and DA folder of the same name, fully hands-off.

**Decisions:**
- Flow `replica` from the keep-design phrase "exact replica"; hands-off from "fully hands off"; approved chain replica → migrate → deploy → rollout, preview-only (no publish in the ask).
- Project root = a clone of the EDS repo (boilerplate, Code Sync live, DA folder holds boilerplate index/nav/footer that will be overwritten and logged).
- Inventory: sitemap declares 6 URLs; crawl captured 9 (nav union) → 4 distinct pages. `/en/home.html`, `/content/redballtennis/en/home.html`, `/en/home/free-racquet-pack.html` and the stay-current news URL all resolve to home (aliases/redirects recorded in `state.json.pages[].redirect`); `/en/home/confirmation.html` 302s to account.usta.com login → decided-out, redirect row.
- Page types: index landing (cluster c1 = 5 pages), play/host program, 404 + confirmation unique. Archetypes: index, en-home-play-html (host = sibling), en-home-404-html.
- Chrome: one variant `default` for every migrated page; `variant-5e2e` is the USTA login page's chrome → decided-out.
- Fonts: Graphik (Commercial Type, licence `verify`) — self-host for fidelity with the deploy § 2 licensing alert; `fonts-public` owner-only row opened for live publish. Source serves the woff2 without CORS, so hotlinking is impossible.
- Dynamics: 30 rows triaged (28 detected + sign-up widget + mobile drawer added from the sidecar); 9 self, tags host-gated, sign-up UI rebuilt with submission blocked pending the USTA endpoint, AEM internals decided-out. Lint: every row placed once.
- Register: empty — pure replica. Impeccable ignore set installed (16 values, 3 file globs, resolved by hands-off).

**Artifacts touched:**
- stardust/state.json — created (flow, handsOff, approvedChain, credentials, impeccable, site.eds, 9 pages typed + chromeVariant + layoutCluster + redirect)
- stardust/direction.md — created (activation block, preserve-mode record, ignore-set line)
- stardust/decisions.md — created (default rows + fonts-public owner-only + chrome-variant decided-out)
- stardust/status.jsonl, stardust/.gitignore, stardust/package.json, stardust/scripts/** (script copies) — created
- stardust/current/** — extract outputs (pages, assets, screenshots, brand surface, DESIGN.json, PRODUCT.md, DESIGN.md, brand-review.html, _crawl-log.json, _dynamics.json, layout-clusters.json)
- PRODUCT.md, DESIGN.md, DESIGN.json — promoted verbatim from stardust/current/
- stardust/replica/inconsistency-register.md — created (empty register)
- stardust/dynamic-features.md, stardust/dynamic-features-plan.md, stardust/dynamics/** — created
- .gitignore (managed block), .hlxignore (stardust/) — updated; .impeccable/ — impeccable ignore config written by impeccable-ignores.mjs

**Findings worth flagging:**
- crawl.mjs recorded `forms: []` on every page although the sign-up has two required inputs and a submit — the widget is Vue-rendered without a `<form>`; the dynamics detector's form-less control-group heuristic also missed it (controlGroups 0). Added by hand as row #29.
- The live Play page overflows to 1500px at a 1440 viewport (a source quirk).
- layout-cluster.mjs cannot run from the project copy (needs deploy/scripts beside it) — ran from the plugin tree.

**Open questions:**
- Owner decision batch in stardust/dynamic-features.md § Decision batch (tags ids, sign-up endpoint, locale) and decisions.md fonts-public — all have interim paths, none blocks the static replica.

**Next:** $stardust replica — Phase 3 RECREATE index (lift 1440/360/1920 → stardust/prototypes/index-proposed.html)

---
