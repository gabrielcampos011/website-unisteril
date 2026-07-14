import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ContactFormsSection } from "@/components/sections/ContactFormsSection";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Contato - Unistéril",
  description:
    "Página oficial de contato da Unistéril para atendimento, dúvidas ou solicitações de orçamentos sobre serviços de esterilização e processamento de dispositivos médicos.",
  openGraph: {
    title: "Contato - Unistéril",
    description:
      "Página oficial de contato da Unistéril para atendimento, dúvidas ou solicitações de orçamentos sobre serviços de esterilização e processamento de dispositivos médicos.",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeroSection eyebrow="Estamos aqui" title="Fale" highlight="conosco" />
        <ContactFormsSection />
        <ContactInfoSection />
        <NewsletterSection bg="white" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
