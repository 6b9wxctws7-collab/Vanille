import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/Icon";
import { SampleForm } from "@/components/forms/SampleForm";
import { processSteps } from "@/config/content";

export const metadata: Metadata = pageMetadata({
  title: "Kostenloses Muster anfragen",
  description:
    "Fordern Sie ein Produktmuster unserer Bourbon-Vanille aus Madagaskar an. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Musters.",
  path: "/muster-anfragen",
  keywords: ["Vanille Muster", "Bourbon Vanille B2B", "Vanille Großhandel Schweiz"],
});

export default function MusterAnfragenPage() {
  return (
    <>
      <PageHero
        eyebrow="Musteranfrage"
        title="Überzeugen Sie sich selbst von der Qualität"
        description="Sie verarbeiten regelmässig Vanille in Ihrem Betrieb? Teilen Sie uns kurz Ihren Bedarf mit. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Musteranfrage", href: "/muster-anfragen" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Ablauf */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">So geht es weiter</p>
            <h2 className="text-2xl font-semibold">In wenigen Schritten zum Muster</h2>
            <ol className="mt-8 space-y-6">
              {processSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 font-serif font-semibold text-gold-dark">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-cocoa">{step.title}</h3>
                    <p className="mt-1 text-sm text-cocoa-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-gold/25 bg-gold/5 p-5 text-sm text-cocoa-light">
              <p className="flex items-start gap-2">
                <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                Muster richten sich an Betriebe, die Vanille verarbeiten. Bitte
                haben Sie Verständnis, dass wir Musteranfragen individuell prüfen.
              </p>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cocoa/10 bg-white p-6 shadow-card sm:p-8">
              <SampleForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
