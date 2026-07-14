import type { Dictionary } from "@/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      {/* Hintergrund: grosses Foto aus der Anbauregion in Madagaskar. */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder
          src="/images/herkunft/anbau.jpg"
          alt={t.imageAlt}
          rounded="rounded-none"
          className="h-full w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 lg:py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa-light">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/muster-anfragen" size="lg">
              {t.ctaSample}
            </ButtonLink>
            <ButtonLink href="/produkte" variant="secondary" size="lg">
              {t.ctaProducts}
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4">
          {t.trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-2.5 text-sm font-medium text-cocoa-light">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/70 text-gold-dark shadow-sm">
                <Icon name="check" size={18} />
              </span>
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
