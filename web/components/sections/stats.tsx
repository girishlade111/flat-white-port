"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useCounter } from "@/hooks/use-counter";

const stats = [
  { value: 340, suffix: "%", label: "Revenue Growth" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 45, suffix: "+", label: "Global Clients" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, ref, 2000);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass rounded-2xl p-8 transition-shadow hover:shadow-2xl hover:shadow-flatwhite-accent/10"
    >
      <div className="text-4xl font-semibold text-text-primary md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="bg-flatwhite-base px-6 py-24 md:px-12 lg:px-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-content gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </motion.div>
    </section>
  );
}
