import { Mail, Phone, Globe } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const links = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold">Unistéril</p>
              <p className="text-light-green text-sm mt-1">
                Qualidade em Processamento e Esterilização
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              {["Instagram", "Facebook", "LinkedIn"].map((net) => (
                <a
                  key={net}
                  href="#"
                  aria-label={net}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  <Globe size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <p className="font-semibold mb-4">Links</p>
            <ul className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-light-green text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <p className="font-semibold mb-4">Contato</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-light-green text-sm">
                <Mail size={16} className="shrink-0" />
                contato@unisteril.com.br
              </li>
              <li className="flex items-center gap-2 text-light-green text-sm">
                <Phone size={16} className="shrink-0" />
                32 3263-1319
              </li>
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <p className="font-semibold mb-2">Newsletter</p>
            <p className="text-light-green text-sm mb-4">
              Assine nossa newsletter e receba notícias e novidades em seu email
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-light-green">
          <span>© Unistéril – Todos os direitos reservados</span>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
