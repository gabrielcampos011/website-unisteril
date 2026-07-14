import { Thermometer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function SteamSection() {
  return (
    <section id="vapor-saturado" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn direction="left" className="md:order-2">
          <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[420px] rounded-2xl bg-gradient-to-br from-dark-green to-[#0a3320] overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
            <Thermometer size={96} className="relative text-brand-green" strokeWidth={1.2} />
          </div>
        </FadeIn>

        <FadeIn direction="right" className="md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Esterilização a <span className="text-brand-green">vapor saturado</span>
          </h2>
          <div className="flex flex-col gap-5 text-text-muted text-lg leading-relaxed">
            <p>
              Esse processo eficiente e seguro é feito por meio da circulação de
              vapor por convecção, promovendo a correta esterilidade dos produtos.
              Também conhecida como esterilização por autoclave, é um método eficaz
              que utiliza vapor de água sob pressão para destruir microrganismos,
              incluindo esporos bacterianos, que são particularmente resistentes.
            </p>
            <p>
              Esse método é altamente eficaz contra todos os tipos de
              microrganismos, na medida em que o vapor saturado penetra bem nos
              materiais, garantindo uma esterilização completa. A esterilização por
              vapor saturado é considerado um método seguro e confiável para uma
              ampla gama de materiais e instrumentos médicos, além de apresentar um
              bom custo-benefício em comparação com outros métodos de esterilização.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/contato">
              Contrate agora!
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
