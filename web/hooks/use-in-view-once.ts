"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(
  amount: number = 0.2
) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
}
