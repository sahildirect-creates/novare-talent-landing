"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";
import { FAQS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-base font-medium pr-8 group-hover:text-[var(--color-lavender)] transition-colors">
          {question}
        </span>
        <span className="text-[var(--color-violet-accent)] shrink-0">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
            <p className="pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="faqs">
      <GlowOrb className="top-1/2 right-0" color="rgba(124, 58, 237, 0.04)" size="600px" />

      <div className="section-padding relative z-10">
        <SectionHeader
          tag="FAQs"
          title="Got questions?"
          titleAccent="We've got answers."
        />

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
