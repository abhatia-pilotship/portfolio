import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/content/profile";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-display",
  display: "swap",
});

const text = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arynbht.tech"),
  title: {
    default: "Aryan Bhatia · Software Engineer",
    template: "%s · Aryan Bhatia",
  },
  description:
    "Aryan Bhatia is a Georgia Tech engineer who ships across the hardware–software line: embedded firmware, AI/ML models, and full-stack web.",
  openGraph: {
    title: "Aryan Bhatia · Software Engineer",
    description:
      "A Georgia Tech engineer who ships across the hardware–software line: embedded firmware, AI/ML models, and full-stack web.",
    url: "https://arynbht.tech",
    siteName: "Aryan Bhatia",
    type: "website",
  },
};

// Runs before paint: adds `.js` so entrance states only hide content when JS is present.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer profile={profile} />
        <Reveal />
      </body>
    </html>
  );
}
