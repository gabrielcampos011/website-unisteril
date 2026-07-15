"use client";

import { useState, useSyncExternalStore } from "react";
import {
  ShieldCheck, Award, ScanLine, Truck, Cpu, Leaf,
  ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  { icon: ShieldCheck, title: "Segurança no processamento",        description: "Rigorosos padrões de qualidade" },
  { icon: Award,       title: "Programa de Excelência Operacional", description: "Boas práticas internacionais de processamento" },
  { icon: ScanLine,    title: "Sistema de Rastreabilidade",         description: "Controle online dos seus materiais" },
  { icon: Truck,       title: "Logística Eficiente",                description: "Entregue em até 72h com frota própria" },
  { icon: Cpu,         title: "Tecnologia e Inovação",              description: "Soluções e sistemas mais modernos do mercado" },
  { icon: Leaf,        title: "Sustentabilidade",                   description: "Governança ambiental, social e corporativa" },
];

const MOBILE_QUERY = "(max-width: 767px)";

function subscribeToMediaQuery(callback: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function useVisibleCount() {
  return useSyncExternalStore(
    subscribeToMediaQuery,
    () => (window.matchMedia(MOBILE_QUERY).matches ? 1 : 3),
    () => 3
  );
}

export function DifferentialsSection() {
  const [rawIndex, setRawIndex] = useState(0);
  const visible = useVisibleCount();
  const maxIndex = items.length - visible;

  // Garante que o índice não ultrapasse o novo maxIndex ao redimensionar
  const index = Math.min(rawIndex, maxIndex);

  const cardWidth = `${100 / visible}%`;

  return (
    <section id="diferenciais" className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Nossos" highlight="diferenciais" />

        <div className="relative px-6">
          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
                transition: "transform 400ms ease",
              }}
            >
              {items.map(({ icon: Icon, title, description }) => (
                <div key={title} style={{ minWidth: cardWidth }} className="px-3">
                  <div className="bg-white border border-light-green rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow h-full">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-green">
                      <Icon size={22} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-dark mb-1">{title}</h3>
                      <p className="text-text-muted text-sm">{description}</p>
                    </div>
                    <button className="flex items-center gap-1 text-brand-green text-sm font-medium hover:gap-2 transition-all mt-auto">
                      Saiba mais <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={() => setRawIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-light-green flex items-center justify-center disabled:opacity-30 hover:border-brand-green transition-colors"
          >
            <ChevronLeft size={20} className="text-brand-green" />
          </button>

          {/* Next */}
          <button
            onClick={() => setRawIndex(Math.min(maxIndex, index + 1))}
            disabled={index === maxIndex}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-light-green flex items-center justify-center disabled:opacity-30 hover:border-brand-green transition-colors"
          >
            <ChevronRight size={20} className="text-brand-green" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setRawIndex(i)}
              aria-label={`Ir para posição ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 h-2.5 bg-brand-green"
                  : "w-2.5 h-2.5 bg-light-green hover:bg-brand-green/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
