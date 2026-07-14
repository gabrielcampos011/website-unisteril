import type { Metadata } from "next";
import { Truck, ShieldCheck, ScanLine, Award, Cpu, Leaf } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { DifferentialDetailSection } from "@/components/sections/DifferentialDetailSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export const metadata: Metadata = {
  title: "Diferenciais - Unistéril",
  description:
    "Conheça os principais pilares e diferenciais competitivos da Unistéril no processamento e esterilização de produtos para a saúde.",
  openGraph: {
    title: "Diferenciais - Unistéril",
    description:
      "Conheça os principais pilares e diferenciais competitivos da Unistéril no processamento e esterilização de produtos para a saúde.",
    type: "website",
  },
};

export default function DiferenciaisPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeroSection eyebrow="Conheça" title="Nossos" highlight="diferenciais" />

        <DifferentialDetailSection
          id="logistica-eficiente"
          bg="light"
          icon={Truck}
          titleLead="Logística"
          titleHighlight="eficiente"
          imageSide="left"
          buttonVariant="primary"
          gradientTo="#0d4a2c"
          paragraphs={[
            "Com frota própria, localização estratégica e um planejamento logístico bem estruturado, garantimos entregas ágeis e seguras. Os materiais processados em vapor são entregues em até 24 horas, enquanto os itens esterilizados por óxido de etileno chegam em até 48 horas, em casos de urgência, e em até 72 horas, no padrão.",
            "Esse cuidado assegura integridade, rapidez e confiabilidade, reduzindo riscos operacionais e atendendo com eficiência a demanda de ambientes hospitalares que não podem esperar.",
          ]}
        />

        <DifferentialDetailSection
          id="seguranca-no-processamento"
          bg="white"
          icon={ShieldCheck}
          titleLead="Segurança no"
          titleHighlight="processamento"
          imageSide="right"
          buttonVariant="secondary"
          gradientTo="#0a3320"
          paragraphs={[
            "Na Unistéril, a segurança é prioridade em todas as etapas do processamento. Seguimos rigorosamente protocolos validados e normas internacionais para assegurar que cada dispositivo médico seja devolvido totalmente seguro, esterilizado e livre de qualquer risco de contaminação.",
            "Desde a recepção dos materiais, passando por limpeza, inspeção, preparo e esterilização, até a expedição final, todo o fluxo é acompanhado por um sistema interno de rastreabilidade. Isso garante controle absoluto sobre cada etapa, permitindo identificar responsáveis, horários, insumos e condições de processamento.",
            "Nosso compromisso é oferecer um processo transparente, confiável e altamente seguro, garantindo tranquilidade para os profissionais de saúde e proteção para os pacientes.",
          ]}
        />

        <DifferentialDetailSection
          id="sistema-de-rastreabilidade"
          bg="light"
          icon={ScanLine}
          titleLead="Sistema de"
          titleHighlight="rastreabilidade"
          imageSide="left"
          buttonVariant="primary"
          gradientTo="#0d4a2c"
          paragraphs={[
            "A Unistéril oferece um sistema de rastreabilidade integral que contempla tanto o acompanhamento do processo quanto a rastreabilidade individual de cada produto. Por meio de etiquetas 2D e controle via web, é possível acessar todo o histórico do dispositivo, incluindo número de processamentos, prontuário do paciente em que foi utilizado, laudos de qualidade e laboratoriais, além de todas as movimentações registradas.",
            "Isso garante segurança, transparência e excelência em cada etapa do fluxo.",
          ]}
        />

        <DifferentialDetailSection
          id="programa-de-excelencia-operacional"
          bg="white"
          icon={Award}
          titleLead="Programa de"
          titleHighlight="Excelência Operacional"
          imageSide="right"
          buttonVariant="secondary"
          gradientTo="#0a3320"
          paragraphs={[
            "Na Unistéril, seguimos um Programa de Excelência Operacional fundamentado nas melhores práticas globais de processamento de produtos para saúde. Nosso modelo integra padronização rigorosa, auditorias internas e externas contínuas, além de investimentos constantes na capacitação da equipe, garantindo que todos os processos sejam executados com precisão e responsabilidade.",
            "Esse compromisso assegura que cada dispositivo médico receba um tratamento totalmente consistente e rastreável, reduzindo falhas, eliminando variabilidades e fortalecendo a segurança em todo o ciclo de processamento. Dessa forma, entregamos materiais confiáveis, promovendo maior segurança no ambiente hospitalar e contribuindo para a qualidade da assistência ao paciente.",
          ]}
        />

        <DifferentialDetailSection
          id="tecnologia-e-inovacao"
          bg="light"
          icon={Cpu}
          titleLead="Tecnologia e"
          titleHighlight="Inovação"
          imageSide="left"
          buttonVariant="primary"
          gradientTo="#0d4a2c"
          paragraphs={[
            "Investimos continuamente em tecnologia para automatizar, monitorar e controlar cada etapa do processamento e da esterilização. Contamos com equipamentos modernos que asseguram controle de funcionalidade, inspeção detalhada, lavagem e secagem eficientes, além de alta precisão no controle do gás utilizado nos ciclos e na aeração.",
            "Esse conjunto de recursos permite que nossos clientes recebam produtos com qualidade uniforme, rastreabilidade completa e total conformidade regulatória.",
          ]}
        />

        <DifferentialDetailSection
          id="sustentabilidade"
          bg="white"
          icon={Leaf}
          titleLead="Nossa"
          titleHighlight="Sustentabilidade"
          imageSide="right"
          buttonVariant="secondary"
          gradientTo="#0a3320"
          paragraphs={[
            "Na Unistéril, a sustentabilidade faz parte do nosso DNA de governança ambiental, social e corporativa. Entre nossas ações estão a gestão adequada de resíduos, iniciativas para redução do consumo de recursos e o apoio a projetos sociais que fortalecem a comunidade.",
            "Essa postura reforça nossa sustentabilidade e constrói relações de confiança com clientes e com toda a sociedade.",
          ]}
        />

        <CtaFinalSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
