import { ShieldCheck, Lightbulb, Star, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const pillars = [
  { icon: ShieldCheck, label: "Segurança",  desc: "Rigorosos padrões de qualidade" },
  { icon: Lightbulb,   label: "Inovação",   desc: "Tecnologia de ponta no processamento" },
  { icon: Star,        label: "Excelência", desc: "Boas práticas internacionais" },
];

const certifications = [
  { name: "RINA ISO 9001",   sub: "Gestão da Qualidade" },
  { name: "ISO 9001:2015",   sub: "Empresa Certificada" },
];

export function ManifestoSection() {
  return (
    <section className="manifesto-bg bg-dark-green py-24 px-4 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-16">

        {/* ── Bloco Quote ── */}
        <FadeIn className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="font-normal">Nossa </span>
            <span className="text-brand-green">missão</span>
          </h2>
          <div className="relative">
            {/* Aspas decorativas */}
            <span
              aria-hidden="true"
              className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 text-[5rem] md:text-[10rem] leading-none font-serif text-brand-green opacity-15 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="relative text-white text-lg md:text-xl font-light italic leading-relaxed pt-10">
              Por um mundo mais saudável e seguro. Nosso maior compromisso é
              com a saúde das pessoas e do planeta.
            </blockquote>
            <p className="mt-6 text-light-green text-sm tracking-widest uppercase font-semibold">
              — Unistéril
            </p>
          </div>
        </FadeIn>

        {/* ── Separador ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* ── Pilares ── */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {pillars.map(({ icon: Icon, label, desc }, i) => (
              <FadeIn key={label} delay={i * 120}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                    <Icon size={26} className="text-brand-green" />
                  </div>
                  <p className="text-white font-bold text-xs md:text-lg">{label}</p>
                  <p className="text-light-green/70 text-xs md:text-sm hidden sm:block">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* ── Separador ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* ── Certificações ── */}
        <FadeIn className="w-full text-center" delay={100}>
          <p className="text-light-green text-xs font-semibold uppercase tracking-widest mb-8">
            Nossas Certificações
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {certifications.map(({ name, sub }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-white/5 border border-white/15 rounded-2xl px-8 py-5 hover:bg-white/10 hover:border-brand-green/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{name}</p>
                  <p className="text-light-green/70 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
