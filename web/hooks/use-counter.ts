"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function useCounter(
  target: number,
  ref: React.RefObject<HTMLElement | null>,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return count;
}
