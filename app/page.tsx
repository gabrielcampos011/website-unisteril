import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CtaInterruptSection } from "@/components/sections/CtaInterruptSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MetricsSection />
        <SolutionsSection />
        <CtaInterruptSection />
        <DifferentialsSection />
        <ManifestoSection />
        <MethodSection />
        <CtaFinalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
