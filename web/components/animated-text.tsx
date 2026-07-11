"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function AnimatedText({
  children,
  className,
  as: Component = "h1",
  delay = 0,
}: AnimatedTextProps) {
  const words = children.split(" ");

  return (
    <Component className={cn("overflow-hidden", className)}>
      <motion.span
        className="flex flex-wrap"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: delay }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={staggerItem}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
