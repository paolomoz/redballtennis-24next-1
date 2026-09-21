<!-- stardust provenance: skill=stardust:dynamics · phase=3 plan (curated) · 2026-09-21T07:06:04Z · from stardust/dynamic-features.md -->
# Dynamic features — plan (redballtennis.com)

Every inventory row placed once. Phases run after the static replica is delivered to preview (rollout D2 / deploy pilot Phases 4–5).

## Phase A — chrome interactions (self, ships with the header block)
- #12 USTA SITES dropdown — deliverable: header block toggle mirroring the observed aria-haspopup state machine; verify: chrome-states cell `usta-sites` ≤ 2 % at 1440; effort S. **Delivered on preview 2026-09-21** (`blocks/header/header.js`; motion-assert published-origin: stateMachines pass).
- #30 mobile MAIN MENU drawer — deliverable: header block drawer at ≤ 1024; verify: chrome-states `drawer` cell at 360; effort S. **Delivered on preview 2026-09-21** (hamburger ≤ 1369 as observed; header crop gate 360 ≤ 1.6 %).

## Phase B — media embeds (self)
- #27 YouTube brand film — deliverable: `embed` block (video) with the public player id; authoring: a bare YouTube link in the hero's media cell; verify: iframe present, plays on click at 1440 and 360; effort S. **Delivered on preview 2026-09-21** (home hero `video` variant iframe; play `embed` auto-block from the bare link).
- #26 consent-gated iframe (data-src) — folded into #27 (same player); the OneTrust gate belongs to Phase D.
- #5 jnn-pa.googleapis.com — part of the player, no work.
- #6 www.gstatic.com — part of the player, no work.
- #23 yt3.ggpht.com — part of the player, no work.

## Phase C — sign-up widget (rebuild UI now; backend = owner)
- #29 JOIN THE FUN sign-up — deliverable: `signup` form block (email, ZIP, submit, disclaimer richtext, required markers, aria-describedby error slots) with submission blocked + "no backend connected" message; authoring contract: block rows heading / disclaimer, config sheet for the endpoint once named; verify: fields render, required validation fires, submit shows the message; owner decision: USTA marketing endpoint; effort M. **UI delivered on preview 2026-09-21** (`blocks/signup`, labels from `/placeholders.json`; submission blocked with the no-backend status — owner: USTA marketing endpoint).
- #7 Vue runtime — no deliverable (the block replaces the runtime).

## Phase D — tags, host-gated (owner ids)
- #14 Adobe Launch — deliverable: `scripts/site-config.js` host gate + delayed.js loader; verify: no third-party request on preview, requests present on the production host; effort S.
- #18 Adobe Analytics / ECID / Target — rides on #14.
- #16 OneTrust CMP — deliverable: domain script in delayed.js behind the host gate; YouTube consent category preserved; effort S.
- #20 Meta pixel + DoubleClick — via Launch (#14).
- #15 Hotjar — via Launch (#14).
- #1 Bidtellect — via Launch (#14).
- #17 cdn.bttrack.com — merged into #1.
- #19 Simpli.fi — via Launch (#14).
- #21 Lotame — via Launch (#14).
- #22 google.com callbacks — via #20 / #25.
- #13 usta.com requests — via Launch (#14).
- #24 Google Tag Manager — via Launch (#14) or dropped; owner.

## Phase E — locale wave
- #10 `en` locale tree — deliverable: content under `/en/` with root redirect `/` → `/en/home`; verify: both paths 200 on preview; effort S.
- #11 `hc` alternate — decided-out, no deliverable.

## Register (decided-out, no phase work)
- #2 dataLayer settings object — decided-out.
- #3 Granite global — decided-out.
- #4 CQ global — decided-out.
- #8 csrf token.json — decided-out.
- #9 i18n dict.en.json — decided-out.
- #25 Google Maps JS — decided-out.
- #28 USTA account login — decided-out; redirects sheet row `/en/home/confirmation.html → https://account.usta.com/u/login`.
