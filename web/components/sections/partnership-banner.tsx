"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { MagneticButton } from "@/components/magnetic-button";
import Image from "next/image";

export function PartnershipBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
        <Image
          src="/images/hero-4.webp"
          alt="Partnership"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-flatwhite-base/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-flatwhite-base via-transparent to-flatwhite-base/40" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <h2 className="max-w-3xl text-section text-text-primary">
          Ready to build something extraordinary?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-text-secondary">
          Let&apos;s discuss how FlatWhite can accelerate your next strategic
          initiative.
        </p>
        <div className="mt-10">
          <MagneticButton variant="primary" href="#contact">
            Partner With Us
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
