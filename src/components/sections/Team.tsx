"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-24 md:py-32 relative" id="team">
      <div className="section-padding">
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
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
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
