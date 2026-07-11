"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description: "Started as a boutique strategy studio in London.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Opened offices in New York and Singapore.",
  },
  {
    year: "2023",
    title: "Enterprise Practice",
    description: "Launched dedicated consulting for Fortune 500 clients.",
  },
  {
    year: "2026",
    title: "Industry Leader",
    description: "Recognized among top strategy agencies worldwide.",
  },
];

export function StrategyTimeline() {
  return (
    <section className="bg-light-bg px-6 py-32 text-light-text md:px-12 lg:px-20">
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <SectionLabel light className="mb-4">
            Our Journey
          </SectionLabel>
          <h2 className="text-section text-light-text">
            A timeline of strategic growth.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute left-4 top-0 h-full w-px bg-black/10 md:left-1/2" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={staggerItem}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />
                <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1.5 rounded-full border-2 border-white bg-flatwhite-accent shadow md:left-1/2" />
                <div
                  className={`ml-12 flex-1 rounded-2xl bg-white p-6 shadow-sm md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-12 md:text-right"
                      : "md:ml-12 md:text-left"
                  }`}
                >
                  <span className="text-sm font-semibold text-flatwhite-accent">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-black/60">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
