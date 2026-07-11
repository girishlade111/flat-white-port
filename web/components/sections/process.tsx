"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business, market, and customers to identify the highest-leverage opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We translate insights into a clear roadmap: positioning, messaging, and a plan to win.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft visual systems and experiences that communicate authority and build trust.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We build, test, and ship with precision—then partner with you to optimize and scale.",
  },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="bg-flatwhite-secondary px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel className="mb-4">Our Process</SectionLabel>
          <h2 className="text-section text-text-primary">
            Helping companies succeed through strategy and execution.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                active === index
                  ? "border-flatwhite-accent/40 bg-flatwhite-card"
                  : "border-white/[0.08] bg-transparent hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-flatwhite-accent">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 overflow-hidden text-text-secondary"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
