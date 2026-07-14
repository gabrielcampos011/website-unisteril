import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface DifferentialDetailSectionProps {
  id: string;
  bg: "light" | "white";
  icon: LucideIcon;
  titleLead: string;
  titleHighlight: string;
  paragraphs: string[];
  imageSide: "left" | "right";
  buttonVariant: "primary" | "secondary";
  gradientTo: string;
}

export function DifferentialDetailSection({
  id,
  bg,
  icon: Icon,
  titleLead,
  titleHighlight,
  paragraphs,
  imageSide,
  buttonVariant,
  gradientTo,
}: DifferentialDetailSectionProps) {
  const imageOrder = imageSide === "left" ? "md:order-1" : "md:order-2";
  const textOrder = imageSide === "left" ? "md:order-2" : "md:order-1";

  return (
    <section
      id={id}
      className={`${bg === "light" ? "bg-bg-light" : "bg-white"} py-20 px-4`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn direction={imageSide === "left" ? "left" : "right"} className={imageOrder}>
          <div
            className="relative flex items-center justify-center min-h-[280px] md:min-h-[420px] rounded-2xl overflow-hidden"
            style={{ backgroundImage: `linear-gradient(to bottom right, var(--color-dark-green), ${gradientTo})` }}
          >
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
            <Icon size={96} className="relative text-brand-green" strokeWidth={1.2} />
          </div>
        </FadeIn>

        <FadeIn direction={imageSide === "left" ? "right" : "left"} className={textOrder}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            {titleLead} <span className="text-brand-green">{titleHighlight}</span>
          </h2>
          <div className="flex flex-col gap-5 text-text-muted text-lg leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button variant={buttonVariant} size="lg" href="/contato">
              Saiba mais
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
