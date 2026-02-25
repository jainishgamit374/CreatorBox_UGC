import { useEffect, useState } from 'react';

/**
 * Hook that initializes Lenis smooth scrolling
 */
export function useLenis() {
  useEffect(() => {
    let lenis: import('lenis').default | null = null;

    async function init() {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({
        duration: 1.0,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        touchMultiplier: 1.5,
        wheelMultiplier: 0.8,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    init();

    return () => {
      lenis?.destroy();
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
