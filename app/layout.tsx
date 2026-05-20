import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taciana Advocacia e Assessoria Jurídica",
  description: "Atendimento jurídico com clareza, estratégia e confiança.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
