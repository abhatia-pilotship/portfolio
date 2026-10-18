import Link from "next/link";
import type { Profile } from "@/content/profile";

/**
 * Footer blueprint — "Columns above, wordmark below". Inverts to a field colour,
 * fills ~a viewport, columns on top, the wordmark spanning full width at the bottom.
 */
export function Footer({ profile }: { profile: Profile }) {
  const year = 2026;
  return (
    <footer className="bg-ink text-bg">
      <div className="page-x grid min-h-[70svh] grid-rows-[auto_1fr_auto] gap-y-16 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-small font-semibold">Navigate</p>
            <ul className="mt-3 space-y-1 text-small text-bg/70">
              <li><Link className="hover:text-bg" href="/projects">Work</Link></li>
              <li><Link className="hover:text-bg" href="/experience">Experience</Link></li>
              <li><Link className="hover:text-bg" href="/blog">Blog</Link></li>
              <li><Link className="hover:text-bg" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-small font-semibold">Elsewhere</p>
            <ul className="mt-3 space-y-1 text-small text-bg/70">
              {profile.socials.map((s) => (
                <li key={s.href}>
                  <a className="hover:text-bg" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-small font-semibold">Contact</p>
            <ul className="mt-3 space-y-1 text-small text-bg/70">
              <li>
                <a className="hover:text-bg" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div>
            <p className="text-small font-semibold">Open to</p>
            <p className="mt-3 text-small text-bg/70">
              Full-time, internships, research, and freelance in AI/ML &amp; Robotics.
            </p>
          </div>
        </div>

        <div aria-hidden="true" />

        <div>
          <Link
            href="/"
            className="font-display block w-full leading-[0.82] tracking-tight text-bg hover:text-field-3"
            style={{ fontSize: "clamp(2.5rem, 13vw, 13rem)" }}
          >
            {profile.wordmark}
          </Link>
          <p className="mt-6 text-small text-bg/60">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
