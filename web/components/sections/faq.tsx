"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SectionLabel } from "@/components/section-label";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We focus on B2B technology, financial services, healthcare, and professional services—industries where strategic positioning and trust design directly impact revenue.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most brand and website engagements run 8–14 weeks. Enterprise consulting retainers are structured around quarterly milestones.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We partner with venture-backed startups and scale-ups that have product-market fit and are ready to invest in brand and growth infrastructure.",
  },
  {
    question: "What deliverables are included?",
    answer:
      "Deliverables are tailored to each engagement but typically include strategy docs, brand systems, design files, production code, and launch support.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div variants={staggerItem} className="border-b border-white/[0.08]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus-ring focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-lg font-medium text-text-primary">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="shrink-0 text-flatwhite-accent"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 text-text-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-flatwhite-secondary px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <SectionLabel className="mb-4">FAQ</SectionLabel>
          <h2 className="text-section text-text-primary">Common questions.</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
