"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="rgba(124, 58, 237, 0.12)" size="800px" />
      <GlowOrb className="top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2" color="rgba(79, 70, 229, 0.08)" size="600px" />

      <div className="section-padding relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to hire{" "}
            <span className="gradient-text">top 1% talent</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Join the network of companies building the future with India&apos;s best minds.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Dashboard"
              className="glow-button text-white font-medium px-8 py-3.5 rounded-full text-base"
            >
              Get Started
            </a>
            <a
              href="mailto:info@novaretalent.com"
              className="px-8 py-3.5 rounded-full text-base font-medium text-[var(--color-lavender)] border border-[var(--color-glass-border)] hover:bg-white/5 transition-all duration-300"
            >
              Talk to Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
