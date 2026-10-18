"use client";

import { useEffect } from "react";

/**
 * Entrance reveal. Adds `.in` to [data-animate] elements as they enter the viewport,
 * staggered by their [data-animate-order] within a group. Failure-safe:
 *  - content is visible by default (CSS only hides under html.js + no-reduced-motion);
 *  - if IntersectionObserver is missing or the user prefers reduced motion, reveal all;
 *  - a load fallback reveals anything still hidden.
 * Phase 3 (Emil's rules) tunes durations/stagger; this is the mechanism.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => els.forEach((el) => el.classList.add("in"));

    if (reduce || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const order = Number(el.dataset.animateOrder ?? 0);
            el.style.transitionDelay = `${Math.min(order, 8) * 80}ms`;
            el.classList.add("in");
            obs.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    // Safety net: never leave content hidden.
    const fallback = window.setTimeout(revealAll, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
