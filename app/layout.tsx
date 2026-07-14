import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unistéril – Qualidade em Processamento e Esterilização",
  description:
    "Serviços de processamento e esterilização para clínicas e hospitais. +85 cidades atendidas, +15mil itens processados em 2025.",
  openGraph: {
    title: "Unistéril – Qualidade em Processamento e Esterilização",
    description:
      "Serviços de processamento e esterilização para clínicas e hospitais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
