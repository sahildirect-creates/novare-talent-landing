"use client";

import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";
import AuroraMesh from "@/components/effects/AuroraMesh";

const cards = [
  {
    label: "For Recruiters",
    title: "Looking to expand your team?",
    cta: "Sign up as Recruiter",
    href: "/sign-up",
    icon: Briefcase,
    number: "01",
    benefits: [
      "Access to exclusive talent pool",
      "Hire curated candidates",
      "Faster and simpler process",
    ],
    // Dark card — inverted
    variant: "dark",
  },
  {
    label: "For Students",
    title: "Searching for opportunities?",
    cta: "Sign up as Student",
    href: "/sign-up",
    icon: GraduationCap,
    number: "02",
    benefits: [
      "Internships and job opportunities",
      "Resources for career guidance",
      "Tools & much more",
    ],
    // Light/ghost card
    variant: "light",
  },
];

export default function Zenhyre() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-12">
          {cards.map((card) => {
            const Icon = card.icon;
            const isDark = card.variant === "dark";

            return (
              <StaggerItem key={card.title}>
                <div
                  className={`
                    relative rounded-2xl p-8 h-full flex flex-col overflow-hidden
                    transition-all duration-500 group cursor-pointer
                    ${isDark
                      ? "bg-[var(--color-violet-accent)]/10 border border-[var(--color-violet-accent)]/20 hover:border-[var(--color-violet-accent)]/50 hover:bg-[var(--color-violet-accent)]/15"
                      : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                    }
                  `}
                >
                  {/* Large background number — decorative */}
                  <span
                    className="absolute top-6 right-7 text-[5rem] font-black leading-none select-none pointer-events-none tabular-nums"
                    style={{
                      color: isDark
                        ? "rgba(124,58,237,0.12)"
                        : "rgba(255,255,255,0.04)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {card.number}
                  </span>

                  {/* Top row: label + icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        isDark
                          ? "text-[var(--color-violet-accent)]"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {card.label}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                        isDark
                          ? "border-[var(--color-violet-accent)]/30 text-[var(--color-violet-accent)]"
                          : "border-white/10 text-[var(--color-text-secondary)]"
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold leading-snug mb-8 pr-4">
                    {card.title}
                  </h3>

                  {/* Benefits — numbered, not bulleted */}
                  
                  <ul className="space-y-4 mb-10 flex-1">
                    {card.benefits.map((benefit, i) => (
                      <li key={benefit} className="flex items-start gap-4">
                        {/* Thin separator line */}
                        {i > 0 && (
                          <div className="absolute left-8 right-8 h-px bg-white/5" />
                        )}
                        <span
                          className={`text-xs font-mono mt-0.5 shrink-0 ${
                            isDark
                              ? "text-[var(--color-violet-accent)]/60"
                              : "text-[var(--color-text-secondary)]/40"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA — text link style, not a pill button */}
                  <a
                    href={card.href}
                    className={`
                      inline-flex items-center gap-2 text-sm font-medium
                      transition-all duration-300 group/link w-fit
                      ${isDark
                        ? "text-[var(--color-violet-accent)]"
                        : "text-[var(--color-text-secondary)] hover:text-white"
                      }
                    `}
                  >
                    <span className="border-b border-current pb-px">
                      {card.cta}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
