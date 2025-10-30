import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type PersonaType = "strategist" | "builder" | "storyteller";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [persona, setPersona] = useState<PersonaType>("builder");
  const navigate = useNavigate();
  const { toast } = useToast();

  useSEO({
    title: "Product Manager Portfolio Quiz | Prodfolio",
    description: "Discover your product portfolio strengths in 3 minutes with Prodfolio's free quiz. Learn what's holding you back — and how to stand out.",
    canonical: "https://prodfolio.io/quiz",
  });

  const questions = [
    {
      question: "What best describes your PM experience?",
      options: [
        "I'm aspiring to break into PM",
        "0-2 years as a PM",
        "3-5 years as a PM",
        "5+ years or PM leadership",
      ],
      category: "qualifying",
    },
    {
      question: "How do you currently showcase your product work?",
      options: [
        "I don't have a portfolio yet",
        "Resume only",
        "LinkedIn profile",
        "Personal website or PDF portfolio",
      ],
      category: "current-state",
    },
    {
      question: "What type of products do you primarily work on?",
      options: [
        "B2B SaaS",
        "Consumer apps",
        "Enterprise software",
        "E-commerce or marketplace",
      ],
      category: "qualifying",
    },
    {
      question: "What's your biggest challenge with your current portfolio?",
      options: [
        "Don't know where to start",
        "Hard to quantify my impact",
        "Takes too much time to maintain",
        "Doesn't stand out from others",
      ],
      category: "pain-point",
    },
    {
      question: "How comfortable are you quantifying your impact with metrics?",
      options: [
        "Very comfortable — I have clear data",
        "Somewhat comfortable — I have some metrics",
        "Not very comfortable — I struggle with this",
        "Not at all — I don't track metrics well",
      ],
      category: "skill-level",
    },
    {
      question: "How confident are you in telling the story behind your product decisions?",
      options: [
        "Very confident — I can explain my thinking clearly",
        "Somewhat confident — I know what I did but struggle to articulate it",
        "Not very confident — I'm not sure how to structure it",
        "Not at all — This is really hard for me",
      ],
      category: "skill-level",
    },
    {
      question: "What's your main goal for your portfolio?",
      options: [
        "Land my first PM role",
        "Get promoted internally",
        "Switch to a new company",
        "Showcase my work for clients/freelancing",
      ],
      category: "goal",
    },
    {
      question: "How much time can you dedicate to building your portfolio?",
      options: [
        "A few hours this week",
        "A few hours over the next month",
        "I need something quick — under an hour",
        "I can invest significant time to get it right",
      ],
      category: "commitment",
    },
    {
      question: "What would make the biggest difference in your portfolio?",
      options: [
        "Better visual design and presentation",
        "Clearer articulation of my impact",
        "More compelling storytelling",
        "Proof of results and outcomes",
      ],
      category: "priority",
    },
    {
      question: "Have you received feedback on your portfolio before?",
      options: [
        "Yes, and it was mostly positive",
        "Yes, but I got mixed or unclear feedback",
        "No, I haven't shared it with anyone yet",
        "I don't have a portfolio to get feedback on",
      ],
      category: "validation",
    },
  ];

  const calculatePersona = (): PersonaType => {
    // Simple logic based on answers
    const metricsAnswer = answers[4] || "";
    const storytellingAnswer = answers[5] || "";
    const priorityAnswer = answers[8] || "";

    if (storytellingAnswer.includes("Very confident") || priorityAnswer.includes("storytelling")) {
      return "storyteller";
    } else if (metricsAnswer.includes("Very comfortable") || priorityAnswer.includes("impact")) {
      return "strategist";
    } else {
      return "builder";
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
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

    // Calculate persona based on answers
    const calculatedPersona = calculatePersona();
    setPersona(calculatedPersona);

    // Here you would send lead data to backend
    console.log("Quiz lead captured:", { name, email, answers, persona: calculatedPersona });

    setShowResults(true);
  };

  const personaResults = {
    strategist: {
      title: "The Strategist",
      score: "85/100",
      description: "You're data-driven and excel at quantifying impact. Your strength is in metrics and outcomes.",
      strengths: [
        "You understand the importance of metrics and can demonstrate clear ROI",
        "You think strategically about product decisions",
        "You're comfortable with data-driven storytelling",
      ],
      improvements: [
        "Focus on making your visual presentation more compelling",
        "Add more context around the 'why' behind your decisions",
        "Consider including user quotes or qualitative feedback to complement your metrics",
      ],
      cta: "Your analytical mindset is perfect for Prodfolio's metric-focused templates.",
    },
    builder: {
      title: "The Builder",
      score: "72/100",
      description: "You're hands-on and focused on execution. You get things done but may need help showcasing your impact.",
      strengths: [
        "You have real product experience and tangible work to showcase",
        "You're practical and execution-focused",
        "You understand the product development process",
      ],
      improvements: [
        "Focus on articulating the impact of your work with clear metrics",
        "Develop a structured framework for telling your product stories",
        "Practice quantifying your contributions in measurable terms",
      ],
      cta: "Prodfolio's guided templates will help you structure your experience and highlight your impact.",
    },
    storyteller: {
      title: "The Storyteller",
      score: "78/100",
      description: "You excel at narrative and communication. Your challenge is backing up stories with hard metrics.",
      strengths: [
        "You can articulate your thinking and decisions clearly",
        "You understand the power of narrative in product management",
        "You're confident presenting your work",
      ],
      improvements: [
        "Add more quantitative metrics to support your narratives",
        "Structure your stories with clear problem → solution → impact flow",
        "Include specific KPIs and measurable outcomes",
      ],
      cta: "Combine your storytelling skills with Prodfolio's metric frameworks for a powerful portfolio.",
    },
  };

  const currentPersona = personaResults[persona];
  const progressPercentage = showEmailCapture 
    ? 100 
    : Math.round(((currentQuestion + 1) / questions.length) * 100);

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
                <span className="font-bold text-xl">{currentPersona.score}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                You're {currentPersona.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {currentPersona.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card style={{ backgroundColor: '#D7C8FF10' }}>
                <CardHeader>
                  <CardTitle className="text-2xl">Your Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentPersona.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#D7C8FF10' }}>
                <CardHeader>
                  <CardTitle className="text-2xl">Areas to Improve</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentPersona.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-2" style={{ borderColor: '#9B7BFF' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Level Up?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {currentPersona.cta}
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
                  Get Your Personalized Results
                </CardTitle>
                <p className="text-center text-muted-foreground mt-4">
                  We'll send your personalized portfolio insights and tips straight to your inbox.
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
            Find Your Portfolio Strength in 3 Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Answer a few quick questions to learn what's holding your product portfolio back — and how to fix it.
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
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option, index) => (
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
                  disabled={!answers[currentQuestion]}
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
