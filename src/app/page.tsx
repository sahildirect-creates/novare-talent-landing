import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import WhyTheOnePercent from "@/components/sections/WhyTheOnePercent";
import HowItWorks from "@/components/sections/HowItWorks";
import NovareStandard from "@/components/sections/NovareStandard";
import Zenhyre from "@/components/sections/Zenhyre";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/FAQs";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative z-[1]">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <WhyTheOnePercent />
      <HowItWorks />
      <NovareStandard />
      <Zenhyre />
      <Testimonials />
      <Team />
      <FAQs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
