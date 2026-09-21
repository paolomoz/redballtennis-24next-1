# Learnings — redballtennis.com replica (2026-09-21)

| # | phase | class | learning | evidence |
|---|---|---|---|---|
| L1 | replica 3 | instrument default | `lift.mjs` default roots `header,main,footer` lifted 0 elements on an AEM site whose landmarks are `div[role=banner]` / `div#mainContent[role=main]` / an experience-fragment footer; the roots must be passed. A landmark-role fallback would save one live hit per width. | `stardust/.work/replica/lift-index.log` |
| L2 | replica 3 | copy-set gap | `layout-cluster.mjs` and `variant-census.mjs` import `deploy/scripts/schema-checks.mjs` relative to the plugin tree; the project copy under `stardust/scripts/replica/` fails ("deploy schema-checks.mjs not found") — run from the plugin tree or add `deploy/scripts` to the copy set. | this run |
| L3 | replica 3 | instrument floor | `lift.mjs` / `stitch-shot.mjs` refuse a legitimately near-empty page (404: 133 chars < CAPTURE_FLOOR.emptyLen 400) with no override; error/confirmation pages cannot be lifted or pixel-gated by the shipped instruments. | direction.md § Named deviation |
| L4 | replica 4 | assert heuristic | `motion-assert` counts inline `display` mutations (drawer toggle on nav + hamburger images, from/to opacity+transform null) as "entrances" and fails the target for having 0 inline opacity/transform entrances — a false fail on class/attr state machines. | `stardust/replica/motion/index-assert-360b.log` |
| L5 | extract 2 | detector gap | `crawl.mjs` `forms: []` and `dynamics-detect` controlGroups 0 on a Vue-rendered sign-up with two required inputs + a button and no `<form>`; the row had to be added by hand (dynamic-features #29). | `stardust/dynamic-features.md` |
| L6 | replica 4 | chrome parity default | `chrome-parity.mjs` default regions `header`/`footer` match nothing on this site and exit 2 with a REGION finding; `--no-defaults --region header=[role=banner]|[role=banner] …` was needed. | `gates/index-1440/chrome-parity-iter2.json` |
