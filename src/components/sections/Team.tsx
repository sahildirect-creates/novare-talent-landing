"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import GlowOrb from "@/components/effects/GlowOrb";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="team">
      <GlowOrb
        className="top-1/3 right-0"
        color="rgba(79, 70, 229, 0.05)"
        size="600px"
        parallaxIntensity={15}
        parallaxInvert
      />
      <div className="section-padding relative z-10">
        <SectionHeader
          tag="The Team"
          title="Built by"
          titleAccent="IIT Bombay minds"
          description="A team of builders who understand the talent ecosystem from the inside."
        />

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <StaggerItem key={member.name} className="text-center group">
              {/* Avatar */}
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-violet-accent)]/20 to-[var(--color-indigo-accent)]/20 border-2 border-[var(--color-glass-border)] group-hover:border-[var(--color-violet-accent)]/40 transition-all duration-500 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold">{member.name}</h3>
              <p className="text-sm text-[var(--color-violet-accent)] mt-0.5">
                {member.role}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                {member.college}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
