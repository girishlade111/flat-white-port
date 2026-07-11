"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Strategy", href: "#services" },
    { label: "Design", href: "#services" },
    { label: "Development", href: "#services" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export function Footer() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-white/[0.08] bg-flatwhite-base px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={staggerItem}>
          <h3 className="text-xl font-semibold text-white">FlatWhite</h3>
          <p className="mt-4 text-sm text-text-secondary">
            Premium strategy and design for ambitious brands.
          </p>
        </motion.div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <motion.div key={title} variants={staggerItem}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {title}
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white focus-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        className="mx-auto mt-16 flex max-w-content flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 md:flex-row"
      >
        <p className="text-sm text-text-muted">
          © 2026 FlatWhite. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-text-muted transition-colors hover:text-white focus-ring"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-text-muted transition-colors hover:text-white focus-ring"
          >
            Terms of Service
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
