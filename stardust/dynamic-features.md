<!-- stardust provenance: skill=stardust:dynamics · phase=3 triage (curated) · 2026-09-21T07:06:04Z · input stardust/dynamics/dynamic-features.generated-plan.md (28 findings) + stardust/current/pages/*.html (sign-up widget inputs, hamburger) · target https://main--redballtennis-24next-1--paolomoz.aem.page · resolved by: hands-off (every non-self row = named assumption, interim ships) -->
# Dynamic features — redballtennis.com

## Listings contract
none — the site has no listing blocks, no query index consumers.

## Features
| # | id | feature | class | reach | disposition | reproducibility | status | pattern | decision / owner | evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-unknown-third-party-host-bttrack-com | Bidtellect ad pixel (bttrack.com + cdn.bttrack.com) | T | 4/4 | embed-passthrough | needs-business-decision | interim (host-gated, inert on preview) | consent-gated-tags | owner: keep Bidtellect on the new host? | _dynamics.json #1, #17 |
| 2 | a-cms-app-settings-object-datalayer | AEM `dataLayer` settings object | A | 4/4 | decided-out | self | decided-out | — | none — Adobe Launch data layer is re-seeded by the tags row (#14) | _dynamics.json #2 |
| 3 | a-cms-app-settings-object-granite | AEM `Granite` runtime global | A | 4/4 | decided-out | self | decided-out | — | none — AEM platform internal, no consumer on EDS | _dynamics.json #3 |
| 4 | a-cms-app-settings-object-cq | AEM `CQ` runtime global | A | 4/4 | decided-out | self | decided-out | — | none — AEM platform internal | _dynamics.json #4 |
| 5 | a-unknown-third-party-host-jnn-pa-googleapis-com | YouTube embed internals (jnn-pa.googleapis.com) | V | 2/4 | embed-passthrough | self | interim | media-as-url | none — part of the YouTube player (#27) | _dynamics.json #5 |
| 6 | a-unknown-third-party-host-www-gstatic-com | YouTube embed internals (www.gstatic.com) | V | 2/4 | embed-passthrough | self | interim | media-as-url | none — part of the YouTube player (#27) | _dynamics.json #6 |
| 7 | cr-client-framework-vue | Vue runtime — renders the sign-up widget (#29) | CR | 4/4 | rebuild-native | self | interim | settled-dom-snapshot | none — the widget is rebuilt as a block (#29); the settled DOM is the content | _dynamics.json #7; pages/index.html `#email-value-id` |
| 8 | d-first-party-data-file-get-libs-granite-csrf-token-json | GET /libs/granite/csrf/token.json | D | 8/9 | decided-out | self | decided-out | — | none — AEM CSRF token for the sign-up POST; dead on target (404); the rebuilt widget (#29) does not need it | _dynamics.json #8 |
| 9 | d-first-party-data-file-get-libs-cq-i18n-dict-en-json | GET /libs/cq/i18n/dict.en.json | D | 8/9 | decided-out | self | decided-out | — | none — AEM i18n dictionary; strings ship as authored content | _dynamics.json #9 |
| 10 | i18n-locale-variants-en | locale variants `en` (hreflang) | I18N | 1/4 | rebuild-native | needs-business-decision | interim (single locale `/en/`) | locale-tree | owner: single-locale confirmed? default `/en/` only (decisions `locale`) | _dynamics.json #10 |
| 11 | i18n-locale-variants-hc | locale variant `hc` (USTA network hreflang) | I18N | 1/4 | decided-out | needs-business-decision | decided-out | — | none — `hc` alternate points at a USTA property, not this site | _dynamics.json #11 |
| 12 | m-modal-trigger-aria-haspopup-chrome-only-button-content | USTA SITES dropdown (network strip, aria-haspopup) | M | 4/4 | rebuild-native | self | interim | chrome-interaction | none — header block; gated by chrome-states cells | _dynamics.json #12 |
| 13 | t-unknown-third-party-host-www-usta-com | usta.com requests (network strip assets / tag calls) | T | 4/4 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: which tags run on the new host | _dynamics.json #13 |
| 14 | t-tag-manager-adobe-launch | Adobe Launch (assets.adobedtm.com) | T | 9/9 | embed-passthrough | needs-business-decision | interim (host-gated, production host only) | consent-gated-tags | owner: Launch property for the new host | _dynamics.json #14 |
| 15 | t-analytics-session-replay | Hotjar session replay | T | 9/9 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: keep Hotjar? | _dynamics.json #15 |
| 16 | t-consent-onetrust | OneTrust CMP (cdn.cookielaw.org) | T | 8/9 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: OneTrust domain script id for the new host (the YouTube iframe is consent-gated behind category C0004) | _dynamics.json #16 |
| 17 | t-unknown-third-party-host-cdn-bttrack-com | merged into #1 | T | 4/4 | embed-passthrough | needs-business-decision | merged → #1 | consent-gated-tags | see #1 | _dynamics.json #17 |
| 18 | t-analytics-adobe-analytics-experience-cloud-id | Adobe Analytics / ECID / Target (omtrdc.net) | T | 9/9 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: report suite / Target for the new host | _dynamics.json #18 |
| 19 | t-unknown-third-party-host-tag-simpli-fi | Simpli.fi ad tag | T | 4/4 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: keep? | _dynamics.json #19 |
| 20 | t-marketing-ad-retargeting-pixel | Meta pixel + DoubleClick retargeting | T | 9/9 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: pixel ids for the new host | _dynamics.json #20 |
| 21 | t-unknown-third-party-host-sync-crwdcntrl-net | Lotame cookie sync (crwdcntrl.net) | T | 4/4 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: keep? | _dynamics.json #21 |
| 22 | t-unknown-third-party-host-www-google-com | google.com (Maps API / DoubleClick callbacks) | T | 2/4 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | rides with #25 / #20 | _dynamics.json #22 |
| 23 | t-unknown-third-party-host-yt3-ggpht-com | YouTube avatar CDN (yt3.ggpht.com) | V | 2/4 | embed-passthrough | self | interim | media-as-url | none — part of #27 | _dynamics.json #23 |
| 24 | t-tag-manager-google-tag-manager | Google Tag Manager (seen on 1/9 sidecars) | T | 1/9 | embed-passthrough | needs-business-decision | interim (host-gated) | consent-gated-tags | owner: GTM container for the new host | _dynamics.json #24 |
| 25 | v-maps-embedded-map-service | Google Maps JS API loaded (no map rendered on any page) | V | 9/9 | decided-out | self | decided-out | — | none — loaded by the USTA global header for a facility finder that no migrated page shows | _dynamics.json #25 |
| 26 | v-iframe-without-src-runtime-injected-embed | consent-gated YouTube iframe (`data-src`, OneTrust C0004) | V | 4/4 | embed-passthrough | self | interim | embed-passthrough | none — same player as #27; consent gating belongs to #16 | pages/index.html `iframe.optanon-category-C0004[data-src]` |
| 27 | v-video-youtube | YouTube brand film 0d6ahBtLavQ in the home hero | V | 6/9 | embed-passthrough | self | interim | media-as-url | none (player id is public) | _dynamics.json #27 |
| 28 | x-auth-identity-provider | /en/home/confirmation.html → account.usta.com (Auth0) | X | 1/9 | decided-out | needs-backend | decided-out | decided-out | none — the path ships as a redirect to the USTA login (redirects sheet) | pages/en-home-confirmation-html.json finalUrl |
| 29 | f-signup-join-the-fun | "JOIN THE FUN" sign-up: email + ZIP, form-less Vue widget, POSTs to a USTA marketing endpoint via AEM (CSRF #8) | F | 7/9 | rebuild-native | needs-backend | interim (UI rebuilt; submission shows "no backend connected") | form-block | owner: the USTA marketing intake endpoint (or a form service) for email + ZIP; not regulated-pii | pages/index.html `#email-value-id`, `#zipcode-value-id`; text "*JOIN THE FUN" |
| 30 | m-mobile-drawer-main-menu | mobile "MAIN MENU" hamburger drawer (≤ 1024) | M | 9/9 | rebuild-native | self | interim | chrome-interaction | none — header block; gated by chrome-states drawer cell at 360 | pages/index.html "MAIN MENU" |

## Decision batch
One message to the owner; every row ships its interim meanwhile (hands-off named assumptions):
- **Tags (#1, #13–#16, #18–#22, #24):** all martech is kept, host-gated — loaded only on the production host, inert on preview and local (decisions `martech`). Owner supplies: Adobe Launch property, Analytics report suite / Target client, OneTrust domain script id, Meta/DoubleClick/Simpli.fi/Bidtellect/Lotame/Hotjar/GTM ids or a "drop" per vendor.
- **Sign-up backend (#29):** the widget UI is rebuilt as a block with the captured labels and disclaimer; submission is blocked with an explicit "no backend connected" message until the owner names the USTA marketing endpoint or a form service. Email + ZIP is marketing data, not regulated PII.
- **Locale (#10):** single locale `/en/` assumed (matches the source tree); confirm or add locales.
- **Fonts (decisions `fonts-public`):** Graphik (Commercial Type) is self-hosted for fidelity with a licensing alert; confirm the webfont licence before any live publish.

## Register (decided-out)
| feature | reason | production statement |
|---|---|---|
| AEM runtime globals (#2, #3, #4) and data files (#8, #9) | AEM platform internals with no consumer on EDS | Not present on the new host by design; the Launch data layer is re-seeded by the tags integration. |
| `hc` hreflang (#11) | points at a USTA property, not this site | No `hc` alternate on the new host. |
| Google Maps JS (#25) | no map rendered on any migrated page | Maps API not loaded; a facility finder would be a new feature request. |
| USTA account login (#28) | session-bound auth on account.usta.com | `/en/home/confirmation.html` 302s to https://account.usta.com/u/login exactly as the source does (redirects sheet). |
