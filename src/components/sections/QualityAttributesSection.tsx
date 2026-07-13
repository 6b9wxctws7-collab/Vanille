import { qualityAttributes } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";

export function QualityAttributesSection() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Qualitätsmerkmale"
          title="Woran wir jede Charge messen"
          description="Produktspezifikationen und Analyseunterlagen stellen wir Geschäftskunden je nach Charge auf Anfrage zur Verfügung."
        />
        <ul className="mt-12 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-2">
          {qualityAttributes.map((attr, i) => (
            <Reveal
              as="li"
              key={attr.label}
              delay={(i % 2) * 60}
              className="flex items-start gap-3 rounded-xl border border-cocoa/10 bg-white p-4"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/12 text-gold-dark">
                <Icon name="check" size={18} />
              </span>
              <span>
                <span className="font-medium text-cocoa">{attr.label}</span>
                <span className="mt-0.5 block text-sm text-cocoa-muted">
                  {attr.description}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
