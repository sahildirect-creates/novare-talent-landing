"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { CLIENT_TESTIMONIALS, STUDENT_TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({
  name,
  role,
  quote,
  initial,
}: {
  name: string;
  role: string;
  quote: string;
  initial: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
      <Quote size={20} className="text-[var(--color-violet-accent)] opacity-40 mb-4" />
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 line-clamp-5">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-violet-accent)] to-[var(--color-indigo-accent)] flex items-center justify-center text-white text-sm font-semibold shrink-0">
          {initial}
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-[var(--color-text-muted)]">{role}</div>
        </div>
      </div>
    </div>
  );
}

function CarouselSection({
  title,
  testimonials,
}: {
  title: string;
  testimonials: Array<{
    name: string;
    role?: string;
    company?: string;
    college?: string;
    quote: string;
    initial: string;
  }>;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="mb-16 last:mb-0">
      <ScrollReveal>
        <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-6 section-padding">
          {title}
        </h3>
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden section-padding">
            <div className="flex gap-6 -ml-0">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  role={t.role || t.company || t.college || ""}
                  quote={t.quote}
                  initial={t.initial}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative" id="testimonials">
      <div className="section-padding">
        <SectionHeader
          tag="Testimonials"
          title="Trusted by those who"
          titleAccent="matter most"
        />
      </div>

      <CarouselSection
        title="What our clients say"
        testimonials={CLIENT_TESTIMONIALS.map((t) => ({
          ...t,
          role: `${t.role}, ${t.company}`,
        }))}
      />

      <CarouselSection
        title="What our students say"
        testimonials={STUDENT_TESTIMONIALS.map((t) => ({
          ...t,
          role: t.college,
        }))}
      />
    </section>
  );
}
