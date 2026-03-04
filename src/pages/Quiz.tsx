import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type JourneyStage = "aspiring" | "early" | "mid" | "senior";

const questions = [
  {
    question: "What best describes your current role?",
    subtext: "Select one",
    options: [
      "Product Manager (any level)",
      "Aspiring PM (actively pursuing PM roles)",
      "Adjacent role (Designer, Engineer, Analyst, etc.)",
      "Student/Recent grad interested in PM",
      "Other",
    ],
    type: "single",
  },
  {
    question: "How much hands-on PM experience do you have?",
    subtext: "Select one",
    options: [
      "None yet, but I'm learning",
      "Less than 1 year",
      "1-3 years",
      "3-5 years",
      "5+ years",
    ],
    type: "single",
  },
  {
    question: "Do you currently have a way to showcase your PM work?",
    subtext: "Select one",
    options: [
      "Yes, I have a portfolio or case studies",
      "I have some materials, but nothing polished",
      "No, and I'm not sure where to start",
      "No, but I'm working on it",
    ],
    type: "single",
  },
  {
    question: "What's your biggest career challenge right now?",
    subtext: "Select all that apply",
    options: [
      "Getting noticed by recruiters and hiring managers",
      "Breaking into PM from another field",
      "Showcasing my impact clearly",
      "Moving to the next PM level",
      "Building credibility without a formal PM title",
    ],
    type: "multiple",
  },
  {
    question: "If you could solve ONE thing about your PM career journey today, what would it be?",
    subtext: "Select one",
    options: [
      "Land my first PM role",
      "Get more interview opportunities",
      "Showcase my work professionally",
      "Advance to senior PM level",
      "Transition from my current role to PM",
    ],
    type: "single",
  },
  {
    question: "How actively are you pursuing PM opportunities right now?",
    subtext: "Select one",
    options: [
      "Very active (applying/interviewing regularly)",
      "Moderately active (exploring options)",
      "Preparing to start soon",
      "Passively looking",
      "Not currently looking but want to be ready",
    ],
    type: "single",
  },
];

// Stage-level data (teaser + CTA copy)
const stageBase: Record<JourneyStage, { label: string; teaserSummary: string; ctaAngle: string }> =
  {
    aspiring: {
      label: "Aspiring PM",
      teaserSummary: "You're an Aspiring PM building your foundation",
      ctaAngle: "Start building your portfolio to prove you think like a PM",
    },
    early: {
      label: "Early PM",
      teaserSummary: "You're an Early PM ready to make your impact visible",
      ctaAngle: "Turn your first PM wins into a portfolio that opens doors",
    },
    mid: {
      label: "Mid-Level PM",
      teaserSummary: "You're a Mid-Level PM leveling up your career",
      ctaAngle: "Showcase the leadership that earns your next promotion",
    },
    senior: {
      label: "Senior PM",
      teaserSummary: "You're a Senior PM with strategic vision to share",
      ctaAngle: "Document the strategic impact that defines your career",
    },
  };

// Build personalized results from all answers, not just stage
function buildResults(
  stage: JourneyStage,
  portfolioAnswer: string,
  goalAnswer: string,
  challenges: string[],
) {
  // -- Profile archetype based on stage + goal combination --
  const archetype = getArchetype(stage, goalAnswer);

  // -- Insight based on portfolio readiness + stage --
  const insight = getInsight(stage, portfolioAnswer);

  // -- Recommendations: 1 from stage, 1 from goal, 1 from top challenge --
  const recs = getRecommendations(stage, goalAnswer, challenges, portfolioAnswer);

  // -- Shareable summary line --
  const shareText = `${archetype.title}: ${archetype.description}`;

  return { archetype, insight, recommendations: recs, shareText };
}

function getArchetype(stage: JourneyStage, goal: string) {
  // Cross-reference stage with primary goal for a specific profile name
  if (stage === "aspiring") {
    if (goal.includes("first PM role") || goal.includes("Transition"))
      return {
        title: "The Career Switcher",
        description:
          "You're pivoting into PM and need to prove your product thinking before you have the title.",
      };
    return {
      title: "The Foundation Builder",
      description:
        "You're laying the groundwork for a PM career and need to show you can think like a product leader.",
    };
  }
  if (stage === "early") {
    if (goal.includes("interview opportunities"))
      return {
        title: "The Visibility Seeker",
        description:
          "You have PM experience but aren't getting the traction you deserve. Your work needs a stage.",
      };
    if (goal.includes("Showcase my work"))
      return {
        title: "The Impact Storyteller",
        description:
          "You've done the work — now you need to frame it in a way that makes hiring managers take notice.",
      };
    return {
      title: "The Rising PM",
      description:
        "You're early in your PM journey with real experience to show. Time to make that impact visible.",
    };
  }
  if (stage === "mid") {
    if (goal.includes("senior PM level"))
      return {
        title: "The Level-Up Leader",
        description:
          "You're ready for the next tier. Your portfolio needs to reflect strategic thinking, not just execution.",
      };
    return {
      title: "The Strategic Operator",
      description:
        "You've grown beyond feature delivery. Your portfolio should show how you drive business outcomes.",
    };
  }
  // senior
  if (goal.includes("Showcase my work"))
    return {
      title: "The Executive Storyteller",
      description:
        "You've driven major outcomes but haven't documented the strategic narrative behind them.",
    };
  return {
    title: "The Senior Strategist",
    description:
      "You operate at a high level and your portfolio should reflect the organizational impact you've made.",
  };
}

function getInsight(stage: JourneyStage, portfolio: string) {
  const hasPortfolio = portfolio.includes("Yes");
  const hasPartial = portfolio.includes("some materials");
  const noIdea = portfolio.includes("not sure where to start");

  if (hasPortfolio) {
    if (stage === "aspiring" || stage === "early")
      return "You already have portfolio materials — that puts you ahead of most PMs at your stage. The next step is making sure they tell a compelling story about your thinking process, not just your output.";
    return "You have a portfolio, which is rare at your level. The opportunity now is to elevate it from a list of projects to a narrative about strategic impact and leadership.";
  }
  if (hasPartial) {
    if (stage === "aspiring")
      return "You have materials to work with — that's more than most people breaking into PM. The key is reframing what you have into structured case studies that showcase product thinking.";
    return "Having some materials means you're not starting from zero. The gap is turning scattered work samples into a cohesive story that demonstrates how you think, decide, and drive outcomes.";
  }
  if (noIdea) {
    return "Starting from scratch is more common than you'd think — most PMs don't have portfolios. This is actually an advantage: you can build it right from the start rather than retrofitting something that doesn't work.";
  }
  // "working on it"
  return "You're already in motion, which matters. The most common mistake at this stage is trying to document everything instead of choosing 2-3 projects that best demonstrate your problem-solving approach.";
}

function getRecommendations(
  stage: JourneyStage,
  goal: string,
  challenges: string[],
  portfolio: string,
) {
  const recs: { heading: string; detail: string; steps: string[] }[] = [];

  // Rec 1: Based on portfolio readiness
  if (portfolio.includes("Yes")) {
    recs.push({
      heading: "Audit your existing portfolio",
      detail:
        "You have materials — now make sure they're telling the right story. Most portfolios fail because they read like feature lists instead of decision-making narratives.",
      steps: [
        "Open each case study and check: does the first sentence state the outcome?",
        "Rewrite any section that describes what you built without explaining why you made that choice",
        "Add a \"Tradeoffs\" section to your top 2 projects — hiring managers love seeing how you navigated constraints",
        "Remove any project that doesn't clearly show your thinking process, even if it was a big launch",
      ],
    });
  } else if (portfolio.includes("some materials")) {
    recs.push({
      heading: "Pick your 2 strongest projects and go deep",
      detail:
        "You don't need 10 case studies. Two well-structured ones will outperform a dozen shallow summaries every time.",
      steps: [
        "Choose 2 projects where you can clearly articulate: the problem, your approach, the tradeoffs, and the measurable result",
        "Write each one using the STAR format: Situation, Task, Action, Result — but lead with the Result",
        "Include at least one specific metric per project, even if it's an estimate (\"~30% reduction in support tickets\")",
        "Add context about constraints — timeline, team size, competing priorities — this is where your PM thinking shows",
      ],
    });
  } else if (portfolio.includes("not sure")) {
    recs.push({
      heading: "Start with one project — even a small one",
      detail:
        "The biggest barrier is the blank page. You don't need a perfect portfolio to start — you need one case study that shows how you think.",
      steps: [
        "Pick any project where you identified a problem and drove toward a solution — it doesn't have to be a PM project",
        "Write 4 paragraphs: what was happening (context), what you did about it (approach), what you shipped (output), what changed (outcome)",
        "Don't worry about design — focus on the narrative first, polish later",
        "Share it with one person for feedback before expanding to more case studies",
      ],
    });
  } else {
    recs.push({
      heading: "Structure what you're building around outcomes",
      detail:
        "You're already in motion — make sure each piece answers the question hiring managers actually ask: \"What was the impact?\"",
      steps: [
        "Flip your case study structure: lead with the result, then explain how you got there",
        "For each project, write a one-sentence summary that a hiring manager can scan in 5 seconds",
        "Cut any section that's longer than 3 paragraphs — hiring managers skim, not read",
        "Add before/after comparisons where possible (\"Before: X happened. After: Y improved by Z%\")",
      ],
    });
  }

  // Rec 2: Based on primary goal
  if (goal.includes("first PM role")) {
    recs.push({
      heading: "Prove product thinking without PM experience",
      detail:
        "Hiring managers know you don't have PM titles yet. They're looking for evidence you think in terms of user problems, prioritization, and outcomes.",
      steps: [
        "Reframe non-PM projects through a product lens: what user problem did you solve? What did you prioritize and why?",
        "Include one \"product teardown\" — analyze a product you use and describe what you'd change and why",
        "Show how you gathered user input or data to inform a decision, even informally",
        "End each case study with \"what I'd do differently\" — self-awareness signals PM maturity",
      ],
    });
  } else if (goal.includes("interview opportunities")) {
    recs.push({
      heading: "Make your portfolio findable",
      detail:
        "The best portfolio in the world doesn't help if no one sees it. Distribution matters as much as content.",
      steps: [
        "Add your portfolio URL to your LinkedIn headline — not just the About section",
        "Turn your strongest case study into a LinkedIn post (narrative format, not a link dump)",
        "Add the link to your resume header, email signature, and any job application \"additional links\" fields",
        "Comment thoughtfully on PM content from hiring managers — your profile with a portfolio link gets clicked",
      ],
    });
  } else if (goal.includes("Showcase my work")) {
    recs.push({
      heading: "Write for the hiring manager's 30-second scan",
      detail:
        "Most portfolio reviews last under a minute. Your structure matters more than your word count.",
      steps: [
        "Add a one-sentence outcome summary to the top of every case study — this is what gets read first",
        "Use clear section headers (Problem, Approach, Result) so readers can jump to what interests them",
        "Bold your key metrics and decisions — make them scannable without reading full paragraphs",
        "Keep each case study under 800 words. Link to deeper detail for those who want it.",
      ],
    });
  } else if (goal.includes("senior PM level")) {
    recs.push({
      heading: "Show scope, not just skills",
      detail:
        "At the senior+ level, hiring managers care less about whether you can run a sprint and more about whether you can set direction.",
      steps: [
        "Replace \"I built X feature\" language with \"I identified the opportunity and drove the strategy for...\"",
        "Include at least one case study about navigating ambiguity — where the path wasn't clear and you defined it",
        "Show cross-functional influence: how did you align engineering, design, and business stakeholders?",
        "Add a \"Strategic Context\" section to each case study explaining the business landscape and your thesis",
      ],
    });
  } else {
    // Transition
    recs.push({
      heading: "Map your current skills to PM frameworks",
      detail:
        "Your background is an asset, not a gap. Make the translation explicit so hiring managers don't have to guess.",
      steps: [
        "List your top 5 professional skills, then map each to a PM competency (e.g., \"data analysis\" → \"metrics-driven decision making\")",
        "Write one case study that explicitly bridges your current role to PM thinking",
        "Highlight any cross-functional work — it directly demonstrates PM collaboration skills",
        "In your portfolio intro, own the transition narrative: \"My background in [X] gives me a unique lens on product because...\"",
      ],
    });
  }

  // Rec 3: Based on top challenge
  const topChallenge = challenges[0] || "";
  if (topChallenge.includes("Getting noticed")) {
    recs.push({
      heading: "Build in public to create visibility",
      detail:
        "Visibility compounds. Every post, comment, and shared insight creates a trail that recruiters and hiring managers follow.",
      steps: [
        "Post one PM insight per week on LinkedIn — even short reflections on products you use count",
        "Share your portfolio-building process as you go (\"Here's how I structured my first case study\")",
        "Engage with PM community content: thoughtful comments get you seen by the right people",
        "Connect with 5 PMs or recruiters per week with a personalized note mentioning their work",
      ],
    });
  } else if (topChallenge.includes("Breaking into")) {
    recs.push({
      heading: "Lead with transferable work, not PM jargon",
      detail:
        "Don't try to sound like a PM you're not yet. Authenticity is more compelling than buzzwords.",
      steps: [
        "Write case studies about actual work you've done — user research, project coordination, data analysis, process improvement",
        "Frame each one around the outcome, not the PM methodology you used",
        "Include a \"Why this matters for product\" section that connects your work to product impact",
        "Skip the jargon (\"drove alignment through agile ceremonies\") and use plain language about what you actually did",
      ],
    });
  } else if (topChallenge.includes("Showcasing my impact")) {
    recs.push({
      heading: "Quantify everything, even estimates",
      detail:
        "\"Improved onboarding\" means nothing. \"Reduced new user drop-off from 40% to 22%\" tells a story.",
      steps: [
        "Go back through every project and find at least one number: users affected, time saved, revenue influenced, error rate reduced",
        "If you don't have exact metrics, use reasonable estimates and be transparent (\"Based on analytics, approximately...\")",
        "Include relative comparisons: \"2x faster than previous process\" works when absolute numbers are confidential",
        "Show the before/after: what was the situation before your work, and what measurably changed after?",
      ],
    });
  } else if (topChallenge.includes("next PM level")) {
    recs.push({
      heading: "Document your leadership, not your tasks",
      detail:
        "Senior PM portfolios fail when they read like junior ones with bigger projects. The difference is in how you frame influence and decision-making.",
      steps: [
        "Replace task-oriented language (\"managed the roadmap\") with influence-oriented language (\"shaped the product direction by...\")",
        "Include a case study about resolving conflicting stakeholder priorities — this is senior PM territory",
        "Show how you mentored or upleveled others on your team, even informally",
        "Add strategic context: what market dynamics, business goals, or competitive pressures informed your decisions?",
      ],
    });
  } else if (topChallenge.includes("credibility")) {
    recs.push({
      heading: "Let the work speak before the title does",
      detail:
        "A strong case study from someone without a PM title can be more compelling than a weak one from a Senior PM.",
      steps: [
        "Focus every case study on demonstrating product thinking: problem identification, prioritization, user empathy, outcome measurement",
        "Include evidence of initiative — did you identify the problem yourself, or just execute someone else's solution?",
        "Add testimonials or feedback from colleagues if available (\"My manager noted that...\")",
        "Don't apologize for your background — frame it as a differentiator, not a limitation",
      ],
    });
  } else {
    recs.push({
      heading: "Focus on 2-3 case studies that show range",
      detail:
        "Breadth of PM skills is more convincing than depth in a single area. Show different muscles across your portfolio.",
      steps: [
        "Choose projects that demonstrate different PM competencies: one user-focused, one data-driven, one cross-functional",
        "Vary the scale: include one large initiative and one smaller, scrappy win",
        "Make sure at least one case study shows how you handled something that didn't go as planned",
        "Write a brief portfolio intro that ties the case studies together into a narrative about your PM approach",
      ],
    });
  }

  return recs;
}

const Quiz = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [multiAnswers, setMultiAnswers] = useState<Record<number, string[]>>({});
  const [showTeaser, setShowTeaser] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [journeyStage, setJourneyStage] = useState<JourneyStage>("early");

  const heroAnimation = useScrollAnimation();

  useSEO({
    title: "3-Minute Portfolio Quiz | Find Out What's Holding You Back - Prodfolio",
    description:
      "Take our quick 3-minute quiz to discover what's holding your PM portfolio back and get personalized recommendations to stand out.",
    canonical: "https://prodfolio.io/quiz",
  });

  const calculateJourneyStage = (): JourneyStage => {
    const roleAnswer = answers[0] || "";
    const experienceAnswer = answers[1] || "";

    if (
      roleAnswer.includes("Aspiring") ||
      roleAnswer.includes("Student") ||
      experienceAnswer.includes("None yet")
    ) {
      return "aspiring";
    } else if (
      experienceAnswer.includes("Less than 1 year") ||
      experienceAnswer.includes("1-3 years")
    ) {
      return "early";
    } else if (experienceAnswer.includes("3-5 years")) {
      return "mid";
    } else {
      return "senior";
    }
  };

  const handleSingleAnswerChange = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleMultiAnswerChange = (option: string, checked: boolean) => {
    const currentAnswers = multiAnswers[currentQuestion] || [];
    if (checked) {
      setMultiAnswers({ ...multiAnswers, [currentQuestion]: [...currentAnswers, option] });
    } else {
      setMultiAnswers({
        ...multiAnswers,
        [currentQuestion]: currentAnswers.filter((a) => a !== option),
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const calculatedStage = calculateJourneyStage();
      setJourneyStage(calculatedStage);
      setShowTeaser(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      return;
    } else if (showEmailCapture) {
      setShowEmailCapture(false);
      setShowTeaser(true);
    } else if (showTeaser) {
      setShowTeaser(false);
      setCurrentQuestion(questions.length - 1);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setShowIntro(true);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim()) {
      return;
    }

    if (!email.includes("@")) {
      return;
    }

    console.log("Quiz lead captured:", {
      firstName,
      email,
      marketingOptIn,
      answers,
      multiAnswers,
      journeyStage,
    });

    setShowEmailCapture(false);
    setShowResults(true);
  };

  const progressPercentage =
    showTeaser || showEmailCapture || showResults
      ? 100
      : Math.round(((currentQuestion + 1) / questions.length) * 100);

  const canProceed = () => {
    const q = questions[currentQuestion];
    if (q.type === "single") {
      return !!answers[currentQuestion];
    } else if (q.type === "multiple") {
      return (multiAnswers[currentQuestion]?.length || 0) > 0;
    }
    return false;
  };

  // ── Intro Screen ──────────────────────────────────────────────────────
  if (showIntro) {
    return (
      <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
        <Navbar />

        <section
          ref={heroAnimation.ref as React.RefObject<HTMLElement>}
          className={`pt-28 pb-16 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="prodfolio-container max-w-[1200px] mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
              Is your PM portfolio
              <br />
              <span className="gradient-text">ready to land your dream role?</span>
            </h1>
            <p className="text-xl text-white/70 mb-4 max-w-2xl mx-auto">
              Find out in just 3 minutes with this free assessment.
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
              Identify your strengths, uncover gaps, and get personalized guidance for your career
              stage.
            </p>

            <Button
              size="lg"
              onClick={() => setShowIntro(false)}
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
            >
              Start the Quiz
            </Button>
            <p className="mt-4 text-sm text-white/50">
              Completely free · Takes 3 minutes · No credit card required
            </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ── Full Results Screen ───────────────────────────────────────────────
  if (showResults) {
    const stage = stageBase[journeyStage];
    const results = buildResults(
      journeyStage,
      answers[2] || "",
      answers[4] || "",
      multiAnswers[3] || [],
    );

    const handleShare = () => {
      const text = `I just took the Prodfolio PM Portfolio Quiz — I'm "${results.archetype.title}"\n\n${results.archetype.description}\n\nFind your PM profile: https://prodfolio.io/quiz`;
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://prodfolio.io/quiz")}&summary=${encodeURIComponent(text)}`;
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
    };

    const handleCopyLink = () => {
      const text = `I'm "${results.archetype.title}" — ${results.archetype.description}\n\nTake the free PM Portfolio Quiz: https://prodfolio.io/quiz`;
      navigator.clipboard.writeText(text);
    };

    return (
      <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
        <Navbar />

        {/* Profile Card — the shareable piece */}
        <section className="pt-28 pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto">
            <div className="glass-card p-8 md:p-12 text-center">
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm font-medium text-white tracking-wide">
                  Your PM Profile
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                {results.archetype.title}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
                {results.archetype.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleShare}
                  className="px-6 py-3 bg-white text-navy text-sm font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  Share on LinkedIn
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-6 py-3 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/20 transition-all"
                >
                  Copy result
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Insight */}
        <section className="pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                Where you stand
              </h3>
              <p className="text-white/80 leading-relaxed">{results.insight}</p>
            </div>
          </div>
        </section>

        {/* Answer-aware Recommendations */}
        <section className="pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Your 3 next moves
            </h2>
            <div className="space-y-4">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="glass-card p-6 md:p-8">
                  <h4 className="font-heading font-semibold text-white mb-2">
                    {index + 1}. {rec.heading}
                  </h4>
                  <p className="text-white/70 leading-relaxed mb-4">{rec.detail}</p>
                  <ul className="space-y-2">
                    {rec.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-sm mt-1">—</span>
                        <span className="text-white/60 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              {stage.ctaAngle}
            </h2>
            <p className="text-white/60 mb-6">
              Prodfolio helps you build a professional PM portfolio in under an hour. No design
              skills needed.
            </p>
            <Button
              asChild
              size="lg"
              className="px-8 py-3.5 h-auto text-base bg-white text-navy hover:bg-white/90 font-semibold rounded-xl transition-all"
            >
              <a href="https://app.prodfolio.io/sign-up">Start Building Free</a>
            </Button>
            <p className="mt-3 text-sm text-white/40">
              Free to start · No credit card required
            </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ── Email Capture Screen ──────────────────────────────────────────────
  if (showEmailCapture) {
    return (
      <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
        <Navbar />

        <section className="pt-28 pb-16 px-4">
          <div className="prodfolio-container max-w-[600px] mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back</span>
            </button>

            <div className="text-center mb-8">
              <p className="text-sm text-primary font-medium mb-3">Almost there!</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Get your personalized roadmap
              </h2>
              <p className="text-white/60">
                Enter your details below to see your full results.
              </p>
            </div>

            <div className="glass-card p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/80 text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="marketing"
                    checked={marketingOptIn}
                    onCheckedChange={(checked) => setMarketingOptIn(checked as boolean)}
                    className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                  />
                  <Label
                    htmlFor="marketing"
                    className="text-sm text-white/60 leading-relaxed cursor-pointer"
                  >
                    I'd like to receive PM portfolio tips and career insights from Prodfolio
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-base bg-white text-navy hover:bg-white/90 font-semibold rounded-xl transition-all"
                >
                  See My Results
                </Button>
              </form>
            </div>

            <p className="text-center text-xs text-white/40 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ── Teaser Result Screen ──────────────────────────────────────────────
  if (showTeaser) {
    const stage = stageBase[journeyStage];

    return (
      <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
        <Navbar />

        <section className="pt-28 pb-16 px-4">
          <div className="prodfolio-container max-w-[700px] mx-auto text-center">
            <div className="inline-block px-5 py-2.5 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-medium mb-8">
              {stage.label}
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {stage.teaserSummary}
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
              We've built a personalized roadmap based on your answers. Enter your email to unlock
              your full results.
            </p>

            <div className="glass-card p-8 mb-10 text-left max-w-md mx-auto">
              <h3 className="text-lg font-heading font-semibold text-white mb-4">
                Your roadmap includes:
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>Personalized insights for your career stage</li>
                <li>Specific recommendations to improve your portfolio</li>
                <li>Your next steps to stand out to hiring managers</li>
              </ul>
            </div>

            <Button
              size="lg"
              onClick={() => {
                setShowTeaser(false);
                setShowEmailCapture(true);
              }}
              className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
            >
              Unlock My Full Results
            </Button>

            <button
              onClick={handleBack}
              className="block mx-auto mt-4 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Go back
            </button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ── Question Flow ─────────────────────────────────────────────────────
  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
      <Navbar />

      <section className="pt-28 pb-16 px-4">
        {/* Progress Bar */}
        <div className="prodfolio-container max-w-[700px] mx-auto mb-6">
          <div className="h-1 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <div className="prodfolio-container max-w-[700px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back</span>
            </button>
            <span className="text-sm text-white/50">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              {q.question}
            </h2>
            <p className="text-white/60">{q.subtext}</p>
          </div>

          <div className="space-y-3 mb-10">
            {q.type === "single"
              ? q.options?.map((option, index) => {
                  const isSelected = answers[currentQuestion] === option;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSingleAnswerChange(option)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? "bg-primary/20 border-primary/50 text-white"
                          : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? "bg-primary border-primary" : "border-white/40"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <span className="text-base">{option}</span>
                      </div>
                    </button>
                  );
                })
              : q.options?.map((option, index) => {
                  const isChecked = multiAnswers[currentQuestion]?.includes(option) || false;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleMultiAnswerChange(option, !isChecked)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                        isChecked
                          ? "bg-primary/20 border-primary/50 text-white"
                          : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            isChecked ? "bg-primary border-primary" : "border-white/40"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-base">{option}</span>
                      </div>
                    </button>
                  );
                })}
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="w-full h-14 text-base bg-white text-navy hover:bg-white/90 font-semibold disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              {currentQuestion === questions.length - 1 ? "See My Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;
