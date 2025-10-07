import { useCallback, useRef, useEffect } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
): (...args: Parameters<T>) => void {
  const callbackRef = useRef<T>(callback);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallTimeRef = useRef<number>(0);
  const lastArgsRef = useRef<Parameters<T>>();

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    lastArgsRef.current = args;

    const execute = () => {
      lastCallTimeRef.current = now;
      callbackRef.current(...args);
    };

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Leading edge
    if (options.leading && now - lastCallTimeRef.current >= delay) {
      execute();
      return;
    }

    // Trailing edge
    if (options.trailing) {
      timeoutRef.current = setTimeout(() => {
        execute();
        timeoutRef.current = null;
      }, delay);
    }
  }, [delay, options.leading, options.trailing]);
}