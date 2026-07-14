import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-green overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-green blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-green blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-light-green text-lg md:text-xl font-normal mb-3 tracking-wide animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          Qualidade em
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          processamento e<br />
          <span className="text-brand-green">esterilização</span>
        </h1>
        <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Button variant="white" size="lg">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}
