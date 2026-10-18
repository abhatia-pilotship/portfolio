# Portfolio build rules

## Ownership (one job per tool)
- ART DIRECTION + BUILD: design-taste-frontend (taste-skill v2), sector `personal-portfolio`.
  Its direction sheet and house rules are the visual authority. Adopt the sheet; don't blend it
  with a default layout.
- CONTEXT + REVIEW: impeccable. Surface mode is Experience (the work leads from the first
  viewport). Allowed: init, critique, audit, adapt, harden, polish, document.
  Not allowed: craft, bolder, overdrive, animate, or anything that changes the direction.
- MOTION: Emil Kowalski's skills. taste-skill step 9 decides THAT motion exists and its minimum;
  Emil's rules decide HOW: easing, duration, properties, interruption, reduced motion.
  Never invent curves; use the values from his tables.
- REFERENCE: design/reference/*.DESIGN.md is mood input only, never the project's DESIGN.md.
  Map its palette/type onto taste-skill roles via `--keep palette,type` only where they pass
  taste-skill's house rules. Replace paid fonts with free equivalents.
- VERIFICATION: Playwright CLI for cross-browser, reduced-motion, and regression checks.

## Conflict order (higher wins)
1. My content and constraints in PRODUCT.md
2. taste-skill direction sheet + house rules
3. Emil's motion rules
4. Impeccable findings: fix inside the direction, never redesign
5. The reference DESIGN.md

## Never
- Invent proof: clients, testimonials, metrics, logos, awards.
- Present found archive images as my own work.
- Claim a check passed that you didn't run.
