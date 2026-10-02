# FlatWhite — Premium Strategic Consulting & Design Agency Site

A premium, award-calibre strategic consulting and design agency website — **FlatWhite** — built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. It ships a dark, high-contrast theme with parallax hero imagery, animated headlines, magnetic UI components, scroll-triggered counters, and a fully responsive layout. The site statically exports to plain HTML/CSS/JS, so it can be hosted anywhere for free.

> Built by Girish Lade — https://ladestack.in

## Features

- **Hero** — parallax background image, staggered animated headline, magnetic call-to-action buttons
- **Stats** — animated counters triggered on scroll into view
- **Services** — Strategy, Brand & Design, and Execution service cards
- **Process** — step-by-step methodology walkthrough
- **Case Studies** — client work showcases with hover interactions
- **Strategy Timeline** — milestone-based visual timeline
- **Results** — key performance highlights
- **Partnership Banner** — engagement call-to-action
- **Team** — team member profiles
- **Pricing** — single comprehensive engagement plan with feature list
- **FAQ** — accessible accordion (Radix UI)
- **Footer** — navigation, social links, contact info
- Mobile navigation drawer, scroll progress indicator, section labels

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (static export, `output: "export"`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + `tailwindcss-animate` |
| Animation | Framer Motion v12 |
| UI primitives | Radix UI (Dialog, Slot) |
| Icons | Lucide React |
| Fonts | Inter (variable) |
| Deploy | GitHub Pages (static) |

## Quick Start

Prerequisites: Node.js 18+ and npm.

```bash
cd web
npm install
npm run dev        # dev server at http://localhost:3000
```

## Build (static export)

```bash
cd web
npm install
npm run build      # emits static site to web/dist/
```

`next.config.mjs` already sets `output: "export"` with `images.unoptimized: true`, so the build produces plain static files — no server required. Serve the `web/dist/` folder from any static host (GitHub Pages, Cloudflare Pages, Netlify).

## Project Structure

```
.
├── DESIGN.md                  # design tokens and architecture docs
├── SKILL.md                   # reusable notes for agent-driven edits
├── screencapture-*.png        # design reference screenshot
└── web/                       # Next.js app
    ├── app/                   # App Router: layout, page, fonts, globals.css
    ├── components/            # hero, navigation, sections, ui primitives
    ├── hooks/                 # use-counter and other client hooks
    ├── lib/                   # utilities
    ├── public/images/         # static assets
    ├── next.config.mjs        # static export config
    ├── package.json
    └── tailwind.config.ts
```

## Env Vars

None required — fully client-side, no backends or API keys.

## Deploy

GitHub Pages: the repo's `main` branch serves the statically exported site from the repo root. Rebuild with `npm run build` in `web/` and copy `web/dist/*` to the repo root to refresh.

## License

Free to use and adapt. Attribution appreciated.

---

Built by [Girish Lade](https://ladestack.in) — free tools for everyone, always.
