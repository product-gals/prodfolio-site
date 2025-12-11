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
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-lg transition-all"
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
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Start your portfolio free →
              </a>
            </p>
          </div>
          
          {/* Right side - Visual */}
          <div className="hidden md:flex bg-gradient-to-br from-primary/10 via-primary/5 to-coral/10 items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-[220px]">
              <div className="text-center mb-3">
                <p className="text-sm font-semibold text-navy font-heading">Select a Date & Time</p>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs text-center mb-3">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-navy/40 font-medium py-1">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`py-1 rounded ${i === 14 ? 'bg-primary text-white' : 'text-navy/70 hover:bg-primary/10'}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="bg-primary/10 text-primary text-xs font-medium py-2 px-3 rounded text-center">
                  10:00 AM
                </div>
                <div className="border border-primary/20 text-navy/60 text-xs py-2 px-3 rounded text-center">
                  2:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;