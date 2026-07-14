"use client";

import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Seu email"
        className="px-4 py-2 rounded text-text-dark text-sm outline-none focus:ring-2 focus:ring-brand-green"
      />
      <Button variant="primary" size="sm" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
