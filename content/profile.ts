/**
 * The one profile file. Everything here is editable without touching components.
 * Facts come from content/source.md. Metrics are quoted VERBATIM — never rounded up.
 * Projects and posts live in content/projects/*.mdx and content/posts/*.mdx.
 */

export type Social = { label: string; handle: string; href: string };
export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  location: string;
  bullets: string[];
};
export type EducationEntry = {
  degree: string;
  org: string;
  dates: string;
  coursework?: string;
};
export type Certification = { name: string; issuer: string; year: string };
export type SkillGroup = { label: string; items: string[] };
export type Lens = "ai" | "robotics" | "fullstack";

export const profile = {
  name: "Aryan Bhatia",
  wordmark: "ARYAN BHATIA",
  role: "Software Engineer",
  location: "Atlanta, Georgia",
  email: "aryan.bhatia@gatech.edu",

  // Hero — "Void, then statement on axis". Headline authored as two lines (see direction.md).
  hero: {
    headline: ["From firmware", "to full-stack"],
    supporting:
      "A Georgia Tech engineer shipping embedded firmware, AI models, and full-stack web.",
    primary: { label: "See the work", href: "#work" },
    secondary: { label: "Email", href: "mailto:aryan.bhatia@gatech.edu" },
  },

  // The live thing — "The estimate". One plain reading per signal combination.
  readings: {
    all: "An engineer who ships across the hardware–software line: embedded firmware, AI/ML models, and full-stack web.",
    ai: "Builds production AI/ML: GANs for medical imaging, LLM pipelines, and computer-vision systems.",
    robotics:
      "Works down at the metal: Kalman-filter state estimation, RTOS firmware, and robotics computer vision.",
    fullstack:
      "Ships full-stack web: React/Next.js front ends on Node back ends, with real users.",
    "ai+robotics":
      "Lives where AI meets hardware: models running on robots and embedded devices.",
    "ai+fullstack":
      "Puts AI into products: LLM and ML pipelines behind shipped React/Next.js apps.",
    "robotics+fullstack":
      "Bridges devices and the web: embedded and robotics work wired into full-stack platforms.",
  } as Record<string, string>,

  bio: [
    "I'm a Georgia Tech Computer Science graduate (Class of 2026) with a foundation in software engineering, AI, and full-stack development, after a start in mechanical engineering before I crossed into CS.",
    "With hands-on experience in AI-driven projects, web development, and embedded systems, I work on problems at the intersection of disciplines: making noisy signals legible, making cheap hardware see better, making software reach people it usually leaves out.",
    "Outside engineering I speak English, Hindi, and Japanese. It reflects a belief that understanding how people communicate shapes how we build the tools they use.",
  ],

  availability:
    "Open to full-time positions, internships, research collaborations, and freelance projects in AI/ML & Robotics.",

  languages: ["English", "Hindi", "Japanese"],

  socials: [
    { label: "GitHub", handle: "Adonalsiun", href: "https://github.com/Adonalsiun" },
    { label: "LinkedIn", handle: "in/arynbht", href: "https://www.linkedin.com/in/arynbht/" },
    { label: "X", handle: "@adonalsiun", href: "https://x.com/adonalsiun" },
    { label: "Devpost", handle: "arynbht", href: "https://devpost.com/arynbht" },
  ] as Social[],

  experience: [
    {
      role: "Software Engineer",
      org: "Paydax",
      dates: "Apr 2026 – Present",
      location: "Remote",
      bullets: [
        "Engineer AI-integrated features across the full stack (frontend, backend, and embedded systems), shipping software across web and IoT surfaces in an agile, fast-paced environment.",
        "Apply DevSecOps and AI-native development practices across system architecture and API design, embedding security, automation, and intelligent tooling from prototype to production.",
      ],
    },
    {
      role: "AI Engineer Fellow",
      org: "Handshake AI Fellowship",
      dates: "Apr 2026 – Present",
      location: "Remote",
      bullets: [
        "Contribute to a multimodal AI training platform ingesting audio, visual, and text data to advance model performance across diverse real-world input formats and deployment contexts.",
        "Drive data pipeline quality through structured labeling, model evaluation, and QA workflows, directly shaping the reliability of production-grade AI systems at scale.",
      ],
    },
    {
      role: "Head Teaching Assistant",
      org: "Georgia Institute of Technology",
      dates: "Aug 2025 – May 2026",
      location: "Atlanta, GA",
      bullets: [
        "Manage a team of 6 Teaching Assistants for CS3803 (Design Capstone) with 400 students, coordinating grading allocations and instructional support across three distinct sections.",
        "Optimize instructional operations by developing standardized rubrics and feedback loops, ensuring high-quality, consistent assessment for complex technical assignments.",
        "Facilitate technical mastery for students through targeted office hours and creation of supplemental learning materials.",
      ],
    },
    {
      role: "Full Stack Software Engineer (Co-Founder)",
      org: "Reconaut",
      dates: "May 2025 – Present",
      location: "Atlanta, GA",
      bullets: [
        "Co-founded a startup developing AI-powered autonomous drone systems for building inspections, geospatial analytics, and insurance risk assessment, incubated through Georgia Tech's Create-X program.",
        "Architected real-time data pipelines processing over 10,000 aerial images monthly, leveraging computer vision, ML, and anomaly detection to identify structural damage with 85% accuracy.",
        "Designed and deployed scalable full-stack prototypes using Python, React, and AWS/GCP microservices to validate technical feasibility and secure early-stage clients.",
      ],
    },
    {
      role: "Data Analyst & Real Estate Agent",
      org: "HomeSmart",
      dates: "May 2025 – Present",
      location: "Atlanta, GA",
      bullets: [
        "Built predictive pricing models with scikit-learn, pandas, and NumPy to forecast local housing trends, directly improving listing accuracy and client ROI.",
        "Developed interactive BI dashboards in Power BI to surface market intelligence and guide data-driven investment and pricing decisions.",
        "Managed the full client lifecycle using CRM systems, MLS databases, and targeted digital marketing, improving lead conversion and long-term retention.",
      ],
    },
    {
      role: "Software Engineering Intern",
      org: "Connectogen",
      dates: "Aug 2024 – Aug 2025",
      location: "Atlanta, GA",
      bullets: [
        "Built and shipped full-stack web features (React, Node.js/Express, REST APIs) that streamlined mentorship workflows for over 500 active users across Emory University.",
        "Boosted backend performance via query optimization, Redis caching, and CI/CD automation (GitHub Actions, Docker), cutting API latency by 60% and deployment-related errors by 40%.",
        "Engineered an AI-driven recommendation engine using collaborative filtering to intelligently pair students with researchers, achieving 70% faster match turnaround.",
      ],
    },
    {
      role: "Research Assistant",
      org: "Georgia Institute of Technology",
      dates: "Jan 2024 – Jul 2024",
      location: "Atlanta, GA",
      bullets: [
        "Implemented multivariate Kalman Filter in C for state estimation in GTXR flight computer, integrating a complementary filter for acceleration and angular velocity.",
        "Created Java matrix operations library to enhance understanding of Kalman Filter mathematics, with data handling in both Euler angle and quaternion formats.",
        "Validated sensor fusion algorithms through rigorous simulation in MATLAB and Java prior to final deployment in the embedded C environment.",
      ],
    },
    {
      role: "Data Analysis Intern",
      org: "Dreamz Houz",
      dates: "May 2022 – May 2024",
      location: "Cumming, GA",
      bullets: [
        "Conducted real estate market trend analysis and enhanced property listings, leading to improved customer engagement and workflow efficiency.",
        "Increased customer engagement by 50% through predictive analytics and targeted marketing strategies using Python, R, and SQL.",
        "Utilized Tableau, PowerBI, and Excel to visualize real estate trends, optimizing data-driven decision-making.",
        "Reinforced data collection processes and databases, achieving a 30% surge in workflow efficiency.",
      ],
    },
    {
      role: "Mechanical Engineering Intern",
      org: "American BOA",
      dates: "May 2022 – Jan 2023",
      location: "Cumming, GA",
      bullets: [
        "Designed and optimized flexible metal connector components in SolidWorks and AutoCAD, achieving a 12% reduction in material costs through geometry and tolerance refinements.",
        "Collaborated with production engineers to re-engineer manufacturing and assembly workflows, measurably increasing line throughput.",
        "Applied machine learning techniques to historical production data to predict component failure rates, strengthening preventive maintenance planning.",
      ],
    },
  ] as ExperienceEntry[],

  education: [
    {
      degree: "B.S. in Computer Science",
      org: "Georgia Institute of Technology",
      dates: "2023 – 2026",
      coursework:
        "Data Structures & Algorithms, Object-Oriented Programming, Artificial Intelligence (CS3600), Design Capstone (CS3803), Objects and Design (CS2340), Linear Algebra, Multivariable Calculus",
    },
    {
      degree: "Mechanical Engineering",
      org: "University of Georgia",
      dates: "2022 – 2023",
      coursework:
        "Statics, Engineering Graphics & CAD (SolidWorks/AutoCAD), Introductory Robotics, Calculus I & II, General Physics for Engineers",
    },
  ] as EducationEntry[],

  certifications: [
    { name: "Autodesk Certified Professional: AutoCAD", issuer: "Autodesk", year: "2022" },
    { name: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", year: "2023" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2023" },
  ] as Certification[],

  skills: [
    { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "C#", "SQL", "R"] },
    {
      label: "AI / ML",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "FastAPI", "NumPy", "Pandas", "OpenCV", "Reinforcement Learning", "SLAM", "CNNs", "Semantic Segmentation", "Anomaly Detection"],
    },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion", "Web Audio API", "Power BI"] },
    { label: "Backend", items: ["Node.js", "Express.js", "Django", "better-sqlite3", "PDFKit", "WebSockets", "Turborepo", "Apache Kafka", ".NET"] },
    { label: "Databases", items: ["SQLite", "PostgreSQL", "MongoDB", "Redis", "SQL Server"] },
    { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Git", "DevSecOps", "CI/CD", "Vercel"] },
    { label: "Embedded & Robotics", items: ["Embedded C", "RTOS", "ROS", "Kalman Filters", "Sensor Fusion", "Raspberry Pi", "MATLAB", "SolidWorks", "AutoCAD"] },
  ] as SkillGroup[],
};

export type Profile = typeof profile;
