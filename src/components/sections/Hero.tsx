"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ThreeGrid from "@/components/effects/ThreeGrid";
import { NumberTicker } from "@/components/ui/number-ticker";
import Marquee from "@/components/ui/Marquee";
import GlowOrb from "@/components/effects/GlowOrb";
import { STATS, ROLE_TICKER } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — 3D grid + parallax orbs */}
      <ThreeGrid />
      <GlowOrb
        className="-top-40 -right-40"
        color="rgba(124, 58, 237, 0.08)"
        size="800px"
        parallaxIntensity={40}
      />
      <GlowOrb
        className="-bottom-40 -left-40"
        color="rgba(79, 70, 229, 0.06)"
        size="700px"
        parallaxIntensity={25}
        parallaxInvert
      />

      {/* Content */}
      <div className="relative z-10 text-center section-padding pt-24 pb-8 max-w-5xl mx-auto">
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-lavender)] border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] mb-8"
        >
          India's Elite Talent Network
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05]"
        >
          We find the{" "}
          <span className="font-[var(--font-serif)] italic gradient-text px-2">
            1%
          </span>
          <span className="gradient-text">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"
        >
          From thousands of candidates to the few who change outcomes.
          <br className="hidden md:block" />
          Curated talent from IITs, IIMs, and India's top institutes.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm text-[var(--color-text-muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Dashboard"
            className="glow-button text-white font-medium px-8 py-3.5 rounded-full text-base"
          >
            Apply to Hire
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full text-base font-medium text-[var(--color-lavender)] border border-[var(--color-glass-border)] hover:bg-white/5 transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Role Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-full mt-auto pb-16"
      >
        <div className="border-y border-white/10 py-4">
          <Marquee speed={40}>
            {ROLE_TICKER.map((role) => (
              <span
                key={role}
                className="text-sm text-[var(--color-text-secondary)] whitespace-nowrap px-4 flex items-center gap-4"
              >
                {role}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet-accent)] opacity-70" />
              </span>
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
