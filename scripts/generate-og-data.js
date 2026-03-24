/**
 * OG Data Generator Script
 *
 * Extracts episode metadata from episodes.ts into a JSON file
 * that the Vercel middleware can read to serve proper OG tags
 * to social media crawlers.
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
