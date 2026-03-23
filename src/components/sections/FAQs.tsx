"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlowOrb from "@/components/effects/GlowOrb";
import { FAQS } from "@/lib/constants";
import { ShineBorder } from "@/components/ui/shine-border";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative glass rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-[var(--color-violet-accent)]/40 shadow-[0_0_24px_rgba(124,58,237,0.12)]" : "glass-hover"
      }`}
    >
      <ShineBorder shineColor={["#7C3AED", "#4F46E5", "#C4B5FD"]} />
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer gap-4"
      >
        <span className={`text-lg font-semibold transition-colors duration-200 ${isOpen ? "text-[var(--color-lavender)]" : "text-[var(--color-text-primary)]"}`}>
          {question}
        </span>

        {/* colored toggle button */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-br from-[var(--color-violet-accent)] to-[var(--color-indigo-accent)] shadow-[0_0_12px_rgba(124,58,237,0.5)]"
              : "bg-white/5 border border-white/10"
          }`}
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-[var(--color-text-secondary)]"}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-base text-[var(--color-text-secondary)] leading-relaxed border-t border-white/5 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden" id="faqs">
      <GlowOrb className="top-1/2 right-0" color="rgba(124, 58, 237, 0.04)" size="600px" />

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div 
            ref={leftRef} 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-[var(--color-lavender)] border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] mb-6">
              FAQs
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Got questions?{" "}
              <span className="gradient-text">We've got answers.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              Everything you need to know about Novare Talent — how we work, who we serve, and what makes us different.
            </p>
            {/* <div className="mt-10 h-px w-16 bg-gradient-to-r from-[var(--color-violet-accent)] to-transparent" /> */}
          </motion.div>

          {/* Right — separated cards */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
