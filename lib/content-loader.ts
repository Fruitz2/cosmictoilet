import { z } from "zod";
import strings from "@/content/cosmictoilet/strings.json";
import links from "@/content/cosmictoilet/links.json";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Zod schemas for validation
const LinksSchema = z.object({
  pump: z.string().optional(),
  x: z.string(),
  tg: z.string(),
  contract: z.string().optional(),
});

const StringsSchema = z.object({
  buyEnabled: z.boolean(),
  plausibleDomain: z.string().optional(),
  showUrgencyRibbon: z.boolean(),
  urgencyMessages: z.array(z.string()),
  meta: z.object({
    title: z.string(),
    description: z.string(),
    ogImageAlt: z.string(),
  }),
  menu: z.object({
    home: z.string(),
    lore: z.string(),
    token: z.string(),
    roadmap: z.string(),
    press: z.string(),
    buy: z.string(),
    x: z.string(),
    tg: z.string(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    h1Variants: z.array(z.string()),
    sub: z.string(),
    buyCta: z.string(),
    secondaryCtas: z.array(z.string()),
  }),
  reasons: z.array(z.object({
    icon: z.string(),
    text: z.string(),
  })),
  strip: z.array(z.string()),
  narrativeBurst: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
  }),
  bullishMenu: z.object({
    title: z.string(),
    items: z.array(z.string()),
    disclaimer: z.string(),
  }),
  community: z.object({
    title: z.string(),
    body: z.string(),
  }),
  socials: z.array(z.object({
    icon: z.string(),
    label: z.string(),
    href: z.string(),
  })),
  roadmapPreview: z.object({
    title: z.string(),
    bullets: z.array(z.string()),
  }),
  footer: z.object({
    legal: z.string(),
    region: z.string(),
  }),
  toggleTips: z.object({
    reduceMotionOn: z.string(),
    reduceMotionOff: z.string(),
  }),
});

export function getStrings() {
  return StringsSchema.parse(strings);
}

export function getLinks() {
  return LinksSchema.parse(links);
}

export function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'content', 'cosmictoilet', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}
