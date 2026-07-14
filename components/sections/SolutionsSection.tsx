import { FlaskConical, Wind, Thermometer, Factory, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const solutions = [
  { title: "Processamento",                      icon: FlaskConical, bg: "from-dark-green to-[#0d4a2c]", href: "/solucoes#processamento" },
  { title: "Esterilização por Óxido de Etileno", icon: Wind,         bg: "from-[#0d4a2c] to-dark-green", href: "/solucoes#oxido-de-etileno" },
  { title: "Esterilização a Vapor",              icon: Thermometer,  bg: "from-dark-green to-[#0a3320]", href: "/solucoes#vapor-saturado" },
  { title: "Esterilização Industrial (OXIETO)",  icon: Factory,      bg: "from-[#0a3320] to-dark-green", href: "/solucoes" },
];

export function SolutionsSection() {
  return (
    <section id="soluções" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Nossas"
            highlight="soluções"
            subtitle="Serviços de alta qualidade adequados aos setores assistenciais à saúde."
          />
        </FadeIn>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {solutions.map(({ title, icon: Icon, bg, href }, i) => (
          <FadeIn key={title} delay={i * 120}>
            <Link
              href={href}
              className={`relative flex flex-col justify-end p-4 md:p-8 min-h-[220px] md:min-h-[480px] h-full bg-gradient-to-br ${bg} group overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 will-change-transform`}
            >
              <div className="absolute top-6 left-6 text-brand-green">
                <Icon size={36} />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-sm md:text-xl mb-2 md:mb-3 leading-snug">{title}</h3>
                <span className="flex items-center gap-2 text-light-green text-sm font-medium border border-light-green/40 px-4 py-2 rounded hover:bg-white/10 transition-all w-fit">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
