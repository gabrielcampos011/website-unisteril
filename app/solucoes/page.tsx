import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessingSection } from "@/components/sections/ProcessingSection";
import { EthyleneOxideSection } from "@/components/sections/EthyleneOxideSection";
import { SteamSection } from "@/components/sections/SteamSection";
import { FullMethodSection } from "@/components/sections/FullMethodSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export const metadata: Metadata = {
  title: "Soluções | Esterilização | Processamento - Unistéril",
  description:
    "Conheça as soluções da Unistéril: processamento, esterilização por óxido de etileno e a vapor saturado para clínicas e hospitais.",
  openGraph: {
    title: "Soluções | Esterilização | Processamento - Unistéril",
    description:
      "Conheça as soluções da Unistéril: processamento, esterilização por óxido de etileno e a vapor saturado para clínicas e hospitais.",
    type: "website",
  },
};

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeroSection eyebrow="Conheça" title="Nossas" highlight="soluções" />
        <ProcessingSection />
        <EthyleneOxideSection />
        <SteamSection />
        <FullMethodSection />
        <CtaFinalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
