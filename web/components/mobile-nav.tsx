"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-flatwhite-raised/50 text-white focus-ring md:hidden",
            className
          )}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-white/[0.08] bg-flatwhite-secondary/95 backdrop-blur-xl sm:max-w-sm"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="flex h-full flex-col gap-8 pt-12">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-text-primary transition-colors hover:text-flatwhite-accent focus-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-pill bg-flatwhite-raised px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-flatwhite-card focus-ring"
          >
            Get in Touch
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
