"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionLabel } from "./section-label";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";
import { fadeUp, scaleIn } from "@/lib/animations";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-flatwhite-base px-6 pt-32 pb-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Future-Ready Business</SectionLabel>
          </motion.div>

          <AnimatedText
            as="h1"
            className="max-w-[620px] text-4xl font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary sm:text-5xl md:text-6xl lg:text-[72px]"
            delay={0.1}
          >
            Empowering companies to grow smarter and faster
          </AnimatedText>

          <motion.p
            variants={fadeUp}
            className="max-w-[520px] text-base leading-relaxed text-text-secondary md:text-lg"
          >
            FlatWhite partners with leadership teams to redefine strategy,
            streamline operations and unlock sustainable growth. We translate
            ambition into an actionable roadmap using data, technology and close
            collaboration.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton href="#contact">Get in Touch</MagneticButton>
            <MagneticButton variant="secondary" href="#services">
              Learn More
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden h-[500px] w-full lg:block lg:h-[600px]"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          style={{ y }}
        >
          <div className="absolute right-0 top-0 h-[320px] w-[280px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-1.webp"
              alt="Strategic planning session"
              fill
              className="object-cover"
              priority
              sizes="280px"
            />
          </div>
          <div className="absolute left-0 top-24 h-[260px] w-[220px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-2.webp"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
              sizes="220px"
            />
          </div>
          <div className="absolute bottom-12 right-12 h-[240px] w-[200px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-3.webp"
              alt="Business growth"
              fill
              className="object-cover"
              priority
              sizes="200px"
            />
          </div>
          <div className="absolute bottom-0 left-12 h-[200px] w-[260px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-4.webp"
              alt="Consulting partnership"
              fill
              className="object-cover"
              priority
              sizes="260px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
