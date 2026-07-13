import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { baseKeywords } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { OrganizationJsonLd } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandName} – ${site.tagline}`,
    template: `%s | ${site.brandName}`,
  },
  description: site.description,
  keywords: baseKeywords,
  applicationName: site.brandName,
  authors: [{ name: site.brandName }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: site.url,
    siteName: site.brandName,
    title: `${site.brandName} – ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main" className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        {/* Abstand fuer die mobile Sticky-CTA */}
        <div className="h-16 sm:hidden" aria-hidden />
        <WhatsAppButton />
        <MobileStickyCta />
        <CookieBanner />
        <OrganizationJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
