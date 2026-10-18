# Direction — Aryan Bhatia portfolio

Art direction authority for this build (CLAUDE.md: taste-skill is the visual authority).
Produced by `design-taste-frontend`, sector `personal-portfolio`, tone `technical`.

- **Direction chosen:** `type-only-statement` — "Type and nothing else"
- **Seed:** 1814682534 · drawn 2026-10-18 · `--have video`
- **Reprint the full sheet:** `node .agents/skills/design-taste-frontend/scripts/draw.mjs --show`
- **Redraws:** none.

Re-read the sheet (`--show`) before building each section.

---

## 1. Inventory — what belongs to Aryan and to no competitor

Drawn from `content/source.md` (facts only):

1. **State estimation from noisy sensors.** He implemented a *multivariate Kalman filter in C* for the GTXR flight computer (sensor fusion: acceleration + angular velocity → one confident state), and wrote the blog essay on what the math is "actually saying." This is the rarest, most ownable thing he has.
2. **The hardware↔software span.** Embedded C / RTOS firmware **and** GAN medical imaging **and** shipped full-stack web — the two ends few new-grads can both show.
3. **Mir.AI: making cheap hardware see better.** GANs upscale 1.5T MRI toward 3T quality — enhancement/estimation again (recover signal from a weaker instrument). Hackalytics 2025 Healthcare Track winner; the one real demo *video* he has.
4. **FloorScan: a robot that reads the floor.** Handheld Raspberry-Pi robot, PyTorch CNN + SLAM → a cleanliness *heatmap* of a space. Vision + robotics + embedded in one.
5. **Code that has sound.** Auditory-feedback sonification for blind programmers (Web Audio API) — syntax mapped to sound. A genuinely original idea, and his accessibility credential.
6. **The mechanical→software path.** Transferred from Mechanical Engineering (UGA) to CS (Georgia Tech); SolidWorks/AutoCAD certs sit next to PyTorch. He literally crossed the hardware/software line as a person.
7. **Reconaut.** Co-founded (Create-X) an autonomous-drone building-inspection startup — damage detection from aerial imagery.
8. **Three languages.** English, Hindi, Japanese — "understanding how people communicate shapes how we build the tools they use."
9. **Atlanta / Georgia Tech.** Base and institution; Head TA for the CS3803 capstone (400 students).
10. **The alias "Adonalsiun."** His handle across GitHub and X — a consistent, distinctive signature.
11. **He thinks in public.** Three real engineering essays (Kalman intuition, ML-at-scale, code-with-sound).
12. **Range of domains:** AI/ML · robotics/embedded · full-stack web — the organizing axes.

**Competitor test applied:** the nearest competitor is another Georgia Tech CS new-grad. "Full-stack developer," "passionate builder," "clean and modern" all survive that substitution → category, not him. **State estimation / sensor fusion does not survive it** unless the competitor also built a Kalman filter for a flight computer. Items 1–6 are his; the idea is taken from #1.

---

## 2. The argument — the page as claims (one line per section)

The home page is a sequence of claims, each with its proof. Sections exist only where there's a claim.

| Section (role) | Claim | Proof |
| --- | --- | --- |
| **Hero** (void → statement) | "I build across the hardware–software line." | The statement itself, in poster type: *firmware → models → full-stack*. |
| **The estimate** (live thing, sits under hero) | "Pick what you're hiring for and the picture resolves." | 11 real projects, tagged AI / Robotics-Embedded / Full-stack, re-resolving to a one-line reading + the matching featured work. |
| **showcase** — two giant words compared | "The span is real: I work at both ends." | `FIRMWARE` vs `MODELS` as the two compared specimens; 4 featured projects named beneath. |
| **about** — side facts, wide paragraph | "A mechanical-engineer-turned-CS builder; embedded + AI + full-stack." | Bio paragraph + side facts (based in Atlanta, Georgia Tech CS 2023–26, languages). |
| **work** — names as one paragraph | "I've done this in industry and research, not just class." | Roles run together at poster scale (Paydax, Handshake AI, GT Head TA, Reconaut, Connectogen, …), each linking to Experience. |
| **list** — two-ended rows | "I think in public." | The 3 blog posts as a tight list (title ↔ date), linking to the blog. |
| **contact** — email as display type | "Hire me — here's the working path." | `aryan.bhatia@gatech.edu` as a giant `mailto:` line (no form). |
| **footer** — columns above, wordmark below | close | Nav + socials columns; "ARYAN BHATIA" wordmark full-width. |

Other pages (Phase 2) follow the same voice: project detail template (×11), experience, blog index + post template (×3 posts ported), contact.

---

## 3. The three options, and why this one

`draw.mjs --options 3` dealt:

1. **`quiet-instrument`** — radical understatement; headline barely larger than body, narrow column, much empty space. **Rejected:** fights the PRODUCT mandate to make the full-stack-engineer case *big* and decide a skimming recruiter in <30s; risks reading thin given how few images exist.
2. **`contact-sheet`** — an archive drawer of dozens of small thumbnails; *explicitly "needs many pictures."* **Rejected:** collides directly with the imagery constraint (no evidence hunting; headshot + Mir.AI video only; image-floor treated as a documented gap). It would render as a wall of placeholders.
3. **`type-only-statement`** — "the first screen is made only of words, colour and space, good enough that nobody misses a picture there." **Chosen.**

**Why chosen (held against the inventory):** this direction's way of composing — one enormous statement, scale contrast and flat colour mass instead of imagery — is the *honest* answer for a subject with almost no photographs, and it turns that scarcity into a strength. It lets the range thesis land hard in the first viewport (good for the 30-second recruiter skim and the "range is the thesis" principle), carries the point of view in words (which is exactly where this engineer's substance lives), and reserves the single real moving picture (the Mir.AI video) for one large band. It also composes cleanly around the sensor-fusion idea: the page *resolves* from scattered signals into one confident reading.

---

## 4. The idea sentence

> On this page, **Aryan's state-estimation work — fusing noisy sensor signals into one confident reading** — becomes **the way the page itself resolves: scattered signals (embedded, AI, robotics, full-stack) converge into one confident estimate of the engineer, and the visitor can add a signal to watch the estimate re-resolve.**

Passes the competitor test (§1): a neighboring CS grad can't own "state estimation / sensor fusion" without the Kalman work; Aryan has it.

The literal hero **words** stay plain and big (the idea is the organizing concept, not jargon on screen):
- Headline (2 lines, poster scale, uppercase Big Shoulders): **"FIRMWARE TO MODELS / TO FULL-STACK"**
- Supporting sentence (≤~32ch, soft ink): e.g. *"Georgia Tech engineer, Atlanta."*
- Primary action: a real button — **"See the work"** (to showcase). Secondary text link: **"Email"**.

---

## 5. The one live thing — "The estimate"

Directly under the hero: the visitor **adds signals** by toggling lenses — **AI / ML**, **Robotics & Embedded**, **Full-stack** (default: *All signals*). As signals change, two things re-resolve:
- a one-line **reading** (a plain sentence describing that slice of the engineer), and
- the **featured work** set (the projects matching the selected lenses, drawn from the 11 real projects tagged by category).

Rules met (SKILL.md step 4): uses real content (the project catalog + categories); works on a phone with a thumb (tap chips, ≥44px); has a **plain fallback with no script** (server-renders *All signals* — every featured project and the full-range sentence visible; filtering is progressive enhancement); never blocks reading; it is **one** thing, not a playground. It embodies the idea: combine signals → resolve an estimate.

Built as part of the page in Phase 2 (not added as motion in Phase 3).

---

## 6. Tokens (from the sheet — build references these as CSS custom properties)

**Fonts (free, Google):** Display **Big Shoulders** 800 (uppercase, tracking -0.005em, leading 0.88) · Text **Public Sans** 400/600 (leading 1.5).

**Colour — "Charcoal and primaries":**
```
--bg:#191919  --surface:#242424  --ink:#ffffff  --muted:#9a9a9a
--accent:#0c7866 (teal; the button colour on charcoal)  --accent-ink:#ffffff
--field-1:#d71e1e/#fff (red)  --field-2:#1e4bd7/#fff (blue)
--field-3:#0c7866/#fff (teal)  --field-4:#ffe927/#111 (yellow)
```
Flat poster primaries assigned to whole panels; colour does the job images would.

**Type steps:**
```
--step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)
--step-body:  clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)
--step-lead:  clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)
--step-head:  clamp(2.5rem, 1.2rem + 5vw, 5.5rem)
```
Hero display sized to fill the measure (condensed face), not by copying vw.

**Signature motion:** "Masked headline" — each headline line rises from behind its baseline (~900ms strong ease-out, 2nd line +110ms); supporting sentence + action fade up after. One loud moment; built in Phase 3 with Emil's rules, always with a reduced-motion fallback.

**Sections & geometry:** showcase (two giant words compared) → about (side facts + wide paragraph, shared line at 34%) → work (names as one poster paragraph) → list (two-ended narrow-column rows) → contact (email as display type, inverted field, sticky) → footer (columns above, full-width wordmark). Hero: "Void, then statement on axis" (axis at 42%; collapses to left margin on phone).

---

## 7. Imagery plan (honest; image-floor FAIL is a DOCUMENTED KNOWN GAP)

Per PRODUCT provisional decisions + CLAUDE.md: **no evidence hunting, no found/archive images, no picsum photos.** The sheet's "Architecture" photo set and `assets.mjs` are **not used.**

Allowed pictures only:
- **Mir.AI YouTube video** — the one moving picture (one band on home + on the Mir.AI project page), muted/poster where embedded.
- **Headshot** — only if present at `public/assets/own/` (currently absent → a labelled placeholder).

Every other picture slot is a **clearly-marked placeholder** at the exact size/crop the composition needs, labelled with what belongs there (see the placeholder inventory, tracked in build + final report). taste-skill's `inspect.mjs` image-floor FAIL (≥4 real pictures) is **expected and documented**, not worked around.
