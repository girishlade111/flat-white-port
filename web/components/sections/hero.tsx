"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, scaleIn } from "@/lib/animations";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedText } from "@/components/animated-text";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-flatwhite-base px-6 pb-24 pt-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-content gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <AnimatedText
            as="h1"
            className="text-hero text-text-primary"
            delay={0.1}
          >
            We craft strategic brands that drive growth.
          </AnimatedText>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg text-text-secondary"
          >
            FlatWhite is a premium consulting and design agency helping
            enterprise leaders turn vision into measurable outcomes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton variant="primary" href="#contact" className="group">
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </MagneticButton>
            <MagneticButton variant="outline" href="#services" className="group">
              <Play size={18} className="fill-current" />
              Watch Showreel
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          style={{ y: imageY }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl lg:aspect-[3/4]"
        >
          <Image
            src="/images/hero-1.webp"
            alt="Premium office workspace"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-flatwhite-base/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
