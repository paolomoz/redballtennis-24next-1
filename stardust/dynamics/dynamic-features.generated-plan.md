<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-09-21T07:03:35.159Z · input stardust/current/_dynamics.json (4 pages, 28 findings) · target probe https://main--redballtennis-24next-1--paolomoz.aem.page -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-unknown-third-party-host-bttrack-com | A | unknown third-party host bttrack.com | 4/4 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 2 | a-cms-app-settings-object-datalayer | A | CMS / app settings object dataLayer | 4/4 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 3 | a-cms-app-settings-object-granite | A | CMS / app settings object Granite | 4/4 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 4 | a-cms-app-settings-object-cq | A | CMS / app settings object CQ | 4/4 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 5 | a-unknown-third-party-host-jnn-pa-googleapis-com | A | unknown third-party host jnn-pa.googleapis.com | 2/4 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 6 | a-unknown-third-party-host-www-gstatic-com | A | unknown third-party host www.gstatic.com | 2/4 | static-snapshot | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 7 | cr-client-framework-vue | CR | client framework vue | 4/4 | static-snapshot | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 8 | d-first-party-data-file-get-libs-granite-csrf-token-json | D | first-party data file GET /libs/granite/csrf/token.json | 4/4 (reach 8/9) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 9 | d-first-party-data-file-get-libs-cq-i18n-dict-en-json | D | first-party data file GET /libs/cq/i18n/dict.en.json | 4/4 (reach 8/9) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 10 | i18n-locale-variants-en-en-en-en-en | I18N | locale variants en,en,en,en,en | 1/4 | rebuild-native | needs-business-decision | pending | locale-tree | scope of the locale trees |  |
| 11 | i18n-locale-variants-hc | I18N | locale variants hc | 1/4 | rebuild-native | needs-business-decision | pending | locale-tree | scope of the locale trees |  |
| 12 | m-modal-trigger-aria-haspopup-chrome-only-button-content | M | modal trigger aria-haspopup (chrome only) → button:content | 4/4 | rebuild-native | self | pending | chrome-interaction | none (motion-observe evidence) |  |
| 13 | t-unknown-third-party-host-www-usta-com | T | unknown third-party host www.usta.com | 4/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 14 | t-tag-manager-adobe-launch | T | tag manager: Adobe Launch | 4/4 (reach 9/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 15 | t-analytics-session-replay | T | analytics: session replay | 4/4 (reach 9/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 16 | t-consent-onetrust | T | consent: OneTrust | 4/4 (reach 8/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | CMP domain script reuse on the new host |  |
| 17 | t-unknown-third-party-host-cdn-bttrack-com | T | unknown third-party host cdn.bttrack.com | 4/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 18 | t-analytics-adobe-analytics-experience-cloud-id | T | analytics: Adobe Analytics / Experience Cloud ID | 4/4 (reach 9/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 19 | t-unknown-third-party-host-tag-simpli-fi | T | unknown third-party host tag.simpli.fi | 4/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 20 | t-marketing-ad-retargeting-pixel | T | marketing: ad / retargeting pixel | 4/4 (reach 16/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 21 | t-unknown-third-party-host-sync-crwdcntrl-net | T | unknown third-party host sync.crwdcntrl.net | 4/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 22 | t-unknown-third-party-host-www-google-com | T | unknown third-party host www.google.com | 2/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 23 | t-unknown-third-party-host-yt3-ggpht-com | T | unknown third-party host yt3.ggpht.com | 2/4 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 24 | t-tag-manager-google-tag-manager | T | tag manager: Google Tag Manager | 0/4 (reach 1/9) | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 25 | v-maps-embedded-map-service | V | maps: embedded map service | 4/4 (reach 9/9) | embed-passthrough | self | pending | media-as-url | none (player ids are public) |  |
| 26 | v-iframe-without-src-runtime-injected-embed | V | iframe without src (runtime-injected embed) | 4/4 | embed-passthrough | needs-human-capture | pending | embed-passthrough | resolve the runtime src from a rendered capture |  |
| 27 | v-video-youtube | V | video: YouTube | 2/4 (reach 6/9) | embed-passthrough | self | pending | media-as-url | none (player ids are public) |  |
| 28 | x-auth-identity-provider | X | auth: identity provider | 0/4 (reach 1/9) | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |

## Triage

- **Ships autonomously (reproducibility `self`):** 9 row(s) — read-settings, settled-dom-snapshot, sheet-sync, chrome-interaction, media-as-url.
- **One owner decision batch:** 18 row(s) — inspect the XHR, add a vendor row · scope of the locale trees · which tags run on the new host; property ids · CMP domain script reuse on the new host · resolve the runtime src from a rendered capture.
- **Already delivered by the capture pipeline:** 0 row(s) — no work.
- **Host-bound on the target:** 2 of 2 probed API paths — the off-origin data work.

## Phases

<!-- one list item per inventory row, `- #N …`; `dynamics-plan.mjs --lint` checks every row is placed once -->
- **tags** — 12
  - #13 unknown third-party host www.usta.com (T, embed-passthrough, needs-business-decision)
  - #14 tag manager: Adobe Launch (T, embed-passthrough, needs-business-decision)
  - #15 analytics: session replay (T, embed-passthrough, needs-business-decision)
  - #16 consent: OneTrust (T, embed-passthrough, needs-business-decision)
  - #17 unknown third-party host cdn.bttrack.com (T, embed-passthrough, needs-business-decision)
  - #18 analytics: Adobe Analytics / Experience Cloud ID (T, embed-passthrough, needs-business-decision)
  - #19 unknown third-party host tag.simpli.fi (T, embed-passthrough, needs-business-decision)
  - #20 marketing: ad / retargeting pixel (T, embed-passthrough, needs-business-decision)
  - #21 unknown third-party host sync.crwdcntrl.net (T, embed-passthrough, needs-business-decision)
  - #22 unknown third-party host www.google.com (T, embed-passthrough, needs-business-decision)
  - #23 unknown third-party host yt3.ggpht.com (T, embed-passthrough, needs-business-decision)
  - #24 tag manager: Google Tag Manager (T, embed-passthrough, needs-business-decision)
- **detect** — 6
  - #1 unknown third-party host bttrack.com (A, static-snapshot, needs-human-capture)
  - #2 CMS / app settings object dataLayer (A, static-snapshot, self)
  - #3 CMS / app settings object Granite (A, static-snapshot, self)
  - #4 CMS / app settings object CQ (A, static-snapshot, self)
  - #5 unknown third-party host jnn-pa.googleapis.com (A, static-snapshot, needs-human-capture)
  - #6 unknown third-party host www.gstatic.com (A, static-snapshot, needs-human-capture)
- **data** — 2
  - #8 first-party data file GET /libs/granite/csrf/token.json (D, data-fed, self)
  - #9 first-party data file GET /libs/cq/i18n/dict.en.json (D, data-fed, self)
- **locale wave** — 2
  - #10 locale variants en,en,en,en,en (I18N, rebuild-native, needs-business-decision)
  - #11 locale variants hc (I18N, rebuild-native, needs-business-decision)
- **media** — 2
  - #25 maps: embedded map service (V, embed-passthrough, self)
  - #27 video: YouTube (V, embed-passthrough, self)
- **capture** — 1
  - #7 client framework vue (CR, static-snapshot, self)
- **interactive** — 1
  - #12 modal trigger aria-haspopup (chrome only) → button:content (M, rebuild-native, self)
- **embeds** — 1
  - #26 iframe without src (runtime-injected embed) (V, embed-passthrough, needs-human-capture)
- **register** — 1
  - #28 auth: identity provider (X, decided-out, needs-backend)
