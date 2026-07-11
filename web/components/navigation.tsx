"use client";

import { motion } from "framer-motion";
import { useScrolled } from "@/hooks/use-scrolled";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { navFadeDown } from "@/lib/animations";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const scrolled = useScrolled(50);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navFadeDown}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-6 py-4"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex w-full max-w-content items-center justify-between rounded-pill border px-2 py-2 pl-6 transition-all duration-300",
          scrolled
            ? "border-white/[0.08] bg-flatwhite-base/85 backdrop-blur-xl"
            : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md"
        )}
      >
        <a
          href="#hero"
          className="text-[15px] font-semibold text-text-primary focus-ring"
        >
          FlatWhite.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary focus-ring"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-flatwhite-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-pill bg-flatwhite-raised px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:bg-flatwhite-card hover:shadow-lg focus-ring md:inline-flex"
          >
            Get in Touch
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-pill bg-flatwhite-accent px-5 py-2.5 text-[14px] font-medium text-flatwhite-base transition-all hover:bg-flatwhite-accent-hover focus-ring lg:inline-flex"
          >
            Get in Touch
          </motion.a>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
}
