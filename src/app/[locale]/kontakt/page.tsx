import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { isLocale, type Locale } from "@/i18n/config";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqJsonLd } from "@/components/StructuredData";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "de";
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    title: dict.meta.kontakt.title,
    description: dict.meta.kontakt.description,
    path: "/kontakt",
  });
}

export default function KontaktPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const t = dict.kontaktPage;
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(dict.whatsapp.message)}`;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbLabel={dict.common.breadcrumbLabel}
        crumbs={[
          { label: dict.nav.items[0].label, href: "/" },
          { label: dict.nav.items[6].label, href: "/kontakt" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Kontaktdaten */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">{site.contact.company}</h2>
            <p className="mt-2 text-sm text-cocoa-muted">{t.b2bNote}</p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="map-pin" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">{t.addressLabel}</p>
                  <p className="text-cocoa-muted">
                    {site.contact.addressLine1}
                    <br />
                    {site.contact.addressLine2}, {site.contact.country}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">{t.emailLabel}</p>
                  <a href={`mailto:${site.contact.email}`} className="text-cocoa-muted hover:text-gold-dark">{site.contact.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">{t.phoneLabel}</p>
                  <a href={`tel:${site.contact.phoneHref}`} className="text-cocoa-muted hover:text-gold-dark">{site.contact.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="clock" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">{t.hoursLabel}</p>
                  <p className="text-cocoa-muted">{site.contact.openingHours}</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
            >
              <Icon name="whatsapp" size={20} />
              {t.whatsappButton}
            </a>
          </div>

          {/* Kontaktformular */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-semibold">{t.formTitle}</h2>
              <p className="mt-2 text-sm text-cocoa-muted">{t.formSubtitle}</p>
              <div className="mt-6">
                <ContactForm t={dict.forms} locale={params.locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} description={t.faqDescription} />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={dict.faq} />
          </div>
        </div>
      </section>

      <FaqJsonLd items={dict.faq} />
    </>
  );
}
