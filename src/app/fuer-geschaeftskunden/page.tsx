import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";
import { BusinessForm } from "@/components/forms/BusinessForm";

export const metadata: Metadata = pageMetadata({
  title: "Für Geschäftskunden – individuelle Vanille-Angebote",
  description:
    "Persönliche Beratung, Mengenstaffelungen, wiederkehrende Lieferungen und chargenbezogene Spezifikationen. Stellen Sie Ihre B2B-Anfrage für Bourbon-Vanille aus Madagaskar.",
  path: "/fuer-geschaeftskunden",
  keywords: ["Vanille B2B", "Vanilleschoten Großhandel Schweiz", "Vanille Importeur Schweiz"],
});

const services: { title: string; description: string; icon: string }[] = [
  {
    title: "Persönliche Beratung",
    description:
      "Ein fester Ansprechpartner in der Schweiz begleitet Sie von der ersten Frage bis zur laufenden Belieferung.",
    icon: "chat",
  },
  {
    title: "Individuelle Angebote",
    description:
      "Preise und Konditionen richten sich nach Qualität, Menge und aktueller Charge – individuell für Ihren Betrieb.",
    icon: "handshake",
  },
  {
    title: "Mengenstaffelungen",
    description:
      "Grössere Abnahmemengen werden bei der Kalkulation berücksichtigt.",
    icon: "scale",
  },
  {
    title: "Wiederkehrende Lieferungen",
    description:
      "Für regelmässigen Bedarf vereinbaren wir passende Intervalle und planbare Mengen.",
    icon: "route",
  },
  {
    title: "Musteranfragen",
    description:
      "Qualifizierte Geschäftskunden können die Qualität vorab prüfen, bevor sie sich entscheiden.",
    icon: "sample",
  },
  {
    title: "Chargenbezogene Spezifikationen",
    description:
      "Produktspezifikationen und – je nach Charge – Analyseunterlagen auf Anfrage.",
    icon: "shield",
  },
  {
    title: "Flexible Verpackungsgrössen",
    description:
      "Von 100 g bis 1 kg und grösseren Gebinden – abgestimmt auf Ihre Abläufe.",
    icon: "jar",
  },
  {
    title: "Sondervereinbarungen",
    description:
      "Für grössere Abnehmer sind individuelle Vereinbarungen möglich.",
    icon: "check",
  },
];

export default function GeschaeftskundenPage() {
  return (
    <>
      <PageHero
        eyebrow="Für Geschäftskunden"
        title="Ein Partner für Ihren regelmässigen Vanillebedarf"
        description="Wir arbeiten ausschliesslich mit Geschäftskunden – vom kleinen Handwerksbetrieb bis zur Manufaktur. Persönlich, transparent und ohne Onlineshop-Standard."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Für Geschäftskunden", href: "/fuer-geschaeftskunden" },
        ]}
      />

      {/* Leistungen */}
      <section className="section">
        <div className="container-page">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                    <Icon name={s.icon as never} size={22} />
                  </span>
                  <h2 className="mt-4 text-base font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Anfrageformular */}
      <section className="section bg-cream-200/50">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Anfrage</p>
            <h2 className="text-3xl font-semibold">Ihre B2B-Anfrage</h2>
            <p className="mt-4 leading-relaxed text-cocoa-muted">
              Je mehr wir über Ihren Bedarf wissen, desto passender können wir
              ein Angebot erstellen. Alle Angaben ausser den Pflichtfeldern sind
              freiwillig.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cocoa-light">
              <li className="flex items-center gap-2">
                <Icon name="clock" size={18} className="text-gold-dark" />
                Antwort in der Regel innerhalb eines Werktags
              </li>
              <li className="flex items-center gap-2">
                <Icon name="shield" size={18} className="text-gold-dark" />
                Ihre Angaben werden vertraulich behandelt
              </li>
              <li className="flex items-center gap-2">
                <Icon name="sample" size={18} className="text-gold-dark" />
                Muster für qualifizierte Geschäftskunden möglich
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <BusinessForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
