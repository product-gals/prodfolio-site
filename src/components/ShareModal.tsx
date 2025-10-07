import { useState } from "react";
import { Share, Copy, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ShareModalProps {
  portfolioUrl: string;
  portfolioTitle: string;
  "aria-label"?: string;
}

export const ShareModal = ({ portfolioUrl, portfolioTitle, "aria-label": ariaLabel }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Portfolio URL has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the URL manually.",
        variant: "destructive",
      });
    }
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=600');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full lg:w-auto bg-background/95 backdrop-blur-sm border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30 shadow-soft transition-all duration-300"
          aria-label={ariaLabel}
        >
          <Share className="mr-2 h-4 w-4" />
          Share Portfolio
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">Share Portfolio</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="w-full justify-start h-12 border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
          >
            {copied ? (
              <CheckCircle2 className="mr-3 h-5 w-5 text-green-500" />
            ) : (
              <Copy className="mr-3 h-5 w-5 text-muted-foreground" />
            )}
            <div className="text-left">
              <div className="font-medium text-foreground">
                {copied ? "Link copied!" : "Copy link"}
              </div>
              <div className="text-xs text-muted-foreground">
                {copied ? "Portfolio URL is in your clipboard" : "Copy portfolio URL to clipboard"}
              </div>
            </div>
          </Button>
          
          <Button
            onClick={handleLinkedInShare}
            variant="outline"
            className="w-full justify-start h-12 border-border/50 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200"
          >
            <Linkedin className="mr-3 h-5 w-5 text-blue-600" />
            <div className="text-left">
              <div className="font-medium text-foreground">Share on LinkedIn</div>
              <div className="text-xs text-muted-foreground">
                Post your portfolio to LinkedIn
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};