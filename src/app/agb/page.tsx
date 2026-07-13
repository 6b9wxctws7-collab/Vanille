import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Allgemeine Geschäftsbedingungen",
    description: "Allgemeine Geschäftsbedingungen für Geschäftskunden.",
    path: "/agb",
  }),
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Allgemeine Geschäftsbedingungen"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "AGB", href: "/agb" },
        ]}
      />
      <LegalContent>
        <div>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Angebote,
            Lieferungen und Leistungen gegenüber Geschäftskunden (B2B).
            [Bitte anpassen.]
          </p>
        </div>
        <div>
          <h2>2. Angebot und Vertragsschluss</h2>
          <p>
            Unsere Angebote sind freibleibend. Preise und Verfügbarkeit richten
            sich nach Menge, Qualität und aktueller Charge und werden individuell
            angeboten. Ein Vertrag kommt mit unserer Auftragsbestätigung zustande.
          </p>
        </div>
        <div>
          <h2>3. Preise</h2>
          <p>
            Es gelten die im jeweiligen individuellen Angebot genannten Preise.
            [Bitte ergänzen: Währung, MwSt, Nebenkosten.]
          </p>
        </div>
        <div>
          <h2>4. Lieferung</h2>
          <p>
            Einzelheiten zur Lieferung regeln unsere{" "}
            Lieferbedingungen sowie das individuelle Angebot. [Bitte anpassen.]
          </p>
        </div>
        <div>
          <h2>5. Zahlungsbedingungen</h2>
          <p>[Bitte ergänzen: Zahlungsziele, Zahlungsarten, Verzug.]</p>
        </div>
        <div>
          <h2>6. Gewährleistung und Haftung</h2>
          <p>
            Naturprodukte unterliegen natürlichen Schwankungen. Massgeblich sind
            die im Angebot bzw. in der Produktspezifikation genannten Merkmale.
            [Bitte ergänzen.]
          </p>
        </div>
        <div>
          <h2>7. Anwendbares Recht und Gerichtsstand</h2>
          <p>Es gilt Schweizer Recht. Gerichtsstand ist [Ort]. [Bitte anpassen.]</p>
        </div>
      </LegalContent>
    </>
  );
}
