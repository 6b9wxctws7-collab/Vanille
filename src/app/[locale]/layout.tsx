import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { site } from "@/config/site";
import { baseKeywords } from "@/lib/seo";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { OrganizationJsonLd } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${site.brandName}`,
    },
    description: dict.meta.siteDescription,
    keywords: baseKeywords,
    applicationName: site.brandName,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`])),
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_CH" : "de_CH",
      url: `${site.url}/${locale}`,
      siteName: site.brandName,
      title: dict.meta.defaultTitle,
      description: dict.meta.siteDescription,
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    formatDetection: { telephone: true, address: true, email: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#faf6ef",
  width: "device-width",
  initialScale: 1,
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <Navbar nav={dict.nav} />
        <main id="main" className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer dict={dict} />
        <div className="h-16 sm:hidden" aria-hidden />
        <WhatsAppButton aria={dict.whatsapp.aria} message={dict.whatsapp.message} />
        <MobileStickyCta call={dict.mobileCta.call} sample={dict.mobileCta.sample} />
        <CookieBanner t={dict.cookie} />
        <OrganizationJsonLd description={dict.meta.siteDescription} />
        <Analytics />
      </body>
    </html>
  );
}
