import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, education, certifications, and skills.",
};

export default function ExperiencePage() {
  return (
    <div className="page-x section-gap">
      <div className="mx-auto max-w-4xl">
        <h1 data-animate className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-tight text-ink">
          Experience
        </h1>

        <ol className="mt-16 space-y-14">
          {profile.experience.map((e, i) => (
            <li key={e.org + e.role} data-animate data-animate-order={i} className="grid gap-4 md:grid-cols-[34%_1fr]">
              <div>
                <h2 className="font-display text-2xl leading-[0.95] tracking-tight text-ink">
                  {e.role}
                </h2>
                <p className="mt-1 text-body font-semibold text-accent">{e.org}</p>
                <p className="mt-1 text-small text-muted">
                  {e.dates} · {e.location}
                </p>
              </div>
              <ul className="space-y-3">
                {e.bullets.map((b, i) => (
                  <li key={i} className="max-w-measure text-body leading-relaxed text-ink/90">
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Education */}
        <section className="mt-24">
          <h2 data-animate className="font-display text-3xl tracking-tight text-ink">Education</h2>
          <div className="mt-8 space-y-10">
            {profile.education.map((ed) => (
              <div key={ed.org} className="grid gap-4 md:grid-cols-[34%_1fr]">
                <div>
                  <h3 className="font-display text-xl tracking-tight text-ink">{ed.degree}</h3>
                  <p className="mt-1 text-body font-semibold text-accent">{ed.org}</p>
                  <p className="mt-1 text-small text-muted">{ed.dates}</p>
                </div>
                {ed.coursework && (
                  <p className="max-w-measure text-body text-ink/85">
                    <span className="text-muted">Relevant coursework: </span>
                    {ed.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-24">
          <h2 data-animate className="font-display text-3xl tracking-tight text-ink">Certifications</h2>
          <ul className="mt-8 grid gap-px bg-surface sm:grid-cols-3">
            {profile.certifications.map((c) => (
              <li key={c.name} className="bg-bg p-6">
                <p className="text-body font-semibold text-ink">{c.name}</p>
                <p className="mt-2 text-small text-muted">
                  {c.issuer} · {c.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-24">
          <h2 data-animate className="font-display text-3xl tracking-tight text-ink">Skills</h2>
          <div className="mt-8 space-y-8">
            {profile.skills.map((group) => (
              <div key={group.label} className="grid gap-3 md:grid-cols-[34%_1fr]">
                <h3 className="text-small font-semibold uppercase tracking-wide text-accent">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="bg-surface px-3 py-1 text-small text-ink/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
