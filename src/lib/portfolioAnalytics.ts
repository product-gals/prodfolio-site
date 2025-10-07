export type PortfolioStats = {
  views: number;
  totalTimeSec: number;
};

const keyFor = (slug: string) => `portfolioAnalytics-${slug}`;

export const getStats = (slug: string): PortfolioStats => {
  try {
    const raw = localStorage.getItem(keyFor(slug));
    if (!raw) return { views: 0, totalTimeSec: 0 };
    const parsed = JSON.parse(raw);
    return {
      views: typeof parsed.views === 'number' ? parsed.views : 0,
      totalTimeSec: typeof parsed.totalTimeSec === 'number' ? parsed.totalTimeSec : 0,
    };
  } catch {
    return { views: 0, totalTimeSec: 0 };
  }
};

const saveStats = (slug: string, stats: PortfolioStats) => {
  try {
    localStorage.setItem(keyFor(slug), JSON.stringify(stats));
  } catch {}
};

export const incrementView = (slug: string) => {
  const s = getStats(slug);
  s.views += 1;
  saveStats(slug, s);
};

export const addTimeMs = (slug: string, ms: number) => {
  if (!Number.isFinite(ms) || ms <= 0) return;
  const s = getStats(slug);
  s.totalTimeSec += Math.round(ms / 1000);
  saveStats(slug, s);
};

export const startSession = (slug: string) => {
  let start = Date.now();
  const onHidden = () => {
    const now = Date.now();
    addTimeMs(slug, now - start);
    start = now;
  };
  const handler = () => {
    if (document.hidden) onHidden();
    else start = Date.now();
  };
  document.addEventListener('visibilitychange', handler);
  return () => {
    document.removeEventListener('visibilitychange', handler);
    addTimeMs(slug, Date.now() - start);
  };
};
