---
name: Aryan Bhatia Portfolio
description: A type-only engineering portfolio where words, flat colour, and space carry the whole case.
colors:
  bg: "#191919"
  surface: "#242424"
  ink: "#ffffff"
  muted: "#9a9a9a"
  accent: "#1aa88f"
  accent-ink: "#06231d"
  field-1: "#d71e1e"
  field-1-ink: "#ffffff"
  field-2: "#1e4bd7"
  field-2-ink: "#ffffff"
  field-3: "#0c7866"
  field-3-ink: "#ffffff"
  field-4: "#ffe927"
  field-4-ink: "#111111"
typography:
  display:
    fontFamily: "Big Shoulders, system-ui, sans-serif"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  head:
    fontFamily: "Big Shoulders, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 5vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 600
rounded:
  none: "0"
  pill: "9999px"
spacing:
  margin: "clamp(1.25rem, 0.8rem + 2.2vw, 3rem)"
  section: "clamp(5rem, 3rem + 9vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.surface}"
---

# Design System: Aryan Bhatia Portfolio

## Overview

**Creative North Star: "The Instrument Panel"**

This is a portfolio that behaves like the engineering it describes: scattered signals converge into one confident reading. There are almost no pictures and that is the whole idea. The case is made entirely in words set at poster scale, in flat blocks of primary colour, and in generous void. The density is deliberately low at rest and loud at the moments that matter — one enormous statement in the first viewport, two giant compared words for the span, and an email address blown up to display size as the close. Nothing decorates; everything states.

The world is charcoal. Near-black grounds (#191919) carry white type, with a single accent teal doing the pointing and four flat poster primaries reserved for whole-panel inversions. The type does the work images would do elsewhere: Big Shoulders is condensed, uppercase, and set at 0.88 line-height so headlines stack like a stencil. Public Sans carries every running sentence at a comfortable 1.5. There are no borders, no cards-with-shadows, no glass, no rounded surfaces. Depth is created by one tonal step (bg → surface), never by lift.

The one anti-reference is the conventional "clean modern developer template." This system rejects image galleries, hero photographs, drop shadows, and card chrome. Where a picture is genuinely unavailable it is shown as a labelled placeholder, not faked — honesty is part of the material.

**Key Characteristics:**
- Charcoal ground, white ink, a single teal accent, four flat poster primaries for inversions.
- Condensed uppercase display type (Big Shoulders 800) against a plain humanist body (Public Sans).
- Flat by law: zero shadows, zero surface radius (pills only on filter chips).
- Type and colour carry the page; imagery is minimal and never faked.
- One loud motion moment (the masked line reveal), quiet entrances everywhere else.

## Colors

A charcoal stage with a single teal spotlight and four saturated primaries held in reserve for full-panel inversions.

### Primary
- **Signal Teal** (#1aa88f): The one pointing colour. Buttons, selected filter chips, hovered links, selection highlight, and the play glyph. Paired with **Deep Teal Ink** (#06231d) for legible labels on the fill. Note: the direction sheet named teal `#0c7866`; the build lightened it to `#1aa88f` so accent *text* clears 4.5:1 on charcoal. The sheet's original teal survives as `field-3`.

### Secondary
- **Poster Red** (#d71e1e), **Poster Blue** (#1e4bd7), **Deep Teal Field** (#0c7866), **Poster Yellow** (#ffe927): Flat primaries assigned to whole panels, not accents. Each pairs with its ink token. Deep Teal Field grounds the inverted contact band; Poster Yellow is the focus-ring and skip-link colour.

### Neutral
- **Charcoal** (#191919): The default page ground. The void the type sits in.
- **Surface** (#242424): The single tonal step up — alternating sections, chips at rest, placeholders, card hover. The only way depth is expressed.
- **Ink** (#ffffff): All primary type; also the inverted footer ground.
- **Muted** (#9a9a9a): Secondary type — labels, metadata, supporting sentences, the run-together experience paragraph.

### Named Rules
**The One Spotlight Rule.** Signal Teal is the only accent on a charcoal screen. It marks the single thing you should act on next; if two teal elements compete in one viewport, one is wrong.

**The Whole-Panel Primary Rule.** The four poster primaries are never used as spot accents, borders, or text colour on charcoal. They ground an entire inverted panel (contact) or a chrome element (focus ring, skip link) or nothing.

## Typography

**Display Font:** Big Shoulders (with system-ui, sans-serif fallback), weight 800
**Body Font:** Public Sans (with system-ui, sans-serif fallback), weights 400 / 600

**Character:** A condensed, uppercase stencil voice for every headline against a plain, trustworthy humanist sans for every sentence. The contrast between the two — tall tight caps over relaxed prose — is the entire typographic personality.

### Hierarchy
- **Display** (800, clamp up to ~13rem at the wordmark / `--step-head` elsewhere, line-height 0.88, tracking -0.005em, uppercase): Hero statement, the two compared words, section titles, the email-as-display close, and the full-width footer wordmark. Rendered via `.font-display`, `h1`, `h2`.
- **Lead** (400, `--step-lead` 1.25–1.625rem, line-height 1.5): Supporting hero sentence, bio paragraphs, contact intro.
- **Body** (400, `--step-body` 1.06–1.19rem, line-height 1.5): All running copy. Constrained to a 58ch measure (`max-w-measure`).
- **Label / Small** (600, `--step-small` 0.81–0.875rem): Nav links, metadata, category labels (uppercase, tracked), footer columns, dates (tabular-nums).

### Named Rules
**The Measure Rule.** Running prose never exceeds 58ch (`max-w-measure`); display type is free to fill the viewport.

**The Caps-Are-Display-Only Rule.** Uppercase belongs to Big Shoulders display and to small tracked category labels. Body prose is always sentence case in Public Sans.

## Layout

A single page shell, no grid framework beyond flex and occasional CSS grid. Horizontal padding is one shared token, `--margin` (clamp 1.25–3rem via `.page-x`), applied everywhere. Vertical rhythm comes from `.section-gap` (clamp 5–11rem block padding). Content centres in capped measures per section (`max-w-5xl`, `max-w-6xl`, `max-w-3xl`, or the 58ch `max-w-measure`).

The hero follows "void, then statement on axis": the headline block is offset to 42% of the width on large screens (`lg:ml-[42%]`) and collapses to the left margin on phones. Sections alternate charcoal and surface grounds for separation instead of rules or boxes. The project grid uses a 1px surface-coloured gutter (`gap-px bg-surface`) so cells read as a seamless tiled field, not bordered cards. Full-bleed inverted bands (contact, footer) run edge to edge and fill most of a viewport (`min-h-[70svh]`–`88svh`).

Responsive behaviour is single-column on phone, expanding to two columns (project grid, about's `34%_1fr` split) and horizontal baseline rows (showcase) at `md`/`lg`.

## Elevation & Depth

This system is strictly flat. There are no `box-shadow` declarations anywhere in the build — no ambient glows, no lifted cards, no bar chrome. Depth is conveyed by exactly one tonal step: charcoal (#191919) recedes, surface (#242424) advances. Hover on interactive tiles is a ground swap (bg → surface), not a shadow.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows. If an element needs to read as separate, step its ground one tone (bg ↔ surface) or invert the whole panel to a field colour — never float it.

## Shapes

Hard corners are the default and the law. Buttons, the project grid cells, placeholders, inverted panels, and the video facade are all perfectly square (radius 0). The single exception is the filter chip, which is a full pill (`rounded-full`). There are no decorative borders anywhere; separation between project cells is a 1px surface-coloured gutter, not a stroke. Form language is rectangular, stencil-like, and poster-flat.

### Named Rules
**The Square-By-Default Rule.** Every surface is a hard rectangle. The pill shape is reserved exclusively for the live filter chips, signalling "toggle me."

## Components

### Buttons
- **Shape:** Square (radius 0). No border.
- **Primary:** Signal Teal fill (#1aa88f) with Deep Teal Ink label (#06231d), 24px inline padding, 44px min height, weight 600. Used for the single hero call to action ("See the work").
- **Hover / Focus:** Inverts to Ink ground with charcoal label (`hover:bg-ink hover:text-bg`), colour transition only. Carries `.press` (scale 0.97 on `:active`, 140ms). Focus shows the global 3px yellow ring.
- **Secondary:** A plain underlined text link (`underline underline-offset-4`), ink → teal on hover. No fill.

### Chips (filter)
- **Style:** Full pill, 20px inline padding, 44px min height, weight 600. At rest: Surface ground (#242424), Muted text.
- **State:** Selected is Signal Teal ground with Deep Teal Ink (`aria-pressed`). Unselected hovers muted → ink. Carries `.press`. These are the only pills in the system and the only radius.

### Cards / Containers (project tile)
- **Corner Style:** Square (radius 0).
- **Background:** Charcoal (bg) at rest; tiles sit in a `gap-px bg-surface` grid so the gutter reads as a hairline.
- **Shadow Strategy:** None (see Elevation).
- **Border:** None.
- **Internal Padding:** 24px (`p-6`), 32px at `sm`.
- **Hover:** Ground swaps to Surface; the title and category label shift to teal.

### Navigation
- **Style:** A transparent bar over charcoal — no background, no shadow, no border. Wordmark (display) left; links and one Email action right.
- **Typography:** Small (0.875rem) weight 600. Links are Muted, hovering to Ink; the Email action is Teal, hovering to Ink.
- **Targets:** Every tap target is ≥44px (`min-h-[44px]`).
- **Mobile:** Links wrap; no hamburger — the set is short enough to flow.

### The Estimate (signature)
The one live component: a lens filter that re-resolves the engineer. Pill chips (All signals / AI-ML / Robotics & Embedded / Full-stack) toggle an `aria-pressed` set; a `aria-live="polite"` reading sentence and the featured-project grid re-resolve on change. Server-renders "All signals" with every featured project and the full-range sentence, so it works with no JavaScript; filtering is pure progressive enhancement.

### Masked Line Reveal (signature motion)
The single loud moment. Each hero headline line sits in an `overflow:hidden` mask and rises from behind its own baseline (`translateY(110%) → 0`) over 900ms (`--dur-sig`) on the `--ease-out` curve; line two is delayed 110ms; the supporting sentence and actions fade up after. Pure CSS (plays without JS, off the main thread). Reduced motion drops the travel and shows content at rest.

### ProjectVideo (facade)
A click-to-play facade for the one real clip (the Mir.AI YouTube demo). At rest it is a square-cornered Surface panel with a teal circular play glyph; nothing third-party loads until clicked. 16/9 aspect.

### Placeholder
A labelled, flat Surface panel at the exact crop a real image would occupy, captioned with what belongs there. It is the honest stand-in for absent imagery, not a design primitive to reach for.

## Do's and Don'ts

### Do:
- **Do** keep Signal Teal (#1aa88f) rare — one actionable spotlight per viewport (The One Spotlight Rule).
- **Do** express depth with the single bg→surface tonal step and panel inversions only (The No-Shadow Rule).
- **Do** keep every surface a hard rectangle; reserve the pill for filter chips (The Square-By-Default Rule).
- **Do** cap running prose at 58ch and let only display type fill the viewport (The Measure Rule).
- **Do** keep uppercase to Big Shoulders display and small tracked labels (The Caps-Are-Display-Only Rule).
- **Do** ground whole panels in the poster primaries; use charcoal/surface/ink/muted everywhere else.
- **Do** keep entrances quiet (opacity + 24px translateY, 600ms `--ease-out`, 80ms stagger), failure-safe and reduced-motion-safe; keep the masked line reveal as the one loud moment.
- **Do** keep contact as a `mailto:` email set at display scale — no form.

### Don't:
- **Don't** add box-shadows, bar chrome, glass, or lifted cards; the system has none.
- **Don't** round surfaces; only the filter chip is a pill.
- **Don't** use the poster primaries (red/blue/teal-field/yellow) as spot accents, borders, or text colour on charcoal.
- **Don't** set body prose in uppercase or in the display face.
- **Don't** invent a second accent or let two teal elements compete in one viewport.
- **Don't** hand-roll motion curves; use the tokens (`--ease-out`, `--ease-in-out`, `--ease-drawer`, `--dur-sig`).

<!-- Not canonized: the build ships below taste-skill's image floor (≥4 real pictures). Only the Mir.AI YouTube video and a headshot slot (public/assets/own/, currently empty) are real; every other image slot is a labelled Placeholder panel. This is a DOCUMENTED KNOWN GAP carried by the build per PRODUCT.md imagery rules (no evidence hunting, no found/archive images) — it is a defect the artifact carries, NOT a design-system rule. Future surfaces should supply real imagery, not inherit the placeholder as a pattern. -->
