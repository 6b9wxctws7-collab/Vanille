import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";
import { ProductsJsonLd } from "@/components/StructuredData";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.produkte.title,
    description: dict.meta.produkte.description,
    path: "/produkte",
  });
}

export default function ProduktePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.produktePage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[1].label, href: "/produkte" },
        ]}
      />

      {/* Variabilitaets-Hinweis */}
      <div className="container-page pt-8">
        <p className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/5 p-4 text-sm text-cocoa-light">
          <Icon name="leaf" size={20} className="mt-0.5 shrink-0 text-gold-dark" />
          {t.variabilityHint}
        </p>
      </div>

      {/* Produkte */}
      <div className="section pt-10">
        <div className="container-page space-y-20">
          {dict.products.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              className="scroll-mt-24 grid items-start gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <ImagePlaceholder
                src={product.image}
                alt={product.imageAlt}
                className={`aspect-[4/3] w-full ${index % 2 === 1 ? "lg:order-last" : ""}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div>
                <h2 className="text-3xl font-semibold">{product.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-cocoa-muted">{product.longDescription}</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.featuresLabel}</h3>
                    <ul className="mt-3 space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-cocoa-light">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.qualityClassesLabel}</h3>
                    <ul className="mt-3 space-y-2">
                      {product.qualityClasses.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-cocoa-light">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                          {q}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.useCasesLabel}</h3>
                    <ul className="mt-3 space-y-2">
                      {product.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-2 text-sm text-cocoa-light">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verpackungseinheiten */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.packagingLabel}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {dict.packagingUnits.map((unit) => (
                      <li key={unit} className="rounded-full border border-cocoa/15 bg-white px-4 py-1.5 text-sm text-cocoa-light">
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={`/fuer-geschaeftskunden?produkt=${product.slug}`}>{product.cta}</ButtonLink>
                  <ButtonLink href="/muster-anfragen" variant="secondary">{dict.common.requestSample}</ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Einblicke: Verarbeitung & Verpackung */}
      <section className="section pt-0">
        <div className="container-page">
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} description={t.gallery.description} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.gallery.items.map((img) => (
              <figure key={img.src} className="group">
                <ImagePlaceholder src={img.src} alt={img.alt} className="aspect-[4/3] w-full" sizes="(max-width: 640px) 100vw, 33vw" />
                <figcaption className="mt-2 text-sm text-cocoa-muted">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lagerung & Herkunft */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cocoa/10 bg-white p-8 shadow-card">
            <h2 className="text-xl font-semibold">{t.storageTitle}</h2>
            <ul className="mt-4 space-y-2 text-cocoa-muted">
              {t.storageItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-cocoa/10 bg-white p-8 shadow-card">
            <h2 className="text-xl font-semibold">{t.originTitle}</h2>
            <p className="mt-4 text-cocoa-muted">{t.originText}</p>
            <LocaleLink href="/herkunft" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:underline">
              {t.originLink}
              <Icon name="arrow-right" size={16} />
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* Datenblatt-Downloads (Platzhalter) */}
      <section id="datenblaetter" className="section scroll-mt-24">
        <div className="container-page">
          <SectionHeading eyebrow={t.downloadsEyebrow} title={t.downloadsTitle} description={t.downloadsDescription} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {dict.products.map((product) => (
              <li key={product.slug}>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-cocoa/25 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                      <Icon name="download" size={22} />
                    </span>
                    <div>
                      <p className="font-medium text-cocoa">{t.dataSheetPrefix} {product.name}</p>
                      <p className="text-sm text-cocoa-muted">{t.dataSheetSub}</p>
                    </div>
                  </div>
                  <ButtonLink href="/kontakt" variant="secondary" size="sm">{t.request}</ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SampleCta t={dict.sampleCta} />
      <ProductsJsonLd products={dict.products} />
    </>
  );
}
