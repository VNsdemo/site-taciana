import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.taciananaia.com.br/";
const siteName = "Taciana S. Vieira Naia Advocacia e Assessoria Jurídica";
const pageTitle = "Taciana S. Vieira Naia | Advogada em Varginha/MG";
const pageDescription =
  "Advocacia e assessoria jurídica em Varginha/MG. Taciana S. Vieira Naia atua em contratos, cobranças, sucessões, direito bancário e previdenciário.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/logo-taciana.jpeg",
        width: 1024,
        height: 1024,
        alt: "Logo de Taciana S. Vieira Naia Advocacia e Assessoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/logo-taciana.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/taciana-foto.jpg`,
  logo: `${siteUrl}/logo-taciana.jpeg`,
  telephone: "+5535999522272",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Cel. José Alves, 361 - Sala 304",
    addressLocality: "Varginha",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Varginha",
  },
  founder: {
    "@type": "Person",
    name: "Taciana S. Vieira Naia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
