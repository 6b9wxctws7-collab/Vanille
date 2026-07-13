import Link from "next/link";
import { site } from "@/config/site";
import { legalNav } from "@/config/navigation";
import { Icon } from "@/components/Icon";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const columnProducts = [
  { label: "Gourmet-Bourbon-Vanille", href: "/produkte#gourmet-bourbon-vanille" },
  {
    label: "Vanille für Extraktion",
    href: "/produkte#vanille-extraktion-verarbeitung",
  },
  { label: "Produktdatenblätter", href: "/produkte#datenblaetter" },
  { label: "Qualität", href: "/qualitaet" },
];

const columnBusiness = [
  { label: "Für Geschäftskunden", href: "/fuer-geschaeftskunden" },
  { label: "Musteranfrage", href: "/muster-anfragen" },
  { label: "Herkunft", href: "/herkunft" },
  { label: "Über uns", href: "/ueber-uns" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-cocoa/10 bg-cream-200/60">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Marke + Kontakt */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-xl font-semibold text-cocoa"
            >
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold-dark"
              >
                <Icon name="leaf" size={20} />
              </span>
              {site.brandName}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cocoa-muted">
              {site.tagline}
            </p>

            <address className="mt-6 space-y-2 text-sm not-italic text-cocoa-muted">
              <p className="font-medium text-cocoa">{site.contact.company}</p>
              <p className="flex items-center gap-2">
                <Icon name="map-pin" size={16} className="text-gold-dark" />
                {site.contact.addressLine1}, {site.contact.addressLine2}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="mail" size={16} className="text-gold-dark" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-gold-dark"
                >
                  {site.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="phone" size={16} className="text-gold-dark" />
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="hover:text-gold-dark"
                >
                  {site.contact.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Link-Spalten */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-cocoa">Produkte</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {columnProducts.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cocoa-muted hover:text-gold-dark">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-cocoa">Geschäftskunden</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {columnBusiness.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cocoa-muted hover:text-gold-dark">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt" className="text-cocoa-muted hover:text-gold-dark">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-cocoa">Newsletter</h3>
            <p className="mt-4 text-sm text-cocoa-muted">
              Gelegentliche Informationen zu Verfügbarkeit, Chargen und
              Konditionen. Kein Spam.
            </p>
            <div className="mt-4">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cocoa/10 pt-6 text-sm text-cocoa-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.contact.company}. Alle Rechte
            vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-dark">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <span className="sr-only">Social Media (Platzhalter)</span>
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                aria-label="Instagram (Platzhalter)"
                className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark"
              >
                IG
              </a>
            )}
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn (Platzhalter)"
                className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark"
              >
                in
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                aria-label="Facebook (Platzhalter)"
                className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark"
              >
                f
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
