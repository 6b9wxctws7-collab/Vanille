import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.agb.title,
    description: dict.meta.agb.description,
    path: "/agb",
    index: false,
  });
}

export default function AgbPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <PageHero
        eyebrow={dict.legal.eyebrow}
        title={dict.meta.agb.title}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.meta.agb.title, href: "/agb" },
        ]}
      />
      <LegalContent disclaimer={dict.legal.disclaimer}>
        {dict.legal.agb.sections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </div>
        ))}
      </LegalContent>
    </>
  );
}
