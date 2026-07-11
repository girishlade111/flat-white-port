# FlatWhite Phase 1 Design Spec

## Context and Goals

Rebuild the FlatWhite consulting marketing site (`https://flat-white.framer.website/`) as a premium, accessible, motion-rich React application. The project is delivered in four phases. Phase 1 establishes the design system, project shell, global navigation, and hero section.

**Phase 1 goal:** A runnable Next.js application with the global shell, glassmorphism navigation, and full-viewport hero that matches the FlatWhite reference in layout, typography, color, and motion.

## Design Tokens and Foundations

### Color (merged FlatWhite + premium agency palette)

| Token | Value | Usage |
|-------|-------|-------|
| `color-surface-base` | `#05070B` | Primary page background |
| `color-surface-secondary` | `#0E1320` | Secondary dark surfaces |
| `color-surface-card` | `#121827` | Card backgrounds |
| `color-surface-raised` | `#222631` | Elevated cards, nav hover states |
| `color-text-primary` | `#FFFFFF` | Headings, primary body |
| `color-text-secondary` | `rgba(255,255,255,0.65)` | Supporting text |
| `color-text-muted` | `rgba(255,255,255,0.45)` | Captions, subtle labels |
| `color-border` | `rgba(255,255,255,0.08)` | Subtle borders |
| `color-accent` | `#D9B16F` | Accent text, CTA hover highlights |
| `color-accent-hover` | `#E8C78A` | Accent hover state |

### Typography

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero label | `12px` | 600 | `12px` | `0.05em` |
| Hero heading | `72px` / `56px` tablet / `40px` mobile | 600 | `0.95` | `-0.02em` |
| Section heading | `56px` / `44px` / `32px` | 600 | `1.05` | `-0.02em` |
| Subheading | `22px` / `20px` / `18px` | 400 | `1.4` | `0` |
| Body | `16px` | 400 | `1.6` | `0` |
| Caption | `14px` | 400 | `1.5` | `0` |
| Button | `15px` | 500 | `1` | `0` |

Font family: `Inter, Inter Placeholder, system-ui, sans-serif`.

### Spacing

| Token | Value |
|-------|-------|
| `space-1` | `7px` |
| `space-2` | `12px` |
| `space-3` | `16px` |
| `space-4` | `18px` |
| `space-5` | `20px` |
| `space-6` | `24px` |
| `space-7` | `32px` |
| `space-8` | `46px` |

Section vertical padding: `120px` desktop, `80px` tablet, `64px` mobile.
Horizontal padding: `80px` desktop, `48px` tablet, `24px` mobile.

### Layout

- Container max-width: `1440px`
- Content max-width: `1200px`
- Grid: 12-column responsive grid via Tailwind.
- Border radius: `100px` (pills), `999px` (full round), `16px` (cards).
- Motion duration instant: `300ms`.

## Component-Level Rules

### Navigation

**Anatomy:**
- Floating pill-shaped bar, fixed to top, horizontally centered.
- Logo on left (`FlatWhite.` in Inter 600).
- Anchor links center: Services, Process, Expertise, Team, FAQ.
- CTA button right: `Get in Touch`.
- Mobile: hamburger icon opening a Sheet drawer.

**Variants and states:**
- Default: transparent/glass background, `rgba(255,255,255,0.08)` border, blur `12px`.
- Scrolled: slightly more opaque background (`rgba(5,7,11,0.85)`), same blur.
- Hover on links: text shifts to white, optional underline slide-in.
- Focus-visible: `2px` accent outline, offset `2px`.
- Active: accent color for current section indicator.

**Responsive behavior:**
- Desktop: horizontal links visible.
- Tablet/Mobile: hamburger replaces links; Sheet drawer slides from top/right with vertical link stack.

**Accessibility:**
- Semantic `<nav>` with `aria-label="Main navigation"`.
- Mobile toggle is a `<button>` with `aria-expanded` and `aria-controls`.
- Skip-to-content link.

### Hero Section

**Anatomy:**
- Full viewport (`min-height: 100dvh`), `color-surface-base` background.
- Two-column layout on desktop (left 55%, right 45%).
- Left content stack:
  - Eyebrow label: `/ Future-Ready Business`
  - H1: `Empowering companies to grow smarter and faster`
  - Body paragraph (max-width ~520px)
  - Button group: primary CTA + secondary text CTA
- Right content: overlapping image composition (4 images).

**Variants and states:**
- Default: content and images visible.
- Loading: entrance animations staged.

**Responsive behavior:**
- Desktop: two-column, image on right.
- Tablet: stacked, image below text, centered.
- Mobile: single column, reduced type scale, image composition simplified.

**Motion:**
- Eyebrow label: fade-up, delay `0.1s`.
- H1 words: staggered fade-up, y `40px → 0`, opacity `0 → 1`, stagger `0.05s`.
- Paragraph: fade-up, delay `0.4s`.
- Buttons: slide-up, delay `0.5s`.
- Image composition: scale `0.95 → 1`, opacity `0 → 1`, delay `0.3s`, subtle parallax on scroll.

**Accessibility:**
- H1 is the only h1 on the page.
- Buttons have visible focus rings.
- Reduced motion: disable parallax, simplify fade-ups.

### Buttons

**Primary button:**
- Background `color-surface-raised`, border `color-border`, text white.
- Padding `12px 20px` (desktop), `10px 16px` (mobile).
- Radius `100px`.
- Hover: background lightens, subtle lift `translateY(-2px)`.
- Focus-visible: accent outline.
- Magnetic cursor effect on desktop.

**Secondary button / text link:**
- Transparent background, white text, underline on hover.

## Global Animation System

Create reusable motion variants in `lib/animations.ts`:

- `fadeUp`: `{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }`
- `fadeIn`: `{ hidden: { opacity: 0 }, visible: { opacity: 1 } }`
- `scaleIn`: `{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }`
- `staggerContainer`: `{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }`
- `textReveal`: per-word/span fade-up stagger.

Spring defaults: `stiffness: 100, damping: 18`.
Duration defaults: `0.6s` for fades, `1s` for hero reveal.
Viewport triggers: `once: true, amount: 0.2`.

## Accessibility Requirements

- WCAG 2.2 AA target.
- All interactive elements keyboard accessible.
- Focus indicators visible (`outline: 2px solid color-accent`).
- Proper heading hierarchy: h1 in hero, h2 for sections.
- ARIA labels for nav, buttons, mobile menu.
- `prefers-reduced-motion` respected globally.

## Content and Tone

- Concise, confident, implementation-focused copy from the live site.
- Hero label: `/ Future-Ready Business`
- Hero heading: `Empowering companies to grow smarter and faster`
- Hero paragraph: `FlatWhite partners with leadership teams to redefine strategy, streamline operations and unlock sustainable growth. We translate ambition into an actionable roadmap using data, technology and close collaboration.`
- Primary CTA: `Get in Touch`
- Secondary CTA: `Learn More`

## Anti-Patterns and Prohibited Implementations

- Do not use raw hex values inline; always use semantic tokens.
- Do not skip focus-visible styles.
- Do not use placeholder `lorem ipsum` text.
- Do not hard-code breakpoints; extend Tailwind config.
- Do not put animation logic directly in section files; use shared animation utilities.

## Phase 1 QA Checklist

- [ ] `pnpm install` and `pnpm dev` run without errors.
- [ ] Tailwind tokens match the spec values.
- [ ] Navigation is sticky, glassmorphic, and responsive.
- [ ] Mobile hamburger opens/closes the Sheet drawer.
- [ ] Hero is full viewport and matches the reference layout at all breakpoints.
- [ ] Hero entrance animations play on load.
- [ ] Scroll progress indicator is visible.
- [ ] Keyboard navigation works through nav links and CTAs.
- [ ] Focus states are visible.
- [ ] No layout shift or horizontal overflow at 390px–1440px widths.
