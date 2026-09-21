# Font licensing — ⚠️ confirm before any live publish

Self-hosted for replica fidelity (stardust `deploy` Step 4, #80). Status `verify`: the source site
(www.redballtennis.com, USTA) serves these exact files from its own AEM client libraries; redistribution on
a new public origin needs the owner's licence confirmation (`stardust/decisions.md` row `fonts-public`,
owner-only).

| file | family | foundry | source | status |
|---|---|---|---|---|
| `graphik-xxcond-bold.woff2` | Graphik XXCondensed Bold ("Graphik XXCond App Bold") | Commercial Type | `…/etc.clientlibs/redball/components/structure/page/clientlibs/resources/fonts/GraphikXXCondensed-Bold-App.woff2` | verify |
| `graphik-semibold.woff2` | Graphik Semibold ("Graphik App Semibold") | Commercial Type | `…/resources/fonts/Graphik-Semibold-App.woff2` | verify |
| `graphik-regular.woff2` | Graphik Regular ("Graphik App Regular") | Commercial Type | `…/resources/fonts/Graphik-Regular-App.woff2` | verify |
| `usta-sans-bold.woff2` | USTA Sans Bold (converted from `USTASans-Bold.otf` with fontTools, glyphs unchanged) | USTA | `…/resources/fonts/USTASans-Bold.otf` | verify |

## Remove-and-fall-back path
If the licence cannot be confirmed: delete the four `.woff2` files and the four `@font-face` rules in
`styles/fonts.css`. Every stack in `styles/styles.css` names the metric-matched fallback face second
(`graphik-fallback`, `graphik-semibold-fallback`, `graphik-xxcond-fallback`, `usta-sans-fallback`), so the
site keeps its layout with system faces. The replica gates will then show a permanent, justified font
residual (`stardust/replica/progress.json`).
