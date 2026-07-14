import { PackageCheck, ClipboardList, Droplets, Waves } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  { number: "01", label: "Recepção",                         icon: PackageCheck },
  { number: "02", label: "Conferência Inicial",              icon: ClipboardList },
  { number: "03", label: "Lavagem Manual",                   icon: Droplets },
  { number: "04", label: "Lavagem Automatizada (ultrassônica)", icon: Waves },
];

export function MethodSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Nosso"
            highlight="método"
            subtitle="Veja como funcionam os processos da Unistéril"
          />
        </FadeIn>

        {/* Timeline desktop */}
        <div className="hidden md:flex items-start gap-0 relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-light-green z-0" />
          {steps.map(({ number, label, icon: Icon }, i) => (
            <FadeIn key={number} delay={i * 150} className="flex-1">
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center shadow-lg mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-brand-green font-bold text-2xl">{number}</span>
                <p className="text-text-dark font-medium text-center mt-2 text-sm max-w-[120px]">
                  {label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline mobile */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map(({ number, label, icon: Icon }, i) => (
            <FadeIn key={number} delay={i * 100}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-brand-green font-bold text-lg block">{number}</span>
                  <p className="text-text-dark font-medium text-sm">{label}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
