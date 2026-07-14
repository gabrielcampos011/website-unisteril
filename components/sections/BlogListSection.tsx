import { Calendar, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface Article {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

const articles: Article[] = [
  {
    title:
      "Esterilização de dispositivos médicos: como reduzir os gastos de um hospital + 5 dicas!",
    date: "6 de julho de 2026",
    excerpt:
      "Em tempos de crise, hospitais públicos e privados devem se adaptar para sobreviver. A fim de que isso...",
    href: "https://unisteril.com.br/esterilizacao-de-dispositivos-medicos-como-reduzir-os-gastos-de-um-hospital-5-dicas/",
  },
  {
    title: "5 dicas para escolher uma boa empresa de esterilização",
    date: "3 de julho de 2026",
    excerpt:
      "Terceirizar o processamento de materiais é uma boa forma de economizar e garantir a total segurança do processo...",
    href: "https://unisteril.com.br/5-dicas-para-escolher-uma-boa-empresa-de-esterilizacao/",
  },
  {
    title: "Segurança do paciente: uma questão de relevância nacional",
    date: "1 de julho de 2026",
    excerpt:
      "Programa visa à segurança do paciente. Você conhece as diretrizes de nosso país? Atualmente, a disponibilidade de um...",
    href: "https://unisteril.com.br/seguranca-do-paciente-uma-questao-de-relevancia-nacional/",
  },
  {
    title: "Oxetil FGF agora é Unistéril",
    date: "1 de outubro de 2024",
    excerpt:
      "Celebramos com orgulho 25 anos de história e olhamos para o futuro com otimismo, certos de que, com mais conhecimento, tecnologia, motivação e novas estruturas, construiremos um futuro melhor...",
    href: "https://unisteril.com.br/oxetil-fgf-agora-e-unisteril/",
  },
];

export function BlogListSection() {
  return (
    <section id="artigos" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {articles.map(({ title, date, excerpt, href }, i) => (
          <FadeIn key={href} delay={i * 100}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 bg-white border border-light-green rounded-xl p-6 h-full hover:shadow-md transition-shadow"
            >
              <span className="flex items-center gap-2 text-text-muted text-xs">
                <Calendar size={14} />
                {date}
              </span>
              <h3 className="text-text-dark font-bold text-lg leading-snug">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{excerpt}</p>
              <span className="flex items-center gap-1 text-brand-green text-sm font-medium hover:gap-2 transition-all mt-auto pt-2">
                Leia mais <ArrowRight size={14} />
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
