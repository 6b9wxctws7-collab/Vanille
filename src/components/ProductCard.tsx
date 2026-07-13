import Link from "next/link";
import type { Product } from "@/config/content";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";

type ProductCardProps = {
  product: Product;
  /** Wenn true, wird das echte Bild geladen (sofern vorhanden). */
  withImage?: boolean;
};

export function ProductCard({ product, withImage = false }: ProductCardProps) {
  return (
    <article
      id={product.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-cocoa/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <ImagePlaceholder
        src={withImage ? product.image : undefined}
        alt={product.imageAlt}
        rounded="rounded-none"
        className="aspect-[4/3] w-full"
        sizes="(max-width: 768px) 100vw, 50vw"
        label="Produktbild-Platzhalter"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 leading-relaxed text-cocoa-muted">
          {product.shortDescription}
        </p>
        <ul className="mt-5 space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-cocoa-light">
              <Icon
                name="check"
                size={18}
                className="mt-0.5 shrink-0 text-gold-dark"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
          <ButtonLink href={`/fuer-geschaeftskunden?produkt=${product.slug}`}>
            {product.cta}
          </ButtonLink>
          <Link
            href={`/produkte#${product.slug}`}
            className="text-sm font-semibold text-gold-dark hover:underline"
          >
            Details ansehen
          </Link>
        </div>
      </div>
    </article>
  );
}
