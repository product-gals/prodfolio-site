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
    slug: "pm-job-search-mistakes",
    title: "7 Job Search Mistakes That Keep PMs From Getting Interviews",
    excerpt: "Your resume is solid and your case studies are sharp — but you're still not getting callbacks. These common job search mistakes might be the reason.",
    date: "2026-03-04",
    readTime: "8 min read",
    category: "Job Search",
    tags: ["Job Search", "Resume Tips", "LinkedIn", "Interviews", "Product Management"],
    content: `
<p>You've done the hard work. You've built your portfolio, written your case studies, polished your resume. And yet — the interviews aren't coming.</p>

<p>The frustrating truth is that most PM job search problems aren't about qualifications. They're about <strong>friction</strong>. Small, fixable mistakes that make it harder for recruiters and hiring managers to find you, reach you, or take you seriously.</p>

<p>Here are seven mistakes that cost PMs interviews — and how to fix each one.</p>

<h2>Key Takeaways</h2>

<ul>
<li>Most job search failures aren't about qualifications — they're about <strong>unnecessary friction</strong></li>
<li>Recruiters move fast. If you're hard to reach or hard to evaluate, they move on</li>
<li>Your resume should show <strong>applied outcomes</strong>, not skill inventories</li>
<li>Side projects built with modern tools are a signal of initiative — put them on your resume</li>
<li>A portfolio does the heavy lifting your resume can't — but only if people can find it</li>
</ul>

<h2>1. Your Email Signature Is Working Against You</h2>

<p>When you're actively job searching, every email you send is an opportunity. Most PMs waste it with a bare-bones signature — just a name, maybe a title.</p>

<p><strong>Fix it.</strong> Your email signature should include:</p>

<ul>
<li>A link to your <strong>LinkedIn profile</strong></li>
<li>Your <strong>phone number</strong> (recruiters text to book calls — make it easy)</li>
<li>A <strong>scheduling link</strong> (Calendly or similar) so they can book time without the back-and-forth</li>
<li>A link to your <strong>portfolio</strong> — this is prime real estate most candidates ignore</li>
</ul>

<p>Every touchpoint should make it effortless for someone to learn more about you or get in touch. If a recruiter has to ask for your availability or hunt for your LinkedIn, you've added friction that didn't need to exist.</p>

<h2>2. You're Not Checking Your Spam Folder</h2>

<p>This one sounds basic, but it costs candidates real opportunities. Recruiters reaching out for the first time — people you don't regularly email — often land in spam or junk filters. Calendar invites are especially prone to this.</p>

<p><strong>Fix it.</strong> Check your spam and junk folders <strong>daily</strong> while you're actively searching. Set a reminder if you need to. One missed calendar invite from a recruiter can quietly kill an opportunity you never knew existed.</p>

<h2>3. Your LinkedIn Is Gated Off</h2>

<p>If your LinkedIn privacy settings make it hard for recruiters to discover you or connect with you, you're invisible to the people actively trying to fill PM roles.</p>

<p><strong>Two things to fix immediately:</strong></p>

<ol>
<li><strong>Update your privacy settings</strong> so anyone can discover your profile and send you messages. Go to Me > Settings & Privacy > Visibility > Adjust your visibility.</li>
<li><strong>Remove the gate that requires people to know your email</strong> before connecting. If someone wants to reach you about a role, don't add a step between them and the "Connect" button.</li>
</ol>

<p>Being discoverable isn't a nice-to-have when you're job searching — it's the whole point.</p>

<h2>4. You're Wasting the First Message</h2>

<p>Here's a pattern that drives recruiters up the wall: a candidate sends a message asking <em>"Can I send you my resume?"</em></p>

<p>You had their attention. They opened your message. And instead of showing them something useful, you asked for permission to show them something useful. That's three extra steps where none were needed:</p>

<ol>
<li>They reply with "yes"</li>
<li>You send the resume in a follow-up</li>
<li>They make new time to actually review it — maybe days later, when they're busier</li>
</ol>

<p><strong>Fix it.</strong> Lead with the goods. Attach your resume (as a PDF — more on that in a moment), include a link to your portfolio, and write two sentences about why you're reaching out. One message. Everything they need to evaluate you, right there.</p>

<h2>5. You're Sharing Your Resume From a Cloud Drive</h2>

<p>Not OneDrive. Not Google Drive. Not any drive. <strong>PDF attachment only.</strong></p>

<p>Cloud-hosted resumes create problems: permission errors, expired links, formatting that changes based on the viewer's device, and the extra click of opening a browser tab. Recruiters reviewing dozens of candidates don't have patience for "request access" screens.</p>

<p>A PDF is universal, offline-friendly, and looks exactly how you intended. Keep it simple.</p>

<p>(Your portfolio, on the other hand, <em>should</em> be a link — a clean, shareable URL is the whole point. It's your resume that needs to be a PDF.)</p>

<h2>6. Your Resume Is a Skills Inventory Instead of an Outcomes Story</h2>

<p>If page one of your resume is dominated by a "Core Competencies" or "Skills" block — a wall of buzzwords like <em>product strategy, stakeholder management, agile methodology</em> — you look like someone listing what they learned, not what they've done.</p>

<p>This is especially damaging for senior PMs. If you're a VP or CPO, do you really need to tell a recruiter that "product management" is your core competency? That's your <em>title</em>.</p>

<p><strong>Fix it.</strong> Take those keywords and <strong>weave them into the outcomes</strong> under each role. Instead of listing "data-driven decision making" as a skill, write: <em>"Used cohort analysis to identify a 23% drop-off in trial-to-paid conversion, leading to a redesigned onboarding flow that recovered $180K ARR."</em></p>

<p>The keywords are still there for ATS systems — but now they're attached to proof. That's what makes a recruiter stop scrolling. For the deeper story behind each project, <a href="/blog/how-to-write-product-management-case-study">your case studies</a> do the heavy lifting your resume can't.</p>

<h2>7. You're Hiding Your Side Projects</h2>

<p>If you've built something — an app, a tool, a prototype, even a scrappy automation — <strong>put it on your resume.</strong> This is especially true if you've used modern AI tools to build it. That's not a footnote. That's a signal.</p>

<p>It shows initiative, curiosity, and the ability to ship something without being told to. Those are exactly the traits <a href="/blog/what-hiring-managers-look-for-in-pm-portfolios">hiring managers told us they look for</a>.</p>

<p>Don't bury your side project under "Other" or "Hobbies." Give it a real entry with context: what problem it solves, what you built, what you learned. Then link to a <a href="/blog/how-to-build-pm-portfolio-no-experience">case study in your portfolio</a> for the full story.</p>

<h2>Common Mistakes to Avoid</h2>

<ol>
<li><strong>Treating your job search like a passive activity</strong> — Applying and waiting isn't a strategy. Make yourself findable, reachable, and easy to evaluate.</li>
<li><strong>Optimizing your resume but ignoring everything around it</strong> — Your email, LinkedIn, signature, and portfolio all shape how recruiters experience you.</li>
<li><strong>Being overly formal in outreach</strong> — Recruiters are people. A concise, direct message beats a stiff "Dear Hiring Manager" every time.</li>
<li><strong>Applying broadly instead of targeting</strong> — Ten thoughtful applications with tailored portfolios beat fifty spray-and-pray submissions.</li>
</ol>

<h2>Make It Easy for Them to Say Yes</h2>

<p>Every fix on this list has one thing in common: <strong>reducing friction between you and the person trying to hire you.</strong> Recruiters are scanning dozens of candidates. Hiring managers have limited time. The PMs who get interviews aren't always the most qualified — they're the ones who make it easiest to see their value.</p>

<p>Clean up these seven things, pair them with a <a href="/how-it-works">portfolio that shows how you think</a>, and you'll be ahead of most candidates before the interview even starts.</p>

<p>Not sure what kind of portfolio fits your situation? <a href="/quiz">Take the quiz</a> — it takes two minutes and gives you a personalized recommendation.</p>

<h2>Frequently Asked Questions</h2>

<h3>How often should I update my LinkedIn when job searching?</h3>
<p>At minimum, update your headline and "Open to Work" settings when you start searching. Beyond that, posting once or twice a week — even just sharing an article with your take — keeps you visible in recruiter searches and shows you're active in the PM community.</p>

<h3>Should I include a cover letter with my PM applications?</h3>
<p>Only if it adds something your resume and portfolio don't. A two-paragraph note explaining why this specific company and role interests you can help. A generic "I'm excited to apply" letter doesn't. If you have a strong portfolio, it replaces most of what a cover letter is trying to do.</p>

<h3>How do I follow up without being annoying?</h3>
<p>One follow-up after a week is fine — keep it short and add something new (a link to your portfolio, a relevant article, a brief note on why you're interested). If you don't hear back after that, move on. Two unreturned messages is the limit.</p>

<h3>Is it worth reaching out to recruiters directly on LinkedIn?</h3>
<p>Yes — if you do it right. Don't ask "Are you hiring?" Lead with who you are, what you're looking for, and a link to your portfolio. Make it easy for them to forward you to the right person internally. The easier you make their job, the more likely they are to respond.</p>
    `,
  },
  {
    slug: "what-hiring-managers-look-for-in-pm-portfolios",
    title: "What Hiring Managers Look for in PM Portfolios",
    excerpt: "We talked to hiring managers and recruiters who review PM portfolios every week. Here's what actually matters — and what most candidates get wrong.",
    date: "2026-03-04",
    readTime: "9 min read",
    category: "Job Search",
    tags: ["Hiring Managers", "PM Portfolio", "Job Search", "Interviews", "Product Management"],
    content: `
<p>You spent weeks on your portfolio. You structured your case studies carefully. You picked a clean template. And then… silence. No interviews. No callbacks.</p>

<p>The problem usually isn't your experience — it's a mismatch between what you're showcasing and what the person on the other side actually needs to see. We talked to hiring managers and recruiters who review PM portfolios regularly, and their feedback was consistent: <strong>most portfolios make them work too hard to find the signal.</strong></p>

<p>This post breaks down what they're actually looking for — and how to make sure your portfolio delivers it.</p>

<h2>Key Takeaways</h2>

<ul>
<li>Hiring managers spend <strong>seconds on a first impression</strong> — your portfolio needs to front-load the important stuff</li>
<li>They want to see <strong>how you think and decide</strong>, not just what you shipped</li>
<li>Case studies should be the centerpiece, not your resume or bio</li>
<li>Scannability matters more than comprehensiveness — concise beats thorough</li>
<li>References, metrics, and honest reflection build more trust than polished storytelling</li>
</ul>

<h2>They're Not Reading — They're Scanning</h2>

<p>One recruiter we spoke with reviews 20 to 50 candidates per open role. That means your portfolio gets a few seconds to earn a deeper look. If the first thing they see is a wall of text or an "About Me" essay, you've already lost.</p>

<p><strong>What they want first:</strong> a snapshot. Your photo, a one-line tagline that says what kind of PM you are, and quick signals — years of experience, industry focus, what you're looking for. Think of it as your portfolio's above-the-fold.</p>

<blockquote><strong>From a VP of Product:</strong> "I want a snapshot in the first five seconds — photo, tagline, quick signals. If I have to scroll to understand who this person is, I'm already behind."</blockquote>

<p>This doesn't mean your portfolio should be shallow. It means the <strong>entry point</strong> should be scannable, with depth available one click deeper.</p>

<h2>Case Studies Are the Main Event</h2>

<p>Every hiring manager we talked to said the same thing: <strong>case studies are the most important part of a PM portfolio.</strong> Not your resume. Not your skills list. Not your "About Me."</p>

<p>But they don't want a novel. They want structured case studies that answer three questions fast:</p>

<ol>
<li>What was the problem?</li>
<li>How did you approach it?</li>
<li>What happened — and what did you learn?</li>
</ol>

<p>One product leader described their ideal case study format as a collapsible panel: challenge up front, framework used, results, and lessons learned. Everything visible in a glance, with the option to expand for detail.</p>

<blockquote><strong>From a senior PM trainer:</strong> "I want to see how PMs think and decide, not just what they built. The decisions and trade-offs are where the real signal is."</blockquote>

<p>The <a href="/blog/how-to-write-product-management-case-study">SIGNAL framework</a> maps directly to this structure — Situation, Insight, Goals, Navigation, Achievement, Learnings. It's designed to surface the thinking that hiring managers are evaluating.</p>

<h2>What Makes a Portfolio Stand Out</h2>

<p>Based on our conversations, here's what separates portfolios that get interviews from ones that get skipped:</p>

<h3>1. Show Decisions, Not Just Deliverables</h3>

<p>Hiring managers can see what you shipped on your resume. Your portfolio's job is to show <strong>why</strong> you made the choices you made. What did you consider and reject? What constraints shaped your approach? What trade-offs did you navigate?</p>

<p>One product leader put it bluntly: the Navigation section of a case study — where you walk through decisions and trade-offs — is the section they care about most.</p>

<h3>2. Keep It Concise</h3>

<p>Multiple reviewers emphasized that shorter is better. One group of hiring managers suggested capping role descriptions at 120 characters — "old school Twitter energy." If a section doesn't earn its place, cut it.</p>

<blockquote><strong>From a tech recruiter:</strong> "I need to consume information quickly and concisely. If I can't get the gist of a case study in 30 seconds, I'm moving on."</blockquote>

<h3>3. Include Real References</h3>

<p>This one surprised us. Multiple hiring managers brought up references unprompted — and were dismissive of standard LinkedIn recommendations. One product leader called them <em>"generic and vanity."</em></p>

<p>What they want instead: <strong>specific, per-project references</strong> from people who worked with you on that initiative. A short quote from your engineering lead about how you handled a scope dispute is worth more than a paragraph of LinkedIn praise. <a href="/how-it-works">Prodfolio lets you attach references directly to individual case studies</a> — so the right context shows up in the right place.</p>

<h3>4. Be Honest About Results</h3>

<p>Mixed results aren't a red flag — spin is. If a project didn't hit every target, say so. Then explain what you learned and what you'd do differently. That level of self-awareness is hard to evaluate in an interview, and hiring managers value it.</p>

<blockquote><strong>Example of what works:</strong> "Step-3 drop-off decreased from 62% to 34%. But overall onboarding completion only increased 8% — suggesting additional drop-off points we hadn't addressed yet. In the next sprint, I prioritized a funnel analysis to find where else users were falling off."</blockquote>

<h3>5. Make Your Career Trajectory Clear</h3>

<p>Recruiters scanning portfolios want to quickly understand your arc — where you've been, what types of products you've worked on, and where you're headed. A brief career timeline with company names, industries (B2B vs. B2C), and your role at each stage helps them pattern-match you to open roles fast.</p>

<h2>What Makes Them Move On</h2>

<p>We also asked what makes hiring managers close a portfolio. The answers were consistent:</p>

<ol>
<li><strong>No case studies</strong> — A resume and an "About Me" isn't a portfolio. If there are no case studies, there's nothing to evaluate.</li>
<li><strong>Walls of text</strong> — If your case study reads like a product spec, it's too long. Use structure and headings to make it scannable.</li>
<li><strong>Hidden thinking</strong> — Portfolios that only describe <em>what</em> shipped without explaining <em>why</em> miss the point. The decision-making is what they're hiring for.</li>
<li><strong>No metrics</strong> — Even directional metrics matter. "Reduced churn by roughly 18%" is better than "users were happier."</li>
<li><strong>Generic everything</strong> — Generic bios, generic skill lists, generic LinkedIn recommendations. Specificity is what builds trust.</li>
</ol>

<h2>The Format Matters More Than You Think</h2>

<p>Several hiring managers mentioned format unprompted. A clean, web-based portfolio makes a stronger impression than a PDF or Google Doc. It signals that you take the job search seriously and that you understand presentation.</p>

<p>Key format takeaways from our conversations:</p>

<ul>
<li><strong>Snapshot-first layout</strong> — Photo, tagline, and key signals visible immediately</li>
<li><strong>Case studies front and center</strong> — Not buried under your bio or resume</li>
<li><strong>Contact info and availability visible</strong> — Don't make recruiters hunt for how to reach you</li>
<li><strong>Mobile-friendly</strong> — Recruiters review portfolios on their phones more often than you'd expect</li>
</ul>

<p>Want to see what this looks like in practice? <a href="/examples">Browse real PM portfolio examples</a> built with these principles — including portfolios from career changers, B2B PMs, and product leaders.</p>

<p>Not sure what format fits your career stage? <a href="/quiz">Take the portfolio quiz</a> for a personalized recommendation.</p>

<h2>Build What They're Looking For</h2>

<p>The gap between most PM portfolios and what hiring managers actually want isn't huge — but it's specific. Front-load your snapshot. Make case studies the centerpiece. Show your thinking, not just your results. Keep it concise. Be honest.</p>

<p>If you want to structure your case studies using the framework hiring managers told us they value most, <a href="/how-it-works">Prodfolio's builder walks you through SIGNAL step by step</a> — so you can focus on the content, not the format.</p>

<h2>Frequently Asked Questions</h2>

<h3>How many case studies should I include in my PM portfolio?</h3>
<p>Two to three strong case studies is the sweet spot. Hiring managers told us they rarely read more than three — and they'd rather see two great ones than five mediocre ones. Focus on variety: different product types, different PM skills, different stages of the lifecycle.</p>

<h3>Do hiring managers actually read the full case study?</h3>
<p>Usually not on the first pass. They scan for structure, skim the key decisions and results, and only read deeply if those initial signals are strong. That's why structure and headings matter so much — they're doing triage, not leisure reading.</p>

<h3>Should I tailor my portfolio for each job application?</h3>
<p>You don't need to rewrite it every time, but consider which case studies are most relevant to the role. If you're applying to a B2B SaaS company, lead with your B2B case study. If the role emphasizes data, highlight the case study where your data analysis drove the decision.</p>

<h3>What if I don't have references for my case studies?</h3>
<p>Start collecting them now. When you finish a project or leave a role, ask a collaborator for a short, specific quote about how you worked together. It doesn't need to be formal — a two-sentence Slack message that you have permission to share is more valuable than a generic LinkedIn recommendation.</p>

<h3>Do hiring managers care about portfolio design?</h3>
<p>They care about clarity, not aesthetics. A clean layout with good structure beats a flashy design with thin content every time. The design should make your case studies easy to scan — not distract from them.</p>
    `,
  },
  {
    slug: "how-to-build-pm-portfolio-no-experience",
    title: "How to Build a PM Portfolio With No Experience",
    excerpt: "No shipped products? No problem. Here's how to build a product management portfolio that proves you can do the job — even if you haven't had the title yet.",
    date: "2026-03-04",
    readTime: "8 min read",
    category: "Portfolio Tips",
    tags: ["PM Portfolio", "Career Changers", "No Experience", "Side Projects", "Product Management"],
    content: `
<p>You want to break into product management, but every portfolio guide assumes you've already shipped something. You haven't — or at least, you don't think what you've done "counts."</p>

<p>Here's the thing: you don't need years of PM experience to build a portfolio that gets interviews. You need <strong>proof that you think like a PM</strong>. That's a different bar — and a much more reachable one.</p>

<p>This guide shows you how to build a PM portfolio from scratch, even if you've never had "Product Manager" on your business card.</p>

<h2>Key Takeaways</h2>

<ul>
<li>You don't need PM job experience to build a strong portfolio — you need <strong>evidence of PM thinking</strong></li>
<li>Side projects, volunteer work, and even your current role contain portfolio-worthy material</li>
<li>Hiring managers care about <strong>how you approach problems</strong>, not your title when you solved them</li>
<li>A structured framework like SIGNAL makes any project look professional and intentional</li>
<li>Two well-crafted case studies beat five thin ones every time</li>
</ul>

<h2>Why "No Experience" Isn't the Problem You Think It Is</h2>

<p>Hiring managers reviewing PM portfolios aren't checking whether you had the right job title. They're looking for evidence that you can <strong>identify problems, make decisions with incomplete information, and drive outcomes</strong>. (We know because <a href="/blog/what-hiring-managers-look-for-in-pm-portfolios">we asked them</a>.)</p>

<p>You've done that. Maybe not in a PM role — but you've done it. The gap isn't experience. It's <strong>framing</strong>.</p>

<p>A marketing manager who redesigned a campaign based on user feedback? That's product thinking. An engineer who proposed a feature after analyzing support tickets? That's product thinking. A teacher who restructured a curriculum based on student outcomes? Believe it or not — product thinking.</p>

<p>Your portfolio's job is to make that thinking visible.</p>

<h2>Where to Find Portfolio-Worthy Projects</h2>

<p>If you're staring at a blank page, you're probably filtering too aggressively. Here are five sources of material you likely already have:</p>

<h3>1. Your Current Job</h3>

<p>You don't need to be a PM to have done PM-adjacent work. Look for moments where you:</p>

<ul>
<li>Identified a problem before someone assigned it to you</li>
<li>Made a decision that involved trade-offs</li>
<li>Used data or user feedback to change direction</li>
<li>Coordinated across teams to ship something</li>
</ul>

<blockquote><strong>Example:</strong> "As a customer success lead, I noticed our top churn driver was a confusing billing page. I mapped the user flow, proposed a redesign to the product team, and partnered with engineering to ship a simplified version. Churn from billing confusion dropped 22%."</blockquote>

<h3>2. Side Projects</h3>

<p>Build something small that solves a real problem — even if the "user base" is just you and your friends. What matters is the process: identifying a need, scoping a solution, making trade-offs, and measuring whether it worked.</p>

<blockquote><strong>Example:</strong> "I built a meal planning tool for my running group because everyone was tracking nutrition differently. I interviewed 8 members, prioritized three core features, and launched an MVP with Google Sheets and Zapier."</blockquote>

<h3>3. Volunteer or Nonprofit Work</h3>

<p>Nonprofits are full of product problems — outdated websites, manual processes, poor donor experiences. Volunteer to solve one, and you have a case study.</p>

<h3>4. Product Teardowns</h3>

<p>Pick a product you use daily and analyze a specific feature or flow. What problem does it solve? What trade-offs did the team likely make? What would you change and why? A thoughtful teardown shows analytical thinking even without building anything.</p>

<h3>5. Concept Projects</h3>

<p>Design a solution to a real problem — even if you never build it. The key is treating it like a real PM would: research the problem, define success metrics, scope an MVP, and explain your decisions. Skip the pixel-perfect mockups. Focus on the <em>thinking</em>.</p>

<h2>How to Structure Each Case Study</h2>

<p>Raw material isn't enough. A project only becomes a portfolio piece when it's structured to highlight your thinking. The <a href="/blog/how-to-write-product-management-case-study">SIGNAL framework</a> works for any project — shipped product or side project:</p>

<ol>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">S</span>ituation</strong> — What was the problem and why did it matter?</li>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">I</span>nsight</strong> — What research or data informed your approach?</li>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">G</span>oals</strong> — What were you trying to achieve, and what were the constraints?</li>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">N</span>avigation</strong> — What did you decide, and what did you decide against?</li>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">A</span>chievement</strong> — What happened? Be honest about mixed results</li>
<li><strong><span style="color: #6b4fbb; font-weight: 800;">L</span>earnings</strong> — What would you do differently next time?</li>
</ol>

<p>This structure works because it mirrors how experienced PMs actually talk about their work. <a href="/how-it-works">Prodfolio's case study builder walks you through each step</a>, so you don't have to figure out the structure from scratch.</p>

<h2>What Your Portfolio Actually Needs</h2>

<p>Don't overthink the package. A strong PM portfolio with no traditional experience needs just four things:</p>

<ol>
<li><strong>A short intro</strong> — Who you are, what kind of PM role you're targeting, and why. Two to three sentences.</li>
<li><strong>Two to three case studies</strong> — Structured with SIGNAL. Show variety in the type of problem, the skills involved, or the domain.</li>
<li><strong>Your resume</strong> — Keep it accessible but don't make it the centerpiece. The case studies are doing the heavy lifting.</li>
<li><strong>A clean, shareable format</strong> — Hiring managers spend seconds on first impressions. A messy Google Doc loses to a polished portfolio page every time.</li>
</ol>

<p>Not sure which type of portfolio fits your situation? <a href="/quiz">The portfolio quiz</a> takes two minutes and gives you a personalized recommendation based on your career stage.</p>

<h2>Common Mistakes to Avoid</h2>

<ol>
<li><strong>Waiting until you have "real" PM experience</strong> — The portfolio <em>is</em> how you get the experience. Don't wait for permission to start.</li>
<li><strong>Listing skills instead of showing them</strong> — "I'm a strong communicator with analytical skills" means nothing without a story that proves it. Show, don't tell.</li>
<li><strong>Copying someone else's portfolio structure</strong> — Your background is different, so your portfolio should reflect your unique path. Career changers who try to look like senior PMs come across as inauthentic.</li>
<li><strong>Including everything</strong> — More projects doesn't mean a better portfolio. Two focused case studies that show real thinking beat five bullet-point summaries.</li>
<li><strong>Overdesigning instead of writing</strong> — A beautiful layout with thin content is worse than a clean page with strong case studies. Substance first.</li>
</ol>

<h2>Start Building Today</h2>

<p>Pick one project — from work, a side project, or even a product teardown. Write it up using the SIGNAL framework. Don't aim for perfect. Aim for <strong>clear, honest, and structured</strong>.</p>

<p>If you're coming from outside PM and aren't sure how to position your experience, <a href="/for-career-changers">the career changers guide</a> breaks down exactly how to translate your background into PM-relevant case studies.</p>

<p>The PMs getting interviews aren't the ones with the most experience. They're the ones who <strong>show their thinking</strong> — and a portfolio is the best way to do that.</p>

<h2>Frequently Asked Questions</h2>

<h3>Can I use a product teardown as a portfolio case study?</h3>
<p>Yes — and it's one of the best options if you don't have shipped work. Pick a product you know well, analyze a specific feature or user flow, and explain what trade-offs the team likely made. Add what you'd change and why. Structure it with SIGNAL and it reads like a real case study.</p>

<h3>How do I explain my portfolio projects in an interview?</h3>
<p>Walk through the SIGNAL structure out loud: the problem, what you learned in research, what you decided (and didn't), and what happened. Interviewers aren't judging the scale of the project — they're judging how clearly you can articulate your thinking process.</p>

<h3>Should I include mockups or wireframes in my case studies?</h3>
<p>Only if they help tell the story. A simple before/after screenshot or a rough wireframe showing your proposed solution adds context. But skip the high-fidelity mockups — you're demonstrating PM thinking, not design skills.</p>

<h3>Is a personal website better than a PDF portfolio?</h3>
<p>A web-based portfolio is easier to share, easier to update, and makes a better first impression. PDFs get lost in email threads and can't be bookmarked. A simple, clean portfolio page shows that you're serious about the job search.</p>

<h3>How long does it take to build a PM portfolio from scratch?</h3>
<p>If you have your projects identified, you can write two solid case studies in a weekend. The hardest part isn't the writing — it's picking the right projects and getting the structure right. Using a framework like SIGNAL and a tool like <a href="/how-it-works">Prodfolio</a> cuts that time significantly.</p>
    `,
  },
  {
    slug: "how-to-write-product-management-case-study",
    title: "How to Write a Product Management Case Study (With Examples)",
    excerpt: "Most PM case studies read like feature lists. Here's how to use the SIGNAL framework to write one that actually shows how you think — and why that matters to hiring managers.",
    date: "2026-03-01",
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

<p><strong>They focus on what shipped, not how you thought.</strong> Hiring managers can't get your decision-making process from a résumé. That's what a case study is for. (Want to know exactly what they're evaluating? Read <a href="/blog/what-hiring-managers-look-for-in-pm-portfolios">what hiring managers told us they look for</a>.)</p>

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
