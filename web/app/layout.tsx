import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

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
      <body className="min-h-screen bg-flatwhite-base text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-flatwhite-accent focus:px-4 focus:py-2 focus:text-flatwhite-base"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
