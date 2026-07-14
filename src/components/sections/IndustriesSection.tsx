import type { Dictionary } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";

export function IndustriesSection({ t }: { t: Dictionary["industries"] }) {
  return (
    <section className="section bg-cream-200/50">
      <div className="container-page">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((industry, i) => (
            <Reveal as="li" key={industry.title} delay={(i % 4) * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-cocoa/10 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/12 text-gold-dark">
                  <Icon name={industry.icon as never} size={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-muted">{industry.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
