/**
 * RSS Feed Generator
 *
 * Generates /public/changelog/rss.xml from src/data/changelog.ts at build time.
 * The feed is consumed by:
 *  - Power users on RSS readers (Feedly, etc.)
 *  - AI search crawlers (PerplexityBot, ChatGPT, etc.) — RSS is a strong recency signal
 *  - Aggregators (changelog.com, Hacker News bots, etc.)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://prodfolio.io';
const FEED_URL = `${SITE_URL}/changelog/rss.xml`;
const FEED_TITLE = 'Prodfolio Changelog';
const FEED_DESCRIPTION =
  'Every Prodfolio release: new features, improvements, integrations, and fixes.';

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function parseChangelogEntries() {
  const file = path.join(__dirname, '../src/data/changelog.ts');
  const content = fs.readFileSync(file, 'utf-8');

  const entries = [];

  // Parse each entry object. We match on the consistent shape used in changelog.ts
  // and extract slug/title/excerpt/date/categories/tags/content.
  const entryRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)+)",\s*excerpt:\s*"((?:[^"\\]|\\.)+)",\s*date:\s*"([^"]+)",(?:[^}]*?categories:\s*\[([^\]]*)\],)?(?:[^}]*?tags:\s*\[([^\]]*)\],)?[\s\S]*?content:\s*`([\s\S]*?)`,?\s*\}/g;

  let match;
  while ((match = entryRegex.exec(content)) !== null) {
    const [, slug, titleRaw, excerptRaw, date, categoriesRaw, tagsRaw, contentRaw] = match;
    const title = titleRaw.replace(/\\"/g, '"');
    const excerpt = excerptRaw.replace(/\\"/g, '"');
    const categories = (categoriesRaw || '')
      .split(',')
      .map((c) => c.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);
    const tags = (tagsRaw || '')
      .split(',')
      .map((t) => t.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);

    entries.push({
      slug,
      title,
      excerpt,
      date,
      categories: categories.length ? categories : ['Update'],
      tags,
      content: contentRaw.trim(),
    });
  }

  return entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function toRFC822(dateStr) {
  // dateStr is YYYY-MM-DD. Set to noon UTC so it's stable across timezones.
  return new Date(`${dateStr}T12:00:00Z`).toUTCString();
}

function generateRss() {
  const entries = parseChangelogEntries();
  const buildDate = new Date().toUTCString();
  const latestDate = entries[0] ? toRFC822(entries[0].date) : buildDate;

  const items = entries
    .map((entry) => {
      const url = `${SITE_URL}/changelog/${entry.slug}`;
      const categoryXml = [...entry.categories, ...entry.tags]
        .map((c) => `      <category>${escapeXml(c)}</category>`)
        .join('\n');

      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRFC822(entry.date)}</pubDate>
      <description>${escapeXml(entry.excerpt)}</description>
${categoryXml}
      <content:encoded><![CDATA[${entry.content}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/changelog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${latestDate}</pubDate>
    <generator>prodfolio-rss</generator>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

const rss = generateRss();
const outputDir = path.join(__dirname, '../public/changelog');
fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, 'rss.xml');
fs.writeFileSync(outputPath, rss);

const entryCount = (rss.match(/<item>/g) || []).length;
console.log(`✓ RSS feed generated with ${entryCount} entries`);
console.log(`✓ Written to: ${outputPath}`);
