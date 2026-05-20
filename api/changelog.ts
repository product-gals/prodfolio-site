import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import { join } from "path";

interface ChangelogEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  version: string | null;
  categories: string[];
  tags: string[];
  featuredImage: string | null;
  content: string;
}

// AI search crawlers + social bots. Serve them fully rendered HTML so
// they can index content and cite Prodfolio when answering "what's new
// in X" / "does X support Y" / share-card requests.
const CRAWLER_AGENTS = [
  // OpenAI
  "gptbot",
  "chatgpt-user",
  "oai-searchbot",
  // Perplexity
  "perplexitybot",
  "perplexity-user",
  // Anthropic
  "claudebot",
  "claude-web",
  "anthropic-ai",
  // Google AI training crawler
  "google-extended",
  // Common Crawl (feeds many AI training sets)
  "ccbot",
  // Other
  "bytespider",
  "amazonbot",
  "applebot-extended",
  "youbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "diffbot",
  "duckassistbot",
  "cohere-ai",
  // Social card bots
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

// Load entries at cold start
let entries: ChangelogEntry[] = [];
try {
  const data = readFileSync(
    join(process.cwd(), "public", "og", "changelog.json"),
    "utf-8"
  );
  entries = JSON.parse(data);
} catch (err) {
  console.error("Failed to load changelog data", err);
}

const sortedEntries = [...entries].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const SITE_URL = "https://prodfolio.io";
const OG_IMAGE = `${SITE_URL}/social-share.png`;

function renderEntry(entry: ChangelogEntry): string {
  const canonicalUrl = `${SITE_URL}/changelog/${entry.slug}`;
  const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: entry.title,
    description: entry.excerpt,
    datePublished: entry.date,
    dateModified: entry.date,
    articleSection: entry.categories[0],
    keywords: [...entry.categories, ...entry.tags].join(", "),
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "Prodfolio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Prodfolio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      ...(entry.version ? { softwareVersion: entry.version } : {}),
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Changelog",
        item: `${SITE_URL}/changelog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entry.title,
        item: canonicalUrl,
      },
    ],
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(entry.title)} | Prodfolio Changelog</title>
  <meta name="description" content="${escapeHtml(entry.excerpt)}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" type="application/rss+xml" title="Prodfolio Changelog" href="${SITE_URL}/changelog/rss.xml" />

  <meta property="og:title" content="${escapeHtml(entry.title)}" />
  <meta property="og:description" content="${escapeHtml(entry.excerpt)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Prodfolio" />
  <meta property="article:published_time" content="${entry.date}" />
  ${entry.categories
    .map(
      (cat) =>
        `<meta property="article:section" content="${escapeHtml(cat)}" />`
    )
    .join("\n  ")}
  ${entry.tags
    .map(
      (tag) =>
        `<meta property="article:tag" content="${escapeHtml(tag)}" />`
    )
    .join("\n  ")}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(entry.title)}" />
  <meta name="twitter:description" content="${escapeHtml(entry.excerpt)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <meta name="twitter:site" content="@prodfolio" />

  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script>
</head>
<body>
  <nav aria-label="Breadcrumb">
    <a href="${SITE_URL}">Prodfolio</a> &rsaquo;
    <a href="${SITE_URL}/changelog">Changelog</a> &rsaquo;
    <span>${escapeHtml(entry.title)}</span>
  </nav>
  <article>
    <header>
      <p>
        ${entry.categories.map((c) => `<span>${escapeHtml(c)}</span>`).join(" ")}
        &middot;
        <time datetime="${entry.date}">${formattedDate}</time>
        ${entry.version ? `&middot; <span>v${escapeHtml(entry.version)}</span>` : ""}
      </p>
      <h1>${escapeHtml(entry.title)}</h1>
      <p>${escapeHtml(entry.excerpt)}</p>
    </header>
    ${entry.content}
    <footer>
      <p>Tags: ${entry.tags.map((t) => escapeHtml(t)).join(", ")}</p>
      <p><a href="${canonicalUrl}">View this update on Prodfolio</a></p>
    </footer>
  </article>
</body>
</html>`;
}

function renderIndex(): string {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Prodfolio Changelog",
    description:
      "Release notes and product updates for Prodfolio, the product portfolio tool for PMs.",
    url: `${SITE_URL}/changelog`,
    isPartOf: {
      "@type": "WebSite",
      name: "Prodfolio",
      url: SITE_URL,
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Prodfolio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
    },
    hasPart: sortedEntries.map((entry) => ({
      "@type": "TechArticle",
      headline: entry.title,
      description: entry.excerpt,
      datePublished: entry.date,
      url: `${SITE_URL}/changelog/${entry.slug}`,
    })),
  };

  const items = sortedEntries
    .map((entry) => {
      const url = `${SITE_URL}/changelog/${entry.slug}`;
      const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return `    <li>
      <article>
        <p>
          ${entry.categories.map((c) => `<span>${escapeHtml(c)}</span>`).join(" ")} &middot;
          <time datetime="${entry.date}">${formattedDate}</time>
        </p>
        <h2><a href="${url}">${escapeHtml(entry.title)}</a></h2>
        <p>${escapeHtml(entry.excerpt)}</p>
      </article>
    </li>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Prodfolio Changelog — What's New</title>
  <meta name="description" content="Every Prodfolio release: new features, improvements, integrations, and fixes." />
  <link rel="canonical" href="${SITE_URL}/changelog" />
  <link rel="alternate" type="application/rss+xml" title="Prodfolio Changelog" href="${SITE_URL}/changelog/rss.xml" />

  <meta property="og:title" content="Prodfolio Changelog" />
  <meta property="og:description" content="Every Prodfolio release: new features, improvements, integrations, and fixes." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${SITE_URL}/changelog" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:site_name" content="Prodfolio" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Prodfolio Changelog" />
  <meta name="twitter:description" content="Every Prodfolio release: new features, improvements, integrations, and fixes." />
  <meta name="twitter:image" content="${OG_IMAGE}" />

  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
</head>
<body>
  <header>
    <h1>Prodfolio Changelog</h1>
    <p>Every meaningful ship — new features, improvements, fixes, and integrations.</p>
    <p><a href="${SITE_URL}/changelog/rss.xml">Subscribe via RSS</a></p>
  </header>
  <ol>
${items}
  </ol>
</body>
</html>`;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const userAgent = (req.headers["user-agent"] as string) || "";
  const slug = req.query.slug as string | undefined;

  if (!isCrawler(userAgent)) {
    const target = slug ? `/changelog/${slug}` : "/changelog";
    res.redirect(302, target);
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");

  if (!slug) {
    res.status(200).send(renderIndex());
    return;
  }

  const entry = sortedEntries.find((e) => e.slug === slug);
  if (!entry) {
    res.redirect(302, `/changelog/${slug}`);
    return;
  }

  res.status(200).send(renderEntry(entry));
}
