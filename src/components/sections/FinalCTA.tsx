"use client";

export default function FinalCTA() {
  return (
    <section id="cta" className="flex flex-col items-center justify-center w-full px-4 py-16">
      <div className="w-full max-w-7xl">
        <div className="h-[400px] overflow-hidden shadow-xl w-full rounded-2xl relative"
          style={{ background: "linear-gradient(135deg, #7c6fe0 0%, #6c5ce7 40%, #8b7ff5 100%)" }}
        >
          {/* Geometric line decorations */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect x="180" y="-60" width="320" height="320" rx="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" transform="rotate(15 180 -60)" />
            <rect x="820" y="80" width="380" height="380" rx="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" transform="rotate(-10 820 80)" />
          </svg>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 py-12 px-4">
            <h2 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
              Ready to hire{" "}
              <br />
              <span className="">Top 1% talent</span>?
            </h2>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="/Dashboard"
                  className="bg-white text-black font-semibold text-sm h-10 px-6 rounded-full flex items-center justify-center shadow-md"
                >
                  Get Started
                </a>
                <a
                  href="mailto:info@novaretalent.com"
                  className="text-white font-semibold text-sm h-10 px-6 rounded-full flex items-center justify-center border border-white/40 hover:bg-white/10 transition-colors"
                >
                  Talk to Us
                </a>
              </div>
              <p className="text-white/80 text-sm text-center max-w-lg">
                Join the network of companies building the future with{" "}
                <span className="font-semibold text-white">India&apos;s best minds</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
