interface SectionHeaderProps {
  eyebrow: string;
  highlight: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ eyebrow, highlight, subtitle, light }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-text-dark"}`}>
        <span className="font-normal">{eyebrow} </span>
        <span className="text-brand-green">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? "text-light-green" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
