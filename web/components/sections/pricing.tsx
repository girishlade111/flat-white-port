"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import { MagneticButton } from "@/components/magnetic-button";
import { Check } from "lucide-react";

const features = [
  "Strategic discovery workshop",
  "Brand positioning & messaging",
  "Visual identity system",
  "High-fidelity website design",
  "Framer or Next.js development",
  "60 days post-launch support",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-flatwhite-base px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <SectionLabel className="mb-4">Pricing</SectionLabel>
          <h2 className="text-section text-text-primary">
            One comprehensive engagement.
          </h2>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/[0.08] bg-flatwhite-card p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flatwhite-accent/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  Enterprise Partnership
                </h3>
                <p className="mt-2 text-text-secondary">
                  Everything you need to launch and scale.
                </p>
              </div>
              <div className="text-4xl font-semibold text-text-primary md:text-5xl">
                $45k
                <span className="text-lg text-text-muted">/project</span>
              </div>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-flatwhite-accent/20 text-flatwhite-accent">
                    <Check size={14} />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <MagneticButton
                variant="primary"
                href="#contact"
                className="w-full md:w-auto"
              >
                Book a Consultation
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
