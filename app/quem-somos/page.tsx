import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { MissionVisionValuesSection } from "@/components/sections/MissionVisionValuesSection";
import { QualityPolicySection } from "@/components/sections/QualityPolicySection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export const metadata: Metadata = {
  title: "Quem somos - Unistéril",
  description:
    "Desde 2000 na vanguarda do processamento e esterilização de dispositivos médicos. Conheça a história, as certificações e os valores da Unistéril.",
  openGraph: {
    title: "Quem somos - Unistéril",
    description:
      "Desde 2000 na vanguarda do processamento e esterilização de dispositivos médicos. Conheça a história, as certificações e os valores da Unistéril.",
    type: "website",
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeroSection eyebrow="Conheça a Unistéril" title="Quem" highlight="somos" />
        <AboutIntroSection />
        <CertificationsSection />
        <LocationSection />
        <ClientsSection />
        <MissionVisionValuesSection />
        <QualityPolicySection />
        <CtaFinalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
