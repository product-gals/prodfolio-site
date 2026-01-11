export interface Episode {
  id: string;
  slug: string;
  title: string;
  guest: {
    name: string;
    role: string;
    company: string;
    linkedin?: string;
  };
  description: string;
  longDescription: string;
  youtubeId: string;
  topic: "hiring" | "career" | "ai" | "leadership";
  duration: string;
  publishedAt: string;
  highlights: string[];
  transcript?: string;
  keywords: string[];
}

export const episodes: Episode[] = [
  {
    id: "1",
    slug: "power-of-storytelling",
    title: "The Power of Storytelling",
    guest: {
      name: "Heidi Ram",
      role: "Product Recruiter",
      company: "Tech Recruiting",
      linkedin: "https://www.linkedin.com/in/heidiram/"
    },
    description: "How to tell your PM story in a way that resonates with hiring managers and recruiters.",
    longDescription: "In this episode, we sit down with Heidi Ram, an experienced product recruiter who has helped hundreds of PMs land their dream roles. Heidi shares her insider perspective on what makes candidates stand out, why storytelling is the most underrated skill in interviewing, and how to frame your experience in a way that resonates with hiring managers. Whether you're actively job searching or just want to be prepared for your next opportunity, this episode is packed with actionable advice.",
    youtubeId: "Zg4SOZexDUE",
    topic: "hiring",
    duration: "32 min",
    publishedAt: "2024-11-15",
    highlights: [
      "Why recruiters scan resumes for stories, not just skills",
      "The STAR method is dead—here's what works better",
      "How to handle the 'tell me about yourself' question",
      "Red flags that make recruiters pass on candidates",
      "Building your personal brand before you need a job"
    ],
    keywords: ["product manager interview", "PM storytelling", "recruiter tips", "job search", "career advice"],
    transcript: `Meagan: Welcome to The Product Pivot. I'm Meagan Glenn, and today we're joined by Heidi Ram, a product recruiter who has placed PMs at some of the top tech companies. Heidi, thanks for being here.

Heidi: Thanks for having me! I'm excited to share what I've learned from reviewing thousands of PM applications.

Meagan: Let's dive right in. What's the biggest mistake you see PMs make when they're job searching?

Heidi: Honestly? They focus too much on what they did and not enough on the story behind it. I can read a resume and see "launched feature X" or "increased metric Y by 20%." But what I really want to know is: why did that matter? What was the challenge? How did you think through the problem?

Santiana: That's interesting. So it's less about the accomplishments themselves and more about the narrative?

Heidi: Exactly. Think about it from the hiring manager's perspective. They're not just hiring someone who can ship features—they're hiring someone who can think through ambiguous problems, navigate stakeholders, and make good decisions under uncertainty. The only way to demonstrate that is through stories.

Meagan: How should PMs structure those stories?

Heidi: I know everyone talks about STAR—Situation, Task, Action, Result. But honestly, that format can feel really mechanical. What works better is what I call "the dinner party test." Can you tell this story to a friend at dinner and have them actually engaged?

The best stories have conflict, stakes, and a turning point. Something like: "We were about to launch our biggest feature of the year, and two days before release, our biggest customer threatened to churn if we didn't change direction. Here's how I navigated that..."

Santiana: That's so much more compelling than "I launched a feature that increased retention by 15%."

Heidi: Right! And here's the thing—hiring managers remember stories. They forget bullet points. When they're debriefing after interviews, they say things like "Oh, she's the one who had that crazy launch story" not "she's the one who increased DAU by 12%."

Meagan: Let's talk about the "tell me about yourself" question. How should PMs approach that?

Heidi: This is where most people fumble. They either give their entire life story starting from college, or they just read their resume out loud. Neither works.

What I recommend is what I call the "present-past-future" framework. Start with where you are now and what you're focused on. Then give a brief highlight of your journey that's relevant to this role. End with why you're excited about this specific opportunity.

The whole thing should be 60-90 seconds max. It's a trailer, not the full movie.

Santiana: What about candidates who are transitioning into PM from other roles?

Heidi: Great question. This is actually where storytelling becomes even more important. You don't have "PM" on your resume, so you need to show that you've been doing PM work even without the title.

Think about times you identified a customer problem and proposed a solution. Times you had to prioritize between competing demands. Times you worked cross-functionally to ship something. Frame those experiences using PM language, and suddenly your background becomes a strength, not a weakness.

Meagan: Any red flags that make you immediately pass on a candidate?

Heidi: A few things. First, candidates who can't explain their impact in concrete terms. If every answer is vague or you can't quantify anything, that's concerning.

Second, people who blame others for failures. Product management is inherently collaborative. If you can't reflect on what you could have done differently, that's a red flag.

Third—and this might be controversial—candidates who haven't done their homework on the company. If you can't articulate why you want THIS job at THIS company, I assume you're just mass applying everywhere.

Santiana: That last one is so important. What does good research look like?

Heidi: Go beyond the About page. Read their recent blog posts. Look at their product updates. Check Glassdoor reviews—not to find dirt, but to understand the culture. Follow their product leaders on LinkedIn.

Then in the interview, reference specific things. "I noticed you just launched X feature. I'd love to hear about the discovery process behind that." That shows genuine interest.

Meagan: Last question—what advice would you give to PMs who aren't actively job searching but want to be prepared?

Heidi: Build your brand before you need it. Keep a "brag doc" where you document your wins, learnings, and impact as they happen. It's so much easier than trying to remember everything when you're suddenly job searching.

Also, stay visible. Write about product management. Share your learnings on LinkedIn. Help others in your community. When you do start looking, you'll have a body of work that speaks for itself.

And honestly? Build a portfolio. I know that's what Prodfolio is all about, but seriously—the candidates who have a portfolio where I can see their actual thinking process? They jump to the top of my list immediately.

Meagan: Perfect way to wrap up. Heidi, thanks so much for sharing your insights.

Heidi: My pleasure! Good luck to everyone out there job searching.`
  },
  {
    id: "2",
    slug: "why-ai-should-be-boring",
    title: "Why AI Should Be Boring",
    guest: {
      name: "Aaron Kesler",
      role: "VP of Product",
      company: "AI Startup",
      linkedin: "https://www.linkedin.com/in/aaronkesler/"
    },
    description: "Breaking into product management and the mindset shift of giving yourself the title.",
    longDescription: "Aaron Kesler, VP of Product at an AI startup, joins us to discuss his unconventional path into product management and his hot take on AI product development. Aaron argues that the best AI products are 'boring'—they solve real problems without the hype. We also dive into his advice for aspiring PMs: sometimes you need to give yourself the title before anyone else will.",
    youtubeId: "Kw9ssA8sSsI",
    topic: "ai",
    duration: "45 min",
    publishedAt: "2024-12-01",
    highlights: [
      "Why 'boring' AI products win over flashy demos",
      "Aaron's unconventional path from sales to VP of Product",
      "The mindset shift: giving yourself the PM title",
      "How to break into AI product management",
      "Building products that solve real problems vs. chasing trends"
    ],
    keywords: ["AI product management", "career transition", "VP of Product", "AI PM", "breaking into PM"],
    transcript: `Meagan: Welcome back to The Product Pivot! Today we have Aaron Kesler, VP of Product at an AI startup. Aaron, thanks for joining us.

Aaron: Happy to be here. Love what you're doing with the podcast.

Santiana: Let's start with your background. You didn't take a traditional path to product management, right?

Aaron: Not at all. I started in sales, actually. Enterprise sales for a B2B SaaS company. And I kept noticing that the product didn't quite fit what customers needed. I'd be on calls hearing the same pain points over and over.

So I started writing up these mini product briefs and sending them to our product team. Eventually, our CPO noticed and asked if I wanted to try a PM role. I said yes immediately, even though I had no formal PM experience.

Meagan: That's a great transition story. What was the learning curve like?

Aaron: Steep! Sales teaches you about customers and communication, but product management requires a different type of thinking. I had to learn to say no a lot more. In sales, you want to say yes to everything. In product, you have to prioritize ruthlessly.

The biggest shift was going from "how do I close this deal?" to "what's the right thing to build for the next 100 customers, not just this one?"

Santiana: Now you're leading product at an AI company. What's different about AI product management?

Aaron: Here's my hot take: the best AI products are boring.

What I mean is—everyone's chasing these flashy AI demos. "Look, it can generate images!" "Look, it can write poetry!" But the AI products that actually win in the market? They're solving mundane problems really well.

Our product helps companies automate invoice processing. That's not sexy. No one's going to go viral on Twitter for processing invoices faster. But it saves our customers hours every week and reduces errors by 90%. That's real value.

Meagan: I love that. "AI should be boring." Can you expand on that philosophy?

Aaron: Sure. I think there's too much focus on AI capabilities and not enough on AI applications. The question shouldn't be "what can AI do?" It should be "what problem am I solving, and can AI solve it better than the current solution?"

If the answer is yes, great—use AI. If not, don't force it. I've seen so many products add AI just to check a box or get press coverage. That's backwards.

The best AI products, you don't even think about the AI. You just think "wow, this product is really good." The AI is invisible. It's in service of the user experience, not the other way around.

Santiana: How do you hire for AI product roles? What do you look for?

Aaron: Two things. First, intellectual curiosity about the technology. You don't need to be able to train models yourself, but you should understand the basics of how these systems work, their limitations, and where they're headed.

Second—and this is more important—strong product fundamentals. Can you talk to customers? Can you synthesize research? Can you make prioritization decisions? Can you work with engineers?

The AI part, you can learn. The product skills take years to develop.

Meagan: Let's talk about your advice for aspiring PMs. You mentioned "giving yourself the title." What does that mean?

Aaron: This was a big realization for me. When I was in sales, I kept waiting for someone to tap me on the shoulder and say "you're a PM now." That never happened.

What I realized is that you have to act like a PM before you get the title. Do PM work in your current role. Write product briefs. Do user research. Analyze data. Build a portfolio of product thinking.

Then, when you're interviewing, you're not saying "I want to be a PM." You're saying "I've been doing PM work, here's the evidence, now I want a company that recognizes that."

That mindset shift—from aspiring PM to practicing PM—changes everything. You stop asking for permission and start demonstrating capability.

Santiana: That's powerful. Any final advice for our listeners?

Aaron: Don't chase titles, chase learning. The best career moves I've made weren't the ones that gave me a fancier title. They were the ones that put me in the best learning environment.

Find companies solving hard problems with smart people. The title will follow if you're growing and delivering value.

And build a portfolio. Seriously. It's the single best way to show you can think like a PM, even if your resume doesn't scream "PM background."

Meagan: Perfect note to end on. Aaron, thanks for your time and insights.

Aaron: Thanks for having me!`
  },
  {
    id: "3",
    slug: "product-management-evolving-or-disappearing",
    title: "Is Product Management Evolving or Disappearing?",
    guest: {
      name: "Brody Clemmer",
      role: "Product Lead",
      company: "Startup",
      linkedin: "https://www.linkedin.com/in/brodyclemmer/"
    },
    description: "The evolution of product management and what the role may look like in the next few years.",
    longDescription: "With AI automating more tasks and companies questioning the PM role, is product management evolving or facing extinction? Brody Clemmer, a Product Lead at a fast-growing startup, shares his perspective on where PM is headed. We discuss the skills that will matter in 5 years, how AI will reshape the role, and why the best PMs will become 'systems thinkers' rather than feature shippers.",
    youtubeId: "4ZLUXW06jbg",
    topic: "leadership",
    duration: "38 min",
    publishedAt: "2024-12-15",
    highlights: [
      "Is PM becoming obsolete? Brody's contrarian take",
      "The shift from feature PM to systems thinking",
      "How AI will change (not replace) product managers",
      "Skills that will matter in 5 years",
      "Why execution is becoming commoditized"
    ],
    keywords: ["future of product management", "PM career", "AI and product management", "product leadership", "PM skills"],
    transcript: `Meagan: Welcome to The Product Pivot. Today's topic might be a little controversial—we're asking whether product management is evolving or disappearing. Here to discuss is Brody Clemmer, Product Lead at a startup. Brody, thanks for joining.

Brody: Thanks for having me. This is a topic I think about constantly.

Santiana: Let's jump right into the controversy. There's been a lot of discussion about whether companies actually need PMs. What's your take?

Brody: So here's my contrarian view: I think the PM role as we know it IS disappearing. But that doesn't mean product people are going away. We're evolving.

The traditional PM role—writing PRDs, managing backlogs, being the middleman between stakeholders—that's getting automated or distributed. Engineering teams are becoming more autonomous. AI tools are handling a lot of the documentation. Companies are questioning whether they need a dedicated person to do those things.

But the strategic work? The customer insight? The systems thinking? That's becoming MORE important, not less.

Meagan: Can you unpack what you mean by "systems thinking"?

Brody: Sure. The old model of PM was very feature-focused. You'd identify a problem, write requirements, work with engineering to build it, launch it, measure it. Rinse and repeat.

The new model is more about understanding how different parts of the product ecosystem interact. How does this feature affect that workflow? How does this pricing change impact retention? How does this partnership open new possibilities?

It's less about shipping individual features and more about optimizing the whole system. The best PMs I know think more like general managers than feature owners.

Santiana: How does AI fit into this evolution?

Brody: AI is a double-edged sword for PMs. On one hand, it's automating a lot of the tactical work. Writing specs, analyzing data, even generating initial designs—AI can help with all of that.

On the other hand, AI makes the strategic work more important. When anyone can ship faster, the question becomes: what should you ship? That requires deep customer understanding, market awareness, and strategic thinking that AI can't replicate.

So PMs who lean into AI as a tool while doubling down on strategy will thrive. PMs who just manage backlogs will struggle.

Meagan: What skills do you think will matter most in 5 years?

Brody: A few things. First, customer empathy and insight. Understanding not just what customers say, but what they actually need. That requires qualitative research skills, observation, and intuition that AI can't replicate.

Second, strategic communication. The ability to align stakeholders, tell compelling stories, and influence without authority. As organizations get flatter, this becomes crucial.

Third, technical literacy. You don't need to code, but you need to understand what's possible, what's hard, and where the technology is going. Especially with AI moving so fast.

Fourth, business acumen. Understanding unit economics, go-to-market strategy, pricing—the stuff that actually makes companies succeed. Too many PMs are disconnected from the business side.

Santiana: Any skills that are becoming less important?

Brody: Honestly? Pure execution management. The ability to run sprints, manage tickets, track velocity—that's increasingly handled by engineering managers or automated tools.

Also, being the "voice of the customer" in a literal sense. When everyone can access user research tools and data, the PM isn't the only one who knows the customer anymore. You have to provide synthesis and insight, not just relay information.

Meagan: That's a big shift. How should PMs prepare for this evolution?

Brody: I'd say three things. First, start thinking bigger than features. Look at your company's overall strategy and understand how product fits into it. Read the board materials. Understand the financials. Think about competitive positioning.

Second, get comfortable with AI tools. Not to replace your job, but to amplify it. Use AI for first drafts, analysis, brainstorming. The PMs who resist AI will fall behind.

Third, build a portfolio that shows strategic thinking, not just execution. When you're interviewing in the future, you won't differentiate on "I shipped features." You'll differentiate on "I understood complex systems and made good strategic decisions."

Santiana: Speaking of portfolios, how do you think the PM hiring process will change?

Brody: Good question. I think we'll see less reliance on traditional case studies and more emphasis on real work samples.

Show me a strategy doc you wrote. Walk me through a pricing decision. Explain a time you killed a project that wasn't working. That tells me more than whether you can structure a hypothetical product problem in 45 minutes.

Portfolios become really important here. If you have documentation of your actual thinking process—not just outcomes—that's incredibly valuable.

Meagan: Last question—any optimism for people worried about the PM role?

Brody: Absolutely. Look, the companies that cut PMs entirely and just had engineers ship stuff? A lot of them are realizing they need strategic product thinking. They're just calling it something different—"product strategy," "growth," "customer success."

The core work of understanding customers, making prioritization decisions, and driving business outcomes isn't going away. The packaging might change, but the substance endures.

My advice: focus on substance over title. Be the person who drives outcomes, regardless of what your role is called. The career will follow.

Meagan: Great perspective to end on. Brody, thanks so much for your insights.

Brody: Thanks for having me. Good luck to everyone navigating this evolution!`
  }
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find(ep => ep.slug === slug);
}

export function getRelatedEpisodes(currentSlug: string, limit: number = 2): Episode[] {
  return episodes.filter(ep => ep.slug !== currentSlug).slice(0, limit);
}
