import { Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const certifications = [
  { name: "Certificado RINA", sub: "RINA ISO 9001 – Gestão da Qualidade" },
  { name: "ISO 9001:2015",    sub: "Empresa Certificada" },
];

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Nossas"
            highlight="Certificações"
            subtitle="Qualidade comprovada e reconhecida pelos mais rigorosos padrões nacionais e internacionais."
          />
        </FadeIn>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {certifications.map(({ name, sub }, i) => (
            <FadeIn key={name} delay={i * 120}>
              <div className="flex items-center gap-4 bg-white border border-light-green rounded-2xl px-8 py-5 hover:border-brand-green transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0">
                  <Award size={24} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-text-dark font-bold text-sm">{name}</p>
                  <p className="text-text-muted text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
