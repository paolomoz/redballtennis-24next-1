<!-- stardust:provenance
  writtenBy: stardust:replica
  writtenAt: 2026-09-21T06:54:54Z
  stardustVersion: 0.24.0-next.4
  userInput: "migrate redballtennis.com to EDS with stardust as an exact replica. use this new EDS repo https://github.com/paolomoz/redballtennis-24next-1 and this DA folder https://da.live/#/paolomoz/redballtennis-24next-1 DA_TOKEN in /users/paolo/.claude/.env - fully hands off."
  synthesized: activation block, wave plan, named assumptions
  authored: none (preserve mode — Phase 2 fills the preserve-mode record)
  read: stardust/state.json, stardust/.work/env.json
-->

# Direction — redballtennis.com → EDS (replica)

## Hands-off activation

- **Activated by phrase:** "fully hands off" (user ask, 2026-09-21T06:54:54Z). `state.json.handsOff: true`.
- **Flow:** `replica` — keep-design phrase "exact replica" selects it without a question (`flowSource: user-phrase`). No `prepare-migration` step runs before or after replica.
- **Approved chain:** replica → migrate → deploy → rollout (`state.json.approvedChain`). Deploy/rollout stop at **preview**; live publish is not in the ask (D1/D16).
- **Commit policy:** commits land at each phase end without asking — hands-off overrides the ask-before-commit preference for this run.
- **Target (owner-decided by the ask):** repo `paolomoz/redballtennis-24next-1` (public, boilerplate, Code Sync active), DA folder `/paolomoz/redballtennis-24next-1` (boilerplate nav/footer/index present — will be overwritten and logged), branch `main`.
- **Wave plan:** the sitemap declares 6 pages (`/en/home.html`, `/en/home/play.html`, `/en/home/host.html`, `/en/home/confirmation.html`, `/en/home/free-racquet-pack.html`, `/en/home/404.html`). Wave 1 = the full inventory (well under the 100-page / 20-per-template caps). Stop point: preview-only delivery of every gated page + published-origin gate; no live publish.
- **Named assumptions:** (1) the `www` host is canonical (apex 301s to it); (2) the site is English-only under `/en/`; the `locale` default row (one folder per locale incl. default) matches the source's own `/en/` tree; (3) `/en/home/404.html` is the site's error page — carried as content but not a gated archetype unless it has its own type.
- **Open default rows** (override any later by id): see `stardust/decisions.md`.

Impeccable ignore set (2026-09-21): impeccable 4.3.1 · files: stardust/current/** stardust/prototypes/** stardust/canon/** · values: 16 (colors 8, sizes 3, families 5; 16 new) · from: stardust/current/_brand-extraction.json · resolved by: hands-off

---

## Direction — preserve mode (same-design migration)

_provenance: writtenBy stardust:replica · writtenAt 2026-09-21T07:06:05Z · againstInput https://www.redballtennis.com · readArtifacts: stardust/current/PRODUCT.md, stardust/current/DESIGN.md, stardust/current/DESIGN.json_

Mode: PRESERVE. The target spec is the captured current state of https://www.redballtennis.com,
promoted verbatim (no direct invocation, no creative decisions).

Promoted: current/PRODUCT.md → PRODUCT.md · current/DESIGN.md → DESIGN.md ·
current/DESIGN.json → DESIGN.json (at 2026-09-21T07:06:05Z). Provenance: `--prep` verbatim (full-prep branch).

Permitted deltas: ONLY the entries of stardust/replica/inconsistency-register.md
(empty — pure replica).

Fidelity: ia verbatim · design verbatim · content verbatim.

Inventory facts (Phase 1): 9 records → 4 distinct pages. Archetypes: `index` (landing, layout cluster c1 — covers /, /en/home.html, /content/redballtennis/en/home.html and the two redirecting campaign URLs), `en-home-play-html` (program; sibling `en-home-host-html`), `en-home-404-html` (unique). `en-home-confirmation-html` is an off-site login redirect (chrome variant `variant-5e2e` = account.usta.com's chrome, decided-out; never a page of this site). Chrome variant `default` covers every migrated page.

Fonts: Graphik XXCondensed Bold / Semibold / Regular (Commercial Type, licence `verify`) and USTA Sans Bold — self-hosted for fidelity per deploy § 2 with the licensing alert in styles.css, fonts/LICENSING.md and the hand-off; `fonts-public` owner-only row opened for any live publish. Roboto (OneTrust UI) is not a brand face.
