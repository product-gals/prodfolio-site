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

const stageContent: Record<
  JourneyStage,
  {
    label: string;
    teaserSummary: string;
    insight: string;
    recommendations: string[];
    ctaAngle: string;
  }
> = {
  aspiring: {
    label: "Aspiring PM",
    teaserSummary: "You're an Aspiring PM building your foundation",
    insight:
      "You're building your PM foundation — the right portfolio will set you apart before you even land your first role.",
    recommendations: [
      "Document side projects as product case studies to show your thinking process",
      "Reframe adjacent experience to highlight transferable PM skills",
      "Show your product thinking process, not just outcomes — hiring managers want to see how you approach problems",
    ],
    ctaAngle: "Start building your portfolio to prove you think like a PM",
  },
  early: {
    label: "Early PM",
    teaserSummary: "You're an Early PM ready to make your impact visible",
    insight:
      "You have real PM experience — now it's time to make your impact visible and tell your story.",
    recommendations: [
      "Structure case studies around measurable outcomes, not just activities",
      "Quantify your impact with specific metrics and before/after data",
      "Showcase your decision-making process and how you aligned stakeholders",
    ],
    ctaAngle: "Turn your first PM wins into a portfolio that opens doors",
  },
  mid: {
    label: "Mid-Level PM",
    teaserSummary: "You're a Mid-Level PM leveling up your career",
    insight:
      "You're leveling up — your portfolio should show strategic thinking, not just execution.",
    recommendations: [
      "Highlight cross-functional leadership and how you influenced without authority",
      "Show scope expansion — how your role grew as you proved impact",
      "Demonstrate business-level impact beyond feature delivery",
    ],
    ctaAngle: "Showcase the leadership that earns your next promotion",
  },
  senior: {
    label: "Senior PM",
    teaserSummary: "You're a Senior PM with strategic vision to share",
    insight:
      "You've driven major outcomes — your portfolio should reflect strategic vision and organizational impact.",
    recommendations: [
      "Focus on business-level outcomes: revenue, retention, market expansion",
      "Include thought leadership content and industry perspectives",
      "Showcase mentoring, team building, and organizational influence",
    ],
    ctaAngle: "Document the strategic impact that defines your career",
  },
};

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
    const stage = stageContent[journeyStage];

    return (
      <div className="min-h-screen gradient-mesh-bg" style={{ backgroundColor: "#0c0a1a" }}>
        <Navbar />

        <section className="pt-28 pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-semibold text-lg mb-6">
              {stage.label}
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Your PM Portfolio Roadmap
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Based on your answers, here's your personalized path forward.
            </p>
          </div>
        </section>

        <section className="pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                Key Insight
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">{stage.insight}</p>
            </div>
          </div>
        </section>

        <section className="pb-8 px-4">
          <div className="prodfolio-container max-w-[800px] mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">What to focus on</h2>
            <div className="space-y-4">
              {stage.recommendations.map((rec, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-white/40 font-heading font-bold text-lg flex-shrink-0 leading-relaxed">
                      {index + 1}.
                    </span>
                    <p className="text-white/80 leading-relaxed">{rec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="prodfolio-container max-w-[600px] mx-auto">
            <div className="bg-[#9E85F9]/10 backdrop-blur-md rounded-2xl border border-[#9E85F9]/25 shadow-[0_8px_32px_rgba(158,133,249,0.2)] p-8 text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-3">
                {stage.ctaAngle}
              </h2>
              <p className="text-white/70 mb-6">
                Prodfolio helps you build a professional PM portfolio in under an hour. No design
                skills needed.
              </p>
              <Button
                asChild
                size="lg"
                className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 shadow-xl font-semibold rounded-xl transition-all hover:scale-105"
              >
                <a href="https://app.prodfolio.io/sign-up">Start Building Free</a>
              </Button>
              <p className="mt-4 text-sm text-white/50">
                Free to start · No credit card required
              </p>
            </div>
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
    const stage = stageContent[journeyStage];

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
