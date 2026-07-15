import { Target, Eye, Gem, Check, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

interface IdentityBlock {
  icon: LucideIcon;
  title: string;
  text?: string;
  items?: string[];
}

const blocks: IdentityBlock[] = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer à sociedade excelência nos serviços de processamento e esterilização de materiais médico-hospitalares, garantindo e preservando as vidas envolvidas.",
  },
  {
    icon: Eye,
    title: "Visão",
    items: [
      "Qualidade",
      "Profissionalismo",
      "Pontualidade",
      "Ética",
      "Respeito",
      "Foco no cliente",
    ],
  },
  {
    icon: Gem,
    title: "Valores",
    items: [
      "Aprimorar constantemente tecnologias nas áreas de processamento e esterilização",
      "Estabelecer sempre relacionamento com os clientes, baseado nos valores éticos e preceitos legais",
      "Garantir ao cliente total segurança do serviço prestado",
      "Melhorar continuamente a eficácia do sistema de qualidade",
    ],
  },
];

export function MissionVisionValuesSection() {
  return (
    <section id="missao-visao-valores" className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="Missão, Visão e" highlight="Valores" />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map(({ icon: Icon, title, text, items }, i) => (
            <FadeIn key={title} delay={i * 120} className="h-full">
              <div className="bg-white border border-light-green rounded-2xl p-8 h-full hover:border-brand-green transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-light-green flex items-center justify-center mb-6">
                  <Icon size={26} className="text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-4">{title}</h3>
                {text && (
                  <p className="text-text-muted leading-relaxed">{text}</p>
                )}
                {items && (
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-text-muted leading-relaxed">
                        <Check size={18} className="text-brand-green shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
