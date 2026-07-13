import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { products, packagingUnits } from "@/config/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";
import { ProductsJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = pageMetadata({
  title: "Produkte – Bourbon-Vanilleschoten für den Grosshandel",
  description:
    "Gourmet-Bourbon-Vanille und Vanille für Extraktion und Verarbeitung aus Madagaskar. Verpackungseinheiten von 100 g bis 1 kg und grössere Mengen auf Anfrage.",
  path: "/produkte",
  keywords: [
    "Vanilleschoten Großhandel Schweiz",
    "Bourbon Vanille kaufen",
    "Vanille für Patisserie",
    "Vanille für Extraktion",
  ],
});

const useCases: Record<string, string[]> = {
  "gourmet-bourbon-vanille": [
    "Cremes, Mousses und Tortenfüllungen",
    "Schokolade, Ganache und Pralinen",
    "Glace und Sorbets",
    "Feingebäck und Desserts",
  ],
  "vanille-extraktion-verarbeitung": [
    "Vanilleextrakte und -essenzen",
    "Sirupe und Liköre",
    "Vanillepulver",
    "Industrielle Weiterverarbeitung",
  ],
};

const qualityClasses: Record<string, string[]> = {
  "gourmet-bourbon-vanille": [
    "Gourmet / Grade A (biegsam, hoher Feuchtegehalt)",
    "Sortierung nach Längenklassen",
  ],
  "vanille-extraktion-verarbeitung": [
    "TK / Extraktqualität (Grade B)",
    "Sortierung nach Aroma statt Optik",
  ],
};

export default function ProduktePage() {
  return (
    <>
      <PageHero
        eyebrow="Produkte"
        title="Bourbon-Vanilleschoten für professionelle Anwender"
        description="Zwei klar unterscheidbare Qualitäten – abgestimmt auf sichtbare Anwendungen und auf die Weiterverarbeitung. Preise nennen wir individuell auf Anfrage."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Produkte", href: "/produkte" },
        ]}
      />

      {/* Variabilitaets-Hinweis */}
      <div className="container-page pt-8">
        <p className="flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/5 p-4 text-sm text-cocoa-light">
          <Icon name="leaf" size={20} className="mt-0.5 shrink-0 text-gold-dark" />
          Verfügbarkeit, Eigenschaften und Preise können je nach Ernte, Charge
          und Bestellmenge variieren.
        </p>
      </div>

      {/* Produkte */}
      <div className="section pt-10">
        <div className="container-page space-y-20">
          {products.map((product, index) => (
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
                <p className="mt-4 text-lg leading-relaxed text-cocoa-muted">
                  {product.longDescription}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      Merkmale
                    </h3>
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
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      Mögliche Qualitätsklassen
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {qualityClasses[product.slug].map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-cocoa-light">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                          {q}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      Einsatzbereiche
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {useCases[product.slug].map((u) => (
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
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                    Verfügbare Verpackungseinheiten
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {packagingUnits.map((unit) => (
                      <li
                        key={unit}
                        className="rounded-full border border-cocoa/15 bg-white px-4 py-1.5 text-sm text-cocoa-light"
                      >
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={`/fuer-geschaeftskunden?produkt=${product.slug}`}>
                    {product.cta}
                  </ButtonLink>
                  <ButtonLink href="/muster-anfragen" variant="secondary">
                    Muster anfragen
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Einblicke: Verarbeitung & Verpackung */}
      <section className="section pt-0">
        <div className="container-page">
          <SectionHeading
            eyebrow="Einblicke"
            title="Von der Schote bis zur Verpackung"
            description="Ausgewählte, gebündelte und sortierte Schoten – sorgfältig getrocknet und für den Versand vorbereitet."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/images/produkte/vanille-buendel.jpg",
                alt: "Gebündelte Vanilleschoten werden von Hand sortiert",
                caption: "Sortierte Bündel",
              },
              {
                src: "/images/produkte/vanille-trocknung.jpg",
                alt: "Vanilleschoten liegen zum Trocknen ausgebreitet",
                caption: "Trocknung",
              },
              {
                src: "/images/produkte/vanille-verpackung.jpg",
                alt: "Vakuumierte Beutel mit Vanilleschoten für den Versand",
                caption: "Versandfertige Gebinde",
              },
            ].map((img) => (
              <figure key={img.src} className="group">
                <ImagePlaceholder
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <figcaption className="mt-2 text-sm text-cocoa-muted">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lagerung & Herkunft */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cocoa/10 bg-white p-8 shadow-card">
            <h2 className="text-xl font-semibold">Lagerhinweise</h2>
            <ul className="mt-4 space-y-2 text-cocoa-muted">
              <li className="flex items-start gap-2">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                Kühl, dunkel und vor direkter Sonneneinstrahlung geschützt lagern.
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                Luftdicht verschlossen aufbewahren, um Aroma und Feuchte zu erhalten.
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                Nicht im Kühlschrank lagern – Kondenswasser vermeiden.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-cocoa/10 bg-white p-8 shadow-card">
            <h2 className="text-xl font-semibold">Herkunft</h2>
            <p className="mt-4 text-cocoa-muted">
              Vanilla planifolia aus ausgewählten Regionen Madagaskars. Jede
              Charge bleibt der Herkunft zugeordnet und wird nach definierten
              Merkmalen geprüft.
            </p>
            <Link
              href="/herkunft"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:underline"
            >
              Mehr zur Lieferkette
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Datenblatt-Downloads (Platzhalter) */}
      <section id="datenblaetter" className="section scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Downloads"
            title="Produktdatenblätter"
            description="Datenblätter und – je nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf Anfrage bereit. Die Download-Felder sind vorbereitet und werden ergänzt, sobald die Dokumente vorliegen."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <li key={product.slug}>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-cocoa/25 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                      <Icon name="download" size={22} />
                    </span>
                    <div>
                      <p className="font-medium text-cocoa">
                        Datenblatt: {product.name}
                      </p>
                      <p className="text-sm text-cocoa-muted">
                        PDF-Platzhalter – auf Anfrage verfügbar
                      </p>
                    </div>
                  </div>
                  <ButtonLink href="/kontakt" variant="secondary" size="sm">
                    Anfragen
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SampleCta />
      <ProductsJsonLd />
    </>
  );
}
