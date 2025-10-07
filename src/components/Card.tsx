
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  noPadding?: boolean;
  highlight?: boolean;
}

const Card = ({ 
  title, 
  children, 
  className = "", 
  gradient = false,
  noPadding = false,
  highlight = false
}: CardProps) => {
  return (
    <div 
      className={`
        ${gradient ? 'bg-gradient-to-br from-prodfolio-purple to-prodfolio-purple-dark text-white' : 'bg-white'} 
        ${highlight ? 'border-l-4 border-l-prodfolio-purple bg-prodfolio-background-light' : 'border border-prodfolio-border'} 
        rounded-lg shadow-sm ${noPadding ? '' : 'p-5'} ${className}
      `}
    >
      {title && <h3 className="font-semibold text-lg mb-4 text-prodfolio-text">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
