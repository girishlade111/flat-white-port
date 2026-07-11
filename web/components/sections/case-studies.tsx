"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import { MagneticButton } from "@/components/magnetic-button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const cases = [
  {
    title: "Meridian Capital",
    category: "Brand Strategy",
    image: "/images/hero-2.webp",
  },
  {
    title: "Aurora Health",
    category: "Digital Product",
    image: "/images/hero-3.webp",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-flatwhite-base px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel className="mb-4">Selected Work</SectionLabel>
            <h2 className="text-section text-text-primary">
              Case studies that prove our impact.
            </h2>
          </div>
          <MagneticButton variant="outline" href="#">
            View All Work
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {cases.map(({ title, category, image }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover="hover"
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flatwhite-base via-flatwhite-base/40 to-transparent" />
              <motion.div
                initial={{ y: 0 }}
                variants={{ hover: { y: -8 } }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-full p-8"
              >
                <span className="text-sm text-flatwhite-accent">{category}</span>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">
                  {title}
                </h3>
              </motion.div>
              <div className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
