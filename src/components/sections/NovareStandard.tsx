"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";
import { EVALUATION_STEPS } from "@/lib/constants";

export default function NovareStandard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden" id="for-companies">
      <GlowOrb
        className="top-0 right-0"
        color="rgba(79, 70, 229, 0.06)"
        size="600px"
        parallaxIntensity={22}
        parallaxInvert
      />

      <div className="section-padding">
        <SectionHeader
          tag="The Novare Standard"
          title="Rigorous by design,"
          titleAccent="elite by outcome."
          description="Every candidate passes a multi-stage evaluation before reaching your pipeline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-center">
          {/* Steps */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/5">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[var(--color-violet-accent)] to-[var(--color-indigo-accent)]"
              />
            </div>

            <div className="space-y-10">
              {EVALUATION_STEPS.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] flex items-center justify-center shrink-0 text-sm font-mono text-[var(--color-violet-accent)]">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Certified badge */}
              <ScrollReveal delay={0.5}>
                <div className="flex gap-6 items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-violet-accent)] to-[var(--color-indigo-accent)] flex items-center justify-center shrink-0">
                    <Shield size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold gradient-text tracking-wide">
                      NOVARE CERTIFIED
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Video */}
          <ScrollReveal variant="scale-in" className="relative">
            <div className="glass rounded-2xl overflow-hidden aspect-video relative group">
              <video
                src="/videos/eval.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
