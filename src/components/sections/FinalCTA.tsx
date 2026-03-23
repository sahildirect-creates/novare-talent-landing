"use client";

import GlowButton from "@/components/ui/GlowButton";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden border border-white/10 bg-black/80 backdrop-blur-sm rounded-2xl m-8">
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[min(1600px,200vw)] h-[900px] rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#7a5af8", filter: "blur(120px)", zIndex: 0 }} />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#7a5af8", filter: "blur(100px)", zIndex: 0 }} />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 py-16 px-4">
        <h2 className="text-white text-4xl md:text-7xl font-extrabold tracking-tight max-w-xs md:max-w-xl text-center">
          Ready to hire{" "}
          <br />
          <span className="gradient-text">Top 1% talent</span>?
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="/hire" className="text-base">
              Hire Top 1% Talent
            </GlowButton>
            <GlowButton href="/get-hired" variant="secondary" className="text-base">
              Get Hired
            </GlowButton>
          </div>
          <p className="text-white/80 text-sm text-center max-w-lg">
            Join the network of companies building the future with{" "}
            <span className="font-semibold text-white">India&apos;s best minds</span>
          </p>
        </div>
      </div>
    </section>
  );
}
