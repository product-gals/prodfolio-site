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
    slug: "how-to-write-a-pm-case-study-that-gets-you-hired",
    title: "How to Write a PM Case Study That Actually Gets You Hired",
    excerpt:
      "Most PM case studies are boring walls of text that hiring managers skim past. Here's how to write one that makes them stop, read, and call you.",
    date: "2025-11-15",
    readTime: "8 min read",
    category: "Portfolio Tips",
    tags: ["case study", "PM portfolio", "job search", "product management"],
    content: `
<p>Here's a truth most PM job seekers don't want to hear: your case study isn't as good as you think it is.</p>

<p>Not because you haven't done great work. You probably have. But great work, buried in dense paragraphs without context or structure, reads like an internal memo — not like a portfolio piece that earns interviews.</p>

<p>I've talked to dozens of hiring managers at companies ranging from seed-stage startups to Fortune 500s. The feedback is remarkably consistent: most PM case studies fail in the same predictable ways. This guide is about fixing that.</p>

<h2>Why Most Case Studies Fall Flat</h2>

<p>The biggest mistake PMs make is writing case studies <em>for themselves</em> — to document what happened — rather than writing them <em>for a hiring manager</em> who needs to quickly assess whether you can think strategically, communicate clearly, and drive results.</p>

<p>Hiring managers are busy. They're reviewing 50+ applications. They don't have time to decode jargon-heavy paragraphs or hunt for the actual outcome buried in paragraph seven.</p>

<p>A great case study answers three questions fast:</p>
<ol>
  <li>What was the real problem you were solving?</li>
  <li>How did you think through it?</li>
  <li>What actually happened as a result?</li>
</ol>

<p>If a reader can't answer those questions within 60 seconds, your case study needs work.</p>

<h2>The Structure That Works</h2>

<p>Think of your case study like a story with a beginning, middle, and end — but with one important addition: your thinking process needs to be visible throughout.</p>

<h3>1. Start with Context, Not Background</h3>

<p>There's a difference between <em>context</em> and <em>background</em>. Background is a history lesson. Context is the information someone needs to understand the decision-making that follows.</p>

<p>Don't start with: "Our company was founded in 2018 and operates in the B2B SaaS space..."</p>

<p>Start with: "In Q3 2023, our onboarding completion rate dropped 18% month-over-month. We had a 90-day runway to fix it before our renewal cycle."</p>

<p>The second version creates urgency. It tells the reader exactly what was at stake. Now they're invested.</p>

<h3>2. Show Your Problem Definition Process</h3>

<p>This is where most PMs skip too fast. They jump from "we noticed a problem" to "we built a solution." But the most important PM skill — identifying the <em>right</em> problem to solve — is invisible in that jump.</p>

<p>Show how you diagnosed the problem:</p>
<ul>
  <li>What data did you look at first?</li>
  <li>What hypotheses did you form?</li>
  <li>Who did you talk to? What did you learn?</li>
  <li>What did you initially think the problem was — and were you wrong?</li>
</ul>

<p>That last point is gold. Showing that your initial hypothesis was incorrect and explaining how you updated your thinking signals intellectual honesty and strong analytical skills.</p>

<h3>3. Explain Your Prioritization Decisions</h3>

<p>You had options. Why did you choose the path you did? This is where PMs with real product intuition stand out from those who just execute.</p>

<p>Don't just say "we decided to focus on X." Say: "We had three potential solutions. Option A would have taken 6 weeks but addressed the root cause. Option B was a 2-week band-aid. Option C required cross-functional alignment we didn't have. We chose A because..."</p>

<p>Showing the alternatives you <em>didn't</em> choose — and why — demonstrates strategic thinking.</p>

<h3>4. Make the Outcome Undeniable</h3>

<p>Quantify everything you can, but be honest about what you can and can't claim credit for. "Onboarding completion rate increased from 42% to 67% within 60 days of launch, contributing to a 12% reduction in churn that quarter" is compelling. "We improved onboarding" is forgettable.</p>

<p>If you can't share specific numbers for confidentiality reasons, show relative impact: "reduced time-to-value by approximately 40%" or "feature adoption exceeded our 30-day target by 2x."</p>

<h2>The Three Formats That Work Best</h2>

<p>Different companies and roles respond to different formats. Here's how to think about it:</p>

<h3>The Narrative Format</h3>
<p>Best for: companies that value communication and storytelling, consumer products roles.</p>
<p>Structure: Problem → Exploration → Key Insight → Decision → Outcome → What I'd Do Differently</p>

<h3>The STAR-PM Format</h3>
<p>Best for: enterprise companies, structured interviews, technical PM roles.</p>
<p>Structure: Situation → Task → Action (with explicit reasoning) → Result → Learning</p>

<h3>The Problem-Solution Format</h3>
<p>Best for: startups, growth roles, data-heavy environments.</p>
<p>Structure: Metric that needed to move → Root cause analysis → Hypothesis → Experiment → Result → Next steps</p>

<h2>What to Include (And What to Cut)</h2>

<p><strong>Include:</strong></p>
<ul>
  <li>The constraints you were operating under (time, resources, org dynamics)</li>
  <li>How you got stakeholder alignment (and what friction you navigated)</li>
  <li>What you'd do differently with hindsight</li>
  <li>Any data visualizations, wireframes, or documents you can share</li>
</ul>

<p><strong>Cut:</strong></p>
<ul>
  <li>Jargon and buzzwords ("leveraged synergies," "user-centric approach")</li>
  <li>Everything your entire team did — focus on your specific contribution</li>
  <li>The full product timeline — stick to the decisions that mattered</li>
  <li>Anything you can't explain simply to a non-PM</li>
</ul>

<h2>One Final Rule</h2>

<p>Read your case study out loud. If you stumble over a sentence, rewrite it. If a paragraph takes more than 30 seconds to read, break it up. If you're bored reading your own work, a hiring manager will be bored too.</p>

<p>Your case study is often the first real signal of how you think and communicate. Make it a signal worth sending.</p>
    `,
  },
  {
    slug: "5-things-hiring-managers-look-for-in-a-product-portfolio",
    title: "5 Things Hiring Managers Actually Look For in a PM Portfolio",
    excerpt:
      "We asked hiring managers at top tech companies what makes a product portfolio stand out — or get skipped. Here's what they told us.",
    date: "2025-10-28",
    readTime: "6 min read",
    category: "Job Search",
    tags: ["hiring manager", "PM portfolio", "product management", "interviews"],
    content: `
<p>We surveyed and interviewed 30 hiring managers at companies across startup, scale-up, and enterprise stages. We asked one question: when you look at a PM's portfolio, what actually makes you want to move them forward?</p>

<p>The answers were consistent, and some of them might surprise you.</p>

<h2>1. Evidence of Judgment, Not Just Execution</h2>

<p>The most common thing hiring managers said they were looking for wasn't impressive launches or big metrics — it was evidence that the candidate could make good decisions under uncertainty.</p>

<p>"I want to see how you think, not just what you shipped," one Senior Director of Product at a Series B startup told us. "Anyone can write 'launched feature X, improved Y by Z%.' What I'm looking for is: did you make the right call? And how do you know?"</p>

<p>This means your portfolio needs to show the forks in the road — the moments where you had multiple options and had to choose. What was your framework for deciding? What information did you use? What did you rule out?</p>

<h2>2. Honest Reflection on What Didn't Work</h2>

<p>This one surprises candidates. Hiring managers actually want to see failures.</p>

<p>Not failures presented as "here's where I messed up" — but failures presented as "here's what I learned and how it changed how I work." The ability to reflect honestly and update your approach is one of the hardest things to assess in a candidate. A portfolio that shows this is rare and powerful.</p>

<p>Practically: add a "What I'd Do Differently" section to at least one case study. Keep it honest. Don't say "I'd communicate more" — that's a non-answer. Say "I assumed the data science team could move faster than they could. In hindsight, I'd have done a technical feasibility check before committing to stakeholders."</p>

<h2>3. Clear Problem Framing</h2>

<p>A shocking number of PM portfolios skip straight to the solution without properly establishing what problem was being solved and why it mattered.</p>

<p>Hiring managers notice. If your case study opens with "we built a new onboarding flow," the first question in a reader's mind is: why? What was broken? What was the cost of not fixing it? Who cared?</p>

<p>Strong problem framing includes:</p>
<ul>
  <li>The business context (what was at stake)</li>
  <li>The user context (who was affected and how)</li>
  <li>How you validated this was the right problem to solve</li>
</ul>

<p>"I can tell within the first paragraph whether someone actually diagnosed the problem or just responded to a request," one VP of Product told us. "The ones who diagnosed it are always more interesting to talk to."</p>

<h2>4. Specificity Over Scope</h2>

<p>Many PMs make the mistake of trying to cram their entire product career into each case study. They describe team-wide initiatives, multi-year roadmaps, and organization-spanning projects — and in doing so, make it impossible to tell what they specifically contributed.</p>

<p>Hiring managers consistently prefer depth over breadth. One thorough case study where your thinking is clear is worth more than three high-level summaries where your role is unclear.</p>

<p>Be explicit about your scope: "I owned the core onboarding flow from discovery to launch. The growth team owned the acquisition funnel separately." Clarity about boundaries isn't a weakness — it's self-awareness.</p>

<h2>5. Presentation That Shows You Care</h2>

<p>This last one is more tactical, but it matters: how your portfolio looks signals something about how you'll show up at work.</p>

<p>This doesn't mean you need a design-heavy, pixel-perfect portfolio. It means: organized content, scannable structure, no typos, and a consistent format across case studies. It means the portfolio looks like you invested real time in it — because you're asking someone to invest their time in you.</p>

<p>"A Notion doc with walls of text in inconsistent fonts says something," a Head of Product at a growth-stage SaaS company told us. "It says: this person treats their portfolio as an afterthought. That's not who I want on my team."</p>

<h2>The Underlying Theme</h2>

<p>Looking across all five signals, there's a common thread: hiring managers are trying to simulate working with you. They want to know — would I trust this person's judgment? Would I understand their communication? Would they make good decisions when I'm not in the room?</p>

<p>Your portfolio's job is to answer yes to all three of those questions before the first interview.</p>
    `,
  },
  {
    slug: "breaking-into-product-management-career-changers-guide",
    title: "Breaking Into Product Management: The Career Changer's Honest Guide",
    excerpt:
      "No PM title, no problem — if you know how to position what you've actually done. A guide for career changers who are done waiting for permission.",
    date: "2025-10-10",
    readTime: "10 min read",
    category: "Career Tips",
    tags: ["career change", "break into PM", "product management", "career advice"],
    content: `
<p>Let's skip the fluff. You've read the "how to break into PM" articles. You know the standard advice: network, do side projects, get a PMP certification, take an online course, volunteer to lead a cross-functional initiative at your current job.</p>

<p>Some of that is useful. A lot of it is noise. And almost none of it addresses the actual hardest part of the career change: convincing a hiring manager to take a chance on someone without the title on their resume.</p>

<p>This guide is about that part.</p>

<h2>The Real Barrier (It's Not What You Think)</h2>

<p>Most career changers assume the barrier is experience — that they simply don't have enough of it to be considered. But that's not quite right.</p>

<p>The real barrier is translation. You probably have a lot of the experience that makes a good PM. You've talked to customers, made prioritization decisions, worked with engineers or designers, dealt with ambiguity, and shipped something. You just haven't described it using PM language, in a PM context, for a PM audience.</p>

<p>The job is to translate — clearly, specifically, and without over-claiming.</p>

<h2>Map Your Experience to PM Skills</h2>

<p>Product management breaks down into a relatively small number of core skills:</p>
<ul>
  <li>Understanding users and their problems</li>
  <li>Prioritizing under constraints</li>
  <li>Working across functions without authority</li>
  <li>Making decisions with incomplete information</li>
  <li>Communicating strategy clearly</li>
  <li>Measuring and learning from outcomes</li>
</ul>

<p>Before you write a single line of your application materials, do this exercise: for each of these skills, write down two or three specific examples from your career where you demonstrated it. Don't filter based on whether it sounds "PM-y enough." Filter based on whether it actually happened.</p>

<p>You'll find more than you expect.</p>

<h2>The Specific Translations That Work Best</h2>

<p><strong>From Engineering:</strong> You've built products. You understand technical constraints, feasibility, and the real cost of scope. Lean into your ability to be a technical PM who doesn't need things explained twice. Show that you've made product decisions — what to build, what not to build, what to defer — not just implementation decisions.</p>

<p><strong>From Design:</strong> You've done user research, you think in flows and systems, and you know what "good" looks like. Lean into customer empathy and your ability to define problems before jumping to solutions. Show that you've influenced product direction, not just visual execution.</p>

<p><strong>From Marketing:</strong> You've defined audiences, tested messaging, and measured what moves people. Lean into your understanding of positioning and your data fluency. Show that you've worked backward from business metrics to product decisions.</p>

<p><strong>From Operations / Business Analyst:</strong> You've diagnosed process problems, mapped workflows, and worked with data. Lean into your analytical rigor and cross-functional experience. Show that you've identified root causes and driven solutions, not just reported findings.</p>

<p><strong>From Customer Success / Support:</strong> You talk to customers every day. You know their language, their frustrations, and their workarounds. Lean into your user insight and your ability to translate qualitative feedback into product decisions. Show specific examples of insights you surfaced that changed what got built.</p>

<h2>Build a Portfolio Before You Have the Title</h2>

<p>The single most effective thing a career changer can do is build a portfolio that demonstrates PM thinking — even without a PM title.</p>

<p>This doesn't mean fake projects or hypothetical case studies (though those can supplement). It means taking the real work you've done and presenting it the way a PM would: problem, approach, decision, outcome, learning.</p>

<p>For example: if you're a customer success manager who identified a pattern in support tickets that led to a product change, that's a PM case study. Write it up. Show the data you used, the recommendation you made, who you presented it to, and what shipped as a result.</p>

<p>That's product management. It just happened without the title.</p>

<h2>Who to Target (And Who Not To)</h2>

<p>Some companies will almost never hire a PM without prior PM experience. Large tech companies with competitive PM programs, for example, often have more PM candidates than they can handle. Competing there without the title is an uphill battle with low expected value.</p>

<p>Better targets for career changers:</p>
<ul>
  <li><strong>Early-stage startups</strong> — they care more about scrappiness, intelligence, and domain knowledge than pedigree</li>
  <li><strong>Companies where you have domain expertise</strong> — if you're a nurse transitioning to health tech PM, you're suddenly more qualified than most candidates, not less</li>
  <li><strong>Internal transfers</strong> — many companies are more willing to give someone a shot when they already know and trust them</li>
  <li><strong>PM-adjacent roles first</strong> — associate PM programs, product ops, or growth analyst roles can serve as a bridge</li>
</ul>

<h2>The Application Strategy That Works</h2>

<p>Volume doesn't work for career changers. Sending 100 applications to companies that won't consider you is a waste of energy that makes you feel busy without making progress.</p>

<p>Focus on:</p>
<ol>
  <li><strong>15-20 targeted companies</strong> where your background is an asset, not an obstacle</li>
  <li><strong>A warm connection at each</strong> — not someone who will magically get you the job, but someone who will confirm your application is in the pile and has a face attached to it</li>
  <li><strong>A portfolio that does the translation work</strong> — so the hiring manager doesn't have to do it themselves</li>
</ol>

<p>Career changers who get into PM aren't the ones who applied the most. They're the ones who made the best case for themselves to the right people.</p>

<h2>One Last Thing</h2>

<p>Stop waiting until you feel ready. You won't feel ready — not fully, not before your first PM interview, and probably not before your first PM job. That's normal. The goal isn't to feel ready. The goal is to be compelling enough that someone gives you the chance to grow into the role.</p>

<p>You've been doing parts of this job already. Now make that visible.</p>
    `,
  },
  {
    slug: "pm-portfolio-mistakes-that-cost-you-interviews",
    title: "PM Portfolio Mistakes That Are Costing You Interviews",
    excerpt:
      "If you're getting application silence, your portfolio might be the problem. Here are the most common mistakes — and how to fix them fast.",
    date: "2025-09-20",
    readTime: "7 min read",
    category: "Portfolio Tips",
    tags: ["PM portfolio", "job search", "product management", "mistakes"],
    content: `
<p>You've applied to 40 companies. You've gotten 3 responses. Your resume is solid. Your LinkedIn is polished. What's going wrong?</p>

<p>In many cases, it's the portfolio. Either what's in it, what's missing from it, or how it's being presented. Here are the mistakes we see most often — and exactly how to fix them.</p>

<h2>Mistake 1: Treating the Portfolio as a Resume Appendix</h2>

<p>A resume and a portfolio are different tools for different jobs. Your resume signals that you've had PM experience. Your portfolio answers the much harder question: <em>are you a good PM?</em></p>

<p>Too many PMs fill their portfolio with bullet points that echo their resume. Job title, responsibilities, key achievements. This completely misses the point.</p>

<p><strong>Fix it:</strong> For each role in your portfolio, pick one or two specific projects and write about the thinking behind them. What problem were you solving? What were the options? Why did you decide what you decided? What did you learn? That's what makes a portfolio valuable.</p>

<h2>Mistake 2: Missing or Vague Metrics</h2>

<p>"Improved user engagement" is not a metric. "Increased newsletter subscriber conversion rate from 12% to 19% over one quarter" is a metric.</p>

<p>Vague outcomes make it impossible for a hiring manager to assess impact. They know you worked on something. They don't know if it mattered.</p>

<p><strong>Fix it:</strong> For every case study, answer: what moved? By how much? Over what time period? What was the baseline? If you can't share exact numbers for confidentiality reasons, use directional language with context: "reduced support ticket volume by approximately 30%," or "feature saw 2x adoption of our projected target within the first month."</p>

<h2>Mistake 3: Hiding Your Individual Contribution</h2>

<p>PM work is inherently collaborative. But when case studies say "we did this" and "the team decided that" throughout, it's impossible to know what role you specifically played.</p>

<p>Hiring managers aren't evaluating your team — they're evaluating you. If your contribution is invisible, so is your value.</p>

<p><strong>Fix it:</strong> Be explicit about your role in each decision. "I owned the discovery phase and presented three problem framings to leadership." "I made the call to deprioritize Feature B after data showed lower-than-expected engagement." Use "I" where it's accurate, and use "we" only when a decision was genuinely collective — then explain your role in reaching it.</p>

<h2>Mistake 4: Starting With the Solution</h2>

<p>A case study that starts with "I led the redesign of our checkout flow" has already failed. Why was the checkout flow a problem? How much was it costing the business? Who was affected and how? What made you sure this was the right thing to work on?</p>

<p>Solutions without problems aren't compelling. They're just features.</p>

<p><strong>Fix it:</strong> Open every case study with the business or user problem — not the solution. Spend more time than you think you should on the problem definition section. It's where your analytical thinking gets demonstrated.</p>

<h2>Mistake 5: Not Showing Stakeholder Navigation</h2>

<p>Product management is fundamentally about working across functions without authority. But most portfolios ignore this entirely and focus only on the "what we built" narrative.</p>

<p>Hiring managers want to know: how do you work with engineers who push back? How do you handle executives who want something different? How do you get design, data, and legal aligned when they each have competing priorities?</p>

<p><strong>Fix it:</strong> Add a section to at least one case study called "Stakeholder Alignment" or "How We Got There." Describe a moment of real friction — a disagreement, a constraint, a competing priority — and how you worked through it. This is where senior PM candidates especially differentiate themselves.</p>

<h2>Mistake 6: A Portfolio That's Hard to Navigate</h2>

<p>If a hiring manager has to hunt for your case studies, work through dense walls of text, or click through six screens before they find your best work — they won't. They'll just move on.</p>

<p>Your portfolio should be immediately scannable. Within 30 seconds, a reader should know who you are, what you've done, and where to click for more detail.</p>

<p><strong>Fix it:</strong> Lead with a clear introduction (two or three sentences about who you are and what you bring). List your case studies prominently. Each case study should have a headline, a one-line summary, and clear sections with headers. Use formatting to guide the eye — short paragraphs, bullet points where appropriate, and visual breaks between sections.</p>

<h2>Mistake 7: Forgetting to Make the Ask</h2>

<p>Your portfolio is a sales document. And like every good sales document, it needs a call to action.</p>

<p>Too many portfolios just... end. No invitation to connect, no clear path to the next step, no contact information or link to your LinkedIn.</p>

<p><strong>Fix it:</strong> End your portfolio with a simple, direct closing: "I'm currently exploring senior PM opportunities in B2B SaaS. If you'd like to talk, reach me at [email] or connect with me on LinkedIn."</p>

<p>Don't make someone work to get in touch with you. Make it the easiest thing they do all day.</p>
    `,
  },
  {
    slug: "from-notion-to-professional-pm-portfolio",
    title: "From Notion to Professional: Why Your DIY Portfolio Is Holding You Back",
    excerpt:
      "Notion portfolios became popular because they're easy. But easy isn't the same as effective. Here's what's actually holding back DIY PM portfolios — and what to do instead.",
    date: "2025-09-05",
    readTime: "6 min read",
    category: "PM Advice",
    tags: ["PM portfolio", "Notion", "career advice", "product management"],
    content: `
<p>Notion changed the game for knowledge workers. It's genuinely useful for a lot of things: personal notes, team wikis, project tracking, quick documentation.</p>

<p>It's not great as a professional portfolio. And if you've been sending hiring managers to your Notion page, it might be costing you more than you realize.</p>

<p>Here's why — and what to do about it.</p>

<h2>The Problem Isn't Notion — It's How We Use It</h2>

<p>To be fair: a Notion portfolio done well is better than most alternatives done poorly. But "done well" is the hard part, and most Notion portfolios aren't.</p>

<p>The typical Notion portfolio has a few recurring problems:</p>

<ul>
  <li>It looks like a work doc, not a professional presentation. Notion's default styles were designed for internal documentation, not external audiences.</li>
  <li>It's often not properly organized for a first-time visitor. The creator knows where everything is. The hiring manager doesn't.</li>
  <li>Load times and mobile experience are unpredictable. Many Notion pages are slow to load and hard to read on a phone.</li>
  <li>It signals effort level. A Notion page says "I put a few hours into this." A well-designed portfolio says "I care about the quality of my work."</li>
</ul>

<h2>What Hiring Managers Are Actually Seeing</h2>

<p>When a hiring manager clicks a portfolio link, the first impression isn't your content — it's the presentation. Before they've read a single word of your case study, they've already formed an opinion based on how the page looks, loads, and navigates.</p>

<p>A Notion doc, especially a public-facing one with default styling, often reads as low-effort. That's not a fair judgment — you may have spent hours on the content — but it's the reality of how visual presentation shapes perception.</p>

<p>Compare that to a structured, clearly designed portfolio page. Same content. Completely different first impression. The person behind the second one looks more serious, more professional, and — rightly or wrongly — more competent.</p>

<h2>The Portfolio as a Product, Not a Document</h2>

<p>Here's a reframe that might help: your portfolio is a product. You are the PM. Your target user is a hiring manager with limited time and attention. What does that user need? What's their job to be done?</p>

<p>A hiring manager reviewing portfolios needs to quickly assess whether someone can do the job and would be good to work with. They need scannable structure, clear writing, specific evidence, and a sense of your personality.</p>

<p>A Notion doc treats this as a documentation problem. A well-built portfolio treats it as a product problem.</p>

<h2>What Actually Makes a Portfolio Work</h2>

<p>You don't need a fancy custom website built from scratch. You need a portfolio that does a few things really well:</p>

<p><strong>Clear navigation.</strong> A visitor should immediately understand what's here and how to find it. Case studies should be surfaced prominently, not buried inside folders or linked from an index page with no context.</p>

<p><strong>Consistent, professional presentation.</strong> Every case study should follow the same format. Same structure, same visual hierarchy. This makes it easy to scan and signals organized thinking.</p>

<p><strong>Mobile-friendly layout.</strong> Many hiring managers will view your portfolio on a phone. If it's not readable there, you've lost a significant portion of your audience.</p>

<p><strong>Fast load time.</strong> Nobody waits for a slow website. If your portfolio takes more than 2 seconds to load, some percentage of viewers will close the tab before it finishes.</p>

<p><strong>Easy sharing.</strong> A clean URL, proper meta tags so it previews nicely when shared in Slack or email, and no login walls.</p>

<h2>The Comparison That Matters Most</h2>

<p>At the end of the day, your portfolio will be compared to the other candidates your hiring manager is evaluating. Not to some abstract standard of excellence — to the actual people in the same pipeline as you.</p>

<p>If everyone else has a Notion doc and you have a professionally presented portfolio, you stand out. If everyone else has a polished portfolio and you have a Notion doc, you're starting every conversation at a disadvantage.</p>

<p>The good news: this is one of the easiest variables to control in a job search. The content of your experience is fixed. How you present it isn't.</p>

<p>Your work is worth presenting properly. Act accordingly.</p>
    `,
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
