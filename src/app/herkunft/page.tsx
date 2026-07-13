import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { supplyChain } from "@/config/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MadagascarMap } from "@/components/MadagascarMap";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

/** Produzenten-Galerie: echtes Bildmaterial aus Madagaskar. */
const galleryImages = [
  {
    src: "/images/herkunft/pflege.jpg",
    alt: "Produzent pflegt die Vanillepflanzen an den Trägerbäumen",
    caption: "Pflege der Pflanzen",
  },
  {
    src: "/images/herkunft/bestaeubung.jpg",
    alt: "Produzent arbeitet an den Vanilleranken in der Plantage",
    caption: "Handarbeit in der Plantage",
  },
  {
    src: "/images/herkunft/gruene-schote.jpg",
    alt: "Hand hält eine reifende grüne Vanilleschote an der Ranke",
    caption: "Reifende grüne Schoten",
  },
  {
    src: "/images/herkunft/qualitaetskontrolle.jpg",
    alt: "Produzenten bündeln und prüfen getrocknete Vanilleschoten",
    caption: "Bündeln und Prüfen",
  },
  {
    src: "/images/herkunft/sortierung.jpg",
    alt: "Getrocknete Vanilleschoten werden auf Tischen sortiert",
    caption: "Sortierung nach der Trocknung",
  },
  {
    src: "/images/herkunft/transport.jpg",
    alt: "Ein Mann transportiert Säcke aus der Anbauregion",
    caption: "Transport aus der Region",
  },
];

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

      {/* Marken-Band mit Logo */}
      <section className="border-b border-cocoa/10 bg-cream">
        <div className="container-page flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <Logo variant="full" height={110} className="h-24 w-auto sm:h-28" />
          <p className="max-w-md text-cocoa-muted">
            Vanora steht für Bourbon-Vanille, die ihren Weg von den Plantagen
            Madagaskars bis in Ihren Betrieb nachvollziehbar zurücklegt.
          </p>
        </div>
      </section>

      {/* Feature-Bild Anbauregion */}
      <section className="section pb-0">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/herkunft/anbau.jpg"
              alt="Vanilleplantage mit Trägerbäumen und Ranken in Madagaskar"
              width={1600}
              height={1065}
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold-light">
                Anbauregion Madagaskar
              </p>
              <p className="mt-1 max-w-lg font-serif text-2xl text-cream sm:text-3xl">
                Vanille wächst hier an schattigen Trägerbäumen – gepflegt in
                Handarbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            description="Echte Einblicke aus der Anbauregion – von der Pflege der Pflanzen über die Ernte bis zur Sortierung. Wir zeigen ausschließlich echtes Bildmaterial."
          />
          <div className="mt-10 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {galleryImages.map((img) => (
              <figure
                key={img.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-cocoa/10 bg-white shadow-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-4 py-3 text-sm text-cocoa-muted">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm text-cocoa-muted">
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
