"use client";

import { useState } from "react";

/**
 * Click-to-play facade for the one real clip on hand (the Mir.AI demo on YouTube).
 * Nothing external loads until the visitor clicks, so first paint stays fast and the
 * page makes no third-party requests on load. Honest: it is clearly the Mir.AI video.
 */
export function ProjectVideo({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="w-full bg-black" style={{ aspectRatio: "16/9" }}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative flex w-full items-center justify-center bg-surface transition-colors hover:bg-[#2c2c2c]"
      style={{ aspectRatio: "16/9" }}
      aria-label={`Play video: ${title}`}
    >
      <span className="flex flex-col items-center gap-3 p-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor" aria-hidden="true">
            <path d="M2 2v20l18-10L2 2z" />
          </svg>
        </span>
        <span className="font-display text-base tracking-tight text-ink">Play the demo</span>
        <span className="text-small text-muted">{title} · YouTube</span>
      </span>
    </button>
  );
}
