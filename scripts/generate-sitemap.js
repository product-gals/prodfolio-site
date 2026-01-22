/**
 * Sitemap Generator Script
 *
 * Generates sitemap.xml with current dates at build time.
 * Run with: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://prodfolio.io';
const TODAY = new Date().toISOString().split('T')[0];

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/features', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'monthly' },
  { path: '/examples', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/podcast', priority: '0.7', changefreq: 'weekly' },
  { path: '/for-career-changers', priority: '0.8', changefreq: 'monthly' },
  { path: '/for-hiring-managers', priority: '0.7', changefreq: 'monthly' },
  { path: '/quiz', priority: '0.7', changefreq: 'monthly' },
  { path: '/partners', priority: '0.6', changefreq: 'monthly' },
  { path: '/partnerships', priority: '0.6', changefreq: 'monthly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
];

// Extract episode data from episodes.ts
function getEpisodes() {
  const episodesPath = path.join(__dirname, '../src/data/episodes.ts');
  const content = fs.readFileSync(episodesPath, 'utf-8');

  const episodes = [];

  // Match episode objects - find slug and publishedAt
  const slugMatches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
  const dateMatches = content.matchAll(/publishedAt:\s*["']([^"']+)["']/g);

  const slugs = [...slugMatches].map(m => m[1]);
  const dates = [...dateMatches].map(m => m[1]);

  // Pair them up
  for (let i = 0; i < slugs.length; i++) {
    episodes.push({
      slug: slugs[i],
      publishedAt: dates[i] || TODAY
    });
  }

  return episodes;
}

function generateSitemap() {
  const episodes = getEpisodes();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Main pages (Generated: ${TODAY}) -->`;

  // Add static pages
  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`;
  }

  xml += `

  <!-- Podcast Episodes -->`;

  // Add episode pages
  for (const episode of episodes) {
    xml += `
  <url>
    <loc>${SITE_URL}/podcast/episodes/${episode.slug}</loc>
    <lastmod>${episode.publishedAt}</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>`;
  }

  xml += `

</urlset>
`;

  return xml;
}

// Generate and write sitemap
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`✓ Sitemap generated with ${staticPages.length} static pages`);
console.log(`✓ Found ${getEpisodes().length} podcast episodes`);
console.log(`✓ Written to: ${outputPath}`);
