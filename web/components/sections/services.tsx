"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import { MagneticButton } from "@/components/magnetic-button";
import { Compass, Layers, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategy",
    description:
      "We define market position, customer journeys, and growth roadmaps that align leadership around measurable outcomes.",
  },
  {
    icon: Layers,
    title: "Brand & Design",
    description:
      "From identity systems to digital experiences, we craft brands that feel inevitable and interfaces that convert.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description:
      "We ship high-performance websites, products, and campaigns with the rigor of an enterprise team.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-flatwhite-base px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-2xl"
        >
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h2 className="text-section text-text-primary">
            Premium services for ambitious brands.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-flatwhite-card p-8 transition-colors hover:border-flatwhite-accent/30 hover:bg-flatwhite-secondary"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4 text-flatwhite-accent">
                <Icon size={28} />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mb-8 text-text-secondary">{description}</p>
              <MagneticButton variant="outline" className="text-sm" href="#contact">
                Learn More <ArrowRight size={16} />
              </MagneticButton>

              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-flatwhite-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
