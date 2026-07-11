"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.2;
    const y = (clientY - top - height / 2) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = {
    primary:
      "bg-flatwhite-accent text-flatwhite-base hover:bg-flatwhite-accent-hover",
    secondary:
      "bg-white text-flatwhite-base hover:bg-white/90",
    outline:
      "bg-transparent border border-white/[0.2] text-white hover:bg-white/5",
  };

  return (
    <motion.a
      ref={ref}
      href={href || "#"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill px-6 py-3 text-[15px] font-medium transition-colors focus-ring",
        baseStyles[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
    </motion.a>
  );
}
