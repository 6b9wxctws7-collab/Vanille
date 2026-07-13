import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Datenschutzerklärung",
    description: "Informationen zum Umgang mit personenbezogenen Daten.",
    path: "/datenschutz",
  }),
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Datenschutzerklärung", href: "/datenschutz" },
        ]}
      />
      <LegalContent>
        <div>
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            {site.contact.company}, {site.contact.addressLine1},{" "}
            {site.contact.addressLine2}, {site.contact.country}. E-Mail:{" "}
            {site.contact.email}.
          </p>
        </div>
        <div>
          <h2>2. Erhebung und Verarbeitung von Daten</h2>
          <p>
            Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies
            zur Bereitstellung der Website sowie zur Bearbeitung Ihrer Anfragen
            erforderlich ist.
          </p>
        </div>
        <div>
          <h2>3. Kontakt- und Anfrageformulare</h2>
          <p>
            Wenn Sie uns über ein Formular (Kontakt, Muster- oder B2B-Anfrage)
            kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur
            Bearbeitung Ihres Anliegens. Die Anfragen werden nicht öffentlich
            gespeichert. [Bitte ergänzen: Speicherdauer, ggf. eingesetzte Dienste
            wie Resend, Supabase, HubSpot, Brevo oder Mailchimp.]
          </p>
        </div>
        <div>
          <h2>4. Newsletter</h2>
          <p>
            Für den Versand eines Newsletters verarbeiten wir Ihre E-Mail-Adresse
            auf Grundlage Ihrer Einwilligung. Sie können sich jederzeit abmelden.
            [Bitte ergänzen: eingesetzter Dienst und Verfahren.]
          </p>
        </div>
        <div>
          <h2>5. Cookies und Reichweitenmessung</h2>
          <p>
            Wir verwenden technisch notwendige Cookies. Optionale Statistik-Cookies
            (z. B. Google Analytics oder Plausible) setzen wir erst nach Ihrer
            Einwilligung über den Cookie-Hinweis. [Bitte an das eingesetzte
            Werkzeug anpassen.]
          </p>
        </div>
        <div>
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben – im Rahmen der geltenden Gesetze – das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf
            Widerspruch. Wenden Sie sich hierzu an {site.contact.email}.
          </p>
        </div>
        <div>
          <h2>7. Kontakt zum Datenschutz</h2>
          <p>[Bitte ergänzen: Ansprechpartner / Kontaktstelle für Datenschutz.]</p>
        </div>
      </LegalContent>
    </>
  );
}
