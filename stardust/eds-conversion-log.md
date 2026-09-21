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
| `/en/home/404.html` | `/en/home/404` | content page (the source serves it 200); wiring the repo's `404.html` to it is an owner follow-up |
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
