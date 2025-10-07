export function resetEditorState() {
  try {
    // Clear draft ID so autosave/preview are disabled until first save
    sessionStorage.removeItem('portfolioDraftId');
  } catch {}

  // Demo data removal - no longer needed as demo functionality removed

  try {
    // Clear known form-related flags
    localStorage.removeItem('lastPortfolioId');
    localStorage.removeItem('portfolioForm');
  } catch {}

  try {
    // Remove any portfolioDraft-* entries (but keep published portfolios)
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || '';
      if (key.startsWith('portfolioDraft-')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch {}
}
