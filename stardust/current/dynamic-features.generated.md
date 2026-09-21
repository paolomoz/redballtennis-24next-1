# Dynamic features — detected (2026-09-21T07:01:35.448Z)

Pages probed: /, /en/home/play.html, /en/home/host.html, /en/home/404.html · settle 5000 ms · width 1440 · reach from 9/9 crawled pages

Evidence only. Every row must receive a disposition in `stardust/dynamic-features.md` (`dynamics-plan.mjs` drafts it).

| id | class | feature | pages | reach | evidence | hint |
|---|---|---|---|---|---|---|
| a-unknown-third-party-host-bttrack-com | A API / personalisation / settings | unknown third-party host bttrack.com | 4/4 |  | bttrack.com | inspect |
| a-cms-app-settings-object-datalayer | A API / personalisation / settings | CMS / app settings object dataLayer | 4/4 |  |  | settings |
| a-cms-app-settings-object-granite | A API / personalisation / settings | CMS / app settings object Granite | 4/4 |  |  | settings |
| a-cms-app-settings-object-cq | A API / personalisation / settings | CMS / app settings object CQ | 4/4 |  |  | settings |
| a-unknown-third-party-host-jnn-pa-googleapis-com | A API / personalisation / settings | unknown third-party host jnn-pa.googleapis.com | 2/4 |  | jnn-pa.googleapis.com | inspect |
| a-unknown-third-party-host-www-gstatic-com | A API / personalisation / settings | unknown third-party host www.gstatic.com | 2/4 |  | www.gstatic.com | inspect |
| cr-client-framework-vue | CR client-rendered | client framework vue | 4/4 |  |  | framework |
| d-first-party-data-file-get-libs-granite-csrf-token-json | D sheet / data file | first-party data file GET /libs/granite/csrf/token.json | 4/4 | 8/9 | GET /libs/granite/csrf/token.json → 200 | data |
| d-first-party-data-file-get-libs-cq-i18n-dict-en-json | D sheet / data file | first-party data file GET /libs/cq/i18n/dict.en.json | 4/4 | 8/9 | GET /libs/cq/i18n/dict.en.json → 200 | data |
| i18n-locale-variants-en-en-en-en-en | I18N locale | locale variants en,en,en,en,en | 1/4 |  | https://www.usta.com/en/home.html<br>https://www.redballtennis.com/en/home.html<br>https://www.redballtennis.com/en/home/play.html | locale |
| i18n-locale-variants-hc | I18N locale | locale variants hc | 1/4 |  | https://customercare.usta.com/hc/en-us/requests/new?ticket_form_id=29846834371860 | locale |
| m-modal-trigger-aria-haspopup-chrome-only-button-content | M modal / interactive | modal trigger aria-haspopup (chrome only) → button:content | 4/4 |  | Filter Icon | chrome-interaction |
| t-unknown-third-party-host-www-usta-com | T tag / consent | unknown third-party host www.usta.com | 4/4 |  | www.usta.com | inspect |
| t-tag-manager-adobe-launch | T tag / consent | tag manager: Adobe Launch | 4/4 | 9/9 | assets.adobedtm.com | tags |
| t-analytics-session-replay | T tag / consent | analytics: session replay | 4/4 | 9/9 | static.hotjar.com | tags |
| t-consent-onetrust | T tag / consent | consent: OneTrust | 4/4 | 8/9 | cdn.cookielaw.org<br>geolocation.onetrust.com | tags |
| t-unknown-third-party-host-cdn-bttrack-com | T tag / consent | unknown third-party host cdn.bttrack.com | 4/4 |  | cdn.bttrack.com | inspect |
| t-analytics-adobe-analytics-experience-cloud-id | T tag / consent | analytics: Adobe Analytics / Experience Cloud ID | 4/4 | 9/9 | dpm.demdex.net<br>usta.demdex.net<br>unitedstatestennisas.tt.omtrdc.net | tags |
| t-unknown-third-party-host-tag-simpli-fi | T tag / consent | unknown third-party host tag.simpli.fi | 4/4 |  | tag.simpli.fi | inspect |
| t-marketing-ad-retargeting-pixel | T tag / consent | marketing: ad / retargeting pixel | 4/4 | 16/9 | connect.facebook.net<br>cm.everesttech.net<br>static.doubleclick.net | tags |
| t-unknown-third-party-host-sync-crwdcntrl-net | T tag / consent | unknown third-party host sync.crwdcntrl.net | 4/4 |  | sync.crwdcntrl.net | inspect |
| t-unknown-third-party-host-www-google-com | T tag / consent | unknown third-party host www.google.com | 2/4 |  | www.google.com | inspect |
| t-unknown-third-party-host-yt3-ggpht-com | T tag / consent | unknown third-party host yt3.ggpht.com | 2/4 |  | yt3.ggpht.com | inspect |
| t-tag-manager-google-tag-manager | T tag / consent | tag manager: Google Tag Manager | 0/4 | 1/9 | en-home-confirmation-html | reach-only (tags; re-probe one page with --urls) |
| v-maps-embedded-map-service | V media | maps: embedded map service | 4/4 | 9/9 | maps.googleapis.com | media |
| v-iframe-without-src-runtime-injected-embed | V media | iframe without src (runtime-injected embed) | 4/4 |  | onetrust-text-resize | embed-runtime |
| v-video-youtube | V media | video: YouTube | 2/4 | 6/9 | www.youtube.com<br>i.ytimg.com<br>https://www.youtube.com/embed/0d6ahBtLavQ | media |
| x-auth-identity-provider | X auth / commerce | auth: identity provider | 0/4 | 1/9 | en-home-confirmation-html | reach-only (decided-out; re-probe one page with --urls) |
