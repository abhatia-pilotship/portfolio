# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: **Next.js (App Router) + TypeScript + Tailwind CSS, blog in MDX, deployed on Vercel** — chosen because the site is content-heavy with a blog and already lives on Vercel at arynbht.tech, so SSG/ISR gives fast, SEO-friendly static pages, MDX fits long-form posts, and the stack matches the incumbent for a clean migration. Offered as a recommendation; Aryan can override. No scaffold created yet.

## Users

Primary audience: **software-engineering recruiters and hiring managers** evaluating Aryan for a **full-time SWE role in AI/robotics**. They land from a résumé, LinkedIn, or a job application, usually skim on a time budget, and need to decide quickly whether he's worth a conversation.

## Product Purpose

A personal portfolio whose single job is to **land Aryan a full-time SWE role in AI/robotics**. Success = a recruiter/hiring manager reaches the contact path and reaches out (or advances his application) after a short visit. It consolidates his projects, experience, skills, and writing into one credible, fast, multi-page site.

## Positioning

Aryan's differentiator is **range across the hardware/software boundary**: embedded C and robotics (Kalman filters, RTOS firmware, ROS/SLAM computer vision) alongside production AI/ML (GANs, LLM pipelines, FastAPI) and full-stack web (React/Next.js, Node, databases). Few new-grad SWEs can show shipped work at both ends. In under 30 seconds the site must convince SWE recruiters he is **a strong full-stack engineer** — with the AI/robotics depth as the proof that sets him apart.

## Operating Context

- Visitors arrive mid-skim from résumé/LinkedIn/applications; many on mobile.
- They scan for: what he builds, evidence it's real, and how to contact him.
- The site is also Aryan's own technical sandbox (he iterates on it over time).
- Content changes over time (new projects, new posts), so it must be easy to extend.

## Capabilities and Constraints

- **Multi-page** site: home, project detail pages, and a blog (with per-post pages). Not a single-page scroll.
- **Contact must be a working path, not decoration** — a real, functioning way to reach Aryan (email link that works; a contact form only if it actually delivers).
- Content domains to represent: AI/ML, robotics, web development, embedded systems; plus experience, education, skills, certifications, and a blog.
- Must scale to **more projects than today** — the featured set is not yet final (see Evidence / open decisions).
- Replaces the current arynbht.tech; the old site is a **content source only**, not a design/layout reference.
- **Never fabricate proof** (clients, testimonials, metrics, logos, awards) and never present stylized/generated cover art or found images as real screenshots/photos of the work (see CLAUDE.md house rules).

## Build Constraints (from the PRODUCT brief — binds over defaults)

- **Surface mode: Experience** — the work leads from the first viewport.
- Art direction + build authority: `design-taste-frontend` (taste-skill), sector `personal-portfolio`.
- Motion governed by Emil Kowalski's rules; verification via Playwright CLI (cross-browser, reduced-motion, regression).
- Reference `design/reference/*.DESIGN.md` is mood input only.

## Brand Commitments

- Name: **Aryan Bhatia**. Short mark used today: "Aryan."
- Handles (confirmed, live): GitHub **Adonalsiun** · LinkedIn **in/arynbht** · X **@adonalsiun** · Devpost **arynbht**.
- Contact email (confirmed by Aryan): **aryan.bhatia@gatech.edu**.
  - ⚠️ Open risk Aryan accepted: Georgia Tech addresses typically expire after graduation (Class of 2026). Revisit before/at expiry.
- Voice (observed, not yet made binding): plain, technical, first-person; "builder at the edge of software and machines." No testimonials or invented proof.

## Evidence on Hand

Real, usable evidence (see `content/source.md` for full facts + source URLs):

- **Projects (11 documented):** Mir.AI, GTXR Kalman Filter, Studio Camera Restoration, Connectogen, Atlanta FoodQuest, Pac-Man AI, Auditory Feedback System, Personal Portfolio, Sensi, InvoiceOS, FloorScan ML.
- **Awards / recognition (as stated by Aryan):** Mir.AI — Hackalytics 2025 Healthcare Track Winner; Sensi — Vibe ATL @ Georgia Tech.
- **Live demos (real UI, screenshot-able):** Auditory Feedback (Vercel), Atlanta FoodQuest (Heroku).
- **Video:** Mir.AI YouTube demo (youtube.com/watch?v=W0isckv7zg4).
- **Public repos:** Sensi, Auditory Feedback, Pac-Man AI, Atlanta FoodQuest, Personal Portfolio, Mir.AI (team repo).
- **Experience:** 9 roles incl. Paydax (SWE), Handshake AI Fellowship, GT Head TA, Reconaut (co-founder), Connectogen, HomeSmart, GT Research Assistant, Dreamz Houz, American BOA.
- **Education:** B.S. CS, Georgia Tech (2023–2026); Mechanical Engineering, UGA (2022–2023).
- **Certifications:** AutoCAD (Autodesk, 2022), CSWP (Dassault, 2023), CSM (Scrum Alliance, 2023).
- **Languages:** English, Hindi, Japanese.
- **Headshot:** Aryan has a professional headshot available (confirmed).

**Asset absences future work must NOT fabricate:**
- Aryan has **no extra real screenshots, photos, or footage** beyond the above (confirmed: only the headshot, plus what's already on the site — the Mir.AI video and the two live demos). Where real UI is needed, capture it from the live demos; otherwise do not invent visuals.
- The current site's square cover PNGs (`/assets/projects/*.png`) are **stylized/generated** — do not present them as real screenshots/photos of the work.
- Robotics/hardware projects (GTXR, Studio Camera, FloorScan), Connectogen, and InvoiceOS have **no confirmed real photos/footage**.

**Open product decisions (record, do not invent):**
1. **Featured projects (max 4, priority order): UNDECIDED** — Aryan has new projects to add first and will supply the final list.
2. **Homepage stat counters** (LeetCode problems, hackathon awards, CodeChef rating, GitHub contributions) render as "0+" on the current site — **real numbers unverified**; confirm or drop before use.
3. **Self-reported experience metrics** (e.g. 85% accuracy, 10,000+ images/mo, 60% latency cut, 500+ users, etc.) are Aryan's own claims — confirm which stand as-is vs. should be softened; never inflate.
4. **Contact channel beyond email** — no phone number on file; decide whether a working contact form is in scope.

## Product Principles

1. **Credibility over flourish.** Every claim traces to real evidence; no fabricated proof, no cover art masquerading as screenshots.
2. **Decide in 30 seconds.** The first viewport makes the full-stack-engineer case and shows the AI/robotics range; contact is always reachable.
3. **Range is the thesis.** Deliberately surface the hardware↔software span (embedded + ML + full-stack), not just web work.
4. **Built to grow.** Projects and posts are easy to add; structure assumes the catalog expands.
5. **Fast and inclusive.** Content-heavy pages stay fast and accessible on mobile and with reduced motion.

## Accessibility & Inclusion

No formal standard mandated by Aryan yet. Given the audience skims on mobile and one of his flagship projects is an accessibility tool, treat baseline accessibility as a product value: keyboard-navigable, sufficient contrast, honored `prefers-reduced-motion`, real alt text, and a contact path usable without a pointer. (Confirm a target standard, e.g. WCAG 2.1 AA, if one is required.)
