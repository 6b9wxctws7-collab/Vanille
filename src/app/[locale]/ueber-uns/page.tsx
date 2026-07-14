import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.ueberUns.title,
    description: dict.meta.ueberUns.description,
    path: "/ueber-uns",
  });
}

export default function UeberUnsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.ueberUnsPage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[5].label, href: "/ueber-uns" },
        ]}
      />

      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="prose-cocoa">
            <SectionHeading eyebrow={t.storyEyebrow} title={t.storyTitle} />
            <div className="mt-6 space-y-4">
              {t.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            src="/images/herkunft/qualitaetskontrolle.jpg"
            alt={t.storyImageAlt}
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section bg-cream-200/50">
        <div className="container-page">
          <SectionHeading eyebrow={t.principlesEyebrow} title={t.principlesTitle} centered className="mx-auto" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.principles.map((p) => (
              <li key={p.title}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={p.icon as never} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SampleCta t={dict.sampleCta} />
    </>
  );
}
