import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CtaInterruptSection() {
  return (
    <section className="bg-dark-green py-20 px-4">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Fale aqui com um de nossos{" "}
            <span className="text-brand-green">especialistas</span>
          </h2>
          <Button variant="white" size="lg" className="flex items-center gap-2">
            <Phone size={18} />
            Clique aqui
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
