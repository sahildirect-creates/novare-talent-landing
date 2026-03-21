"use client";

import { GraduationCap, Search, Users, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import ParticleCanvas from "@/components/effects/ParticleCanvas";
import GlowOrb from "@/components/effects/GlowOrb";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={28} />,
  Search: <Search size={28} />,
  Users: <Users size={28} />,
  Zap: <Zap size={28} />,
};

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 opacity-90">
        <ParticleCanvas />
      </div>
      <GlowOrb
        className="top-0 left-1/4"
        color="rgba(124, 58, 237, 0.06)"
        size="700px"
        parallaxIntensity={20}
      />
      <div className="section-padding relative z-10">
        <SectionHeader
          tag="How It Works"
          title="How Novare finds"
          titleAccent="the top 1%"
          description="A rigorous, human-driven process that delivers quality over quantity."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlassCard className="h-full group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-violet-accent)]/20 to-[var(--color-indigo-accent)]/20 flex items-center justify-center text-[var(--color-violet-accent)] mb-4 group-hover:from-[var(--color-violet-accent)]/30 group-hover:to-[var(--color-indigo-accent)]/30 transition-all duration-300">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
