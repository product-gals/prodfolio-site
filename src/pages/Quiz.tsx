import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useSEO({
    title: "Portfolio Quiz - Prodfolio",
    description: "Take our 3-minute quiz to discover how to improve your product portfolio.",
    canonical: "https://prodfolio.io/quiz",
  });

  const questions = [
    {
      question: "How do you currently showcase your product work?",
      options: [
        "I don't have a portfolio yet",
        "Resume only",
        "LinkedIn profile",
        "Personal website or PDF portfolio",
      ],
    },
    {
      question: "What's your biggest challenge with your current portfolio?",
      options: [
        "Don't know where to start",
        "Hard to quantify my impact",
        "Takes too much time to maintain",
        "Doesn't stand out from others",
      ],
    },
    {
      question: "What's your main goal for your portfolio?",
      options: [
        "Land my first PM role",
        "Get promoted internally",
        "Switch to a new company",
        "Showcase my work for clients/freelancing",
      ],
    },
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24 px-4">
          <div className="prodfolio-container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Portfolio Needs a Boost
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Based on your answers, Prodfolio can help you create a standout portfolio that showcases your impact and gets you noticed.
            </p>
            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle>Here's what you can do with Prodfolio:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Build your portfolio in minutes</h3>
                    <p className="text-muted-foreground">No design skills needed. Our templates guide you through showcasing your best work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quantify your impact</h3>
                    <p className="text-muted-foreground">Highlight metrics and outcomes that prove your value to hiring managers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Stand out from the crowd</h3>
                    <p className="text-muted-foreground">Professional design and clear storytelling make your work memorable.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
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
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 px-4">
        <div className="prodfolio-container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              3-Minute Portfolio Quiz
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how to make your portfolio stand out
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
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
                  <div key={index} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
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
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
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
