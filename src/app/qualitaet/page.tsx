import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";
import { SampleCta } from "@/components/sections/SampleCta";

export const metadata: Metadata = pageMetadata({
  title: "Qualität – Worauf es bei professioneller Vanille ankommt",
  description:
    "Aroma, Feuchtigkeit, Länge, Flexibilität, Verarbeitung, Lagerung, Chargenkonstanz und Rückverfolgbarkeit: die entscheidenden Qualitätsmerkmale professioneller Bourbon-Vanille.",
  path: "/qualitaet",
  keywords: ["Premium Vanille Schweiz", "Vanille Qualität", "Bourbon Vanille B2B"],
});

const criteria: { title: string; description: string; icon: string }[] = [
  {
    title: "Aroma",
    description:
      "Ausschlaggebend ist ein klares, komplexes Profil ohne Fehlnoten. Wir beurteilen Intensität und Charakter sensorisch je Charge.",
    icon: "leaf",
  },
  {
    title: "Feuchtigkeit",
    description:
      "Der Feuchtegehalt bestimmt Geschmeidigkeit und Verarbeitung. Zu trockene Schoten verlieren an Aroma, zu feuchte neigen zu Problemen bei der Lagerung.",
    icon: "shield",
  },
  {
    title: "Länge",
    description:
      "Längenklassen dienen der Sortierung und Kalkulation. Sie sagen wenig über das Aroma aus, sind für die Verarbeitung aber praktisch relevant.",
    icon: "scale",
  },
  {
    title: "Flexibilität",
    description:
      "Biegsame Schoten sind ein Hinweis auf ausgewogene Feuchte und Frische. Sie lassen sich gut aufschneiden und auskratzen.",
    icon: "check",
  },
  {
    title: "Zustand",
    description:
      "Farbe, Oberfläche und Unversehrtheit werden bewertet. Für sichtbare Anwendungen zählt die Optik stärker als bei der Extraktion.",
    icon: "shield",
  },
  {
    title: "Verarbeitung",
    description:
      "Fermentation und Trocknung entscheiden über das Ergebnis. Eine sorgfältige Verarbeitung ist die Grundlage für konstante Qualität.",
    icon: "handshake",
  },
  {
    title: "Lagerung",
    description:
      "Kühl, dunkel und luftdicht gelagert bleibt Vanille lange verwendbar. Richtige Lagerung schützt Aroma und Flexibilität.",
    icon: "jar",
  },
  {
    title: "Chargenkonstanz",
    description:
      "Für Betriebe zählt Wiederholbarkeit. Wir dokumentieren Chargen, damit Sie planbar und gleichbleibend arbeiten können.",
    icon: "route",
  },
  {
    title: "Rückverfolgbarkeit",
    description:
      "Jede Charge bleibt der Herkunft und Verarbeitung zugeordnet – nachvollziehbar von der Anbauregion bis zur Lieferung.",
    icon: "map-pin",
  },
];

export default function QualitaetPage() {
  return (
    <>
      <PageHero
        eyebrow="Qualität"
        title="Worauf es bei professioneller Vanille ankommt"
        description="Qualität ist mehr als ein Etikett. Wir beurteilen jede Charge nach nachvollziehbaren Kriterien – damit Sie im Betrieb verlässlich arbeiten können."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Qualität", href: "/qualitaet" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {criteria.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={c.icon as never} size={24} />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Transparenz"
            title="Prüfung und Dokumentation"
            description="Wir halten uns an nachvollziehbare Merkmale statt an Werbeversprechen."
          />
          <div className="prose-cocoa space-y-4">
            <p>
              Für jede Lieferung definieren wir die relevanten Merkmale und
              prüfen sie vor der Auslieferung. Produktspezifikationen und – je
              nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf
              Anfrage zur Verfügung.
            </p>
            <p>
              Bewusst verzichten wir auf unbelegte Aussagen. Begriffe wie „Bio“
              oder „Fair Trade“ verwenden wir nur, wenn entsprechende Zertifikate
              vorliegen. Gesundheitsbezogene oder wissenschaftlich unbelegte
              Versprechen machen wir nicht.
            </p>
          </div>
        </div>
      </section>

      <SampleCta />
    </>
  );
}
