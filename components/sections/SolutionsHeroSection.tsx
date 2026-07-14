export function SolutionsHeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-dark-green overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-green blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-green blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-light-green text-lg md:text-xl font-normal mb-3 tracking-wide animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          Conheça
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Nossas <span className="text-brand-green">soluções</span>
        </h1>
      </div>
    </section>
  );
}
