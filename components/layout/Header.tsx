"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-dark-green">Unistéril</span>
          <span className="text-[10px] text-text-muted tracking-wide hidden md:block">
            Qualidade em Processamento e Esterilização
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-text-dark text-sm font-medium hover:text-brand-green transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="hidden md:inline-flex">
            Área do Cliente
          </Button>
          <button
            className="md:hidden text-dark-green"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 flex flex-col gap-4">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-text-dark font-medium hover:text-brand-green transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button variant="primary" size="sm" className="mt-2 w-full">
            Área do Cliente
          </Button>
        </div>
      )}
    </header>
  );
}
