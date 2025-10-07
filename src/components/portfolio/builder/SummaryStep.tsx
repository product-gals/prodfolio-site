
import { useState, useCallback, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";

interface SummaryStepProps {
  summary: string;
  onChange: (summary: string) => void;
  quickFill?: boolean;
}

const SummaryStep = ({ summary, onChange, quickFill = false }: SummaryStepProps) => {
  const [value, setValue] = useState(summary);
  const [isComposing, setIsComposing] = useState(false);
  const maxChars = 180;
  
  // Debounced onChange with 300ms delay
  const debouncedOnChange = useDebounce(onChange, 300, { leading: false, trailing: true });
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setValue(e.target.value);
      
      // Only trigger debounced update if not composing (for IME support)
      if (!isComposing) {
        debouncedOnChange(e.target.value);
      }
    }
  }, [maxChars, isComposing, debouncedOnChange]);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setIsComposing(false);
    // Trigger immediate update after composition ends
    const target = e.target as HTMLTextAreaElement;
    if (target.value.length <= maxChars) {
      debouncedOnChange(target.value);
    }
  }, [maxChars, debouncedOnChange]);
  
const exampleSummaries = [
  "PM driving outcomes through data-informed decisions and cross-functional alignment.",
  "Customer-focused PM skilled in discovery, prioritization, and shipping impactful solutions.",
  "Strategic PM combining market insights, experimentation, and iterative delivery."
];

  const applyExample = useCallback((example: string) => {
    setValue(example);
    onChange(example); // Immediate update for examples
  }, [onChange]);
  
  return (
    <div className="space-y-6">
      <div>
<h2 className="text-xl font-semibold mb-1">TL;DR Intro</h2>
<p className="text-gray-600 mb-4">
  Write a short intro that shows your strengths and focus.
</p>
        
        <Textarea 
          value={value}
          onChange={handleChange}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          placeholder="E.g., Product manager with 3+ years of experience in SaaS products..."
          className="w-full h-32 resize-none"
          data-testid="tldr-input"
        />
        
        <div className="flex justify-between mt-2 text-sm">
          <span className={`${value.length > (maxChars * 0.8) ? 'text-amber-600' : 'text-gray-500'}`}>
            {value.length}/{maxChars} characters
          </span>
        </div>
      </div>
      
{quickFill && (
  <div>
    <h3 className="text-sm font-medium mb-2">Try a quick example:</h3>
    <div className="flex flex-col gap-2">
      {exampleSummaries.map((example, index) => (
        <Button
          key={index}
          type="button"
          variant="secondary"
          size="sm"
          className="rounded-full text-left h-auto py-2 px-4 whitespace-normal text-wrap justify-start"
          onClick={() => applyExample(example)}
        >
          {example}
        </Button>
      ))}
    </div>
  </div>
)}
    </div>
  );
};

export default SummaryStep;
