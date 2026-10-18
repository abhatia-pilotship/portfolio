import Link from "next/link";
import { profile } from "@/content/profile";
import { getAllProjects, getAllPosts } from "@/lib/content";
import { Estimate, type EstimateProject } from "@/components/Estimate";
import { ProjectVideo } from "@/components/ProjectVideo";

export default function Home() {
  const projects = getAllProjects();
  const posts = getAllPosts();

  const estimateProjects: EstimateProject[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    categoryLabel: p.categoryLabel,
    tag: p.tag,
    dates: p.dates,
    summary: p.summary,
    featured: p.featured,
  }));

  return (
    <>
      {/* 1. Hero — Void, then statement on axis */}
      <section className="page-x flex min-h-[86svh] flex-col justify-end pb-[9svh] pt-[16svh]">
        <div className="lg:ml-[42%]">
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.9] tracking-tight text-ink">
            <span className="line-mask">
              <span>{profile.hero.headline[0]}</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "110ms" }}>{profile.hero.headline[1]}</span>
            </span>
          </h1>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-lead text-ink/90" style={{ animationDelay: "320ms" }}>
            {profile.hero.supporting}
          </p>
          <div className="hero-fade flex items-center gap-5" style={{ animationDelay: "420ms" }}>
            <Link
              href={profile.hero.primary.href}
              className="press inline-flex min-h-[44px] items-center bg-accent px-6 font-semibold text-accent-ink transition-colors hover:bg-ink hover:text-bg"
            >
              {profile.hero.primary.label}
            </Link>
            <a
              href={profile.hero.secondary.href}
              className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
            >
              {profile.hero.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* 2. showcase — Two giant words compared (the span made visible) */}
      <section className="page-x section-gap" aria-labelledby="span-heading">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
            <h2 data-animate id="span-heading" className="font-display text-3xl tracking-tight text-ink">
              Both ends of the system
            </h2>
            <p data-animate data-animate-order={1} className="max-w-md text-body text-muted">
              I write C that runs on a flight computer, train models that run in the cloud, and
              build the full-stack web that ties them together.
            </p>
          </div>
          <div className="mt-14">
            <p data-animate className="font-display text-[clamp(3rem,14vw,10rem)] leading-[0.82] tracking-tight text-ink">
              Firmware
            </p>
            <p data-animate data-animate-order={1} className="font-display text-right text-[clamp(3rem,14vw,10rem)] leading-[0.82] tracking-tight text-ink">
              Models
            </p>
          </div>
          <p className="mt-6 text-small text-muted">
            Same engineer, both ends: C on the metal, models in the cloud.
          </p>
        </div>
      </section>

      {/* 3. The estimate — the one live thing (id="work") */}
      <Estimate projects={estimateProjects} readings={profile.readings} />

      {/* 4. about — Side facts, wide paragraph */}
      <section className="page-x section-gap bg-surface" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[34%_1fr]">
          <div>
            <h2 data-animate id="about-heading" className="font-display text-3xl tracking-tight text-ink">
              About
            </h2>
            <dl className="mt-6 space-y-4 text-small">
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Study</dt>
                <dd className="text-ink">Georgia Tech, B.S. Computer Science (2023–2026)</dd>
              </div>
              <div>
                <dt className="text-muted">Languages</dt>
                <dd className="text-ink">{profile.languages.join(", ")}</dd>
              </div>
            </dl>
          </div>
          <div data-animate data-animate-order={1} className="space-y-5">
            {profile.bio.map((para, i) => (
              <p key={i} className="max-w-measure text-lead leading-snug text-ink/90">
                {para}
              </p>
            ))}
            <p className="pt-2 text-body text-muted">{profile.availability}</p>
          </div>
        </div>
      </section>

      {/* 5. One moving picture — the Mir.AI demo (the only real clip on hand) */}
      <section className="page-x section-gap" aria-labelledby="video-heading">
        <div className="mx-auto max-w-5xl">
          <h2 data-animate id="video-heading" className="font-display text-3xl tracking-tight text-ink">
            Mir.AI, in motion
          </h2>
          <p data-animate data-animate-order={1} className="mt-3 max-w-measure text-body text-muted">
            The one demo on film: a GAN pipeline enhancing 1.5T MRI scans toward 3T quality.
            Hackalytics 2025 Healthcare Track winner.
          </p>
          <div className="mt-8">
            <ProjectVideo id="W0isckv7zg4" title="Mir.AI — AI Powered MRI Enhancement" />
          </div>
        </div>
      </section>

      {/* 6. experience — Names as one paragraph */}
      <section className="page-x section-gap" aria-labelledby="exp-heading" id="experience">
        <div className="mx-auto max-w-6xl">
          <h2 data-animate id="exp-heading" className="font-display text-3xl tracking-tight text-ink">
            Where I've done it
          </h2>
          <p data-animate data-animate-order={1} className="mt-8 font-display text-[clamp(1.5rem,0.9rem+2vw,2.125rem)] leading-[1.15] tracking-tight text-muted">
            {profile.experience.map((e, i) => (
              <span key={e.org + e.role}>
                <Link href="/experience" className="text-ink transition-colors hover:text-accent">
                  {e.org}
                </Link>
                {i < profile.experience.length - 1 ? <span className="text-muted">, </span> : "."}
              </span>
            ))}
          </p>
          <p className="mt-8">
            <Link href="/experience" className="font-semibold text-accent hover:text-ink">
              The full history →
            </Link>
          </p>
        </div>
      </section>

      {/* 7. list — Two-ended rows (writing) */}
      <section className="page-x section-gap bg-surface" aria-labelledby="writing-heading" id="writing">
        <div className="mx-auto max-w-3xl">
          <h2 data-animate id="writing-heading" className="font-display text-3xl tracking-tight text-ink">
            Writing
          </h2>
          <ul data-animate data-animate-order={1} className="mt-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-6 border-0 py-4 hover:text-accent"
                >
                  <span className="text-lead font-semibold text-ink group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-small tabular-nums text-muted">
                    {post.displayDate}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/blog" className="font-semibold text-accent hover:text-ink">
              Read the blog →
            </Link>
          </p>
        </div>
      </section>

      {/* 8. contact — The email as display type (inverted field) */}
      <section className="page-x flex min-h-[88svh] flex-col justify-between bg-field-3 py-16 text-field-3-ink" id="contact">
        <p data-animate className="max-w-xl text-lead">
          Hiring for AI, robotics, or full-stack? Tell me what you're building.
        </p>
        <a
          data-animate
          data-animate-order={1}
          href={`mailto:${profile.email}`}
          className="font-display block break-all text-[clamp(2rem,8.5vw,7rem)] leading-[0.95] tracking-tight transition-opacity hover:opacity-80"
        >
          {profile.email}
        </a>
        <div data-animate data-animate-order={2} className="flex flex-wrap gap-x-6 gap-y-2 text-small">
          <span>{profile.location}</span>
          {profile.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80">
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
