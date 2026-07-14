import { site } from "@/config/site";
import type { Dictionary } from "@/i18n";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer;
  return (
    <footer className="mt-8 border-t border-cocoa/10 bg-cream-200/60">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Marke + Kontakt */}
          <div className="lg:col-span-4">
            <LocaleLink href="/" aria-label={dict.nav.home} className="inline-flex rounded-lg">
              <Logo variant="full" height={92} className="h-20 w-auto sm:h-24" />
            </LocaleLink>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cocoa-muted">
              {dict.hero.eyebrow}
            </p>

            <address className="mt-6 space-y-2 text-sm not-italic text-cocoa-muted">
              <p className="font-medium text-cocoa">{site.contact.company}</p>
              <p className="flex items-center gap-2">
                <Icon name="map-pin" size={16} className="text-gold-dark" />
                {site.contact.addressLine1}, {site.contact.addressLine2}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="mail" size={16} className="text-gold-dark" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-gold-dark">
                  {site.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="phone" size={16} className="text-gold-dark" />
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-gold-dark">
                  {site.contact.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Link-Spalten */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-cocoa">{t.productsHeading}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {t.productLinks.map((l) => (
                <li key={l.href}>
                  <LocaleLink href={l.href} className="text-cocoa-muted hover:text-gold-dark">
                    {l.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-cocoa">{t.businessHeading}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {t.businessLinks.map((l) => (
                <li key={l.href}>
                  <LocaleLink href={l.href} className="text-cocoa-muted hover:text-gold-dark">
                    {l.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-cocoa">{t.newsletterHeading}</h3>
            <p className="mt-4 text-sm text-cocoa-muted">{t.newsletterText}</p>
            <div className="mt-4">
              <NewsletterSignup t={dict.newsletter} />
            </div>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cocoa/10 pt-6 text-sm text-cocoa-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.contact.company}. {t.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {t.legalLinks.map((l) => (
              <li key={l.href}>
                <LocaleLink href={l.href} className="hover:text-gold-dark">
                  {l.label}
                </LocaleLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <span className="sr-only">{t.socialLabel}</span>
            {site.social.instagram && (
              <a href={site.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark">
                IG
              </a>
            )}
            {site.social.linkedin && (
              <a href={site.social.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark">
                in
              </a>
            )}
            {site.social.facebook && (
              <a href={site.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-cocoa/15 text-cocoa-muted hover:border-gold hover:text-gold-dark">
                f
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
