import type { Metadata } from "next";
import { site } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

/** Erzeugt konsistente Metadaten inkl. Open Graph & Twitter pro Seite. */
export function pageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.brandName}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_CH",
      url,
      siteName: site.brandName,
      title: fullTitle,
      description,
      images: [
        {
          url: `${site.url}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: site.brandName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}/images/og-default.jpg`],
    },
  };
}

/** Weit gefasste, aber ehrliche Keyword-Basis fuer die Startseite. */
export const baseKeywords = [
  "Bourbon Vanille Schweiz",
  "Vanilleschoten Großhandel Schweiz",
  "Vanille B2B",
  "Vanille aus Madagaskar kaufen",
  "Vanille für Gastronomie",
  "Vanilleschoten für Patisserie",
  "Premium Vanille Schweiz",
  "Vanille Importeur Schweiz",
  "Madagaskar Vanille Großhandel",
  "Vanille für Chocolatiers",
];
