import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function QualityPolicySection() {
  return (
    <section id="politica-de-qualidade" className="bg-white py-20 px-4">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            <span className="font-normal">Política de </span>
            <span className="text-brand-green">qualidade</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            É compromisso do conselho diretor e colaboradores da Unistéril, nas
            suas atividades de prestação de serviços de processamento e
            esterilização de produtos para a saúde por óxido de etileno, a busca
            constante da satisfação de seus clientes, partes interessadas e
            requisitos aplicáveis, bem como da melhoria contínua do seu SGQ.
          </p>
          <Button variant="primary" size="lg" href="/diferenciais">
            Saiba mais
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
