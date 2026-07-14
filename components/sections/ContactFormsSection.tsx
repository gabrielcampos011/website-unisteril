"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO",
];

const areasDeAtuacao = [
  "Central de Material e Esterilização",
  "Clínica",
  "Compras hospitalares",
  "Hospital rede pública",
  "Hospital rede privada",
  "Gestão",
  "Outro",
];

const fieldClasses =
  "w-full px-4 py-3 rounded-lg border border-light-green text-text-dark text-sm outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-colors";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-text-dark">
      {label}
      {children}
    </label>
  );
}

type Tab = "contato" | "orcamento";

export function ContactFormsSection() {
  const [tab, setTab] = useState<Tab>("contato");

  return (
    <section id="formularios" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setTab("contato")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                tab === "contato"
                  ? "bg-brand-green text-white"
                  : "bg-bg-light text-text-dark hover:bg-light-green"
              }`}
            >
              Entre em contato
            </button>
            <button
              onClick={() => setTab("orcamento")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                tab === "orcamento"
                  ? "bg-brand-green text-white"
                  : "bg-bg-light text-text-dark hover:bg-light-green"
              }`}
            >
              Orçamento
            </button>
          </div>
        </FadeIn>

        <FadeIn key={tab}>
          {tab === "contato" ? (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid sm:grid-cols-2 gap-5"
            >
              <Field label="Nome">
                <input type="text" className={fieldClasses} placeholder="Seu nome" />
              </Field>
              <Field label="E-mail">
                <input type="email" className={fieldClasses} placeholder="seu@email.com" />
              </Field>
              <Field label="Telefone">
                <input type="tel" className={fieldClasses} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="Estado">
                <select className={fieldClasses} defaultValue="">
                  <option value="" disabled>Selecione</option>
                  {estados.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </Field>
              <Field label="Cidade">
                <input type="text" className={fieldClasses} placeholder="Sua cidade" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Mensagem">
                  <textarea
                    className={`${fieldClasses} min-h-[140px] resize-none`}
                    placeholder="Como podemos ajudar?"
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                  Enviar
                </Button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid sm:grid-cols-2 gap-5"
            >
              <Field label="Nome">
                <input type="text" className={fieldClasses} placeholder="Seu nome" />
              </Field>
              <Field label="E-mail">
                <input type="email" className={fieldClasses} placeholder="seu@email.com" />
              </Field>
              <Field label="Telefone">
                <input type="tel" className={fieldClasses} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="Estado">
                <select className={fieldClasses} defaultValue="">
                  <option value="" disabled>Selecione</option>
                  {estados.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </Field>
              <Field label="Cidade">
                <input type="text" className={fieldClasses} placeholder="Sua cidade" />
              </Field>
              <Field label="Nome da Empresa">
                <input type="text" className={fieldClasses} placeholder="Sua empresa" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Área de Atuação">
                  <select className={fieldClasses} defaultValue="">
                    <option value="" disabled>Selecione</option>
                    {areasDeAtuacao.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                  Enviar
                </Button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
