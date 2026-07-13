import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Icon } from "@/components/Icon";

export function OriginTeaser() {
  return (
    <section className="section bg-cream-200/50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder
          src="/images/herkunft/produzent.jpg"
          alt="Junger Produzent trägt Vanillepflanzen in Madagaskar"
          className="aspect-[4/3] w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <SectionHeading
            eyebrow="Herkunft"
            title="Von Madagaskar direkt zu professionellen Anwendern"
          />
          <p className="mt-4 text-lg leading-relaxed text-cocoa-muted">
            Unsere Vanille stammt von ausgewählten Produzenten und Partnern in
            Madagaskar. Wir setzen auf langfristige Beziehungen, nachvollziehbare
            Chargen und eine sorgfältige Auswahl der Schoten. Jede Lieferung wird
            nach definierten Qualitätsmerkmalen geprüft.
          </p>
          <div className="mt-8">
            <ButtonLink href="/herkunft" variant="secondary">
              Mehr über unsere Herkunft
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
