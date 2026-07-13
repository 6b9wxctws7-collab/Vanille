import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export const metadata: Metadata = pageMetadata({
  title: "Über uns – direkter Vanillehandel mit Sitz in der Schweiz",
  description:
    "Aus persönlichen Kontakten zu Vanilleproduzenten in Madagaskar entstanden: hochwertige Bourbon-Vanille, transparent und direkt für professionelle Anwender.",
  path: "/ueber-uns",
  keywords: ["Vanille Importeur Schweiz", "Bourbon Vanille Schweiz"],
});

const principles: { title: string; description: string; icon: string }[] = [
  {
    title: "Persönlicher Ansprechpartner",
    description:
      "Sie sprechen direkt mit einer festen Kontaktperson – ohne Umwege über anonyme Hotlines.",
    icon: "chat",
  },
  {
    title: "Sitz in der Schweiz",
    description: "Wir liefern und kommunizieren aus der Schweiz.",
    icon: "map-pin",
  },
  {
    title: "Fokus auf B2B",
    description:
      "Unser Angebot richtet sich an Betriebe, die Vanille verarbeiten.",
    icon: "handshake",
  },
  {
    title: "Langfristige Produzentenbeziehungen",
    description:
      "Wir setzen auf Kontinuität statt auf wechselnde Quellen.",
    icon: "route",
  },
  {
    title: "Nachvollziehbare Qualität",
    description: "Chargen bleiben rückverfolgbar und werden geprüft.",
    icon: "shield",
  },
  {
    title: "Unkomplizierte Kommunikation",
    description: "Kurze Wege, klare Antworten, verlässliche Absprachen.",
    icon: "check",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Direkter Vanillehandel aus persönlicher Überzeugung"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
        ]}
      />

      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="prose-cocoa">
            <SectionHeading eyebrow="Unsere Geschichte" title="Wie wir entstanden sind" />
            <div className="mt-6 space-y-4">
              <p>
                {site.brandName} entstand aus persönlichen Kontakten zu
                Vanilleproduzenten in Madagaskar und dem Ziel, hochwertige
                Vanille transparenter und direkter für professionelle Anwender
                verfügbar zu machen.
              </p>
              <p>
                Statt anonymer Handelsketten setzen wir auf direkte Beziehungen,
                nachvollziehbare Chargen und eine sorgfältige Auswahl der
                Schoten. So können Betriebe verlässlich mit einer Qualität
                arbeiten, die sie vorab prüfen und wiederholt beziehen können.
              </p>
              <p>
                Wir machen bewusst keine Angaben zu Unternehmensjahren,
                Teamgrössen oder Kennzahlen, die wir nicht belegen können. Was
                zählt, ist die Qualität in Ihrer Küche oder Manufaktur – und ein
                Ansprechpartner, der erreichbar ist.
              </p>
            </div>
          </div>
          <ImagePlaceholder
            alt="Bourbon-Vanilleschoten und Verarbeitung"
            label="Foto (Platzhalter)"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section bg-cream-200/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Was uns wichtig ist"
            title="Grundsätze unserer Arbeit"
            centered
            className="mx-auto"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <li key={p.title}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={p.icon as never} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SampleCta />
    </>
  );
}
