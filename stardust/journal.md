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

## 2026-09-21T07:46:34Z — Phase 3–4: home archetype (index) recreated and gated at 1440 + 360

**Prompt:** (same run) replica Phase 3 RECREATE + Phase 4 SOURCE-FIDELITY GATE for the landing archetype.

**Decisions:**
- Lift roots: the source has no `header`/`main`/`footer` elements — lifted with `--roots "[role=banner],#mainContent,.cmp-experiencefragment--footer-xf" --main "#mainContent"` at 1440, 360 and 1920 (fluid check); prototypes adopt `#mainContent` as content root and role-based `div`s for chrome so every instrument scopes both sides symmetrically.
- Header breakpoint is 1369px (hamburger + mobile logo ≤1369; desktop nav ≥1370); content bands restack at ≤767px; the AEM grid's hidden variants (mobile eyebrow, hand-with-ball image, red separator band, footer hashtag + separators) are mirrored as hidden DOM.
- Fonts: Graphik XXCondensed Bold / Semibold / Regular + USTA Sans self-hosted from the harvested woff2/otf for the prototype gate (licensing alert carried to deploy).
- Chrome state machines mirrored from motion-observe evidence: USTA SITES dropdown (aria-expanded → sibling panel) and the ≤1369 drawer (hamburger aria-expanded → `#top-navigation-bar` gains `--opened top-to-bottom`, lives inside `.logo`, holds the re-parented nav, inline display toggles on nav + hamburger images). No entrance animations or scroll morph on live — none implemented. Hovers implemented only where they fired: buttons opacity .7, nav links #cfff05 + color .3s, footer links #cfff05.
- Iteration record: 1440 iter1 PASS 0.28 % Δh −16 (footer separator padding) → iter2 PASS 0.12 % Δh 0; 360 iter1 FAIL 37.66 % Δh −127 (hero title/hand image stacked instead of flex row) → iter2 PASS 0.32 % Δh −16 (footer hashtag padding) → iter3 PASS 0.22 % Δh 0; canon-followup round 4 at both widths after the chrome fixes: 1440 0.13 %, 360 0.22 %, Δh 0.
- Chrome: chrome-parity 0 deltas at both widths (with the real chrome roots); chrome-states replay: `menu:USTA SITES` and `drawer` cells within the 2 % bar (first replay: dropdown 7.9 % from a missing whitespace text node between bullet and link; drawer 206 vs 257 px from a wrong aria-controls + ul margin-bottom 10 px). Variant `variant-5e2e` = account.usta.com login chrome → decided-out.
- Motion assert: 1440 pass; 360 advisory fail on the entrances heuristic (the live drawer's 3 inline display mutations are counted as entrances; the prototype mirrors them; no opacity/transform animation exists) — record present, justified in progress.json.
- Approved `index` hands-off (`approvedBy: hands-off`) after every gate passed.

**Artifacts touched:**
- stardust/prototypes/index-proposed.html, css/canon.css, css/index.css, js/chrome.js, assets/** — created
- stardust/replica/capture/lift/index-{1440,360,1920}.json, capture/css/* — created
- stardust/replica/gates/index-{1440,360}/** — gate rounds, live/build captures, chrome-states, parity
- stardust/replica/motion/index.json, index-360.json — created
- stardust/replica/progress.json — landing breakpoints + chrome + modules + motion + approval
- stardust/replica/variant-census-{program,landing}.json + allow list — created
- stardust/state.json — index approved; other pages directed

**Findings worth flagging:**
- `lift.mjs` default roots (header/main/footer) lifted 0 elements on this AEM site — the roots must be passed explicitly.
- `layout-cluster.mjs` and `variant-census.mjs` need `deploy/scripts/schema-checks.mjs` beside them: the project copy fails, the plugin-tree copy works (copy-set gap).
- `motion-assert` counts inline `display` mutations as "entrances" (from/to opacity+transform null) — a false-fail class on drawer toggles.
- `lift.mjs`/`stitch-shot.mjs` refuse the 404 page (133 chars < 400-char near-empty floor) — the unique type cannot be pixel-gated by the shipped instruments.

**Open questions:** none blocking.

**Next:** $stardust replica en-home-play-html (program archetype gate), then en-home-404-html

---

## 2026-09-21T08:05:00Z — Phase 3–4 complete: play (program), host (sibling), 404 (unique) gated; all four pages approved hands-off

**Prompt:** (same run) continue replica Phases 3–4 for the remaining archetypes.

**Decisions:**
- Play lifted at 1440/360/1920 with the site roots; authored as the program archetype (video-embed band, HOW TO PLAY / HOW TO SCORE columns, kit band). Round 1: 1440 +76 px (iframe wrapper margin, one extra empty paragraph per rules column, doubled sign-up padding), 360 −75 px (title empty paragraphs collapsing, mobile p 16px rule); round 2 PASS 0.09 % / 0.6 %, Δh 0.
- Host authored as the program sibling with its own hero and tile-band variants (own gate evidence): 1440 PASS 0.81 % iter 1; 360 iter 1 hit ERR_NETWORK_CHANGED (no verdict, not counted) → re-run PASS 3.37 %, Δh 0.
- 404: lift.mjs and stitch-shot refuse the page (near-empty floor) — geometry from a diagnosis rect probe (named deviation in direction.md); pixel gate run with the shipped `--live-from-capture` escape against the extract captures: PASS 0.11 % / 0.28 %, Δh 0; content-diff 0 🔴, visual-diff clean, main height identical to the live probe at both widths.
- Motion asserts: play pass, host pass (not ledger-recorded — sibling), 404 pass. Chrome identical on every page (variant `default`).
- Global `p{font-size:18px}` / `≤767: 16px` lifted into canon.css (source rule).
- Variant census (offline) run for landing and program with a framework-class allow list.
- Locale decision revised for source parity: root serves home; `/en/home` and the AEM content path redirect to `/`.
- EDS conversion model locked in `stardust/eds-conversion-log.md` (blocks: hero, cards, columns, signup, embed auto-block; section styles cta-band, kit-band, not-found; hidden-on-live bands dropped).

**Artifacts touched:**
- stardust/prototypes/{en-home-play-html,en-home-host-html,en-home-404-html}-proposed.html, css/{play,host,notfound}.css — created
- stardust/replica/capture/lift/{en-home-play-html-*,en-home-host-html-*,en-home-404-html-*.probe}.json — created
- stardust/replica/gates/{en-home-play-html,en-home-host-html,en-home-404-html}-{1440,360}/** — created
- stardust/replica/motion/{en-home-play-html,en-home-host-html,en-home-404-html}.json — created
- stardust/replica/progress.json, stardust/state.json — program/unique gates, approvals
- stardust/eds-schema/*.json, stardust/runtime-contract.json, stardust/eds-conversion-log.md — created
- stardust/learnings.md — created; stardust/direction.md — named deviation appended; stardust/decisions.md — locale row revised
- fonts/*.woff2 (Graphik ×3 + USTA Sans converted from OTF), favicon.ico — replaced boilerplate

**Open questions:** none blocking; owner rows unchanged (fonts-public, tags, sign-up endpoint).

**Next:** $stardust deploy index (Phase 5 — foundation, chrome, blocks, content, preview on main)

---

## 2026-09-21T09:45:00Z — Phase 5 complete: EDS build, DA preview, published-origin gate, rollout (preview only)

**Delivered (preview origin `https://main--redballtennis-24next-1--paolomoz.aem.page`, code `main` @ 5639136):**
- `/` ← https://www.redballtennis.com/ · `/en/home/play` ← /en/home/play.html · `/en/home/host` ← /en/home/host.html · `/en/home/404` ← /en/home/404.html (root `404.html` mirrors it) · `/nav`, `/footer` · sheets `/placeholders.json`, `/redirects.json` (22 rows; `/en/home`, `.html` forms, the AEM content path → `/`; `/en/home/confirmation.html` → account.usta.com login — 301s verified).
- Blocks: header, footer, hero (video | photo), cards (tiles | kit | tiles host), columns (rules), signup (form rendered by JS, no backend), embed (auto-block). Gates before the first PUT: code-sync-verify --lint 0 · block-lint 0 🔴 · davids-model-lint 0 🔴 · block-roundtrip closed on all pages · ew-editability 100 % (0 dead, 0 drift) · qa-gate PASS ×4.

**Published-origin gate (live www.redballtennis.com vs preview):** index 1.33 % / 2.31 % · play 4.69 % / 3.24 % · host 7.75 % / 5.51 % (1440 / 360, Δh 0, all PASS, `progress.json` `published.<bp>`). 404: **no verdict** — `stitch-shot` classes the preview host as live and refuses the near-empty page (L10); substitute evidence: harness DOM == deployed DOM, section heights equal to the gated prototype (1475 / 1188), qa-gate PASS, CLS 0.000 / 0.002. Chrome crop gate header/footer ≤ 1.6 % on every cell. CLS (fonts + chrome delayed) ≤ 0.014 everywhere.
- Round 1 (index 1440) measured 21.7 % / Δh 203: the EDS build had never been measured against the prototypes (the harness is for the automated gates). Every fix was a lifted value (footer 32/64 padding zeroed by the wrapper reset, hero separator rhythm, band-container 8 px paddings, sign-up 30 px in-page-view, kit icon 40 %, host title 480, play mobile cover photo, columns decoder for single-cell rows, 404 rhythm) — box-probed until every section height equalled the prototype at both widths, then re-gated.
- Step 10 #116 (≥1920 box check) exposed the frozen sizing model: the source is a 12-col percentage grid (`aem-GridColumn--default--N`); the prototypes and the lifted CSS carried the 1440 px values. Re-lifted as percentages (hero 7/12 + 5/12, play 8/12 + 4/12, tiles band 9/12 with 4/12 tiles, host tiles 4/12, rules 10/12 max 1200 with 6/12 columns, CTA pill 2/12, 404 8/12 + 4/12 pill, footer 10/12). 1920 geometry now equals live on all pages; 1440 / 360 unchanged; re-gated (index 1440 = round 3, `--over-cap canon-followup`).
- Motion (published-origin replay): USTA SITES state machine pass, 0 page errors; `chrome` row 🟡 "header absent live, present on the target" — the live site has no `<header>` element (role=banner div); the boilerplate `<header>` trips the tag heuristic. Named residual, class `instrument-heuristic` (same class as the 360 entrance row of Phase 4).
- Advisory content-diff proto → deployed: home/host 🔴 MISSING CTA rows are the live-hidden events band / GET EQUIPPED pill (L9 — hidden prototype nodes counted); play 0 🔴.

**Decisions this phase:** `404-heading` (h2 → single h1 at the h2 ramp) · lockdown **blocked → owner** (public repo; the row says surface before flipping) · publish **held** (preview only, D1/D16) · `fonts-public` still owner-only (Graphik licence) · sign-up endpoint owner.

**Instrument gaps:** L7 (`code-sync-verify` never converges on `head.html`), L8 (`pipeline-mimic --self-test` idempotence warning), L9 (`block-roundtrip` counts hidden prototype nodes), L10 (404 published-origin cell has no shipped path), L11 (lift/prototype froze the sizing model).

**Files:** blocks/**, styles/**, fonts/**, icons/**, media/**, scripts/scripts.js, 404.html, content/** (incl. placeholders.json), stardust/{eds-conversion-log.md, decisions.md, dynamic-features-plan.md, learnings.md, redirects.tsv, da-media.json, code-sync.json, rollout/**, replica/progress.json, replica/gates/*/gate-pub*.json, .work/deploy/*-probe.mjs}.
