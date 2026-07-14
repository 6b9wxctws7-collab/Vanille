import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.impressum.title,
    description: dict.meta.impressum.description,
    path: "/impressum",
    index: false,
  });
}

export default function ImpressumPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.legal.impressum;

  return (
    <>
      <PageHero
        eyebrow={dict.legal.eyebrow}
        title={dict.meta.impressum.title}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.meta.impressum.title, href: "/impressum" },
        ]}
      />
      <LegalContent disclaimer={dict.legal.disclaimer}>
        <div>
          <h2>{t.companyHeading}</h2>
          <p>
            {site.contact.company}
            <br />
            {site.contact.addressLine1}
            <br />
            {site.contact.addressLine2}
            <br />
            {site.contact.country}
          </p>
        </div>
        <div>
          <h2>{t.contactHeading}</h2>
          <p>
            {t.contactLabelEmail} {site.contact.email}
            <br />
            {t.contactLabelPhone} {site.contact.phone}
          </p>
        </div>
        <div>
          <h2>{t.repHeading}</h2>
          <p>{site.legal.managingDirector}</p>
        </div>
        <div>
          <h2>{t.registerHeading}</h2>
          <p>
            {t.registerLabel} {site.legal.register}
            <br />
            {t.vatLabel} {site.legal.vatId}
          </p>
        </div>
        <div>
          <h2>{t.liabilityHeading}</h2>
          <p>{t.liabilityText}</p>
        </div>
        <div>
          <h2>{t.copyrightHeading}</h2>
          <p>{t.copyrightText}</p>
        </div>
      </LegalContent>
    </>
  );
}
