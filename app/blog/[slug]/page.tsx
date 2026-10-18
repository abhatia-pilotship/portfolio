import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="page-x section-gap">
      <div className="mx-auto max-w-4xl">
        {/* Widened header so the real (long) article title stays dominant on desktop yet
            fits two lines down to mobile. Body prose below stays at reading measure. */}
        <h1 data-animate className="font-display text-[clamp(1.25rem,0.5rem+3.2vw,3rem)] leading-[1.05] tracking-tight text-ink">
          {post.title}
        </h1>
        <p data-animate data-animate-order={1} className="mt-5 text-small tabular-nums text-muted">
          {post.displayDate} · {post.readingTime}
        </p>
        <div data-animate data-animate-order={2} className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="bg-surface px-2.5 py-1 text-small text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <MdxContent source={post.body} />
        </div>

        <div className="mt-20" />
        <Link href="/blog" className="font-semibold text-accent hover:text-ink">
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
