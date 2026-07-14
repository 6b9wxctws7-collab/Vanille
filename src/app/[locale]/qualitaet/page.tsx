import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.qualitaet.title,
    description: dict.meta.qualitaet.description,
    path: "/qualitaet",
  });
}

export default function QualitaetPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.qualitaetPage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[2].label, href: "/qualitaet" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.criteria.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={c.icon as never} size={24} />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={t.transparencyEyebrow} title={t.transparencyTitle} description={t.transparencyDescription} />
          <div className="prose-cocoa space-y-4">
            {t.transparencyParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <SampleCta t={dict.sampleCta} />
    </>
  );
}
