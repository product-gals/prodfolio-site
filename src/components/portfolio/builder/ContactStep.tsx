import { Input } from "@/components/ui/input";

interface ContactStepProps {
  linkedinProfile: string;
  contactEmail?: string;
  onChange: (updates: { linkedinProfile: string; contactEmail?: string }) => void;
}

const ContactStep = ({ linkedinProfile, contactEmail = "", onChange }: ContactStepProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Contact Information</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Make it easy for viewers to connect with you.
        </p>
      </div>

      <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
        <div>
          <label htmlFor="linkedinProfile" className="block text-sm font-semibold text-foreground mb-3">
            LinkedIn Profile URL
          </label>
          <Input
            id="linkedinProfile"
            name="linkedinProfile"
            type="url"
            placeholder="https://www.linkedin.com/in/your-handle"
            value={linkedinProfile}
            onChange={(e) => onChange({ linkedinProfile: e.target.value, contactEmail })}
            className="h-12"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Your LinkedIn profile helps establish credibility and makes networking easier
          </p>
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-semibold text-foreground mb-3">
            Email Address (optional)
          </label>
          <Input
            id="contactEmail"
            name="contactEmail"
            type="email"
            placeholder="you@example.com"
            value={contactEmail}
            onChange={(e) => onChange({ linkedinProfile, contactEmail: e.target.value })}
            className="h-12"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Add your professional email for direct contact opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactStep;
