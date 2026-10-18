import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on AI engineering, embedded systems, robotics, and building software with intention.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="page-x section-gap">
      <div className="mx-auto max-w-3xl">
        <h1 data-animate className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-tight text-ink">
          The blog
        </h1>
        <p data-animate data-animate-order={1} className="mt-6 max-w-measure text-lead text-ink">
          Notes on AI engineering, embedded systems, robotics, and building software with intention.
        </p>

        {posts.length === 0 && (
          <p className="mt-16 text-body text-muted">No posts yet — check back soon.</p>
        )}

        <ul className="mt-16 space-y-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 data-animate className="font-display text-[clamp(1.25rem,0.6rem+2.2vw,2.25rem)] leading-[1.05] tracking-tight text-ink group-hover:text-accent">
                  {post.title}
                </h2>
                <div data-animate data-animate-order={1} className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="bg-surface px-2.5 py-1 text-small text-muted">
                      {t}
                    </span>
                  ))}
                  <span className="px-1 text-small tabular-nums text-muted">
                    {post.displayDate} · {post.readingTime}
                  </span>
                </div>
                {/* Summary ends each card so a heading is never preceded by short label text. */}
                <p data-animate data-animate-order={2} className="mt-4 max-w-measure text-body text-ink/85">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
