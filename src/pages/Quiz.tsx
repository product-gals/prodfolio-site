import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type JourneyStage = "aspiring" | "early" | "mid" | "senior";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [multiAnswers, setMultiAnswers] = useState<Record<number, string[]>>({});
  const [textAnswers, setTextAnswers] = useState<Record<number, string>>({});
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [journeyStage, setJourneyStage] = useState<JourneyStage>("early");
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "PM Journey Survey | Prodfolio",
    description: "Take a quick survey to see where you are on your PM Journey. Discover your strengths and get personalized recommendations.",
    canonical: "https://prodfolio.io/quiz",
  });

  const questions = [
    {
      question: "What best describes your current role?",
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
      options: [
        "Yes, I have a portfolio or case studies",
        "I have some materials, but nothing polished",
        "No, and I'm not sure where to start",
        "No, but I'm working on it",
      ],
      type: "single",
    },
    {
      question: "Think about your ideal PM role. What does success look like for you in that position?",
      type: "text",
    },
    {
      question: "Which PM skills do you feel strongest in? (Select all that apply)",
      options: [
        "Product strategy & vision",
        "User research & empathy",
        "Data analysis & metrics",
        "Stakeholder management",
        "Roadmapping & prioritization",
        "I'm still building these skills",
      ],
      type: "multiple",
    },
    {
      question: "What's your biggest challenge right now in your PM career? (Select all that apply)",
      options: [
        "Getting noticed by recruiters/hiring managers",
        "Breaking into PM from another field",
        "Showcasing my impact clearly",
        "Moving to the next PM level",
        "Building credibility without formal PM title",
      ],
      type: "multiple",
    },
    {
      question: "How confident are you in talking about your PM work in interviews? (Select all that apply)",
      options: [
        "Very confident - I have clear examples ready",
        "Somewhat confident - I know what I've done but struggle to articulate it",
        "Not confident - I'm not sure how to frame my experience",
        "N/A - Haven't had PM interviews yet",
      ],
      type: "multiple",
    },
    {
      question: "Where do you see yourself in your PM career 1-2 years from now? What would need to happen to get there?",
      type: "text",
    },
    {
      question: "What's stopping you from reaching your PM goals right now? (Select all that apply)",
      options: [
        "Lack of visibility/portfolio",
        "No formal PM experience",
        "Don't know how to stand out",
        "Limited network or connections",
        "Unclear on what employers want to see",
      ],
      type: "multiple",
    },
    {
      question: "If you could solve ONE thing about your PM career journey today, what would it be?",
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
      options: [
        "Very active (applying/interviewing regularly)",
        "Moderately active (exploring options)",
        "Preparing to start soon",
        "Passively looking",
        "Not currently looking but want to be ready",
      ],
      type: "single",
    },
    {
      question: "How can Prodfolio best support your PM goals? (Select all that apply)",
      options: [
        "Help me break into PM",
        "Showcase my PM projects professionally",
        "Get noticed by recruiters and hiring managers",
        "Advance to senior PM roles",
        "Build credibility without a formal PM title",
        "Learn how to tell my PM story better",
      ],
      type: "multiple",
      hasAdditionalText: true,
      additionalTextPrompt: "Please tell us anything else that may help us serve you better:",
    },
  ];

  const calculateJourneyStage = (): JourneyStage => {
    const roleAnswer = answers[0] || "";
    const experienceAnswer = answers[1] || "";

    if (roleAnswer.includes("Aspiring") || roleAnswer.includes("Student") || experienceAnswer.includes("None yet")) {
      return "aspiring";
    } else if (experienceAnswer.includes("Less than 1 year") || experienceAnswer.includes("1-3 years")) {
      return "early";
    } else if (experienceAnswer.includes("3-5 years")) {
      return "mid";
    } else {
      return "senior";
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleMultiAnswerChange = (option: string, checked: boolean) => {
    const currentAnswers = multiAnswers[currentQuestion] || [];
    if (checked) {
      setMultiAnswers({ ...multiAnswers, [currentQuestion]: [...currentAnswers, option] });
    } else {
      setMultiAnswers({ 
        ...multiAnswers, 
        [currentQuestion]: currentAnswers.filter(a => a !== option) 
      });
    }
  };

  const handleTextChange = (value: string) => {
    setTextAnswers({ ...textAnswers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailCapture(true);
    }
  };

  const handleBack = () => {
    if (showEmailCapture) {
      setShowEmailCapture(false);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Calculate journey stage based on answers
    const calculatedStage = calculateJourneyStage();
    setJourneyStage(calculatedStage);

    // Here you would send lead data to backend
    console.log("Survey lead captured:", { name, email, answers, multiAnswers, textAnswers, journeyStage: calculatedStage });

    setShowResults(true);
  };

  const journeyResults = {
    aspiring: {
      title: "Aspiring PM Ready to Break In",
      description: "You have real potential to break into product management with the right portfolio strategy.",
      insights: [
        "You're taking the right first steps by thinking about how to showcase your work",
        "Your enthusiasm and learning mindset are valuable assets",
        "Now it's time to document your journey and demonstrate your PM thinking",
      ],
      nextSteps: [
        "Start building case studies from class projects, side projects, or adjacent work",
        "Focus on demonstrating your PM thinking process and frameworks",
        "Create a polished portfolio that tells your story and shows your potential",
      ],
      cta: "Prodfolio helps aspiring PMs create compelling portfolios that get noticed by recruiters.",
    },
    early: {
      title: "Early-Stage PM Building Momentum",
      description: "You have real PM experience to showcase. Now it's time to tell that story effectively.",
      insights: [
        "You've built foundational PM skills and have tangible work to highlight",
        "Your challenge is articulating impact clearly and standing out in a competitive field",
        "A strong portfolio can accelerate your growth and open new opportunities",
      ],
      nextSteps: [
        "Document your best 2-3 projects with clear metrics and outcomes",
        "Practice telling the story behind your decisions and trade-offs",
        "Build a professional portfolio that demonstrates your strategic thinking",
      ],
      cta: "Prodfolio's guided templates help you structure your experience and highlight measurable impact.",
    },
    mid: {
      title: "Mid-Level PM Primed for Growth",
      description: "You're at a critical inflection point. Your portfolio can unlock senior-level opportunities.",
      insights: [
        "You have strong PM experience and proven results to showcase",
        "Your next career move requires demonstrating strategic thinking and leadership",
        "A compelling portfolio sets you apart from other mid-level candidates",
      ],
      nextSteps: [
        "Showcase your most impactful work with compelling narratives and data",
        "Highlight cross-functional leadership and strategic decision-making",
        "Create a portfolio that positions you for senior PM roles",
      ],
      cta: "Prodfolio helps mid-level PMs showcase the strategic depth needed for senior roles.",
    },
    senior: {
      title: "Senior PM on the Leadership Track",
      description: "Your experience speaks volumes. Now make it visible to the right opportunities.",
      insights: [
        "You have significant PM experience and a track record of impact",
        "Your portfolio should reflect strategic leadership, not just execution",
        "The right positioning can open doors to principal/director-level opportunities",
      ],
      nextSteps: [
        "Showcase your most strategic initiatives and business impact",
        "Demonstrate your leadership across teams and organizational influence",
        "Create a portfolio that reflects your thought leadership in product",
      ],
      cta: "Prodfolio helps senior PMs showcase the strategic vision that defines leadership.",
    },
  };

  const currentStage = journeyResults[journeyStage];
  const progressPercentage = showEmailCapture 
    ? 100 
    : Math.round(((currentQuestion + 1) / questions.length) * 100);

  const canProceed = () => {
    const q = questions[currentQuestion];
    if (q.type === "single") {
      return !!answers[currentQuestion];
    } else if (q.type === "multiple") {
      return (multiAnswers[currentQuestion]?.length || 0) > 0;
    } else if (q.type === "text") {
      return (textAnswers[currentQuestion]?.trim().length || 0) > 0;
    }
    return false;
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24 px-4">
          <div className="prodfolio-container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div 
                className="inline-block px-6 py-2 rounded-full mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, #9B7BFF, #B59CFF)',
                  color: 'white'
                }}
              >
                <span className="font-bold text-xl">🎉 Your Results</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {currentStage.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {currentStage.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card style={{ backgroundColor: '#D7C8FF10' }}>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentStage.insights.map((insight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#D7C8FF10' }}>
                <CardHeader>
                  <CardTitle className="text-2xl">Your Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentStage.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-2" style={{ borderColor: '#9B7BFF' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">🎉 Great Job!</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {currentStage.cta}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#9B7BFF] to-[#B59CFF] hover:opacity-90"
                    asChild
                  >
                    <a href="https://app.prodfolio.io/signup">
                      Start Building My Portfolio
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/pricing")}
                  >
                    View Pricing
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground">
                Want more guidance?{" "}
                <a href="/resources" className="text-primary hover:underline font-medium">
                  Download free templates and guides
                </a>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24 px-4">
          <div className="prodfolio-container max-w-2xl mx-auto">
            <Progress value={progressPercentage} className="mb-8 h-2" />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  Get Your PM Journey Roadmap
                </CardTitle>
                <p className="text-center text-muted-foreground mt-4">
                  We'll send your personalized PM portfolio roadmap and specific next steps for your career stage straight to your inbox.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#9B7BFF] to-[#B59CFF] hover:opacity-90"
                    >
                      See My Results
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="prodfolio-container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Take a quick survey to see where you are on your PM Journey
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Select what best describes you for each question
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="pb-24 px-4">
        <div className="prodfolio-container max-w-2xl mx-auto">
          <Progress value={progressPercentage} className="mb-8 h-2" />
          
          <Card style={{ backgroundColor: 'white' }}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span 
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #9B7BFF, #B59CFF)',
                    color: 'white'
                  }}
                >
                  {progressPercentage}% Complete
                </span>
              </div>
              <CardTitle className="text-2xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {questions[currentQuestion].type === "single" && (
                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options?.map((option, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      style={{
                        borderColor: answers[currentQuestion] === option ? '#9B7BFF' : undefined,
                        backgroundColor: answers[currentQuestion] === option ? '#D7C8FF10' : undefined,
                      }}
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {questions[currentQuestion].type === "multiple" && (
                <div className="space-y-3">
                  {questions[currentQuestion].options?.map((option, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      style={{
                        borderColor: multiAnswers[currentQuestion]?.includes(option) ? '#9B7BFF' : undefined,
                        backgroundColor: multiAnswers[currentQuestion]?.includes(option) ? '#D7C8FF10' : undefined,
                      }}
                    >
                      <Checkbox 
                        id={`option-${index}`}
                        checked={multiAnswers[currentQuestion]?.includes(option) || false}
                        onCheckedChange={(checked) => handleMultiAnswerChange(option, checked as boolean)}
                      />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                  {questions[currentQuestion].hasAdditionalText && (
                    <div className="mt-6">
                      <Label htmlFor="additional-text" className="text-sm text-muted-foreground mb-2 block">
                        {questions[currentQuestion].additionalTextPrompt}
                      </Label>
                      <Textarea
                        id="additional-text"
                        placeholder="Your response..."
                        value={textAnswers[currentQuestion] || ""}
                        onChange={(e) => handleTextChange(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  )}
                </div>
              )}

              {questions[currentQuestion].type === "text" && (
                <div>
                  <Textarea
                    placeholder="Your response..."
                    value={textAnswers[currentQuestion] || ""}
                    onChange={(e) => handleTextChange(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-[#9B7BFF] to-[#B59CFF] hover:opacity-90"
                >
                  {currentQuestion === questions.length - 1 ? "Continue" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Quiz;
