
import { X } from "lucide-react";
import { useState } from "react";

interface TagProps {
  text: string;
  variant?: "default" | "blue" | "green" | "yellow";
  onRemove?: () => void;
  size?: "xs" | "sm" | "md";
}

const Tag = ({ text, variant = "default", onRemove, size = "sm" }: TagProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const variantClasses = {
    default: "bg-secondary text-secondary-foreground",
    blue: "bg-primary/10 text-primary border border-primary/20",
    green: "bg-accent/10 text-accent border border-accent/20",
    yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200"
  };

  const sizeClasses = {
    xs: "px-1.5 py-0.5 text-xs sm:px-2 sm:text-xs min-h-[20px] sm:min-h-[24px] leading-tight",
    sm: "px-2 py-1 text-xs sm:px-2.5 sm:text-sm md:text-sm min-h-[24px] sm:min-h-[28px] leading-tight", 
    md: "px-2.5 py-1 text-sm sm:px-3 sm:py-1.5 sm:text-base min-h-[28px] sm:min-h-[32px] leading-tight"
  };
  
  return (
    <span 
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${onRemove ? 'pr-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="truncate max-w-[120px] sm:max-w-[150px] md:max-w-none">
        {text}
      </span>
      {onRemove && (
        <button
          onClick={onRemove}
          className={`ml-1 p-0.5 sm:p-1 rounded-full hover:bg-gray-200 transition-all flex-shrink-0 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
        >
          <X size={12} className="sm:w-3.5 sm:h-3.5" />
        </button>
      )}
    </span>
  );
};

export default Tag;
