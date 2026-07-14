import type { Dictionary } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Icon } from "@/components/Icon";

export function OriginTeaser({ t }: { t: Dictionary["origin"] }) {
  return (
    <section className="section bg-cream-200/50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder
          src="/images/herkunft/produzent.jpg"
          alt={t.imageAlt}
          className="aspect-[4/3] w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <p className="mt-4 text-lg leading-relaxed text-cocoa-muted">{t.text}</p>
          <div className="mt-8">
            <ButtonLink href="/herkunft" variant="secondary">
              {t.button}
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
