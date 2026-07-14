import { Scissors, Activity, Telescope, Eye, Wind } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const segments = [
  { label: "Cirurgia", icon: Scissors },
  { label: "Hemodinâmica", icon: Activity },
  { label: "Endoscopia", icon: Telescope },
  { label: "Oftalmologia", icon: Eye },
  { label: "Assistência Ventilatória", icon: Wind },
];

export function ProcessingSection() {
  return (
    <section id="processamento" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-8">
            <span className="font-normal">Processa</span>
            <span className="text-brand-green">mento</span>
          </h2>
          <div className="flex flex-col gap-5 text-text-muted text-lg leading-relaxed">
            <p>
              A Unistéril realiza a atividade de processamento em suas instalações
              especificamente construídas, respeitando e cumprindo sempre a legislação
              vigente. A regulamentação do processamento de dispositivos médicos pela
              ANVISA concretizou-se com as publicações pelo Ministério da Saúde da
              resolução RDC 156 de 11/08/2006, das RE 2605 e 2606 de 11/08/2006, e da
              RDC 15 de 15/03/2012.
            </p>
            <p>
              Consideramos o processo de limpeza o núcleo central do processamento,
              razão pela qual sempre investimos no treinamento constante de nossos
              colaboradores. Nossa vasta experiência na realização de tais
              procedimentos e a utilização dos mais modernos equipamentos disponíveis
              no mercado fazem com que a segurança no processamento dos produtos para
              saúde sejam um de nossos grandes diferenciais.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h3 className="text-text-dark font-bold text-xl mt-12 mb-6">
            Veja alguns dos segmentos em que o processamento pode ser aplicado:
          </h3>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {segments.map(({ label, icon: Icon }, i) => (
            <FadeIn key={label} delay={i * 100}>
              <div className="flex flex-col items-center text-center gap-3 bg-bg-light border border-light-green rounded-xl p-5 h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-light-green flex items-center justify-center">
                  <Icon size={22} className="text-brand-green" />
                </div>
                <p className="text-text-dark font-medium text-sm">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/contato">
              Contrate agora!
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
