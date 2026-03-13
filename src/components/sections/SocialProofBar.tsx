"use client";

import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import ScrollReveal from "@/components/effects/ScrollReveal";

const LOGOS = [
  { src: "/images/sine-logo.jpg", alt: "SINE IIT Bombay" },
  { src: "/images/iitbaa-logo.jpg", alt: "IIT Bombay Alumni Association" },
  { src: "/images/nt-logo.jpg", alt: "Novare Talent" },
];

export default function SocialProofBar() {
  return (
    <section className="py-16 border-y border-white/5 relative">
      <ScrollReveal className="text-center mb-8">
        <p className="text-sm text-[var(--color-text-muted)] tracking-wide uppercase">
          Trusted by founders and backed by
        </p>
      </ScrollReveal>

      <Marquee speed={25}>
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-32 h-16 mx-8 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain max-h-12"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
