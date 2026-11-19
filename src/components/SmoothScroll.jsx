import { useEffect, useRef } from 'react';
import Lenis from '../lib/lenis.js';

export default function SmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis configuration identical to Framer
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      lenis.destroy();
      lenisRef.current = null;
      delete window.lenis;
    };
  }, []);

  return null;
}
