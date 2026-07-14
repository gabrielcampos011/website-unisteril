import { Wind } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function EthyleneOxideSection() {
  return (
    <section id="oxido-de-etileno" className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn direction="left">
          <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[420px] rounded-2xl bg-gradient-to-br from-dark-green to-[#0d4a2c] overflow-hidden">
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
            <Wind size={96} className="relative text-brand-green" strokeWidth={1.2} />
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Esterilização por{" "}
            <span className="text-brand-green">óxido de etileno</span>
          </h2>
          <div className="flex flex-col gap-5 text-text-muted text-lg leading-relaxed">
            <p>
              A esterilização com óxido de etileno é uma metodologia consagrada
              mundialmente. Preserva os materiais termossensíveis e atua de forma
              segura, com eficiência e qualidade comprovadas.
            </p>
            <p>
              Possui regulamentação própria (Portaria Interministerial nº 482, de 16
              de abril de 1999), que determina a sua utilização com segurança e
              critérios preestabelecidos.
            </p>
            <p>
              Todos os ciclos são controlados com indicadores químicos, biológicos,
              integradores, análise cromatográfica, testes de esterilidade e registro
              impresso de todos os parâmetros do ciclo de esterilização.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="secondary" size="lg" href="/contato">
              Saiba mais
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
