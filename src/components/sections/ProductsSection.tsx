import type { Dictionary } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";

export function ProductsSection({
  t,
  products,
}: {
  t: Dictionary["productsSection"];
  products: Dictionary["products"];
}) {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 100} className="h-full">
              <ProductCard product={product} detailsLabel={t.detailsLink} withImage />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/produkte" variant="secondary">
            {t.allButton}
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
