
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  className?: string;
  onComplete?: () => void;
}

const ProgressBar = ({ 
  current, 
  total, 
  showLabel = true, 
  className = "",
  onComplete
}: ProgressBarProps) => {
  const percentage = Math.min(Math.round((current / total) * 100), 100);
  
  useEffect(() => {
    // Only trigger onComplete when we first reach 100%
    if (percentage === 100 && onComplete) {
      onComplete();
    }
  }, [percentage, onComplete]);
  
  return (
    <div className={`w-full ${className}`}>
      <Progress value={percentage} className="h-2" />
      {showLabel && (
        <div className="text-xs text-gray-500 mt-1">
          {current} of {total} case studies
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
