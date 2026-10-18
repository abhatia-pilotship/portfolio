import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import { Placeholder } from "@/components/Placeholder";
import { ProjectVideo } from "@/components/ProjectVideo";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

function youTubeId(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  return m ? m[1] : null;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const videoId = youTubeId(project.video);

  return (
    <article className="page-x section-gap">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.88] tracking-tight text-ink">
          {project.title}
        </h1>
        <p className="mt-5 text-small font-semibold uppercase tracking-wide text-accent">
          {project.categoryLabel} · {project.tag} · <span className="text-muted">{project.dates}</span>
        </p>

        <p className="mt-8 max-w-measure text-lead leading-snug text-ink/90">{project.summary}</p>

        {/* Lead media: the one real clip (Mir.AI) or a labelled placeholder */}
        <div className="mt-12">
          {videoId ? (
            <ProjectVideo id={videoId} title={project.title} />
          ) : (
            <Placeholder label={project.image.label} ratio={project.image.ratio} />
          )}
        </div>

        {project.metrics.length > 0 && (
          <ul className="mt-12 grid gap-px bg-surface sm:grid-cols-2">
            {project.metrics.map((m, i) => (
              <li key={i} className="bg-bg p-6 text-body text-ink/90">
                {m}
              </li>
            ))}
          </ul>
        )}

        {/* Deep dive (MDX body) */}
        <div className="mt-6">
          <MdxContent source={project.body} />
        </div>

        {/* Stack + links */}
        <div className="mt-16 grid gap-10 border-0 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-xl tracking-tight text-ink">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="bg-surface px-3 py-1 text-small text-ink/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {project.links.length > 0 && (
            <div>
              <h2 className="font-display text-xl tracking-tight text-ink">Links</h2>
              <ul className="mt-4 space-y-2">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent underline underline-offset-4 hover:text-ink"
                    >
                      {l.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-20">
          <Link href="/projects" className="font-semibold text-accent hover:text-ink">
            ← Back to all work
          </Link>
        </div>
      </div>
    </article>
  );
}
