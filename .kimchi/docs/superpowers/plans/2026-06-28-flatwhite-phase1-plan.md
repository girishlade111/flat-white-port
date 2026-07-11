# FlatWhite Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Next.js 14 + Tailwind + shadcn/ui + Framer Motion project and build the global shell, glassmorphism navigation, and full-viewport hero section for the FlatWhite marketing site.

**Architecture:** Single Next.js App Router project with a component-driven structure: `components/ui` for shadcn primitives, `components` for reusable FlatWhite components, `sections` for page sections, `lib` for utilities and animation variants, `hooks` for custom hooks, and `app` for layout/page files. Styles are centralized in Tailwind config and `globals.css`. Animations are reusable Framer Motion variants in `lib/animations.ts`.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, clsx, tailwind-merge, Lucide React, Inter font.

---

## File Structure

```
/mnt/c/flat-white/
├── .kimchi/docs/...
├── app/
│   ├── layout.tsx          # Root layout, font import, metadata
│   ├── page.tsx            # Composes Navigation + Hero
│   └── globals.css         # Tailwind directives + custom utilities
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── sheet.tsx
│   ├── navigation.tsx      # Sticky glassmorphism nav
│   ├── mobile-nav.tsx      # Hamburger + Sheet drawer
│   ├── hero.tsx            # Hero section
│   ├── magnetic-button.tsx # Magnetic cursor button wrapper
│   ├── section-label.tsx   # "/ Label" eyebrow component
│   └── animated-text.tsx   # Staggered word/span reveal
├── sections/               # (used in later phases)
├── hooks/
│   └── use-scrolled.ts     # Detect scroll position for nav state
├── lib/
│   ├── utils.ts            # cn() helper
│   └── animations.ts       # Reusable Framer Motion variants
├── public/
│   └── images/             # Downloaded hero images
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

### Task 1: Initialize Next.js project with shadcn/ui

**Files:**
- Create: `/mnt/c/flat-white/package.json`
- Create: `/mnt/c/flat-white/tailwind.config.ts`
- Create: `/mnt/c/flat-white/next.config.js`
- Create: `/mnt/c/flat-white/tsconfig.json`
- Create: `/mnt/c/flat-white/app/globals.css`
- Create: `/mnt/c/flat-white/app/layout.tsx`
- Create: `/mnt/c/flat-white/app/page.tsx`
- Create: `/mnt/c/flat-white/lib/utils.ts`
- Modify: none

- [ ] **Step 1: Scaffold project with shadcn/ui CLI**

Run:
```bash
cd /mnt/c/flat-white
echo "my-app" | npx shadcn@latest init --yes --template next --base-color neutral
```
Expected output: project files created, `package.json` with Next.js, Tailwind, shadcn dependencies.

- [ ] **Step 2: Verify dev server starts**

Run:
```bash
cd /mnt/c/flat-white
pnpm dev
```
Expected: Server starts on `http://localhost:3000`. Open in browser to confirm default Next.js page loads. Stop server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
cd /mnt/c/flat-white
git init
git add .
git commit -m "chore: initialize Next.js + shadcn/ui project"
```

---

### Task 2: Configure Tailwind design tokens and Inter font

**Files:**
- Modify: `/mnt/c/flat-white/tailwind.config.ts`
- Modify: `/mnt/c/flat-white/app/globals.css`
- Modify: `/mnt/c/flat-white/app/layout.tsx`

- [ ] **Step 1: Extend Tailwind config with FlatWhite tokens**

Replace the content of `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flatwhite: {
          base: "#05070B",
          secondary: "#0E1320",
          card: "#121827",
          raised: "#222631",
          border: "rgba(255,255,255,0.08)",
          accent: "#D9B16F",
          "accent-hover": "#E8C78A",
        },
        "text-primary": "#FFFFFF",
        "text-secondary": "rgba(255,255,255,0.65)",
        "text-muted": "rgba(255,255,255,0.45)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-label": ["12px", { lineHeight: "12px", letterSpacing: "0.05em", fontWeight: "600" }],
        "hero-heading": ["72px", { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "600" }],
        "section-heading": ["56px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        subheading: ["22px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        "space-1": "7px",
        "space-2": "12px",
        "space-3": "16px",
        "space-4": "18px",
        "space-5": "20px",
        "space-6": "24px",
        "space-7": "32px",
        "space-8": "46px",
      },
      maxWidth: {
        container: "1440px",
        content: "1200px",
      },
      borderRadius: {
        pill: "100px",
        full: "999px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

- [ ] **Step 2: Add global CSS base styles**

Replace the contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3%;
    --foreground: 0 0% 100%;
    --card: 220 24% 8%;
    --card-foreground: 0 0% 100%;
    --popover: 220 24% 8%;
    --popover-foreground: 0 0% 100%;
    --primary: 0 0% 100%;
    --primary-foreground: 220 24% 4%;
    --secondary: 220 18% 12%;
    --secondary-foreground: 0 0% 100%;
    --muted: 220 18% 12%;
    --muted-foreground: 0 0% 65%;
    --accent: 39 53% 64%;
    --accent-foreground: 220 24% 4%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 100% / 0.08;
    --input: 0 0% 100% / 0.08;
    --ring: 39 53% 64%;
    --radius: 0.5rem;
  }

  * {
    @apply border-white/[0.08];
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-flatwhite-base text-text-primary antialiased;
    font-family: "Inter", system-ui, sans-serif;
  }

  ::selection {
    background-color: rgba(217, 177, 111, 0.3);
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .focus-ring {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flatwhite-accent focus-visible:ring-offset-2 focus-visible:ring-offset-flatwhite-base;
  }
}
```

- [ ] **Step 3: Import Inter in layout**

Update `app/layout.tsx` to import Inter from next/font/google:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlatWhite | Strategic Consulting",
  description:
    "FlatWhite partners with leadership teams to redefine strategy, streamline operations and unlock sustainable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-flatwhite-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify tokens render**

Update `app/page.tsx` to a temporary placeholder:

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-flatwhite-base">
      <h1 className="text-hero-heading text-text-primary">FlatWhite</h1>
    </main>
  );
}
```

Run:
```bash
pnpm dev
```
Expected: Page shows "FlatWhite" in large white text on dark background.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: configure FlatWhite tokens and Inter font"
```

---

### Task 3: Install Framer Motion and Lucide React

**Files:**
- Modify: `/mnt/c/flat-white/package.json`

- [ ] **Step 1: Install dependencies**

Run:
```bash
cd /mnt/c/flat-white
pnpm add framer-motion lucide-react
```

- [ ] **Step 2: Verify install**

Run:
```bash
pnpm list framer-motion lucide-react
```
Expected: Both packages listed in dependencies.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add framer-motion and lucide-react"
```

---

### Task 4: Create reusable animation variants

**Files:**
- Create: `/mnt/c/flat-white/lib/animations.ts`

- [ ] **Step 1: Write animation variants**

Create `lib/animations.ts`:

```typescript
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const navFadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add lib/animations.ts
git commit -m "feat: add reusable Framer Motion animation variants"
```

---

### Task 5: Create base UI primitives

**Files:**
- Modify: `/mnt/c/flat-white/components/ui/button.tsx`
- Modify: `/mnt/c/flat-white/components/ui/sheet.tsx`
- Create: `/mnt/c/flat-white/components/section-label.tsx`

- [ ] **Step 1: Add shadcn Button and Sheet**

Run:
```bash
cd /mnt/c/flat-white
npx shadcn add button sheet -y
```
Expected: `components/ui/button.tsx` and `components/ui/sheet.tsx` created.

- [ ] **Step 2: Create SectionLabel component**

Create `components/section-label.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-text-muted",
        className
      )}
    >
      <span className="text-text-secondary">/</span>
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add shadcn button, sheet, and section label"
```

---

### Task 6: Build navigation component

**Files:**
- Create: `/mnt/c/flat-white/hooks/use-scrolled.ts`
- Create: `/mnt/c/flat-white/components/mobile-nav.tsx`
- Create: `/mnt/c/flat-white/components/navigation.tsx`

- [ ] **Step 1: Create useScrolled hook**

Create `hooks/use-scrolled.ts`:

```typescript
"use client";

import { useState, useEffect } from "react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
```

- [ ] **Step 2: Create MobileNav component**

Create `components/mobile-nav.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  { label: "Expertise", href: "#expertise" },
  { label: "Team", href: "#team" },
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
```

- [ ] **Step 3: Create Navigation component**

Create `components/navigation.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useScrolled } from "@/hooks/use-scrolled";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { navFadeDown } from "@/lib/animations";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Expertise", href: "#expertise" },
  { label: "Team", href: "#team" },
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
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
}
```

- [ ] **Step 4: Verify nav renders**

Update `app/page.tsx`:

```tsx
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-flatwhite-base">
      <Navigation />
      <div className="h-[200vh]" />
    </main>
  );
}
```

Run `pnpm dev`, verify nav appears at top, scroll to confirm background darkens.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add glassmorphism navigation with mobile drawer"
```

---

### Task 7: Build hero section

**Files:**
- Create: `/mnt/c/flat-white/components/animated-text.tsx`
- Create: `/mnt/c/flat-white/components/magnetic-button.tsx`
- Create: `/mnt/c/flat-white/components/hero.tsx`
- Modify: `/mnt/c/flat-white/app/page.tsx`

- [ ] **Step 1: Download hero images**

Run:
```bash
mkdir -p /mnt/c/flat-white/public/images
cd /mnt/c/flat-white/public/images
curl -L -o hero-1.webp "https://framerusercontent.com/images/7hEMnzNW8TKI35mykrwNnPK59m4.webp?width=1200"
curl -L -o hero-2.webp "https://framerusercontent.com/images/qygTke3Lz3OnuVTqaf6hwZMPqg.webp?width=1200"
curl -L -o hero-3.webp "https://framerusercontent.com/images/Kd1nzo6lP4rR3cKegRhIkIqD8w.webp?width=1200"
curl -L -o hero-4.webp "https://framerusercontent.com/images/V58LrdFh5mIXc0J15IsIcr2Uuo.webp?width=1200"
```

- [ ] **Step 2: Create AnimatedText component**

Create `components/animated-text.tsx`:

```tsx
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
```

- [ ] **Step 3: Create MagneticButton component**

Create `components/magnetic-button.tsx`:

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
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
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.2;
    const y = (clientY - top - height / 2) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    variant === "primary"
      ? "bg-flatwhite-raised text-white hover:bg-flatwhite-card"
      : "bg-transparent text-white hover:text-flatwhite-accent";

  return (
    <motion.a
      ref={ref}
      href={href || "#"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-[15px] font-medium transition-colors focus-ring",
        baseStyles,
        className
      )}
    >
      {children}
    </motion.a>
  );
}
```

- [ ] **Step 4: Create Hero component**

Create `components/hero.tsx`:

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionLabel } from "./section-label";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";
import { fadeUp, scaleIn } from "@/lib/animations";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-flatwhite-base px-6 pt-32 pb-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left content */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Future-Ready Business</SectionLabel>
          </motion.div>

          <AnimatedText
            as="h1"
            className="max-w-[620px] text-4xl font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary sm:text-5xl md:text-6xl lg:text-[72px]"
            delay={0.1}
          >
            Empowering companies to grow smarter and faster
          </AnimatedText>

          <motion.p
            variants={fadeUp}
            className="max-w-[520px] text-base leading-relaxed text-text-secondary md:text-lg"
          >
            FlatWhite partners with leadership teams to redefine strategy,
            streamline operations and unlock sustainable growth. We translate
            ambition into an actionable roadmap using data, technology and close
            collaboration.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton href="#contact">Get in Touch</MagneticButton>
            <MagneticButton variant="secondary" href="#services">
              Learn More
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right image composition */}
        <motion.div
          className="relative hidden h-[500px] w-full lg:block lg:h-[600px]"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          style={{ y }}
        >
          <div className="absolute right-0 top-0 h-[320px] w-[280px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-1.webp"
              alt="Strategic planning session"
              fill
              className="object-cover"
              priority
              sizes="280px"
            />
          </div>
          <div className="absolute left-0 top-24 h-[260px] w-[220px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-2.webp"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
              sizes="220px"
            />
          </div>
          <div className="absolute bottom-12 right-12 h-[240px] w-[200px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-3.webp"
              alt="Business growth"
              fill
              className="object-cover"
              priority
              sizes="200px"
            />
          </div>
          <div className="absolute bottom-0 left-12 h-[200px] w-[260px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-4.webp"
              alt="Consulting partnership"
              fill
              className="object-cover"
              priority
              sizes="260px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update page.tsx**

Replace `app/page.tsx` with:

```tsx
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-flatwhite-base">
      <Navigation />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 6: Configure next.config.js for static export**

Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 7: Build and verify**

Run:
```bash
pnpm build
```
Expected: Build succeeds with no errors. Static files are output to `/mnt/c/flat-white/dist`.

Run:
```bash
pnpm dev
```
Verify hero layout, animations, nav, and responsiveness at 1440px, 1280px, 768px, 390px.

- [ ] **Step 8: Commit**

```bash
git add .
git commit -m "feat: add hero section with image composition and animations"
```

---

### Task 8: Accessibility and final QA pass

**Files:**
- Modify: `/mnt/c/flat-white/app/layout.tsx`
- Modify: `/mnt/c/flat-white/app/globals.css`
- Modify: `/mnt/c/flat-white/components/navigation.tsx`
- Modify: `/mnt/c/flat-white/components/hero.tsx`

- [ ] **Step 1: Add skip-to-content link**

Update `app/layout.tsx` body to include a skip link:

```tsx
<body className="min-h-screen bg-flatwhite-base text-text-primary">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-flatwhite-accent focus:px-4 focus:py-2 focus:text-flatwhite-base"
  >
    Skip to main content
  </a>
  {children}
</body>
```

- [ ] **Step 2: Add reduced-motion support**

Add to `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Verify keyboard navigation**

Run `pnpm dev`. Tab through navigation links, mobile menu button, hero CTAs, and skip link. Confirm visible focus rings.

- [ ] **Step 4: Run final build**

```bash
pnpm build
```
Expected: Clean build, no TypeScript or ESLint errors.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "a11y: add skip link and reduced-motion support"
```

---

## Self-Review Checklist

- [ ] Spec coverage: every Phase 1 requirement from the design spec has a corresponding task.
- [ ] Placeholder scan: no TBD, TODO, or vague steps.
- [ ] Type consistency: `MagneticButton`, `AnimatedText`, `SectionLabel` props use consistent naming.
- [ ] File paths are exact and relative to `/mnt/c/flat-white`.
- [ ] Each task has a verifiable command or expected outcome.

## Notes

- Because there is no existing git repository, Task 1 includes `git init`.
- Hero images are downloaded from the Framer CDN. If those URLs fail, fall back to placeholder `div`s with `bg-flatwhite-card` and a note in the build log.
- The `cn()` helper is the standard shadcn `clsx`/`tailwind-merge` utility.
