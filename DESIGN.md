---
name: Red Ball Tennis
description: USTA's loud, primary-colour microsite for the low-pressure red-ball tennis format — royal blue surfaces, red scribbles, ultra-condensed caps headlines.
colors:
  white: "#ffffff"
  royal-blue: "#0a2396"
  black: "#000000"
  red: "#c80f2f"
  link-blue: "#0357b8"
  grey-33: "#333333"
  ink: "#1e212a"
  cloud: "#ebebf0"
  grey-a8: "#a8a8a8"
typography:
  display:
    fontFamily: "\"Graphik XXCond Bold\", Tahoma, sans-serif"
    fontSize: "100px"
    fontWeight: 400
    lineHeight: "110px"
    letterSpacing: "normal"
  headline:
    fontFamily: "\"Graphik XXCond Bold\", Tahoma, sans-serif"
    fontSize: "76px"
    fontWeight: 400
    lineHeight: "83.6px"
    letterSpacing: "normal"
  title:
    fontFamily: "\"Graphik XXCond Bold\", Tahoma, sans-serif"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "61.6px"
    letterSpacing: "normal"
  body:
    fontFamily: "\"Graphik Semibold\", Tahoma, sans-serif"
    fontWeight: 400
    letterSpacing: "normal"
  body-regular:
    fontFamily: "\"Graphik Regular\", Tahoma, sans-serif"
    fontWeight: 400
  network-strip:
    fontFamily: "\"USTA Sans\", Tahoma, sans-serif"
    fontWeight: 700
rounded:
  primary: "3px"
  secondary: "90px"
  pill: "9999px"
spacing:
  section-gap: "8px"
  grid-gap: "8px"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
    padding: "14px"
  button-secondary:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "0px"
    padding: "0px"
  card:
    backgroundColor: "{colors.royal-blue}"
    rounded: "{rounded.pill}"
---

<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-09-21T07:03:18Z
  stardustVersion: 0.24.0-next.4
  againstInput: https://www.redballtennis.com
  mode: descriptive current state (prep) — the frontmatter mirrors stardust/current/DESIGN.json (write-design-json.mjs); prose authored from the brand surface and the 1440/360 captures
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/DESIGN.json
    - stardust/current/assets/screenshots/*.png
  synthesized: the Creative North Star name and section prose (descriptive labels for observed facts, no new rules)
-->

# Design System: Red Ball Tennis

## Overview

**Creative North Star: "Court Lines in Primary Colours"**

Red Ball Tennis reads like a sports flag painted on a wall: flat fields of royal blue and pure white, hard red rules drawn between them, and headlines set in an ultra-condensed Graphik that shouts in capitals. There is no tonal layering and almost no shadow; hierarchy comes from colour blocks, from a 100px display size that dwarfs everything else, and from hand-drawn red scribble lines (the "redraw the lines" motif) that cut across the hero. Photography is tennis-ball red and court blue, never desaturated.

Density is low and rhythm is band-based: every page is a stack of full-width horizontal bands (blue header, white hero, white CTA band, blue tile band on a tennis-ball photo, white sign-up band, blue footer), each separated by a thin red or magenta rule rather than by whitespace scale. The same three cross-promo bands repeat on every page, so the site feels like one poster reflowed four times.

**Key Characteristics:**
- Flag palette: #0a2396 royal blue, #c80f2f red, #ffffff white; black for body and one black pill button.
- One display face at three fixed sizes (100 / 76 / 56 px), always Graphik XXCondensed Bold, mostly ALL CAPS.
- Full-width bands divided by 4–8px red rules; no card shadows, no gradients.
- Pill buttons (9999px radius) and round badges; almost nothing else is rounded (3px on inputs).
- Red scribble SVG and tennis-ball photography as the only decoration.

## Colors

A three-colour flag palette with black text; greys appear only in the OneTrust consent UI and the network strip.

### Primary
- **Royal Blue** (#0a2396): the header, the Play/Host tile band, the footer and the blue pill CTAs ("SHOP NOW"); also the colour of "REDESIGNED FOR YOU" and the "Tennis Redesigned For You" headline.
- **Red** (#c80f2f): the "RED" in "REDRAW THE LINES", the hero wordmark "Red Ball Tennis", the thin band-divider rules, the "PLAY" tile pill and the scribble SVG.

### Secondary
- **Link Blue** (#0357b8): inline links in the sign-up disclaimer and the footer link colour on white.

### Neutral
- **White** (#ffffff): page background, text on blue surfaces, the white pill button.
- **Black** (#000000): body copy, the 404 "TAKE ME BACK TO THE HOMEPAGE" pill, the hero lede.
- **Ink** (#1e212a) and **Grey 33** (#333333): USTA network-strip text and small print.
- **Cloud** (#ebebf0): input borders / network-strip background.
- **Grey A8** (#a8a8a8): the disabled-looking grey "JOIN THE FUN" submit button.

### Named Rules
**The Flag Rule.** Only blue, red and white carry meaning; black is for reading. A grey surface is never a brand surface.

## Typography

**Display Font:** Graphik XXCondensed Bold (with Tahoma, sans-serif)
**Body Font:** Graphik Semibold / Graphik Regular (with Tahoma, sans-serif)
**Label Font:** USTA Sans Bold (network strip only)

**Character:** A single family in two widths — a screaming condensed bold for every heading, a calm grotesk for everything else. Headings are set in capitals at fixed pixel sizes with tight (1.1) line-height; body copy is 16px-class Graphik with generous line-height. Licensed Commercial Type webfonts, self-hosted by the source (licence status: verify).

### Hierarchy
- **Display** (400, 100px, 110px): the hero wordmark "Red Ball Tennis" on home and the page titles on Play ("Tennis Redesigned For You") and Host ("This Is Your Game"); mixed case on page titles, caps elsewhere.
- **Headline** (400, 76px, 83.6px): band headings — "REDESIGNED FOR YOU", "RED IS IN. ARE YOU?", the 404 "Sorry, we couldn't find that page".
- **Title** (400, 56px, 61.6px / 50.5px): sub-band and tile headings ("HOW TO PLAY", "WHAT YOU NEED", "ON THE COURT").
- **Body** (400, ~16–18px): Graphik Semibold paragraph copy; the hero lede runs ~60ch at 1440.
- **Label** (400, ~12px, uppercase): "REDRAW THE LINES" eyebrow with the red "RED", form labels "*EMAIL", "*ZIP/POSTAL CODE", button labels.

### Named Rules
**The Caps Rule.** Every heading below the page title is uppercase; the page title alone may be mixed case.

## Layout

A single centred content column of roughly 1240px inside full-bleed bands at 1440; the AEM grid (`aem-Grid`, 12 columns) underlies it. The hero is a two-column split — text left, media right (YouTube embed or photo). Band heights are content-driven: hero ~570px, CTA band 309px, tile band ~600px, sign-up ~590px, footer ~200px. Bands are separated by 4–8px red rules (#c80f2f) and one magenta rule above the sign-up. At 360 every band stacks to one column, the header collapses to a hamburger below the network strip, and the tile band stacks Play above Host. The live Play page overflows to 1500px at 1440 (a source quirk preserved as captured).

## Elevation & Depth

Flat. Depth is conveyed by colour blocks only: white content on blue bands, blue pills on white. The one recorded shadow is `rgba(0,0,0,.24) 0 1px 2px` on the OneTrust cards, not on brand components.

### Named Rules
**The Flat-By-Default Rule.** No brand surface casts a shadow; a band edge is a red rule, not a drop shadow.

## Shapes

Pills and circles against hard rectangles. Buttons are full pills (9999px); the 404 badge and the Play icon tiles are circles; inputs are 3px-radius boxes; every band and image is square-cornered. The red scribble SVG is the recurring silhouette — a bundle of diagonal strokes bleeding off the hero's right edge.

## Components

### Buttons
- **Shape:** full pill (9999px).
- **Primary (blue pill):** #0a2396 background, white 400 uppercase label ~14px, padding ~14px 40px — "SHOP NOW".
- **Inverse (white pill):** white background, black label — used on blue bands.
- **Black pill:** #000 background, white label — "TAKE ME BACK TO THE HOMEPAGE" (404).
- **Grey submit:** #a8a8a8 background, white label — "*JOIN THE FUN" (form-less control group).
- **Hover / Focus:** no hover delta recorded (`hoverDelta: null`); to be observed by motion-observe before implementation.
- **Ghost / text links:** transparent, white uppercase on blue (header nav), link-blue underlined in body.

### Cards / Containers
- **Tile pills:** the Play/Host and On the court/In the wild tiles are PNG images (rounded label pills baked into the artwork) on the blue tennis-ball photo band; no CSS card model.
- **Icon tiles (Play):** 120–148px circle icons (SVG) above a 56px title and short copy, three per row.
- **Border / Shadow:** none.

### Inputs / Fields
- **Style:** white box, #ebebf0 1px stroke, 3px radius, ~48px tall; uppercase 12px label above with a leading asterisk.
- **Focus / Error:** `aria-invalid` + `aria-describedby` error slots present; visual states not captured.

### Navigation
- **Network strip:** 60px white/light bar, "USTA SITES" dropdown trigger (USTA Sans Bold, #1e212a) opening a "VISIT OUR OTHER SITES" list.
- **Main header:** 105px royal-blue bar, Red Ball wordmark left (138px), uppercase white links HOME / PLAY / HOST; the current page is underlined in red. Breadcrumb "HOME > PLAY" in a 28px strip under it.
- **Mobile:** network strip stays; the blue bar collapses to logo + hamburger ("MAIN MENU") drawer.
- **Footer:** royal-blue band, small wordmark, "Terms & Conditions" and "Privacy Policy" in white; "#redballtennis" hashtag.

### Signature Component: Red Rule Bands
Full-width content bands separated by 4–8px red (#c80f2f) rules — including one magenta rule above the sign-up — with the red scribble SVG anchored to the hero's right edge. This, not a card system, is the page architecture.

## Do's and Don'ts

### Do:
- **Do** keep every heading in Graphik XXCondensed Bold at 100 / 76 / 56 px with ~1.1 line-height.
- **Do** separate bands with 4–8px #c80f2f rules; keep bands full-bleed and content centred at ~1240px.
- **Do** use full-pill buttons (9999px) and keep the three pill colourways: blue, white, black.
- **Do** repeat the three cross-promo bands (racquet CTA, Play/Host tiles, JOIN THE FUN) on every content page.

### Don't:
- **Don't** add shadows, gradients or tonal surfaces — the system is flat colour blocks.
- **Don't** introduce grey or pastel brand surfaces; grey exists only in the consent UI and the submit button.
- **Don't** round anything except pills, circles and the 3px inputs.
- **Don't** change the capitalisation of band headings — they are uppercase as authored.
