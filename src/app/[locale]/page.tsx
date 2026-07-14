import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OriginTeaser } from "@/components/sections/OriginTeaser";
import { QualityAttributesSection } from "@/components/sections/QualityAttributesSection";
import { SampleCta } from "@/components/sections/SampleCta";
import { ProductsJsonLd } from "@/components/StructuredData";
import { pageMetadata, baseKeywords } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    path: "/",
    keywords: baseKeywords,
  });
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return (
    <>
      <Hero t={dict.hero} />
      <IndustriesSection t={dict.industries} />
      <ProductsSection t={dict.productsSection} products={dict.products} />
      <BenefitsSection t={dict.benefits} />
      <ProcessSection t={dict.process} />
      <OriginTeaser t={dict.origin} />
      <QualityAttributesSection t={dict.qualitySection} />
      <SampleCta t={dict.sampleCta} />
      <ProductsJsonLd products={dict.products} />
    </>
  );
}
