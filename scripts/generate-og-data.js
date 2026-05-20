/**
 * OG Data Generator Script
 *
 * Extracts episode and changelog metadata from data files into JSON
 * files that Vercel serverless functions read to serve fully-rendered
 * HTML to social bots and AI search crawlers.
 *
 * Outputs:
 *  - public/og/episodes.json  — episodes for /api/og
 *  - public/og/changelog.json — changelog entries for /api/changelog
 *
 * Run with: node scripts/generate-og-data.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const episodesFile = path.join(__dirname, '..', 'src', 'data', 'episodes.ts');
const outputFile = path.join(__dirname, '..', 'public', 'og', 'episodes.json');

const content = fs.readFileSync(episodesFile, 'utf-8');

// Parse episode objects from the TypeScript file
const episodes = [];
const episodeRegex = /\{\s*id:\s*"(\d+)",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*episodeNumber:\s*"([^"]+)",[\s\S]*?guest:\s*\{[^}]*name:\s*"([^"]+)"[\s\S]*?\},\s*description:\s*"([^"]*)"[\s\S]*?youtubeId:\s*"([^"]*)"[\s\S]*?publishedAt:\s*"([^"]*)"/g;

let match;
while ((match = episodeRegex.exec(content)) !== null) {
  const [, id, slug, title, episodeNumber, guestName, description, youtubeId, publishedAt] = match;

  // Check if this episode has a custom thumbnail import
  const hasCustomThumbnail = fs.existsSync(path.join(__dirname, '..', 'public', 'og', `${slug}.png`)) ||
                              fs.existsSync(path.join(__dirname, '..', 'public', 'og', `${slug}.jpg`));

  let ogImage;
  if (hasCustomThumbnail) {
    const ext = fs.existsSync(path.join(__dirname, '..', 'public', 'og', `${slug}.png`)) ? 'png' : 'jpg';
    ogImage = `https://prodfolio.io/og/${slug}.${ext}`;
  } else if (youtubeId) {
    ogImage = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  } else {
    ogImage = 'https://prodfolio.io/social-share.png';
  }

  episodes.push({
    slug,
    title: `${title} | The Product Pivot Podcast`,
    description,
    guestName,
    episodeNumber,
    ogImage,
    publishedAt,
  });
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(episodes, null, 2));
console.log(`Generated OG data for ${episodes.length} episodes → ${outputFile}`);

// --- Changelog ----------------------------------------------------------

const changelogFile = path.join(__dirname, '..', 'src', 'data', 'changelog.ts');
const changelogOutputFile = path.join(__dirname, '..', 'public', 'og', 'changelog.json');

const changelogContent = fs.readFileSync(changelogFile, 'utf-8');

const changelogEntries = [];
const changelogRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)+)",\s*excerpt:\s*"((?:[^"\\]|\\.)+)",\s*date:\s*"([^"]+)",(?:\s*version:\s*"([^"]*)",)?\s*categories:\s*\[([^\]]*)\],\s*tags:\s*\[([^\]]*)\],(?:\s*content:\s*`([\s\S]*?)`,?|\s*featuredImage:\s*"([^"]*)",\s*content:\s*`([\s\S]*?)`,?)\s*\}/g;

let changelogMatch;
while ((changelogMatch = changelogRegex.exec(changelogContent)) !== null) {
  const [, slug, titleRaw, excerptRaw, date, version, categoriesRaw, tagsRaw, content1, featuredImage, content2] = changelogMatch;
  const categories = categoriesRaw
    .split(',')
    .map((c) => c.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
  const tags = tagsRaw
    .split(',')
    .map((t) => t.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
  const content = (content1 || content2 || '').trim();

  changelogEntries.push({
    slug,
    title: titleRaw.replace(/\\"/g, '"'),
    excerpt: excerptRaw.replace(/\\"/g, '"'),
    date,
    version: version || null,
    categories,
    tags,
    featuredImage: featuredImage || null,
    content,
  });
}

fs.writeFileSync(changelogOutputFile, JSON.stringify(changelogEntries, null, 2));
console.log(`Generated OG data for ${changelogEntries.length} changelog entries → ${changelogOutputFile}`);
