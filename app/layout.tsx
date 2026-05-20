import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taciana Advocacia e Assessoria Jurídica',
  description:
    'Atendimento jurídico presencial em Varginha/MG e online. Atuação em execuções, cobranças, contratos, sucessões, direito bancário e previdenciário.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
