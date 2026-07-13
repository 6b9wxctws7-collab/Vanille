import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Lieferbedingungen",
    description: "Informationen zu Versand und Lieferung.",
    path: "/lieferbedingungen",
  }),
  robots: { index: false, follow: true },
};

export default function LieferbedingungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Lieferbedingungen"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lieferbedingungen", href: "/lieferbedingungen" },
        ]}
      />
      <LegalContent>
        <div>
          <h2>Liefergebiet</h2>
          <p>
            Wir liefern aus der Schweiz. Lieferungen ins Ausland klären wir
            individuell im Rahmen Ihrer Anfrage. [Bitte anpassen.]
          </p>
        </div>
        <div>
          <h2>Lieferzeit</h2>
          <p>
            Die Lieferzeit richtet sich nach Verfügbarkeit, Charge und Bestellmenge
            und wird im individuellen Angebot bestätigt. [Bitte ergänzen.]
          </p>
        </div>
        <div>
          <h2>Versandkosten</h2>
          <p>[Bitte ergänzen: Versandkosten, Mindermengenzuschläge, Freigrenzen.]</p>
        </div>
        <div>
          <h2>Verpackung</h2>
          <p>
            Die Ware wird fachgerecht verpackt. Verfügbare Verpackungseinheiten
            reichen von 100 g bis 1 kg; grössere Gebinde auf Anfrage.
          </p>
        </div>
        <div>
          <h2>Transport und Gefahrenübergang</h2>
          <p>[Bitte ergänzen: Incoterms bzw. Regelung zum Gefahrenübergang.]</p>
        </div>
        <div>
          <h2>Annahme und Prüfung</h2>
          <p>
            Bitte prüfen Sie die Ware bei Erhalt. Beanstandungen richten Sie bitte
            zeitnah an unseren Kontakt. [Bitte anpassen.]
          </p>
        </div>
      </LegalContent>
    </>
  );
}
