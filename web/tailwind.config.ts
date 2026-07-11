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
        "primary-dark": "#05070B",
        "secondary-dark": "#0E1320",
        "card-dark": "#121827",
        "light-bg": "#F6F7FB",
        "light-text": "#111111",
        "text-primary": "#FFFFFF",
        "text-secondary": "rgba(255,255,255,0.65)",
        "text-muted": "rgba(255,255,255,0.45)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-label": [
          "12px",
          { lineHeight: "12px", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "hero-heading": [
          "72px",
          { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "section-heading": [
          "56px",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        subheading: ["22px", { lineHeight: "1.4", fontWeight: "400" }],
        hero: [
          "clamp(48px, 8vw, 72px)",
          { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        section: [
          "clamp(40px, 6vw, 56px)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        subhead: [
          "clamp(18px, 2vw, 22px)",
          { lineHeight: "1.4", fontWeight: "400" },
        ],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        button: ["15px", { lineHeight: "1", fontWeight: "500" }],
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
        section: "120px",
      },
      maxWidth: {
        container: "1440px",
        content: "1200px",
        desktop: "1440px",
      },
      borderRadius: {
        pill: "100px",
        full: "999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
