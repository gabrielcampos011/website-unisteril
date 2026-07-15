import { HeartPulse } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const highlights = [
  { value: "Desde 2000", label: "no mercado de saúde" },
  { value: "+650", label: "clientes em todo o país" },
];

export function AboutIntroSection() {
  return (
    <section id="historia" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn direction="left" className="md:order-1">
          <div
            className="relative flex flex-col items-center justify-center gap-8 min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden p-8"
            style={{ backgroundImage: "linear-gradient(to bottom right, var(--color-dark-green), #0d4a2c)" }}
          >
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
            <HeartPulse size={96} className="relative text-brand-green" strokeWidth={1.2} />
            <div className="relative flex flex-col sm:flex-row gap-4">
              {highlights.map(({ value, label }) => (
                <div
                  key={value}
                  className="bg-white/5 border border-white/15 rounded-2xl px-6 py-4 text-center"
                >
                  <p className="text-brand-green font-bold text-xl">{value}</p>
                  <p className="text-light-green/70 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" className="md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            <span className="font-normal">Nossa </span>
            <span className="text-brand-green">história</span>
          </h2>
          <div className="flex flex-col gap-5 text-text-muted text-lg leading-relaxed">
            <p>
              A Unistéril dedica-se exclusivamente à prestação de{" "}
              <strong className="text-text-dark">
                serviços de processamento e esterilização de dispositivos médicos
              </strong>{" "}
              por meio de gás óxido de etileno e vapor saturado. Desde outubro de
              2000, quando ainda atuava sob o nome Oxetil FGF, a empresa se mantém
              na vanguarda do setor, evoluindo constantemente para atender às
              necessidades do mercado de saúde.
            </p>
            <p>
              Hoje fazemos parte de um grupo de empresas que inclui a Oxieto,
              referência em esterilização industrial. Essa integração amplia nossa
              expertise e fortalece nossa capacidade de atendimento, com um
              know-how amplamente reconhecido.
            </p>
            <p>
              Nosso time é composto por{" "}
              <strong className="text-text-dark">profissionais altamente qualificados</strong>,
              entre eles farmacêuticos, bioquímicos, enfermeiros, engenheiros,
              biólogos e outros especialistas com{" "}
              <strong className="text-text-dark">sólida experiência na área da saúde</strong>.
              Todos passam por treinamentos contínuos para garantir rigor técnico,
              segurança e eficiência em cada etapa do processo.
            </p>
            <p>
              Estrategicamente localizada em Maripá de Minas,{" "}
              <strong className="text-text-dark">
                a Unistéril atende mais de 650 clientes em todo o país
              </strong>
              , incluindo hospitais e clínicas de referência, públicos e privados.
              Garantimos que todos os materiais processados estejam seguros,
              rastreáveis e prontos para uso, sempre em conformidade com os mais
              altos padrões nacionais e internacionais.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
