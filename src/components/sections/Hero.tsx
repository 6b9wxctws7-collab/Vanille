import { site } from "@/config/site";
import { trustBadges } from "@/config/content";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hintergrund: grosses Vanille-Bild (Platzhalter, bis Foto vorliegt). */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder
          src={undefined /* z. B. "/images/hero-vanille.jpg" */}
          alt="Hochwertige Bourbon-Vanilleschoten aus Madagaskar"
          rounded="rounded-none"
          className="h-full w-full"
          priority
          sizes="100vw"
          label="Hero-Bild-Platzhalter"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/70 to-cream" />
      </div>

      <div className="container-page relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 lg:py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow mb-4">{site.tagline}</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Bourbon-Vanille aus Madagaskar – direkt, rückverfolgbar und für
            Profis ausgewählt
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa-light">
            Wir beliefern Patisserien, Chocolatiers, Gastronomiebetriebe und
            Manufakturen mit aromatischer Vanille in verlässlicher Qualität und
            flexiblen B2B-Mengen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/muster-anfragen" size="lg">
              Kostenloses Muster anfragen
            </ButtonLink>
            <ButtonLink href="/produkte" variant="secondary" size="lg">
              Produkte ansehen
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </div>

        {/* Vertrauensmerkmale */}
        <ul className="mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2.5 text-sm font-medium text-cocoa-light"
            >
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
