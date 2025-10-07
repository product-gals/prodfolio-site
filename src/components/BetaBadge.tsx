import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BetaBadgeProps {
  label?: string;
  tooltip?: string;
  className?: string;
}

const BetaBadge = ({
  label = "Soon",
  tooltip = "This feature is coming soon.",
  className = "",
}: BetaBadgeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="secondary"
            className={cn("h-5 px-1.5 text-[10px] leading-none", className)}
          >
            {label}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default BetaBadge;