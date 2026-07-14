import { site } from "@/config/site";
import type { Dictionary } from "@/i18n";

/**
 * JSON-LD strukturierte Daten.
 * Organization + einzelne Products. Preise werden bewusst nicht ausgezeichnet
 * (Angebote auf Anfrage); stattdessen wird die Kontaktmoeglichkeit betont.
 */
export function OrganizationJsonLd({ description }: { description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: site.url,
    description,
    slogan: site.tagline,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLine1,
      addressLocality: site.contact.addressLine2,
      addressCountry: "CH",
    },
    areaServed: "CH",
    knowsAbout: [
      "Bourbon-Vanille",
      "Vanilleschoten",
      "Vanille aus Madagaskar",
      "B2B-Vanillehandel",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductsJsonLd({ products }: { products: Dictionary["products"] }) {
  const data = products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.shortDescription,
    category: "Vanille / Gewürze",
    brand: { "@type": "Brand", name: site.brandName },
    countryOfOrigin: "Madagaskar",
    offers: {
      "@type": "Offer",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      url: `${site.url}/produkte#${p.slug}`,
      seller: { "@type": "Organization", name: site.brandName },
    },
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: Dictionary["faq"] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
