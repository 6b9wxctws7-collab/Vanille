import { products } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";

export function ProductsSection() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Unsere Produkte"
          title="Zwei Qualitäten für unterschiedliche Anwendungen"
          description="Feste Preise nennen wir bewusst nicht. Sie hängen von Menge, Qualität und aktueller Charge ab – und werden auf Anfrage individuell angeboten."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 100} className="h-full">
              <ProductCard product={product} withImage />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/produkte" variant="secondary">
            Alle Produktdetails ansehen
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
