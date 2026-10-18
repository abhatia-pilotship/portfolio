import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects across AI/ML, robotics & embedded systems, and full-stack web.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="page-x section-gap">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-tight text-ink">
          The work
        </h1>
        <p className="mt-6 max-w-measure text-lead text-ink">
          {projects.length} projects across AI/ML, robotics &amp; embedded systems, and full-stack
          web. Four are featured on the home page; every one has its own page.
        </p>

        <ul className="mt-16 grid gap-px bg-surface sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug} className="bg-bg">
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col bg-bg p-7 transition-colors hover:bg-surface"
              >
                <span className="flex items-center justify-between text-small font-semibold uppercase tracking-wide text-accent">
                  {p.categoryLabel}
                  {p.featured ? <span className="text-muted">Featured</span> : null}
                </span>
                <span className="font-display mt-4 block text-2xl leading-[0.95] tracking-tight text-ink group-hover:text-accent">
                  {p.title}
                </span>
                <span className="mt-2 block text-small text-muted">{p.dates}</span>
                <span className="mt-4 block flex-1 text-body text-ink/85">{p.summary}</span>
                <span className="mt-6 block text-small font-semibold text-accent">
                  View details →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
