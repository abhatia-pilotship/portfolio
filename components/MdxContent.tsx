import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      data-animate
      className="font-display mt-14 mb-4 text-[clamp(1.5rem,1rem+2vw,2.25rem)] leading-[0.95] tracking-tight text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="font-display mt-10 mb-3 text-xl tracking-tight text-ink" {...props} />
  ),
  p: (props) => <p className="my-5 max-w-measure text-body leading-relaxed text-ink" {...props} />,
  ul: (props) => <ul data-animate className="my-5 max-w-measure list-disc space-y-2 pl-5 text-ink" {...props} />,
  ol: (props) => <ol data-animate className="my-5 max-w-measure list-decimal space-y-2 pl-5 text-ink" {...props} />,
  li: (props) => <li className="text-body leading-relaxed" {...props} />,
  a: (props) => <a className="text-accent underline underline-offset-4 hover:text-ink" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  code: (props) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-ink" {...props} />
  ),
  pre: (props) => (
    <pre
      data-animate
      className="my-6 overflow-x-auto bg-surface p-5 font-mono text-small leading-relaxed text-ink"
      {...props}
    />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
