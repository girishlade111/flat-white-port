"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import Image from "next/image";

const team = [
  {
    name: "Eleanor Vance",
    role: "Managing Partner",
    bio: "Former strategy lead at McKinsey. 15 years scaling B2B brands.",
    image: "/images/hero-1.webp",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    bio: "Award-winning designer with a focus on brand systems and motion.",
    image: "/images/hero-2.webp",
  },
  {
    name: "Sofia Reed",
    role: "Head of Delivery",
    bio: "Engineering leader who turns complex roadmaps into shipped products.",
    image: "/images/hero-3.webp",
  },
  {
    name: "James Okonkwo",
    role: "Strategy Director",
    bio: "Expert in M&A positioning and enterprise transformation.",
    image: "/images/hero-4.webp",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="bg-flatwhite-secondary px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <SectionLabel className="mb-4">Our Team</SectionLabel>
          <h2 className="text-section text-text-primary">
            Strategists, designers, and builders.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-flatwhite-card transition-shadow hover:shadow-2xl hover:shadow-flatwhite-accent/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-flatwhite-accent">{member.role}</p>
                <p className="mt-3 text-sm text-text-secondary">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
