"use client";

import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";
import AuroraMesh from "@/components/effects/AuroraMesh";

const cards = [
  {
    title: "Looking to expand your team?",
    cta: "Sign up as Recruiter",
    href: "/sign-up",
    icon: <Briefcase size={24} />,
    benefits: [
      "Access to exclusive talent pool",
      "Hire curated candidates",
      "Faster and simpler process",
    ],
    accent: "from-[var(--color-violet-accent)] to-purple-600",
    borderAccent: "hover:border-[var(--color-violet-accent)]/40",
  },
  {
    title: "Searching for opportunities?",
    cta: "Sign up as Student",
    href: "/sign-up",
    icon: <GraduationCap size={24} />,
    benefits: [
      "Internships and job opportunities",
      "Resources for career guidance",
      "Tools & much more",
    ],
    accent: "from-[var(--color-indigo-accent)] to-blue-600",
    borderAccent: "hover:border-[var(--color-indigo-accent)]/40",
  },
];

export default function Zenhyre() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <AuroraMesh intensity={0.5} opacity={0.6} />
      <GlowOrb
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        color="rgba(124, 58, 237, 0.05)"
        size="800px"
        parallaxIntensity={18}
      />

      <div className="section-padding relative z-10">
        <SectionHeader
          tag="A product from Novare Talent"
          title="Introducing"
          titleAccent="Zenhyre"
          description="A curated portal exclusively for recruiters and students from India's top colleges, designed to connect each other simpler and faster."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className={`glass rounded-2xl p-8 h-full transition-all duration-500 ${card.borderAccent} group`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold mb-6">{card.title}</h3>

                <ul className="space-y-3 mb-8">
                  {card.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet-accent)] mt-1.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={card.href}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r ${card.accent} hover:shadow-lg transition-all duration-300`}
                >
                  {card.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
