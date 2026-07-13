import { benefits } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";

export function BenefitsSection() {
  return (
    <section className="section bg-cocoa text-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="Zusammenarbeit"
          title={<span className="text-cream">Warum mit uns arbeiten?</span>}
          description={
            <span className="text-cream/70">
              Wir verstehen uns als verlässlicher Partner für die tägliche
              Verarbeitung – nicht als anonymer Zwischenhändler.
            </span>
          }
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal as="li" key={benefit.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/20 text-gold-light">
                  <Icon name={benefit.icon as never} size={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-cream">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
