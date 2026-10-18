import type { Config } from "tailwindcss";

/**
 * Tailwind reads the design tokens defined as CSS custom properties in app/globals.css,
 * which come straight from the taste-skill direction sheet (seed 1814682534,
 * "Type and nothing else"). Components reference token names only — never raw hex.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "field-1": "var(--field-1)",
        "field-1-ink": "var(--field-1-ink)",
        "field-2": "var(--field-2)",
        "field-2-ink": "var(--field-2-ink)",
        "field-3": "var(--field-3)",
        "field-3-ink": "var(--field-3-ink)",
        "field-4": "var(--field-4)",
        "field-4-ink": "var(--field-4-ink)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-text)",
      },
      fontSize: {
        small: "var(--step-small)",
        body: "var(--step-body)",
        lead: "var(--step-lead)",
        head: "var(--step-head)",
      },
      maxWidth: {
        measure: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
