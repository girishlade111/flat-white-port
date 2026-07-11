# FlatWhite

A premium strategic consulting and design agency website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a dark theme, animated interactions, magnetic UI components, and a fully responsive layout.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (static export) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v3 + `tailwindcss-animate` |
| **Animation** | Framer Motion v12 |
| **UI Primitives** | Radix UI (Dialog, Slot) |
| **Icons** | Lucide React |
| **Font** | Inter (variable) |

## Sections

- **Hero** — Parallax image, animated headline, magnetic CTAs
- **Stats** — Animated counter metrics with scroll-triggered counting
- **Services** — Strategy, Brand & Design, and Execution service cards
- **Process** — Step-by-step methodology
- **Case Studies** — Client work showcases
- **Strategy Timeline** — Milestone-based timeline visualization
- **Results** — Key performance highlights
- **Partnership Banner** — Call-to-action engagement section
- **Team** — Team member profiles
- **Pricing** — Single comprehensive engagement plan with feature list
- **FAQ** — Accordion-style questions using Radix UI
- **Footer** — Navigation, social links, and contact information

## Architecture

```
web/
├── app/
│   ├── globals.css          # Global styles & Tailwind directives
│   ├── layout.tsx            # Root layout with navigation & metadata
│   └── page.tsx              # Home page — composes all sections
├── components/
│   ├── layouts/
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── stats.tsx
│   │   ├── services.tsx
│   │   ├── process.tsx
│   │   ├── case-studies.tsx
│   │   ├── strategy-timeline.tsx
│   │   ├── results.tsx
│   │   ├── partnership-banner.tsx
│   │   ├── team.tsx
│   │   ├── pricing.tsx
│   │   └── faq.tsx
│   ├── ui/                   # Radix-based primitives (button, sheet)
│   ├── animated-text.tsx     # Reveal animation for text
│   ├── hero.tsx
│   ├── magnetic-button.tsx   # Button with magnetic hover effect
│   ├── mobile-nav.tsx        # Mobile navigation drawer
│   ├── navigation.tsx        # Desktop navigation bar
│   ├── scroll-progress.tsx   # Reading progress indicator
│   └── section-label.tsx     # Reusable section label
├── hooks/
│   ├── use-counter.ts          # Animated counter hook
│   ├── use-in-view-once.ts     # Intersection observer (single fire)
│   ├── use-mouse-position.ts   # Track cursor position
│   ├── use-scroll-progress.ts  # Scroll progress tracking
│   └── use-scrolled.ts         # Scroll direction / offset detection
├── lib/
│   ├── animations.ts         # Framer Motion variants (fadeUp, scaleIn, stagger, etc.)
│   └── utils.ts              # Tailwind class merge utility (cn)
├── public/images/            # Static image assets
├── tailwind.config.ts        # Custom design tokens (colors, spacing, typography)
└── next.config.mjs           # Static export config
```

## Design System

The project uses a custom design token system defined in `tailwind.config.ts`:

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `flatwhite-base` | `#05070B` | Page background |
| `flatwhite-secondary` | `#0E1320` | Card hover background |
| `flatwhite-card` | `#121827` | Card surface |
| `flatwhite-raised` | `#222631` | Raised surfaces |
| `flatwhite-accent` | `#D9B16F` | Primary accent (gold) |
| `flatwhite-accent-hover` | `#E8C78A` | Accent hover state |
| `text-primary` | `#FFFFFF` | Primary text |
| `text-secondary` | `rgba(255,255,255,0.65)` | Secondary text |

### Typography Scale

| Token | Size | Line Height |
|-------|------|-------------|
| `hero` (fluid) | `clamp(48px, 8vw, 72px)` | 0.95 |
| `section` (fluid) | `clamp(40px, 6vw, 56px)` | 1.05 |
| `subhead` (fluid) | `clamp(18px, 2vw, 22px)` | 1.4 |
| `body` | 16px | 1.6 |

All headings use Inter SemiBold with `-0.02em` letter-spacing.

## Animations

All animations use a consistent `cubic-bezier(0.16, 1, 0.3, 1)` easing curve defined in `lib/animations.ts`:

- **fadeUp** — Elements fade in and slide up 40px
- **fadeIn** — Pure opacity fade-in
- **scaleIn** — Elements scale from 0.95 to 1 with fade
- **staggerContainer / staggerItem** — Staggered children with 50ms delay
- **fadeLeft / fadeRight** — Horizontal slide variants
- **textReveal** — Reveal from below with spring physics
- **navFadeDown** — Navigation entrance from top
- **MagneticButton** — Cursor-following magnetic displacement effect

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Hot module replacement is enabled — edits to `app/page.tsx` or any component will auto-refresh.

### Build

```bash
pnpm build
```

Produces a fully static export in the `dist/` directory via `next build` + `next export`.

### Lint

```bash
pnpm lint
```

Runs Next.js ESLint configuration.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build (static export) |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Deployment

The site is configured for static export via `next.config.mjs` (`output: "export"`). The `dist/` directory can be deployed to:

- **Vercel** — Automatic with `@vercel/static-build`
- **Netlify** — Point to `dist/` as publish directory
- **GitHub Pages** — Deploy `dist/` contents
- **Any static host** — S3, Cloudflare Pages, etc.

## Accessibility

- WCAG 2.2 AA target
- Skip-to-content link
- Keyboard-first interactions
- Focus-visible ring styles
- Semantic HTML structure with landmark regions
- ARIA labels on interactive elements
- Screen-reader-friendly navigation with Radix UI primitives

## Dependencies

```json
{
  "next": "14.2.35",
  "react": "^18",
  "framer-motion": "^12.42.0",
  "@radix-ui/react-dialog": "^1.1.17",
  "@radix-ui/react-slot": "^1.3.0",
  "lucide-react": "^1.21.0",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.6.0"
}
```

## Project Structure

```
flat-white/
├── web/               # Next.js application
├── .kimchi/           # Planning documents
├── DESIGN.md          # Design system specification
└── SKILL.md           # Agent skill definition
```
