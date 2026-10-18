import Link from "next/link";
import { profile } from "@/content/profile";

const links = [
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * A plain bar: wordmark, a few links, one action. No bar chrome, no glass, no shadow.
 * Transparent over the charcoal ground so the hero void reads as intended.
 */
export function Nav() {
  return (
    <header className="page-x relative z-20 flex items-center justify-between gap-4 py-5">
      <Link
        href="/"
        className="font-display text-xl tracking-tight text-ink hover:text-accent"
        aria-label={`${profile.name} — home`}
      >
        {profile.name}
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-x-5 gap-y-1 flex-wrap justify-end">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-small font-semibold text-muted transition-colors hover:text-ink"
          >
            {l.label}
          </Link>
        ))}
        <a
          href={`mailto:${profile.email}`}
          className="text-small font-semibold text-accent hover:text-ink"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
