import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { supplyChain } from "@/config/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { MadagascarMap } from "@/components/MadagascarMap";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export const metadata: Metadata = pageMetadata({
  title: "Herkunft – Vanille aus Madagaskar, transparent und rückverfolgbar",
  description:
    "Von der Bestäubung bis zur Lieferung: die Lieferkette unserer Bourbon-Vanille aus Madagaskar. Nachvollziehbare Chargen und langfristige Produzentenbeziehungen.",
  path: "/herkunft",
  keywords: [
    "Vanille aus Madagaskar kaufen",
    "Madagaskar Vanille Großhandel",
    "Vanille Lieferkette",
  ],
});

/** Platzhalter fuer konkrete Herkunftsdaten. */
const originFacts: { label: string; value: string }[] = [
  { label: "Anbauregion", value: "[Region, z. B. SAVA]" },
  { label: "Partner / Produzenten", value: "[Name der Partner]" },
  { label: "Botanische Art", value: "Vanilla planifolia" },
  { label: "Erntezeitraum", value: "[Zeitraum]" },
  { label: "Zertifizierungen", value: "[sofern vorhanden]" },
];

export default function HerkunftPage() {
  return (
    <>
      <PageHero
        eyebrow="Herkunft"
        title="Von Madagaskar direkt zu professionellen Anwendern"
        description="Unsere Vanille stammt von ausgewählten Produzenten und Partnern in Madagaskar. Wir setzen auf langfristige Beziehungen und nachvollziehbare Chargen."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Herkunft", href: "/herkunft" },
        ]}
      />

      {/* Karte + Herkunftsdaten */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-cocoa/10 bg-cream-200/50 p-8">
            <MadagascarMap className="mx-auto aspect-[2/3] max-w-xs" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Herkunftsdaten"
              title="Nachvollziehbar bis zur Region"
              description="Konkrete Angaben ergänzen wir, sobald sie vorliegen. Bis dahin markieren wir sie klar als Platzhalter."
            />
            <dl className="mt-8 divide-y divide-cocoa/10 overflow-hidden rounded-2xl border border-cocoa/10 bg-white">
              {originFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
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
          <SectionHeading
            eyebrow="Lieferkette"
            title="Neun Schritte von der Blüte bis zu Ihnen"
            centered
            description="Jeder Schritt trägt zum Aroma und zur Nachvollziehbarkeit bei."
            className="mx-auto"
          />
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {supplyChain.map((step, i) => (
              <Reveal as="li" key={step.title} delay={(i % 3) * 80}>
                <div className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white font-serif font-semibold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cocoa-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Produzenten-Fotos (Platzhalter) */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Produzenten"
            title="Menschen hinter der Vanille"
            description="Fotos der Produzenten und der Anbauregion ergänzen wir, sobald sie freigegeben sind. Wir zeigen nur echtes Bildmaterial – keine erfundenen Angaben."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Foto Produzent:in (Platzhalter)",
              "Foto Anbauregion (Platzhalter)",
              "Foto Trocknung (Platzhalter)",
            ].map((label) => (
              <ImagePlaceholder
                key={label}
                alt={label}
                label={label}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-cocoa-muted">
            <Icon name="leaf" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
            Wir verzichten bewusst auf unbelegte Aussagen zu Nachhaltigkeit oder
            Zertifizierung. Solche Angaben ergänzen wir nur mit entsprechendem
            Nachweis.
          </p>
        </div>
      </section>

      <SampleCta />
    </>
  );
}
