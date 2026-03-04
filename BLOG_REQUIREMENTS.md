# Blog Writing Requirements

## Content Strategy

- **Voice:** Frameworks, guides, and honest takes on building a PM career
- **Tone:** Direct, practical, no fluff. Write like you're talking to a smart PM friend — not lecturing
- **Accuracy:** All advice must be honest and grounded in real PM experience. No overpromising, no hype
- **SEO focus:** Target longtail keywords. Every post should answer a specific question someone would search for

## Pre-Writing Research

Before writing, complete these steps:

1. **Define search intent** — What is the reader hoping to find when they search for the target keyword? (informational, how-to, comparison, etc.) Shape the entire post around that intent
2. **Analyze competing content** — Review the top-ranking articles for your target keyword. Identify gaps in their coverage and make sure your post addresses what they miss
3. **Identify keywords** — Choose a primary longtail keyword and 2-3 secondary keywords. These should inform your title, headings, and natural usage throughout the post

## Post Structure

Every blog post should follow this general structure:

1. **Hook** (1-2 paragraphs) — Start with a relatable problem or tension. No throat-clearing intros
2. **Key Takeaways** — Bulleted summary near the top. AI overviews and featured snippets pull from this
3. **Core content** — The main framework, guide, or advice. Use h2s for major sections, h3s for subsections
4. **Common Mistakes / What to Avoid** — Use numbered lists for scannability
5. **Action step** — End with a clear "start here" recommendation. Link to the quiz or how-it-works page where relevant
6. **FAQ section** — 3-5 questions that target related longtail queries. Use h3s for each question so they're parseable by AI and eligible for featured snippets

## Formatting Rules

- **Headings:** Use h2 for major sections, h3 for subsections. Never skip heading levels
- **Lists:** Use numbered lists (`<ol>`) for sequential or ranked items, bullet lists (`<ul>`) for unordered items. Lists are more scannable than bold-lead paragraphs
- **Examples:** Wrap in `<blockquote>` tags. These render with a purple left border and light background
- **Bold:** Use `<strong>` for key terms and emphasis within paragraphs. Don't overuse
- **Italic:** Use `<em>` for definitions, hypothetical quotes, or light emphasis
- **Links:** Link naturally to other Prodfolio pages (quiz, how-it-works, pricing). One link to the product per post is enough — don't be salesy
- **SIGNAL letters:** When referencing SIGNAL framework sections, use purple accent: `<span style="color: #6b4fbb; font-weight: 800;">S</span>`

## SEO Requirements

- **Title:** Include the primary keyword. Add "(With Examples)" or similar qualifier when applicable. Keep under 60 characters for SERP display
- **Slug:** Use hyphens, include primary keyword, keep concise (e.g., `how-to-write-product-management-case-study`)
- **Excerpt:** 1-2 sentences that include the primary keyword and make someone want to click. This appears as the meta description
- **Tags:** 4-6 relevant tags. Include the primary topic, "Product Management", and any frameworks mentioned
- **Category:** One of: "Portfolio Tips", "Job Search", "Career Tips", "PM Advice"
- **FAQ section:** Each question should target a real search query. Use natural language, not keyword-stuffed phrasing
- **Internal links:** Link to at least 2 other Prodfolio pages (quiz, how-it-works, blog posts, etc.)
- **External links:** Include 1-2 links to credible external sources (e.g., SVPG, Lenny's Newsletter, industry reports) where they add value. Builds trust and supports SEO

## AI Friendliness

AI overviews and LLM-powered search pull structured, direct answers. To optimize:

- **Key Takeaways at the top** — Bulleted list that directly answers the title's question
- **Numbered framework overviews** — Before detailed breakdowns, provide a quick numbered summary
- **FAQ with h3 headings** — Each question as its own h3, followed by a concise 2-3 sentence answer
- **Clear definitions** — When introducing a framework or concept, define it in one sentence before expanding
- **Avoid burying the answer** — The first paragraph after any h2 should directly address that section's topic

## Length

- Target **7-10 minute read** (roughly 1,400-2,000 words)
- If a section doesn't show the reader something useful, cut it
- Quality over length — a tight 7-minute post beats a padded 12-minute one

## CTAs

- Blog posts include a **mid-article CTA** (purple banner) that links to the quiz. This is rendered by the BlogPost component after the content — it does not need to be in the HTML content
- A **bottom CTA** (site-wide dark pattern) links to sign-up. This is also handled by the component
- Within the content, link to the **quiz** and **how-it-works** page naturally where relevant. Don't force it

## Technical Notes

- Blog posts are stored in `/src/data/blogPosts.ts` as HTML strings
- Content is rendered via `dangerouslySetInnerHTML` with Tailwind prose classes
- The BlogPost component handles: back link, header, category badge, date, read time, content rendering, mid-article CTA, tags, prev/next navigation, and bottom CTA
- Structured data (Article schema) is generated automatically from post metadata
- Category colors are defined in both `Blog.tsx` (dark mode for listing) and `BlogPost.tsx` (light mode for article page)

## Adding a New Post

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title (With Qualifier)",
  excerpt: "1-2 sentence meta description with primary keyword.",
  date: "YYYY-MM-DD",
  readTime: "X min read",
  category: "Portfolio Tips", // or Job Search, Career Tips, PM Advice
  tags: ["Tag1", "Tag2", "Tag3", "Product Management"],
  content: `
    // HTML content following the structure above
  `,
}
```

Add to the `blogPosts` array in `/src/data/blogPosts.ts`. Posts are automatically sorted by date (newest first) and the first post in the sorted list is featured on the blog listing page.
