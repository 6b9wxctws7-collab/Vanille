import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MadagascarMap } from "@/components/MadagascarMap";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.herkunft.title,
    description: dict.meta.herkunft.description,
    path: "/herkunft",
  });
}

export default function HerkunftPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.herkunftPage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[3].label, href: "/herkunft" },
        ]}
      />

      {/* Marken-Band mit Logo */}
      <section className="border-b border-cocoa/10 bg-cream">
        <div className="container-page flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <Logo variant="full" height={110} className="h-24 w-auto sm:h-28" />
          <p className="max-w-md text-cocoa-muted">{t.brandBandText}</p>
        </div>
      </section>

      {/* Feature-Bild Anbauregion */}
      <section className="section pb-0">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/herkunft/anbau.jpg"
              alt={t.featureAlt}
              width={1600}
              height={1065}
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold-light">{t.featureEyebrow}</p>
              <p className="mt-1 max-w-lg font-serif text-2xl text-cream sm:text-3xl">{t.featureTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Karte + Herkunftsdaten */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-cocoa/10 bg-cream-200/50 p-8">
            <MadagascarMap className="mx-auto aspect-[2/3] max-w-xs" regionLabel={t.mapRegion} />
          </div>
          <div>
            <SectionHeading eyebrow={t.factsEyebrow} title={t.factsTitle} description={t.factsDescription} />
            <dl className="mt-8 divide-y divide-cocoa/10 overflow-hidden rounded-2xl border border-cocoa/10 bg-white">
              {t.facts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm font-medium text-cocoa">{fact.label}</dt>
                  <dd className="text-sm text-cocoa-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Lieferkette */}
      <section className="section bg-cream-200/50">
        <div className="container-page">
          <SectionHeading eyebrow={t.supplyEyebrow} title={t.supplyTitle} centered description={t.supplyDescription} className="mx-auto" />
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.supplyChain.map((step, i) => (
              <Reveal as="li" key={step.title} delay={(i % 3) * 80}>
                <div className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white font-serif font-semibold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cocoa-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Produzenten-Galerie */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow={t.producersEyebrow} title={t.producersTitle} description={t.producersDescription} />
          <div className="mt-10 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {t.gallery.map((img) => (
              <figure key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-cocoa/10 bg-white shadow-card">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-4 py-3 text-sm text-cocoa-muted">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm text-cocoa-muted">
            <Icon name="leaf" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
            {t.note}
          </p>
        </div>
      </section>

      <SampleCta t={dict.sampleCta} />
    </>
  );
}
