import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { faqItems } from "@/config/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt – B2B-Anfragen für Bourbon-Vanille",
  description:
    "Kontaktieren Sie uns per Formular, E-Mail, Telefon oder WhatsApp. Wir beraten Geschäftskunden zu Mustern, Mengen und individuellen Angeboten.",
  path: "/kontakt",
  keywords: ["Vanille B2B Kontakt", "Vanille Importeur Schweiz"],
});

const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir sind persönlich für Sie da"
        description="Ob erste Frage, Musteranfrage oder konkretes Angebot – melden Sie sich auf dem Weg, der Ihnen am liebsten ist."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Kontaktdaten */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">{site.contact.company}</h2>
            <p className="mt-2 text-sm text-cocoa-muted">
              Hinweis: Unser Angebot richtet sich an Geschäftskunden (B2B).
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="map-pin" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">Adresse</p>
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
                  <p className="font-medium text-cocoa">E-Mail</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-cocoa-muted hover:text-gold-dark"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">Telefon</p>
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    className="text-cocoa-muted hover:text-gold-dark"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name="clock" size={20} />
                </span>
                <div>
                  <p className="font-medium text-cocoa">Geschäftszeiten</p>
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
              Über WhatsApp schreiben
            </a>
          </div>

          {/* Kontaktformular */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-semibold">Schreiben Sie uns</h2>
              <p className="mt-2 text-sm text-cocoa-muted">
                Wir melden uns in der Regel innerhalb eines Werktags.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Häufige Fragen"
              description="Antworten auf die wichtigsten Fragen rund um Muster, Mengen, Herkunft und Lieferung."
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <FaqJsonLd items={faqItems} />
    </>
  );
}
