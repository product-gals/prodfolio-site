
import { memo } from 'react';

interface TldrSectionProps {
  summary: string;
  isDemoPreview?: boolean;
}

const TldrSection = memo(({ summary, isDemoPreview = false }: TldrSectionProps) => {
  return (
    <div className="flex-1">
      <h2 className={`${isDemoPreview ? 'text-sm' : 'text-xl'} font-semibold ${isDemoPreview ? 'mb-2' : 'mb-3'} text-gray-900`}>
        TL;DR
      </h2>
      <p 
        className={`text-gray-700 ${isDemoPreview ? 'text-xs mb-2' : 'text-lg mb-4'} leading-relaxed max-w-3xl`}
        data-testid="preview-tldr"
      >
        {summary}
      </p>
    </div>
  );
});

TldrSection.displayName = 'TldrSection';

export default TldrSection;