import { useEffect, useState } from 'react';

/**
 * Hook that initializes Lenis smooth scrolling
 */
export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

    // Native scrolling performs better on most mobile devices.
    if (prefersReducedMotion || isMobileViewport) return;

    let lenis: import('lenis').default | null = null;
    let rafId = 0;
    let isMounted = true;

    async function init() {
      const Lenis = (await import('lenis')).default;
      if (!isMounted) return;

      lenis = new Lenis({
        duration: 0.9,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        touchMultiplier: 1,
        wheelMultiplier: 0.9,
      });

      const raf = (time: number) => {
        if (!isMounted || !lenis) return;
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      isMounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

/**
 * Hook for countdown timer
 */
export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, mins, secs });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}
