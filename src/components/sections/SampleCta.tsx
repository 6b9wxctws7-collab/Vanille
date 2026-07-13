import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";

type SampleCtaProps = {
  variant?: "default" | "compact";
};

/** Auffaelliger B2B-Call-to-Action fuer die Musteranfrage. */
export function SampleCta({ variant = "default" }: SampleCtaProps) {
  return (
    <section className={variant === "compact" ? "pb-8" : "section"}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-dark to-gold px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.4), transparent 35%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.3), transparent 40%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Überzeugen Sie sich selbst von der Qualität
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Sie verarbeiten regelmäßig Vanille in Ihrem Betrieb? Teilen Sie uns
              kurz Ihren Bedarf mit. Für qualifizierte Geschäftskunden prüfen wir
              gerne die Zusendung eines Produktmusters.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink
                href="/muster-anfragen"
                size="lg"
                className="bg-white text-gold-dark hover:bg-cream"
              >
                <Icon name="sample" size={18} />
                Muster anfragen
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
