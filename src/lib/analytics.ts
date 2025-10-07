// Simple analytics stub. Replace with real analytics later.
export const analytics = {
  track: (event: string, props?: Record<string, any>) => {
    try {
      // eslint-disable-next-line no-console
      console.log(`[analytics] ${event}`, props || {});
    } catch (_) {
      // no-op
    }
  },
};
