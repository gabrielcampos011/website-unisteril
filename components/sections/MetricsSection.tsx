"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const metrics = [
  { prefix: "+", num: 30,  suffix: "",    label: "anos de tradição" },
  { prefix: "+", num: 20,  suffix: "",    label: "clínicas e hospitais atendidos" },
  { prefix: "+", num: 85,  suffix: "",    label: "cidades atendidas" },
  { prefix: "+", num: 15,  suffix: "mil", label: "itens processados apenas em 2025" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function MetricCard({
  prefix, num, suffix, label,
}: { prefix: string; num: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(num, 1500, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <p className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
        {prefix}{count}{suffix}
      </p>
      <p className="text-text-muted text-sm md:text-base max-w-[160px] mx-auto">{label}</p>
    </div>
  );
}

export function MetricsSection() {
  return (
    <section className="bg-bg-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="A Unistéril" highlight="em números" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="md">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
}
