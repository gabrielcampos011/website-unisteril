import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { BlogListSection } from "@/components/sections/BlogListSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Blog - Unistéril",
  description:
    "Canal de conteúdos, artigos e notícias sobre processamento de dispositivos médicos, esterilização de materiais hospitalares e segurança do paciente.",
  openGraph: {
    title: "Blog - Unistéril",
    description:
      "Canal de conteúdos, artigos e notícias sobre processamento de dispositivos médicos, esterilização de materiais hospitalares e segurança do paciente.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeroSection eyebrow="Conheça" title="Nosso" highlight="Blog" />
        <BlogListSection />
        <NewsletterSection bg="light" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
