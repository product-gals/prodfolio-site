import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface BookCallModalProps {
  trigger: React.ReactNode;
}

const BookCallModal = ({ trigger }: BookCallModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Content */}
          <div className="p-8 flex flex-col justify-center">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-heading font-bold text-navy">
                Not sure? Book a 15 min call.
              </DialogTitle>
            </DialogHeader>
            <p className="text-navy/70 mb-6 font-body leading-relaxed">
              We'll walk you through how Prodfolio works, answer any questions you have, and help you decide if it's right for you.
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-lg transition-all shadow-lg shadow-primary/30 border-2 border-primary"
            >
              <a 
                href="https://cal.com/meag.glenn/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Book a 15 min call
              </a>
            </Button>
            <p className="text-center text-sm text-navy/50 mt-4 font-body">
              OR...{" "}
              <a 
                href="https://app.prodfolio.io/sign-up" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Start your portfolio free →
              </a>
            </p>
          </div>
          
          {/* Right side - Decorative Illustration */}
          <div className="hidden md:flex bg-gradient-to-br from-primary/10 via-primary/5 to-coral/10 items-center justify-center p-8">
            <div className="text-center">
              {/* Abstract conversation/connection illustration */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Speech bubbles representing conversation */}
                <div className="absolute top-0 left-0 w-16 h-12 bg-primary/20 rounded-2xl rounded-bl-sm"></div>
                <div className="absolute top-8 right-0 w-20 h-10 bg-coral/30 rounded-2xl rounded-br-sm"></div>
                <div className="absolute bottom-4 left-4 w-14 h-10 bg-primary/30 rounded-2xl rounded-bl-sm"></div>
                {/* Connection dots */}
                <div className="absolute top-6 left-14 w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute top-14 right-6 w-2 h-2 bg-coral rounded-full"></div>
                <div className="absolute bottom-8 left-16 w-2 h-2 bg-primary/60 rounded-full"></div>
              </div>
              <p className="text-sm text-navy/60 font-medium">Let's chat!</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;