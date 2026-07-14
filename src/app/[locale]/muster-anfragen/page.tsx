import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/Icon";
import { SampleForm } from "@/components/forms/SampleForm";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.muster.title,
    description: dict.meta.muster.description,
    path: "/muster-anfragen",
  });
}

export default function MusterAnfragenPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.musterPage;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.meta.muster.title, href: "/muster-anfragen" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Ablauf */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">{t.stepsEyebrow}</p>
            <h2 className="text-2xl font-semibold">{t.stepsTitle}</h2>
            <ol className="mt-8 space-y-6">
              {dict.process.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 font-serif font-semibold text-gold-dark">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-cocoa">{step.title}</h3>
                    <p className="mt-1 text-sm text-cocoa-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-gold/25 bg-gold/5 p-5 text-sm text-cocoa-light">
              <p className="flex items-start gap-2">
                <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                {t.note}
              </p>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <SampleForm t={dict.forms} locale={params.locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
