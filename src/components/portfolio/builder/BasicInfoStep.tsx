import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface BasicInfoStepProps {
  firstName: string;
  lastName: string;
  linkedinProfile: string;
  tagline: string;
  location: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onLinkedinChange: (value: string) => void;
  onTaglineChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

const BasicInfoStep = ({ 
  firstName, 
  lastName, 
  linkedinProfile, 
  tagline,
  location,
  onFirstNameChange, 
  onLastNameChange, 
  onLinkedinChange,
  onTaglineChange,
  onLocationChange,
}: BasicInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Information</h3>
        <p className="text-gray-600">
          Let's start with your basic details to personalize your portfolio.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
          <Input
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            value={linkedinProfile}
            onChange={(e) => onLinkedinChange(e.target.value)}
          />
          <p className="text-sm text-gray-500">
            Add your LinkedIn profile URL to make it easy for viewers to connect with you.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input
            id="tagline"
            type="text"
            placeholder="Aspiring PM with a knack for…"
            value={tagline}
            onChange={(e) => onTaglineChange(e.target.value)}
          />
          <p className="text-sm text-gray-500">A short line that captures your focus, e.g., “Platform PM focused on onboarding and growth.”</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location (city, country) — Optional</Label>
          <Input
            id="location"
            type="text"
            placeholder="San Francisco, USA"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;