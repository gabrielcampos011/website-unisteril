import { Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const channels = [
  { icon: Mail, label: "contato@unisteril.com.br", href: "mailto:contato@unisteril.com.br" },
  { icon: Phone, label: "32 3263-1319", href: "tel:+553232631319" },
  { icon: Phone, label: "32 3263-1319", href: "tel:+553232631319" },
];

export function ContactInfoSection() {
  return (
    <section className="bg-bg-light py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="bg-white border border-light-green rounded-2xl p-8 md:p-10 flex flex-col items-center text-center gap-4">
            <span className="text-2xl font-bold text-dark-green">Unistéril</span>
            <p className="text-text-muted text-lg max-w-md">
              Entre em contato com Unistéril e conheça mais sobre os nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {channels.map(({ icon: Icon, label, href }, i) => (
                <a
                  key={`${label}-${i}`}
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-light-green text-text-dark text-sm font-medium hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  <Icon size={16} className="text-brand-green" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
