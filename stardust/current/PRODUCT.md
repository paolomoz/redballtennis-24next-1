<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-09-21T07:01:34Z
  stardustVersion: 0.24.0-next.4
  againstInput: https://www.redballtennis.com
  mode: descriptive current state (prep) — authored from captured evidence, not an interview
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/*.json
    - stardust/current/assets/screenshots/*.png
  synthesized: Users, Product Purpose, Positioning, Product Principles (marked inferred where the captured copy does not state them)
-->

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Adults and families in the United States who want to play tennis casually: newcomers, lapsed players "coming back after a break", and people who "just want to get active" (home hero copy). A second audience is prospective hosts: tennis and pickleball facilities, breweries, offices and community groups that want to run Red Ball Tennis programs or events (Host page). Both audiences are addressed as USTA prospects: every page ends in the USTA newsletter sign-up.

_provenance: inferred — from the home, Play and Host hero copy and the sign-up disclaimer naming USTA._

## Product Purpose

Red Ball Tennis is USTA's low-pressure format of tennis: slower, lower-compression red balls, a smaller court that fits on any flat surface, a shorter racquet and no strict rules. The site exists to explain the format, get people playing (Play), recruit venues and organizers (Host), sell the official HEAD racquet (Shop Now → head.com) and collect email + ZIP sign-ups for USTA. Success is sign-ups, racquet click-throughs and host inquiries.

## Positioning

"Tennis redesigned for you" — the official USTA-backed casual tennis format, with its own kit (the RBT racquet and red ball), its own rules and USTA program infrastructure behind it. A pickleball-style accessibility claim that a generic tennis club or a racquet brand could not truthfully make on USTA's behalf.

_provenance: inferred — from "REDRAW THE LINES", "REDESIGNED FOR YOU", "RED IS IN. ARE YOU?" and the HEAD racquet CTA._

## Operating Context

A four-page AEM microsite (`/en/home.html`, `/en/home/play.html`, `/en/home/host.html`, `/en/home/404.html`) under the USTA "USTA SITES" network strip. Visitors arrive from USTA campaigns and social (#redballtennis). A YouTube brand film sits in the home hero; the sign-up posts to USTA's marketing platform; `/en/home/confirmation.html` redirects to the USTA account login (Auth0). Tags: Adobe Launch/Analytics/Target, OneTrust consent, Meta pixel, Hotjar, Simpli.fi, Bidtellect, Google Maps API.

## Capabilities and Constraints

- Three content pages + a 404, one shared header (USTA network strip, Red Ball logo, HOME / PLAY / HOST) and one shared footer (logo, Terms & Conditions, Privacy Policy, #redballtennis).
- Every page carries the same three cross-promo bands: "REDESIGNED FOR YOU" racquet CTA, the "RED IS IN. ARE YOU?" Play/Host tile band on a tennis-ball photo, and the "JOIN THE FUN" email + ZIP sign-up (Host swaps the copy to a host inquiry).
- Play adds a "How to play" rules list and a "What you need" kit list with icon tiles and Hit-to-be-Fit / programs-and-events tiles; Host adds "On the court / In the wild" hosting tiles.
- The sign-up is a form-less control group (two required text inputs + a button, no `<form>` element) wired by AEM/USTA scripts; a hidden confirmation route redirects off-site.
- Terminology: "Red Ball", "RBT", "redraw the lines", "host", "play", "join the fun".
- Undecided product facts: none captured — the site has no pricing, locator or account features of its own.

## Brand Commitments

- **Name and marks:** Red Ball Tennis (wordmark PNG with the red ball swoosh), the round "play Red Ball tennis" badge (404), the USTA parent mark in the network strip.
- **Register:** `brand` — a marketing landing site (register guess from the brand surface: brand).
- **Personality (observed):** loud, sporty, playful; primary-colour flag palette (royal blue #0a2396 surfaces, red #c80f2f accents, white), ultra-condensed shouting headlines set in ALL CAPS, hand-drawn red scribble lines and tennis-ball photography.
- **Anti-references (observed):** nothing corporate-neutral or club-formal; no greys as brand colours, no serif type, no soft pastels.
- **Type:** Graphik (Commercial Type) — XXCondensed Bold for display, Semibold and Regular for body; USTA Sans Bold in the network strip. Licensed webfonts self-hosted by the source; licence status `verify`.

## Evidence on Hand

- `stardust/current/pages/<slug>.json` + `.html` — 9 live Playwright records (4 distinct pages, 4 aliases/redirects of home, 1 off-site login redirect).
- `stardust/current/assets/screenshots/` — 1440 and 360 captures per page.
- `stardust/current/assets/media/` — 41 harvested assets (logos, hero photos, tile PNGs, icon SVGs, the red scribble SVG); `assets/fonts/` — Graphik ×3, USTA Sans Bold, Roboto (OneTrust).
- `stardust/current/_brand-extraction.json`, `DESIGN.json`, `brand-review.html`.
- Absent, never to be fabricated: testimonials, program listings, venue data, pricing, press.

## Product Principles

1. Zero barrier to entry — copy always says "no formal courts, no strict rules"; nothing on the site asks for tennis knowledge.
2. Every page funnels to the same three actions: buy the racquet, pick Play or Host, join the mailing list.
3. USTA-backed but not USTA-styled — the parent brand sits in the network strip, the page itself is Red Ball's louder voice.
4. Kit-first explanation — the format is taught through the ball, the racquet and the court, with icons, not rulebooks.

_provenance: inferred — from the repeated bands and the Play page's kit list._

## Accessibility & Inclusion

Observed: alt text on functional images and icons ("Icon of a tennis player serving…"), empty alt on decorative tile images, required-field markers on the sign-up, a "skip"/accessibility widget (ULP) on the login redirect. No stated standard captured. Colour contrast of white on #0a2396 and black on white passes; red #c80f2f body-size text on white is borderline.
