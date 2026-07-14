import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CtaFinalSection() {
  return (
    <section id="contato" className="bg-bg-light py-20 px-4">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green leading-snug">
            Fale aqui com um de nossos{" "}
            <span className="text-brand-green">especialistas</span>
          </h2>
          <p className="text-text-muted text-lg max-w-md">
            Entre em contato e descubra como a Unistéril pode cuidar da
            esterilização dos seus materiais com segurança e eficiência.
          </p>
          <Button variant="primary" size="lg" className="flex items-center gap-2">
            <MessageCircle size={20} />
            Clique aqui
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
