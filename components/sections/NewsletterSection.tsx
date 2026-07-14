import { FadeIn } from "@/components/ui/FadeIn";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

interface NewsletterSectionProps {
  bg?: "light" | "white";
}

export function NewsletterSection({ bg = "light" }: NewsletterSectionProps) {
  return (
    <section className={`${bg === "light" ? "bg-bg-light" : "bg-white"} py-20 px-4`}>
      <FadeIn>
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-snug">
            Assine nossa <span className="text-brand-green">newsletter</span>
          </h2>
          <p className="text-text-muted text-lg">
            Receba notícias e novidades em seu email.
          </p>
          <div className="w-full max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
