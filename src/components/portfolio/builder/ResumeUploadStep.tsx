import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ResumeUploadStepProps {
  resumeUrl: string;
  onChange: (url: string) => void;
}

const ResumeUploadStep = ({ resumeUrl, onChange }: ResumeUploadStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Upload — coming soon</h2>
        <p className="text-gray-600 mb-4">
          In beta, we don't store files yet. You can paste a public link instead.
        </p>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="resumeUrl" className="block text-sm text-gray-600">
              Public Resume URL
            </label>
            <Input
              id="resumeUrl"
              name="resumeUrl"
              type="url"
              placeholder="https://example.com/your-resume.pdf"
              value={resumeUrl}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadStep;