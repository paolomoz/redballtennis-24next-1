<!-- stardust:provenance
  writtenBy: stardust:replica
  writtenAt: 2026-09-21T06:54:54Z
  stardustVersion: 0.24.0-next.4
  read: skills/stardust/reference/decisions.md § Default rows
-->

# Decisions — redballtennis.com

| id | question | default | rationale | status | decided-by | evidence |
|---|---|---|---|---|---|---|
| target | deploy target | `paolomoz/redballtennis-24next-1` (public, existing), DA folder of the same name | named in the ask | owner-decided | owner | user ask 2026-09-21T06:54:54Z |
| branch | which branch serves | `main` | boilerplate default | default-applied | default | `stardust/direction.md` |
| commit | when does stardust commit | end of each phase, unasked | hands-off | default-applied | default | `stardust/direction.md` |
| publish | when do pages go live | **preview**; live only on explicit `--publish` | D1/D16; ask did not say publish | default-applied | default | `stardust/direction.md` |
| lockdown | lock target before hand-off | on (private repo + site allow list) — deferred to the hand-off step; owner supplied a public repo, so this is surfaced before flipping visibility | a served site is public until locked | default-applied | default | `stardust/direction.md` |
| fonts | how are web fonts served | self-host + `fonts/LICENSING.md`; licensed → metric substitute + `fonts-public` row | brand-faithful default | default-applied | default | Phase 3 fonts policy |
| links | internal-link boundary | root-relative; unmigrated → bounce to source host | D9 | default-applied | default | — |
| locale | language layout | one folder per locale incl. default (`/en/`) — matches the source tree | symmetric trees | default-applied | default | sitemap |
| martech | tags/analytics | kept, host-gated (production only) | parity without pollution | default-applied | default | — |
| crawl | crawl pace | honour robots Crawl-delay (none declared) | politeness | default-applied | default | robots.txt |
| credentials | third-party credentials | list per dynamic row; static path proceeds | — | default-applied | default | `dynamic-features.md` |
| runtime | install browser tooling | yes, under `stardust/` | instrument class | default-applied | default | `stardust/.work/env.json` |
| deps | where scripts resolve deps | `stardust/node_modules` | one dependency dir | default-applied | default | `stardust/package.json` |
| tracking | progress outside session | none — `stardust/rollout/report/` | — | default-applied | default | — |
| scope | which pages, in which order | wave 1 = all 6 sitemap pages; stop at preview | small inventory | default-applied | default | `stardust/direction.md` |
| media | rehost external images | `rehost-blocked` | ingester baseline | default-applied | default | — |
| dyn | dynamic surface | pointer → `stardust/dynamic-features.md` | — | — | — | — |
| chrome-variant | second header/footer variant | template body class / nav-footer doc per variant | one mechanism | default-applied | default | Phase 1 `chrome-variants.mjs` |
| index-registration | query index | before first index-backed row | D13 | default-applied | default | — |
| fonts-public | may Graphik (Commercial Type, licence `verify`) be published to a public origin | — | licence obligation; self-hosted on preview with the licensing alert; live publish waits | owner-only-pending | — | `stardust/current/assets/_fonts-manifest.json` |
| chrome-variant | variant-5e2e (en-home-confirmation-html) | decided-out — the page is an off-site login redirect; not a chrome of this site | chrome-variants.mjs bucketed account.usta.com's chrome | default-applied | replica | `stardust/dynamic-features.md` #28 |
| locale | language layout (revised) | root serves home directly; `/en/home/*` for subpages; `/en/home` → `/` redirect | source parity: single locale, canonical root `/` is a 200 on the source | default-applied (revised) | replica | `stardust/eds-conversion-log.md` § Paths |
| `404-heading` | heading level of the 404 title | author the title as the page's single `<h1>` at the h2 ramp (live has an `<h2>` and no h1) | zero visual delta; one h1 per page (qa-gate contract, SEO) | agent-decided (hands-off) | stardust:replica Phase 5 | `content/en/home/404.html`, `404.html`, `styles/styles.css` `body.not-found main .section h1` |
