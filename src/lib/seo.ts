import type { Metadata } from "next";
import { site } from "@/config/site";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

type PageMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Pfad OHNE Sprachpräfix, z. B. "/produkte". */
  path?: string;
  keywords?: string[];
  index?: boolean;
};

const ogLocale: Record<Locale, string> = { de: "de_CH", fr: "fr_CH" };

/** Erzeugt konsistente, sprachbewusste Metadaten inkl. hreflang-Alternativen. */
export function pageMetadata({
  locale,
  title,
  description,
  path = "/",
  keywords,
  index = true,
}: PageMetaInput): Metadata {
  const clean = path === "/" ? "" : path;
  const url = `${site.url}/${locale}${clean}`;
  const fullTitle = `${title} | ${site.brandName}`;

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${site.url}/${loc}${clean}`;
  }
  languages["x-default"] = `${site.url}/${defaultLocale}${clean}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
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

/** Weit gefasste, aber ehrliche Keyword-Basis. */
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
