export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-write-product-management-case-study",
    title: "How to Write a Product Management Case Study (With Examples)",
    excerpt: "Most PM case studies read like feature lists. Here's how to use the SIGNAL framework to write one that actually shows how you think — and why that matters to hiring managers.",
    date: "2026-03-04",
    readTime: "9 min read",
    category: "Portfolio Tips",
    tags: ["Case Studies", "PM Portfolio", "SIGNAL Framework", "Hiring", "Product Management"],
    content: `
<p>You shipped a feature. Users loved it. Revenue went up. Great — now try explaining that in a way that makes a hiring manager want to interview you.</p>

<p>That's the hard part. Most PM case studies either read like a résumé bullet or turn into a wall of text no one finishes. The problem isn't your experience — it's the structure. A good case study shows <strong>how you think</strong>, not just what you shipped.</p>

<p>This guide walks you through the SIGNAL framework — a six-part structure designed specifically for PM case studies — with real examples for each section.</p>

<h2>Key Takeaways</h2>

<ul>
<li>A PM case study should demonstrate your <strong>thinking process</strong>, not just your results</li>
<li>The <strong>SIGNAL framework</strong> (Situation, Insight, Goals, Navigation, Achievement, Learnings) maps to what hiring managers actually evaluate</li>
<li>Include the messy middle — trade-offs, constraints, and things that didn't go as planned make your case study more credible</li>
<li>Use first person ("I led") instead of hiding behind "we decided"</li>
<li>You don't need a perfect project — small wins and honest reflections are just as compelling</li>
</ul>

<h2>Why Most PM Case Studies Miss the Mark</h2>

<p><strong>They focus on what shipped, not how you thought.</strong> Hiring managers can't get your decision-making process from a résumé. That's what a case study is for.</p>

<p><strong>They skip the messy middle.</strong> The research dead ends, the stakeholder who disagreed, the scope cut you had to make — that's where your PM thinking lives.</p>

<p><strong>They bury the impact — or overinflate it.</strong> You need to be specific about what moved and honest about your role in moving it.</p>

<h2>The SIGNAL Framework</h2>

<p>SIGNAL is a six-part structure designed specifically for PM case studies. Each section maps to what hiring managers actually evaluate. <a href="/how-it-works">Prodfolio builds this framework directly into its case study builder</a>, so you're guided through each step.</p>

<p>Here's the framework at a glance:</p>

<ol>
<li><strong>Situation</strong> — Set the stage and explain why the problem mattered</li>
<li><strong>Insight</strong> — Show the research and data behind your approach</li>
<li><strong>Goals</strong> — Define specific targets and constraints</li>
<li><strong>Navigation</strong> — Walk through your decisions and trade-offs</li>
<li><strong>Achievement</strong> — Prove your impact with honest metrics</li>
<li><strong>Learnings</strong> — Reflect on what you'd do differently</li>
</ol>

<p>Let's break each one down with examples.</p>

<h3><span style="color: #6b4fbb; font-weight: 800;">S</span> &mdash; Situation</h3>
<p><em>Set the stage. What was the challenge or opportunity? Why did it matter?</em></p>

<p>Don't just say "we needed to improve onboarding." Explain <em>why</em> — what data surfaced the problem and why the company cared enough to invest in solving it.</p>

<blockquote><strong>Example:</strong> "Our self-serve onboarding had a 62% drop-off at step 3. Support tickets about setup increased 40% QoQ. For a company betting on product-led growth, this was a blocker."</blockquote>

<h3><span style="color: #6b4fbb; font-weight: 800;">I</span> &mdash; Insight</h3>
<p><em>Show your discovery process. What research or data led to your approach?</em></p>

<p>This is where you prove your solution wasn't a guess. What data did you look at? What did users tell you? What surprised you?</p>

<blockquote><strong>Example:</strong> "Session recordings showed users weren't confused by the UI — they were confused by the <em>decisions</em> it asked them to make. In 5 interviews, every person said some version of 'I didn't know which option to pick, so I left.'"</blockquote>

<h3><span style="color: #6b4fbb; font-weight: 800;">G</span> &mdash; Goals</h3>
<p><em>Define what success looks like. What were you trying to achieve?</em></p>

<p>"Improve onboarding" is a theme, not a goal. Be specific about your targets <em>and</em> your constraints.</p>

<blockquote><strong>Example:</strong> "Reduce step-3 drop-off from 62% to under 40% within 6 weeks. Decrease setup support tickets by 25%. Hard constraint: no changes to the underlying integration architecture."</blockquote>

<h3><span style="color: #6b4fbb; font-weight: 800;">N</span> &mdash; Navigation</h3>
<p><em>Explain your approach. What decisions and trade-offs did you make?</em></p>

<p>This is the section hiring managers care about most. Don't describe what you built — describe what you <em>decided</em> and what you decided <em>against</em>.</p>

<blockquote><strong>Example:</strong> "We explored three approaches: a guided wizard (too long to build), an interactive questionnaire (added complexity), and smart defaults based on signup data. We shipped defaults first, with a 'customize' path for power users. Our engineering lead pushed for the wizard — I facilitated a trade-off discussion and we agreed to revisit if customization rates were high."</blockquote>

<h3><span style="color: #6b4fbb; font-weight: 800;">A</span> &mdash; Achievement</h3>
<p><em>Prove your impact. What metrics moved?</em></p>

<p>Be honest. If results were mixed, say so — it's more credible than a highlight reel.</p>

<blockquote><strong>Example:</strong> "Step-3 drop-off decreased from 62% to 34%. Support tickets dropped 31%. But overall onboarding completion only increased 8% — suggesting additional drop-off points we hadn't addressed yet."</blockquote>

<h3><span style="color: #6b4fbb; font-weight: 800;">L</span> &mdash; Learnings</h3>
<p><em>Reflect and grow. What would you do differently?</em></p>

<p>Most PMs skip this section. Don't. It's where you show self-awareness — something that's hard to evaluate in a standard interview.</p>

<blockquote><strong>Example:</strong> "I'd involve support earlier — they had insights that would have accelerated research by a week. I also learned that smart defaults only work when users trust the system's recommendations. We added tooltip explanations in a fast-follow, and default-path engagement increased another 12%."</blockquote>

<h2>Common Mistakes to Avoid</h2>

<ol>
<li><strong>Hiding behind "we"</strong> — Make sure the reader can tell what <em>you</em> specifically did. "I led the research" is more useful than "we decided."</li>
<li><strong>Including every detail</strong> — A case study isn't a retro. If a section doesn't show your thinking, your impact, or your growth — cut it.</li>
<li><strong>Waiting for a "perfect" project</strong> — Some of the best case studies are about small wins or things that didn't go as planned. What matters is how you tell the story.</li>
</ol>

<h2>Start With What You Have</h2>

<p>Pick one project where you had clear ownership and can speak to the thinking behind the decisions. Use SIGNAL to structure it, and keep editing until every section earns its place.</p>

<p>If you're staring at a blank page, <a href="/quiz">take the quiz</a> to figure out what type of portfolio fits your career stage — and what kind of case studies will make the biggest impact for where you're headed.</p>

<h2>Frequently Asked Questions</h2>

<h3>How long should a PM case study be?</h3>
<p>Aim for 500–800 words per case study. That's enough to show depth without losing the reader. If you're going longer, you're probably including details that don't earn their place.</p>

<h3>How many case studies should I have in my portfolio?</h3>
<p>Two to three strong case studies is better than five mediocre ones. Focus on variety — different types of products, different stages of the lifecycle, or different PM skills on display.</p>

<h3>What if I can't share specific metrics due to NDA?</h3>
<p>Use directional language and percentages instead of absolute numbers. "Reduced churn by 18%" is fine even if you can't say the exact revenue figure. You can also describe the <em>magnitude</em> of impact without revealing proprietary data.</p>

<h3>Can I write a case study about a side project?</h3>
<p>Absolutely. Side projects can be great case studies, especially for aspiring PMs or career changers. The SIGNAL framework works just as well — you still had a situation, made decisions, and learned something.</p>
    `,
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
