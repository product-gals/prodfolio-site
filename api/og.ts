import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import { join } from "path";

interface EpisodeOG {
  slug: string;
  title: string;
  description: string;
  guestName: string;
  episodeNumber: string;
  ogImage: string;
  publishedAt: string;
}

const CRAWLER_AGENTS = [
  "facebookexternalhit",
  "facebot",
  "linkedinbot",
  "twitterbot",
  "slackbot",
  "whatsapp",
  "discordbot",
  "telegrambot",
];

function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return CRAWLER_AGENTS.some((agent) => ua.includes(agent));
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Load episode data at cold start
let episodes: EpisodeOG[] = [];
try {
  const data = readFileSync(join(process.cwd(), "public", "og", "episodes.json"), "utf-8");
  episodes = JSON.parse(data);
} catch {
  console.error("Failed to load episodes OG data");
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const userAgent = (req.headers["user-agent"] as string) || "";
  const slug = req.query.slug as string;

  // If not a crawler, redirect to the actual SPA page
  if (!isCrawler(userAgent)) {
    res.redirect(302, `/podcast/episodes/${slug}`);
    return;
  }

  const episode = episodes.find((ep) => ep.slug === slug);

  if (!episode) {
    res.redirect(302, `/podcast/episodes/${slug}`);
    return;
  }

  const canonicalUrl = `https://prodfolio.io/podcast/episodes/${slug}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(episode.title)}</title>
  <meta name="description" content="${escapeHtml(episode.description)}" />

  <meta property="og:title" content="${escapeHtml(episode.title)}" />
  <meta property="og:description" content="${escapeHtml(episode.description)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${escapeHtml(episode.ogImage)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="The Product Pivot Podcast" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(episode.title)}" />
  <meta name="twitter:description" content="${escapeHtml(episode.description)}" />
  <meta name="twitter:image" content="${escapeHtml(episode.ogImage)}" />
  <meta name="twitter:site" content="@prodfolio" />

  <link rel="canonical" href="${canonicalUrl}" />
</head>
<body>
  <p><a href="${canonicalUrl}">${escapeHtml(episode.title)}</a></p>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.status(200).send(html);
}
