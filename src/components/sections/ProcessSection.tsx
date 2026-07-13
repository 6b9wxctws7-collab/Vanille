import { processSteps } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ablauf"
          title="So funktioniert die Zusammenarbeit"
          description="In vier klaren Schritten von der ersten Anfrage bis zur Lieferung."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 4) * 90}>
              <div className="relative flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card">
                <span className="font-serif text-4xl font-semibold text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
