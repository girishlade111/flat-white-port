"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import { TrendingUp, Users, Award } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "3.4x",
    label: "Average ROI",
    description: "Our clients see measurable returns within the first year.",
  },
  {
    icon: Users,
    metric: "2M+",
    label: "Users Reached",
    description: "Campaigns and products that scale across global markets.",
  },
  {
    icon: Award,
    metric: "12",
    label: "Industry Awards",
    description: "Recognition for strategy, design, and innovation.",
  },
];

export function Results() {
  return (
    <section className="bg-flatwhite-base px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <SectionLabel className="mb-4">Results</SectionLabel>
          <h2 className="text-section text-text-primary">Outcomes that matter.</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {results.map(({ icon: Icon, metric, label, description }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-flatwhite-card p-8 transition-shadow hover:shadow-2xl hover:shadow-flatwhite-accent/10"
            >
              <div className="mb-6 text-flatwhite-accent">
                <Icon size={32} />
              </div>
              <div className="text-5xl font-semibold text-text-primary">
                {metric}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                {label}
              </h3>
              <p className="mt-2 text-text-secondary">{description}</p>
              <div className="absolute inset-0 rounded-3xl border border-flatwhite-accent/0 transition-colors group-hover:border-flatwhite-accent/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
