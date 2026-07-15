import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const cities = ["Rio de Janeiro", "São Paulo", "Belo Horizonte"];

export function LocationSection() {
  return (
    <section id="onde-estamos" className="manifesto-bg bg-dark-green py-24 px-4 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn direction="left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="font-normal">Onde </span>
            <span className="text-brand-green">Estamos</span>
          </h2>
          <p className="text-light-green text-lg leading-relaxed">
            A Unistéril está localizada em Maripá de Minas, ponto central que
            permite atender de forma rápida e eficiente o eixo Rio – São Paulo –
            Belo Horizonte. Com uma logística planejada e frota própria,
            garantimos entregas ágeis e seguras, respeitando os prazos e
            mantendo a qualidade e a rastreabilidade de todos os materiais
            processados, para que os clientes estejam sempre prontos para
            cuidar da saúde de quem precisa.
          </p>
        </FadeIn>

        <FadeIn direction="right">
          <div className="flex flex-col items-center gap-6 bg-white/5 border border-white/15 rounded-2xl p-8 md:p-12">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
              <MapPin size={26} className="text-brand-green" />
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-xl">Maripá de Minas – MG</p>
              <p className="text-light-green/70 text-sm mt-1">
                Localização estratégica e frota própria
              </p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-light-green text-sm font-medium border border-light-green/40 px-4 py-2 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
