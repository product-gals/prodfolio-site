import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioView from "./PortfolioView";

const PortfolioPreview = () => {
  const { draftId } = useParams<{ draftId: string }>();
  const storageKey = useMemo(() => `portfolioDraft-${draftId}`, [draftId]);
  const [draft, setDraft] = useState<any | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDraft(JSON.parse(raw));
    } catch (_) {
      setDraft(null);
    }
  }, [storageKey]);

  if (!draft) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-600">
          <p>No draft found for preview.</p>
        </div>
      </div>
    );
  }

  return <PortfolioView isDemoPreview={true} demoData={draft} />;
};

export default PortfolioPreview;
