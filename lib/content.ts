import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Lens = "ai" | "robotics" | "fullstack";

export type ProjectLink = { label: string; href: string };

export type ImageSlot = {
  /** When true, renders a labelled placeholder instead of a real image. */
  placeholder: boolean;
  /** What should go in this slot (shown on the placeholder, used as alt when real). */
  label: string;
  /** aspect ratio like "16/10". */
  ratio?: string;
  /** path under /public when a real asset exists (e.g. /assets/own/headshot.jpg). */
  src?: string;
};

export type ProjectMeta = {
  title: string;
  slug: string;
  category: Lens;
  categoryLabel: string;
  tag: string;
  dates: string;
  featured: boolean;
  order: number;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  metrics: string[];
  video?: string;
  image: ImageSlot;
};

export type Project = ProjectMeta & { body: string };

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  displayDate: string;
  readingTime: string;
  tags: string[];
  summary: string;
};

export type Post = PostMeta & { body: string };

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");
const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readMdxDir(dir: string): { data: Record<string, unknown>; body: string; file: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { data, body: content, file };
    });
}

export function getAllProjects(): Project[] {
  const items = readMdxDir(PROJECTS_DIR).map(({ data, body }) => ({
    ...(data as unknown as ProjectMeta),
    body,
  }));
  return items.sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

export function getAllPosts(): Post[] {
  const items = readMdxDir(POSTS_DIR).map(({ data, body }) => ({
    ...(data as unknown as PostMeta),
    body,
  }));
  // newest first
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export const LENS_LABELS: Record<Lens, string> = {
  ai: "AI / ML",
  robotics: "Robotics & Embedded",
  fullstack: "Full-stack",
};
