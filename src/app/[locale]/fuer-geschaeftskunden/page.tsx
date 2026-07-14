import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";
import { BusinessForm } from "@/components/forms/BusinessForm";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.geschaeftskunden.title,
    description: dict.meta.geschaeftskunden.description,
    path: "/fuer-geschaeftskunden",
  });
}

export default function GeschaeftskundenPage({
  params,
  searchParams,
}: {
  params: { locale: Locale };
  searchParams: { produkt?: string };
}) {
  const dict = getDictionary(params.locale);
  const t = dict.geschaeftskundenPage;

  // Vorauswahl des Produkts anhand des Query-Parameters.
  const productIndex = dict.products.findIndex((p) => p.slug === searchParams.produkt);
  const defaultProduct = productIndex >= 0 ? dict.forms.options.product[productIndex] : undefined;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[4].label, href: "/fuer-geschaeftskunden" },
        ]}
      />

      {/* Leistungen */}
      <section className="section">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={s.icon as never} size={22} />
                  </span>
                  <h2 className="mt-4 text-base font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Anfrageformular */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">{t.formEyebrow}</p>
            <h2 className="text-3xl font-semibold">{t.formTitle}</h2>
            <p className="mt-4 leading-relaxed text-cocoa-muted">{t.formText}</p>
            <ul className="mt-8 space-y-3 text-sm text-cocoa-light">
              {t.trustPoints.map((point) => (
                <li key={point.text} className="flex items-center gap-2">
                  <Icon name={point.icon as never} size={18} className="text-gold-dark" />
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <BusinessForm t={dict.forms} locale={params.locale} defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
