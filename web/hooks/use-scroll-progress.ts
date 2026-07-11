"use client";

import { useScroll, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

export function useScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { containerRef, scaleX };
}
