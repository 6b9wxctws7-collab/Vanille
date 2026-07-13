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

export const metadata: Metadata = pageMetadata({
  title: "Premium Bourbon-Vanille aus Madagaskar für Profis",
  description:
    "B2B-Lieferant für Bourbon-Vanilleschoten aus Madagaskar. Wir beliefern Patisserie, Gastronomie, Chocolatiers und Manufakturen in der Schweiz – mit Mustern und individuellen Angeboten.",
  path: "/",
  keywords: baseKeywords,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesSection />
      <ProductsSection />
      <BenefitsSection />
      <ProcessSection />
      <OriginTeaser />
      <QualityAttributesSection />
      <SampleCta />
      <ProductsJsonLd />
    </>
  );
}
