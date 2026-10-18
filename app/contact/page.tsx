import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aryan Bhatia about AI, robotics, and full-stack roles.",
};

export default function ContactPage() {
  return (
    <div className="page-x flex min-h-[86svh] flex-col justify-between bg-field-3 py-20 text-field-3-ink">
      <div className="max-w-2xl">
        <h1 data-animate className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight">
          Let&apos;s talk
        </h1>
        <p data-animate data-animate-order={1} className="mt-6 text-lead">{profile.availability}</p>
        <p data-animate data-animate-order={2} className="mt-4 max-w-measure text-body">
          The fastest way to reach me is email. It goes straight to my inbox, not a form.
        </p>
      </div>

      <a
        data-animate
        data-animate-order={3}
        href={`mailto:${profile.email}`}
        className="font-display block break-all text-[clamp(2rem,8.5vw,7rem)] leading-[0.95] tracking-tight transition-opacity hover:opacity-80"
      >
        {profile.email}
      </a>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-small">
        <span data-animate data-animate-order={4}>{profile.location}</span>
        {profile.socials.map((s, i) => (
          <a
            key={s.href}
            data-animate
            data-animate-order={5 + i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {s.label} · {s.handle}
          </a>
        ))}
      </div>
    </div>
  );
}
