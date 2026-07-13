import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Impressum",
    description: "Impressum und Anbieterkennzeichnung.",
    path: "/impressum",
  }),
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Impressum", href: "/impressum" },
        ]}
      />
      <LegalContent>
        <div>
          <h2>Angaben zum Unternehmen</h2>
          <p>
            {site.contact.company}
            <br />
            {site.contact.addressLine1}
            <br />
            {site.contact.addressLine2}
            <br />
            {site.contact.country}
          </p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p>
            E-Mail: {site.contact.email}
            <br />
            Telefon: {site.contact.phone}
          </p>
        </div>
        <div>
          <h2>Vertretungsberechtigte Person</h2>
          <p>{site.legal.managingDirector}</p>
        </div>
        <div>
          <h2>Registereintrag</h2>
          <p>
            Handelsregister / UID: {site.legal.register}
            <br />
            MwSt-Nummer: {site.legal.vatId}
          </p>
        </div>
        <div>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
            keine Gewähr übernommen werden. [Bitte anpassen.]
          </p>
        </div>
        <div>
          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            Urheberrecht. [Bitte anpassen.]
          </p>
        </div>
      </LegalContent>
    </>
  );
}
