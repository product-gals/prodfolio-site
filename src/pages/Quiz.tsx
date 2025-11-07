import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import prodfolioLogo from "@/assets/prodfolio-icon.png";

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
    title: "3-Minute Portfolio Quiz | Find Out What's Holding You Back - Prodfolio",
    description: "Take our quick 3-minute quiz to discover what's holding your PM portfolio back and get personalized recommendations to stand out.",
    canonical: "https://prodfolio.io/quiz",
  });

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
      question: "Which PM skills do you feel strongest in?",
      subtext: "Select all that apply",
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
      question: "What's your biggest challenge right now in your PM career?",
      subtext: "Select all that apply",
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
      question: "How confident are you in talking about your PM work in interviews?",
      subtext: "Select all that apply",
      options: [
        "Very confident - I have clear examples ready",
        "Somewhat confident - I know what I've done but struggle to articulate it",
        "Not confident - I'm not sure how to frame my experience",
        "N/A - Haven't had PM interviews yet",
      ],
      type: "multiple",
    },
    {
      question: "What's stopping you from reaching your PM goals right now?",
      subtext: "Select all that apply",
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
        [currentQuestion]: currentAnswers.filter(a => a !== option) 
      });
    }
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
    } else {
      navigate("/");
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

    const calculatedStage = calculateJourneyStage();
    setJourneyStage(calculatedStage);

    console.log("Quiz lead captured:", { name, email, answers, multiAnswers, textAnswers, journeyStage: calculatedStage });

    toast({
      title: "Success!",
      description: "Your results will be emailed to you shortly.",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const progressPercentage = showEmailCapture 
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

  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold">Prodfolio</h1>
            <div className="w-9" />
          </div>
        </header>

        {/* Progress Bar */}
        <div className="bg-muted/30 h-1.5">
          <div 
            className="h-full bg-coral transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              Almost there!
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Your Personalized Results
            </h2>
            <p className="text-muted-foreground">
              We'll send your PM portfolio roadmap straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-6 max-w-md mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full h-14 text-base bg-coral hover:bg-coral/90 text-white"
            >
              Get My Results
            </Button>
          </form>
        </div>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-6 mt-20">
          <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={prodfolioLogo} alt="Prodfolio" className="w-6 h-6" />
              <span className="font-semibold">Prodfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built for Product Managers
            </p>
          </div>
        </footer>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Prodfolio</h1>
          <div className="w-9" />
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-muted/30 h-1.5">
        <div 
          className="h-full bg-coral transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-6">
            {currentQuestion + 1} of {questions.length}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {q.question}
          </h2>
          <p className="text-muted-foreground">{q.subtext}</p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {q.type === "single" ? (
            q.options?.map((option, index) => {
              const isSelected = answers[currentQuestion] === option;
              return (
                <button
                  key={index}
                  onClick={() => handleSingleAnswerChange(option)}
                  className={`w-full text-left p-5 border-2 rounded-xl transition-all duration-200 ${
                    isSelected 
                      ? "border-coral bg-coral/5" 
                      : "border-border hover:border-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isSelected ? "bg-coral border-coral" : "border-muted-foreground"
                    }`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-base">{option}</span>
                  </div>
                </button>
              );
            })
          ) : (
            q.options?.map((option, index) => {
              const isChecked = multiAnswers[currentQuestion]?.includes(option) || false;
              return (
                <button
                  key={index}
                  onClick={() => handleMultiAnswerChange(option, !isChecked)}
                  className={`w-full text-left p-5 border-2 rounded-xl transition-all duration-200 ${
                    isChecked 
                      ? "border-coral bg-coral/5" 
                      : "border-border hover:border-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isChecked ? "bg-coral border-coral" : "border-muted-foreground"
                    }`}>
                      {isChecked && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-base">{option}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Next Button */}
        <Button 
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full h-14 text-base bg-coral hover:bg-coral/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-6 mt-20">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={prodfolioLogo} alt="Prodfolio" className="w-6 h-6" />
            <span className="font-semibold">Prodfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for Product Managers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
