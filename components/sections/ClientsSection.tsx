import { Hospital } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const clients = [
  "Santa Casa",
  "Hospital Balbino",
  "Casa de Saúde",
  "Monte Sinai",
];

export function ClientsSection() {
  return (
    <section id="clientes" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="Nossos" highlight="clientes" />
          <p className="text-text-muted text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Na Unistéril, temos orgulho de sermos parceiros de grandes hospitais
            e clínicas de referência em todo o país, contribuindo para que
            ofereçam atendimento seguro e de alta qualidade aos pacientes. A
            confiança que nos é depositada reflete o profissionalismo, a
            dedicação e o cuidado extremo com cada produto de saúde que chega
            até nós, garantindo excelência em todos os processos. Conheça
            algumas marcas que crescem ao nosso lado:
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <FadeIn key={client} delay={i * 120}>
              <div className="flex flex-col items-center gap-3 bg-white border border-light-green rounded-2xl px-4 py-8 hover:border-brand-green transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center">
                  <Hospital size={24} className="text-brand-green" />
                </div>
                <p className="text-text-dark font-bold text-sm md:text-base text-center">
                  {client}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
