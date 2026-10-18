# Content source — facts extracted from arynbht.tech

> Extracted 2026-10-18 from the CURRENT portfolio (https://www.arynbht.tech) via Playwright.
> **This is a content source ONLY.** Layout, palette, type, components, section order,
> motion, and copy phrasing from the old site are NOT carried forward (per PRODUCT/CLAUDE rules).
> Facts only; marketing phrasing is paraphrased or quoted as "site states". Unverifiable or
> animation-only numbers are collected under **UNVERIFIED — ask Aryan** at the bottom.

---

## Bio & identity
Source: `/`, `/about`

- Name: **Aryan Bhatia**
- Title used on site: "AI Engineer" (hero shows truncated "AI En…"; home tagline role appears to be AI Engineer)
- One-line: Georgia Tech Computer Science graduate integrating engineering, business, and robotics.
- Positioning (site): "Builder at the edge of software and machines." Works at the intersection
  of AI-driven projects, web development, and embedded systems.
- Location: **Atlanta, Georgia**

## Education
Source: `/about`, `/experience`

- **B.S. Computer Science — Georgia Institute of Technology**, 2023–2026 (Class of 2026), Atlanta, GA.
  - Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming,
    Artificial Intelligence (CS3600), Design Capstone (CS3803), Objects and Design (CS2340),
    Linear Algebra, Multivariable Calculus.
- **Mechanical Engineering — University of Georgia**, 2022–2023 (transferred).
  - Relevant coursework: Statics, Engineering Graphics & CAD (SolidWorks/AutoCAD),
    Introductory Robotics, Calculus I & II, General Physics for Engineers.

## Languages
Source: `/about`
- English, Hindi, Japanese.

## Availability
Source: `/about`, `/hire`
- Open to: full-time positions, internships, research collaborations, and freelance
  projects in AI/ML & Robotics.
- Actively seeking software engineering roles and collaborations at the intersection of
  robotics and AI.

## Contact & profile links
Source: `/about`, `/hire`, `/` footer

- Email (used sitewide): **aryan.bhatia@gatech.edu**  ⚠️ see UNVERIFIED (gatech vs pilotship.io)
- GitHub: **github.com/Adonalsiun**  (handle shown: "Adonalsiun")
- LinkedIn: **linkedin.com/in/arynbht**
- X / Twitter: **x.com/adonalsiun**  (handle: @adonalsiun)
- Devpost: **devpost.com/arynbht**
- Contact form: a `/contact` route exists (linked in nav/footer and from `/hire`).

---

## Experience
Source: `/experience` (listed newest-first on site)

1. **Software Engineer — Paydax** · Apr 2026 – Present · Remote
   - Engineers AI-integrated features across the full stack (frontend, backend, embedded
     systems), shipping across web and IoT surfaces in an agile environment.
   - Applies DevSecOps and AI-native development across system architecture and API design,
     embedding security, automation, and intelligent tooling from prototype to production.

2. **AI Engineer Fellow — Handshake AI Fellowship** · Apr 2026 – Present · Remote
   - Contributes to a multimodal AI training platform ingesting audio, visual, and text data.
   - Drives data pipeline quality via structured labeling, model evaluation, and QA workflows.

3. **Head Teaching Assistant — Georgia Institute of Technology** · Aug 2025 – May 2026 · Atlanta, GA
   - Manages a team of 6 TAs for CS3803 (Design Capstone), ~400 students, across three sections;
     coordinates grading allocations and instructional support.
   - Develops standardized rubrics and feedback loops; runs office hours and supplemental materials.

4. **Full Stack Software Engineer (Co-Founder) — Reconaut** · May 2025 – Present · Atlanta, GA
   - Co-founded a startup building AI-powered autonomous drone systems for building inspections,
     geospatial analytics, and insurance risk assessment; incubated via Georgia Tech Create-X.
   - Site-stated metrics (self-reported): real-time pipelines processing 10,000+ aerial images/month;
     structural damage detection at ~85% accuracy; full-stack prototypes in Python, React, AWS/GCP.

5. **Data Analyst & Real Estate Agent — HomeSmart** · May 2025 – Present · Atlanta, GA
   - Predictive pricing models with scikit-learn, pandas, NumPy; BI dashboards in Power BI;
     client lifecycle via CRM/MLS and digital marketing.

6. **Software Engineering Intern — Connectogen** · Aug 2024 – Aug 2025 · Atlanta, GA
   - Shipped full-stack features (React, Node.js/Express, REST APIs) for mentorship workflows,
     site-stated 500+ active users across Emory University.
   - Site-stated metrics: Redis caching + CI/CD (GitHub Actions, Docker) cut API latency ~60%
     and deployment errors ~40%; collaborative-filtering recommender, ~70% faster match turnaround.

7. **Research Assistant — Georgia Institute of Technology** · Jan 2024 – Jul 2024 · Atlanta, GA
   - Multivariate Kalman Filter in C for GTXR flight-computer state estimation; complementary
     filter for acceleration/angular velocity. Java matrix-ops library; Euler + quaternion formats.
   - Validated sensor-fusion algorithms via MATLAB and Java simulation before embedded-C deployment.

8. **Data Analysis Intern — Dreamz Houz** · May 2022 – May 2024 · Cumming, GA
   - Real-estate market trend analysis; property listing enhancement. Python, R, SQL; Tableau,
     Power BI, Excel. Site-stated: +50% customer engagement, +30% workflow efficiency.

9. **Mechanical Engineering Intern — American BOA** · May 2022 – Jan 2023 · Cumming, GA
   - Designed/optimized flexible metal connector components in SolidWorks and AutoCAD;
     site-stated ~12% material cost reduction. Re-engineered manufacturing/assembly workflows;
     ML on historical production data to predict component failure rates.

> Note: self-reported percentage/volume metrics above are Aryan's own claims on the site, not
> externally verified. See UNVERIFIED for the headline counters that render only after animation.

---

## Projects
Source: `/projects` and each `/projects/NN` detail page.
Each project has a cover image at `/assets/projects/<slug>.png` (square 1024×1024 — appear to be
stylized covers, NOT verifiable photographs/screenshots of the real work; see asset list).

### 01 — Mir.AI – AI Powered MRI Enhancement  ·  /projects/01
- Category: AI · Featured
- Dates: Jan 2025 – May 2025
- Award: **Hackalytics 2025 Healthcare Track Winner**
- Stack: Python, TensorFlow, PyTorch Lightning, GANs, FastAPI, React, CycleGAN
- What it does: GAN model (Cycle-Free CycleGAN w/ invertible generators) enhancing 1.5T MRI
  scans toward 3T quality to cut hardware cost/improve access; FastAPI image pipeline.
- Outcome (site-stated): up to ~50 epochs/hour processing.
- Links: GitHub (team repo) https://github.com/venkat1596/Hacklytics_Hackathon ·
  Video (YouTube) https://www.youtube.com/watch?v=W0isckv7zg4

### 02 — GTXR Kalman Filter Implementation  ·  /projects/02
- Category: Robotics
- Dates: Aug 2024 – Dec 2024
- Context tag: "Applications of Robotics"
- Stack: Java, C, MATLAB
- What it does: Multivariate Kalman Filter in C for GTXR flight-computer state estimation;
  complementary filter; Java matrix library; Euler + quaternion handling; MATLAB/Java simulation.
- Outcome (site-stated): decreased estimation errors.
- Links: none.

### 03 — Studio Camera Restoration  ·  /projects/03
- Category: Robotics
- Dates: Aug 2024 – Dec 2024
- Context tag: "Applications of Computer Engineering"
- Stack: C++, Python, OpenCV, SolidWorks, Embedded C, RTOS
- What it does: PCB-level repair of a Fujifilm X-S10; custom Embedded C firmware on RTOS;
  OpenCV computer-vision tracking/autofocus.
- Outcome (site-stated): ~20% improvement in tracking accuracy.
- Links: none.

### 04 — Connectogen – Research Collaboration Platform  ·  /projects/04
- Category: Web Development · Featured
- Dates: Aug 2023 – Aug 2024
- Context tag: "Supported by Emory University SOM"
- Stack: React, Next.js, Node.js, Express, MongoDB, WebSockets, Turborepo
- What it does: Full-stack collaboration platform for biomedical researchers across Emory,
  Georgia Tech, Morehouse; real-time notifications/messaging, project management, mentorship;
  Turborepo monorepo.
- Outcome: platform for cross-institution collaboration (metrics covered under Experience #6).
- Links: none.

### 05 — Atlanta FoodQuest  ·  /projects/05
- Category: Web Development
- Dates: Summer 2024
- Context tag: "CS2340 Objects & Design"
- Stack: Python, Django, JavaScript, HTML/CSS, Google Maps API
- What it does: Atlanta restaurant discovery (accounts, bookmarks, reviews, distance/rating/
  cuisine filters, Google Maps exploration). Django backend, vanilla JS frontend.
- Links: GitHub https://github.com/stephenl99/AtlantaFoodFinder ·
  Live demo https://atlantafoodfinder-a281298e3c3f.herokuapp.com/aff/

### 06 — Pac-Man AI  ·  /projects/06
- Category: AI
- Dates: Spring 2024
- Context tag: "CS3600 AI Course Project"
- Stack: Python, Reinforcement Learning, A* Algorithm, NumPy
- What it does: Autonomous Pac-Man agents — DFS/BFS, A* with custom heuristics, Q-learning RL.
- Links: GitHub https://github.com/Adonalsiun/CS3600-Homework

### 07 — Auditory Feedback System for Visually Impaired Programmers  ·  /projects/07
- Category: AI · Featured
- Dates: April 2025 – September 2025
- Context tag: "Inclusive Computing Initiative"
- Stack: JavaScript, HTML/CSS, Web Audio API, Assistive Technology
- What it does: Real-time sonification of code structure (indentation→pitch, errors→dissonance,
  loops→rhythm) via Web Audio API to aid visually impaired programmers.
- Links: GitHub https://github.com/Adonalsiun/Audio-Project/ ·
  Live demo https://audio-project-seven.vercel.app/
- Related: subject of a blog post (see Blog).

### 08 — Personal Portfolio Website  ·  /projects/08
- Category: Web Development
- Dates: March 2025 – Present
- Context tag: "Personal Branding Initiative"
- Stack: React, Next.js, TypeScript, Tailwind CSS, Node.js (site mentions Framer Motion)
- What it does: The current portfolio itself (the site being replaced in this rebuild).
- Links: GitHub https://github.com/Adonalsiun/ABPortfolio

### 09 — Sensi Career Intelligence  ·  /projects/09
- Category: AI · Featured
- Dates: March 2026
- Context tag/award: "Vibe ATL @ Georgia Tech" (hackathon, built in under 12 hours)
- Stack: React 18, Vite 6, Tailwind CSS, Google Gemini, OpenAI GPT-4, Chart.js
- What it does: AI career-intelligence platform. Deep-parses resumes + transcripts into a
  multi-dimensional competency profile (Technical, Domain, Soft Skills, Academic Rigor) via LLMs;
  cross-references against job descriptions. Features: AI skill extraction (Gemini + OpenAI),
  dynamic 6-axis radar graph (Chart.js), Chrome extension for real-time fit scoring over
  LinkedIn/Indeed/Handshake, progressive toolkit (cover letters + resume edits unlocked at fit ≥65).
- Links: GitHub https://github.com/Adonalsiun/Sensi · (site shows a "Live demo / video" label too)

### 10 — InvoiceOS – Local-First Contractor Productivity Platform  ·  /projects/10
- Category: Web Development · Featured
- Dates: May 2026 – Present
- Context tag: "Local-First Desktop Solution"
- Stack: React, Vite, Tailwind CSS, Node.js, Express, SQLite, better-sqlite3, PDFKit
- What it does: Local-first desktop tool for independent contractors — hour logging, daily
  reports, invoice tracking, PDF bill generation; Express + better-sqlite3 single-file DB;
  local file manager; offline, zero cloud dependency.
- Links: none.

### 11 — FloorScan ML – Robotic Floor Mapping & Cleanliness AI  ·  /projects/11
- Category: Robotics
- Dates: Feb 2026 – Apr 2026
- Context tag: "Robotics & Computer Vision Project"
- Stack: Python, PyTorch, OpenCV, ROS, SLAM, CNN, Raspberry Pi
- What it does: Handheld mapping robot (Raspberry Pi, multi-camera) runs a PyTorch CNN
  (semantic segmentation) to detect dirt/dust/debris; SLAM for grid coordinates; ROS stream
  compiles a 2D cleanliness heatmap of high-traffic hotspots.
- Links: none. (Cover asset filename is `dirtspotter.png`.)

---

## Certifications
Source: `/experience`, `/skills`
- **Autodesk Certified Professional: AutoCAD** — Autodesk — 2022
- **Certified SolidWorks Professional (CSWP)** — Dassault Systèmes — 2023
- **Certified ScrumMaster (CSM)** — Scrum Alliance — 2023

## Skills inventory (as grouped on /skills)
Source: `/skills`
- Languages: Python, TypeScript, JavaScript, C++, C, Java, C#, SQL, R
- AI/ML: PyTorch, TensorFlow, scikit-learn, FastAPI, NumPy, Pandas, OpenCV, Reinforcement
  Learning, SLAM, CNNs, Semantic Segmentation, Anomaly Detection
- Frontend: React, Next.js, Tailwind CSS, HTML5, CSS3, Framer Motion, Web Audio API, Power BI
- Backend: Node.js, Express.js, Django, better-sqlite3, PDFKit, WebSockets, Turborepo,
  Apache Kafka, .NET
- Databases: SQLite, PostgreSQL, MongoDB, Redis, SQL Server
- Cloud & DevOps: AWS, Azure, GCP, Docker, GitHub Actions, Git, DevSecOps, CI/CD, Vercel
- Embedded & Robotics: Embedded C, RTOS, ROS, Kalman Filters, Sensor Fusion, Raspberry Pi,
  MATLAB, SolidWorks, AutoCAD

---

## Blog posts (titles + URLs)
Source: `/blog`
1. **What if Code Had Sound? Building Accessibility into Programming Itself**
   — /blog/accessibility-in-code-editors — May 9, 2025 — tags: Accessibility, JavaScript, Web Audio API
2. **Deploying ML Models at Scale: Lessons from Mir.AI**
   — /blog/deploying-ml-models-at-scale — March 14, 2025 — tags: AI, MLOps, FastAPI
3. **Sensor Fusion and the Kalman Filter: What the Math Is Actually Saying**
   — /blog/kalman-filter-sensor-fusion — January 19, 2025 — tags: Robotics, Math, Embedded

---

## Visual assets available (real vs. none)
Assessment of genuinely reusable, real visual proof (NOT the stylized square cover PNGs).

- **Mir.AI (01):** YouTube demo video (W0isckv7zg4) — real footage. GitHub (team) repo.
- **Auditory Feedback (07):** live deployed demo (Vercel) — real UI, screenshot-able. GitHub repo.
- **Atlanta FoodQuest (05):** live deployed demo (Heroku) — real UI, screenshot-able. GitHub repo.
- **Sensi (09):** GitHub repo (runnable UI could yield real screenshots); "live demo/video" label
  on site but only the GitHub link was present in markup.
- **Pac-Man AI (06):** GitHub repo only.
- **Personal Portfolio (08):** the live site itself + GitHub repo (this is the artifact being replaced).
- **GTXR Kalman (02), Studio Camera (03), Connectogen (04), InvoiceOS (10), FloorScan (11):**
  no public repo/demo/video links on site. Robotics/hardware ones (02, 03, 11) would need real
  photos/footage that are NOT confirmed to exist.
- **Headshot/photo of Aryan:** `/about` uses `/portfolio-image.png` (380×506 portrait, alt
  "Aryan Bhatia") — unclear if a real headshot or a portfolio screenshot. UNVERIFIED.
- All 11 projects currently have a square cover PNG under `/assets/projects/`; these look
  stylized/generated and must NOT be presented as real screenshots or photos of the work.

---

## UNVERIFIED — ask Aryan
Numbers that render only after animation, or claims not externally verifiable here.

1. **Homepage stat counters** — render as "0+" in static text (animate on scroll):
   - LeetCode problems solved — "0+" (real number unknown)
   - Hackathon awards — "0+"
   - CodeChef rating — "0+"
   - GitHub contributions — "0+"
2. **Contact email discrepancy:** site uses `aryan.bhatia@gatech.edu`, but the build context
   lists `aryan.bhatia@pilotship.io`. Which should the new site use? (gatech.edu likely expires
   after the 2026 graduation.)
3. **Whether a real headshot/photo exists** (portfolio-image.png may be a UI screenshot, not a photo).
4. **Self-reported experience metrics** (85% damage-detection accuracy, 10,000+ images/month,
   60% latency cut, 40% fewer deploy errors, 70% faster matches, 500+ users, 50%/30% engagement/
   workflow gains, 12% material cost, 20% tracking accuracy, 50 epochs/hr) — Aryan's own claims;
   confirm which can stand as-is vs. should be softened (CLAUDE.md: never invent/inflate proof).
5. **Real visual assets for hardware/robotics projects** (GTXR, Studio Camera, FloorScan) and for
   Connectogen/InvoiceOS — do original screenshots, photos, or footage exist to use?
6. **Phone number / preferred contact channel** — none on site.
7. **Mir.AI award** stated as "Hackalytics 2025 Healthcare Track Winner" — confirm exact wording
   and whether a Devpost project page corroborates it.
