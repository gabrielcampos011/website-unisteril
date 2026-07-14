import {
  Inbox, Search, SprayCan, Waves, Droplets, PackagePlus, QrCode,
  ClipboardCheck, Wind, Hand, ShieldCheck, Fan, SearchCheck, Tag, Truck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const steps = [
  { number: "01", label: "Recepção",                                          icon: Inbox },
  { number: "02", label: "Conferência Inicial",                               icon: Search },
  { number: "03", label: "Lavagem Manual",                                    icon: SprayCan },
  { number: "04", label: "Lavagem Automatizada (ultrassônica)",               icon: Waves },
  { number: "05", label: "Enxague (Água potável e água purificada)",          icon: Droplets },
  { number: "06", label: "Embalagem",                                         icon: PackagePlus },
  { number: "07", label: "Rastreabilidade Individual dos dispositivos médicos", icon: QrCode },
  { number: "08", label: "Controle de Qualidade",                             icon: ClipboardCheck },
  { number: "09", label: "Secagem Automatizada",                              icon: Wind },
  { number: "10", label: "Secagem Manual",                                    icon: Hand },
  { number: "11", label: "Esterilização",                                     icon: ShieldCheck },
  { number: "12", label: "Aeração (mecânica e ambiental)",                    icon: Fan },
  { number: "13", label: "Conferência Final",                                 icon: SearchCheck },
  { number: "14", label: "Etiquetagem (Selo de Qualidade)",                   icon: Tag },
  { number: "15", label: "Expedição",                                        icon: Truck },
];

export function FullMethodSection() {
  return (
    <section className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Nosso"
            highlight="método"
            subtitle="Veja como funcionam os processos da Unistéril"
          />
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {steps.map(({ number, label, icon: Icon }, i) => (
            <FadeIn key={number} delay={i * 60}>
              <div className="flex flex-col items-center text-center gap-3 h-full">
                <div className="relative w-16 h-16 rounded-full bg-brand-green flex items-center justify-center shadow-lg shrink-0">
                  <Icon size={24} className="text-white" />
                  <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-dark-green text-white text-[11px] font-bold flex items-center justify-center border-2 border-bg-light">
                    {number}
                  </span>
                </div>
                <p className="text-text-dark font-medium text-sm leading-snug">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="text-center mt-14">
            <Button variant="primary" size="lg" href="#">
              Conheça a Oxieto
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
