<!-- stardust:provenance
  writtenBy: stardust:deploy (via replica Phase 5)
  writtenAt: 2026-09-21T08:50:00Z
  stardustVersion: 0.24.0-next.4
  read: stardust/eds-schema/*.json, stardust/replica/progress.json, stardust/dynamic-features.md, stardust/runtime-contract.json
-->
# EDS conversion log — redballtennis.com → paolomoz/redballtennis-24next-1

## Runtime contract (Step 0)
Vanilla aem-boilerplate 1.3.0: `a.button` (+ `.primary/.secondary/.accent`) inside `p.button-wrapper`, formatted-only buttonization; `decorateBlock` → `.block` + `.<name>-wrapper` / `.<name>-container`; `buildAutoBlocks()` holds `buildWidgetAutoBlocks` (boilerplate). Pipeline probe on `main`: every catalogued rule matches, `multiValueStyle: comma`, residual 38 (boilerplate index vs fixture — advisory). `stardust/runtime-contract.json`.

## Paths (source → DA)
| source | DA path | note |
|---|---|---|
| `/` (= `/en/home.html`, `/content/redballtennis/en/home.html`) | `/index` (served `/`) | the source serves home at the root with a 200; `/en/home` and the AEM content path redirect to `/` (redirects sheet) |
| `/en/home/play.html` | `/en/home/play` | |
| `/en/home/host.html` | `/en/home/host` | |
| `/en/home/404.html` | `/en/home/404` | content page (the source serves it 200); the repo's `404.html` (the platform's not-found response) carries the same authored shape inline, so a missing path renders the replica 404 |
| `/en/home/free-racquet-pack.html`, `/en/home/stay-current/national/USTA-awards-wheelchair-tennis-grants.html` | → `/` | redirects (source redirects) |
| `/en/home/confirmation.html` | → `https://account.usta.com/u/login` | decided-out (dynamics #28), redirect |

Decision: the `locale` default row ("root redirects to `/en/`") is overridden for source parity — single locale, and the source's canonical root serves the page directly. Recorded in `stardust/decisions.md`.

## Section triage (D1 / D11) — LOCKED
| prototype section | pages | block? | name (D11) | tier | notes |
|---|---|---|---|---|---|
| header (network strip + logo + nav + breadcrumb) | all | chrome | `/nav` doc + `blocks/header` | template-slotted | `/nav` sections: 1 utility (USTA SITES list), 2 brand (logo), 3 links (HOME/PLAY/HOST), 4 tools (empty). Breadcrumb built from the URL path in the header block (D1 BREADCRUMB rule), labels from `/nav`. USTA SITES dropdown + hamburger drawer = stock toggle machinery restyled (chrome-states cells gated on the prototype). |
| footer | all | chrome | `/footer` doc + `blocks/footer` | template-slotted | sections: 1 logo, 2 links (Terms, Privacy), 3 hashtag. |
| hero (home: text + YouTube; play/host: text + photo panel; mobile image) | home, play, host | block (bespoke composition) | `hero` | template-slotted | rows: [picture mobile-image] [text: eyebrow `<p><strong><em>RED</em>RAW THE LINES</strong></p>`, `<h1>`, lede `<p>`s] [media: YouTube link → iframe, or picture desktop panel]. Variants: `video` (home), `photo` (play, host). Inner colour span in the play h1 rides `<em>` (`Tennis <em>Red</em>esigned For You`). |
| racquet-cta-band (h2 + p + Shop Now) | home, play, host | **default content** | section style `cta-band` | — | D1 prose; the red stripe and centred blue type are the section style. |
| play-host-tiles (2 image tiles + text + CTA on photo band) | home | block (repeating) | `cards` (variant `tiles`) | reconstructive | one row per tile: [picture][p + `<strong><a>` CTA]. Hidden FIND/HOST AN EVENT band: **drop** (display:none on live at every width; excluded from every content inventory). |
| tiles host (2 tiles + note + large CTA) | host | block + default | `cards` (variant `tiles host`) + default content after | reconstructive | note `<p>` + `<em><a>` CTA as default content in the same section (prose after units). Hidden GET EQUIPPED: **drop**. |
| spacer (empty 16px container) | play | — | section margin | — | spacer ladder rung 1: the video section's top margin. |
| video-embed (YouTube 1500×900) | play | auto-block | `embed` (D1: plain link → `buildAutoBlocks`) | — | `scripts.js` gains `buildEmbedBlocks` (YouTube/Vimeo link alone in a section). |
| rules-band (2 columns: icon, h2, bold lines) | play | block (D11) | `columns` (variant `rules`) | reconstructive | one row, two cells; each cell: picture, `<h2>`, `<p><strong>` lines separated by empty `<p>` → the empty paragraphs carry no height in DA (pipeline drops them): rhythm via CSS on wrapper (`.rules p + p` margin) — ledgered residual D8 if any. |
| kit-band (h2 + 2 icon items + h2 + p + CTA + signup) | play | default + block + default + block | `cards` (variant `kit`), then default content, then `signup` | reconstructive | sections: [h2 WHAT YOU NEED] [cards kit] [h2 WHERE TO PLAY + p + `<strong><a>` FIND A COURT] [signup]; the red stripe band background = section style `kit-band` on each. |
| signup-band (icon, h4, p, email+zip form, disclaimer) | home, play, host | block (interactive, dynamics #29) | `signup` | template-slotted (form rendered by block JS) | rows: [picture icon][`<h4>`][`<p>` subtitle][disclaimer `<p>` with links]. Field labels + button label = site-wide constants → `/placeholders.json` with in-code defaults. Submission blocked (no backend) with the "no backend connected" status message. Heading stays `<h4>` — role parity with the source (lifted heading level). |
| helpful-links (hidden band) | host | drop | — | — | display:none on live; never inventoried. |
| not-found (badge, h2, CTA) | 404 | **default content** | section style `not-found` | — | image + `<h2>` + `<strong><a>`; the mobile small-font duplicate button is a CSS variant, authored once. |

Block inventory: `header`, `footer` (per-site chrome), `hero`, `cards`, `columns`, `signup`, `embed` (auto-blocked). Section styles: `cta-band`, `kit-band`, `not-found`, `dark-photo` (rules/tiles bands carry their own block background). Vocabulary budget: 4 section styles, 4 block variants (`hero video|photo`, `cards tiles|kit`, `columns rules`) — inside the budget.

## Fonts (Step 4)
Graphik XXCondensed Bold / Semibold / Regular (Commercial Type — licence `verify`) and USTA Sans Bold: self-hosted under `fonts/` for fidelity with the licensing alert in `styles/styles.css`, `fonts/LICENSING.md` and the hand-off; `fonts-public` owner-only row open before any live publish. Fallbacks: `graphik-fallback` (Arial, size-adjust) for body; `graphik-xxcond-fallback` (Arial Narrow / Impact-class) for display — metric-matched in `styles.css`.

## Media
Editorial images (logos, tile PNGs, hero photos, icons, badge, hand-with-ball, hero SVG background) uploaded to DA `/media/redballtennis/` from the harvested copies (`rehost-media.mjs` ledger `stardust/da-media.json`); authored as `content.da.live` `<img>`. The red vector background of the hero media panel and the tennis-ball band photo are hero/cards backgrounds → authored as editorial `<img>` in the block (row) so authors can swap them.

## Dropped content (recorded — hidden on live at every width)
- home/host: "Host your own red ball event and become an ambassador" ×2 + FIND AN EVENT / HOST AN EVENT (container-65116aa62b / aab4e6f91e)
- host: GET EQUIPPED button; Helpful Links band (Resource Library / Program Implementation / Marketing Materials + GO buttons); two hidden `man.png` images
- 404: the mobile-only duplicate button (authored once; CSS variant)
- header: `searchAndLocationPanelSwitch` (display:none inline), `user-section` (empty), bidtellect pixel (tags — dynamics #1)

## Generator emitters (Step 9 — `prototype-to-content.mjs`, ledger `stardust/.work/deploy/transcribe.json`)
| page | emitters (`--map`) | drops (hidden on live at every width, or prototype-only scaffolding) | patch (`stardust/patches/<slug>.json`) |
|---|---|---|---|
| index | hero=block:hero · racquet-cta-band=default · play-host-tiles=block:cards · signup-band=block:signup | `.hero__eyebrow--mobile` (duplicate of the desktop eyebrow) · `.band--events` · `.hero__red-band` / `.hero__separator` (CSS rhythm) · `.text-input` / `.v-lead-generation-form__buttons` / `.signup-notice` (form UI the block renders) | metadata rows (Title/Description/template=home); `assets/media/*` → source URLs; `.cards` → `cards tiles`; `.signup` → `signup` |
| play | hero=block:hero · racquet-cta-band=default · spacer=drop · video-embed=default (auto-blocked `embed`) · rules-band=block:columns · kit-band=block:cards · signup-band=block:signup | `.hero-play__eyebrow` (empty rhythm paragraphs → CSS) · `.hero-play__photo-mobile` (CSS background → the hero's desktop panel `<img>` serves both widths) · `.kit__sep` · form UI | metadata (template=play); hero desktop panel `<img>` (rbt-play-v1.jpg) added to the hero row; `.cards` → `cards kit`; `.signup` → `signup play` |
| host | hero=block:hero · racquet-cta-band=default · play-host-tiles=block:cards · helpful-links=drop · signup-band=block:signup | `.hero-host__hidden-pair` · `.hero-host__sep` (CSS) · `.band--events` · `.tiles__button--hidden` · `.tiles__sep` · `.hero-host__photo` (CSS background → authored `<img>`) · form UI | metadata (template=host); hero panel `<img>` (host-red-ball.jpg, rehosted); `.cards` → `cards tiles host`; `.signup` → `signup host` |
| 404 | hand-authored (`stardust/.work/deploy/write-404.mjs`): badge `<img>`, `<h1>`, `<p><em><a>` CTA | mobile duplicate button | — |

`davids-model-lint` PASS (0 🔴). Its 🟡 rows, justified: `hero` / `signup` / `cards` / `columns` are single-column blocks holding prose on purpose — each is a fixed bespoke composition (video/photo hero grid, JS-rendered form, icon+text tiles/kit units, two-column icon rules) whose layout cannot be a section style (D1 § bespoke widget); the SVG media references are pure-vector icons (verified: no raster data URIs; the 404 badge, which embeds raster, was rasterised to PNG on DA media); empty `alt` mirrors the source (decorative tiles) and is an owner content follow-up (D13).

**Authoring shapes accepted by the decoders.** `hero`: one row, one cell (mobile picture, eyebrow, h1, lede, media link/picture) — `hero.js` slots by role. `cards kit`: one row per item, ONE cell (icon picture + h3 + p) — `cards.js` moves the first picture out of the cell. `columns`: one row × N cells, or N single-cell rows (the generator emits one row per repeat unit) — `columns.js` accepts both.

**404 heading.** The live 404 titles the page with an `<h2>` and has no `<h1>`; the EDS page authors that title as the page's only `<h1>` at the h2 ramp (`body.not-found main .section h1`) — zero visual delta, one h1 per page (qa-gate contract, SEO). Recorded in `stardust/decisions.md`.

**Round-trip mapping.** `block-roundtrip.mjs` counts live-hidden prototype nodes (`.band--events`, `.tiles__button--hidden`) as prototype text; the gate is run with `--map cards=<visible repeat wrapper>` (`.tiles` / `.tiles__cards` / `.kit__items`) — learnings L9.

## Published-origin fidelity (Step 10)
The harness/preview render matched the DA transform 1:1 (no pipeline reshape on this site), but the first published-origin round measured the EDS build against the gated prototypes for the first time: 203 px of section-height drift on home at 1440 (footer wrapper reset zeroing the lifted 32/64 padding, dropped hero separator rhythm, missing band-container 8 px paddings on tiles/rules/kit, the sign-up in-page-view 30 px, the kit icon at 100 % instead of 40 % of its column, the host title column 440 vs 480, the columns decoder rendering the second single-cell row raw, the play mobile cover photo). Every fix is a lifted value from the prototype CSS (`stardust/prototypes/css/*.css`), verified by box probes (`stardust/.work/deploy/{box,outline,style}-probe.mjs`) until every section height equalled the prototype at 1440 and 360 on all four pages; the published-origin gate rounds are recorded in `stardust/replica/progress.json` (`published.<bp>`) and listed in the hand-off gate table.

CLS (deployed, woff2 + chrome fetches delayed 1.5 s): home 0.013 / 0.003 · play 0.003 / 0.001 · host 0.012 / 0.006 · 404 0.000 / 0.002 (1440 / 360) — all < 0.1.
