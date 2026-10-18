"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Lens } from "@/lib/content";

export type EstimateProject = {
  slug: string;
  title: string;
  category: Lens;
  categoryLabel: string;
  tag: string;
  dates: string;
  summary: string;
  featured: boolean;
};

const LENSES: { key: Lens; label: string }[] = [
  { key: "ai", label: "AI / ML" },
  { key: "robotics", label: "Robotics & Embedded" },
  { key: "fullstack", label: "Full-stack" },
];

// Canonical order so the reading key matches the readings map.
const ORDER: Lens[] = ["ai", "robotics", "fullstack"];

export function Estimate({
  projects,
  readings,
}: {
  projects: EstimateProject[];
  readings: Record<string, string>;
}) {
  const [active, setActive] = useState<Set<Lens>>(new Set());

  const toggle = (lens: Lens) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(lens)) next.delete(lens);
      else next.add(lens);
      return next;
    });

  const key = ORDER.filter((l) => active.has(l)).join("+");
  const reading = (key && readings[key]) || readings.all;

  const shown = useMemo(() => {
    if (active.size === 0) {
      return projects.filter((p) => p.featured);
    }
    const matched = projects.filter((p) => active.has(p.category));
    // featured first, then by existing order
    return [...matched].sort((a, b) => Number(b.featured) - Number(a.featured)).slice(0, 6);
  }, [active, projects]);

  return (
    <section id="work" className="page-x section-gap">
      <div className="mx-auto max-w-5xl">
        <h2 className="sr-only">The work</h2>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter the work by what you're hiring for">
          <button
            type="button"
            onClick={() => setActive(new Set())}
            aria-pressed={active.size === 0}
            className={chip(active.size === 0)}
          >
            All signals
          </button>
          {LENSES.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => toggle(l.key)}
              aria-pressed={active.has(l.key)}
              className={chip(active.has(l.key))}
            >
              {l.label}
            </button>
          ))}
        </div>

        <p
          aria-live="polite"
          className="mt-8 max-w-3xl text-[clamp(1.25rem,1rem+1.4vw,2rem)] font-semibold leading-snug text-ink"
        >
          {reading}
        </p>

        <ul className="mt-14 grid gap-px bg-surface sm:grid-cols-2">
          {shown.map((p) => (
            <li key={p.slug} className="bg-bg">
              <Link
                href={`/projects/${p.slug}`}
                className="group block h-full bg-bg p-6 transition-colors hover:bg-surface sm:p-8"
              >
                <span className="text-small font-semibold uppercase tracking-wide text-accent">
                  {p.categoryLabel}
                </span>
                <span className="font-display mt-3 block text-2xl leading-[0.95] tracking-tight text-ink group-hover:text-accent">
                  {p.title}
                </span>
                <span className="mt-2 block text-small text-muted">{p.tag} · {p.dates}</span>
                <span className="mt-4 block text-body text-ink/85">{p.summary}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/projects" className="font-semibold text-accent hover:text-ink">
            See all 11 projects →
          </Link>
        </p>
      </div>
    </section>
  );
}

function chip(on: boolean) {
  return [
    "min-h-[44px] rounded-full px-5 text-small font-semibold transition-colors",
    on ? "bg-accent text-accent-ink" : "bg-surface text-muted hover:text-ink",
  ].join(" ");
}
