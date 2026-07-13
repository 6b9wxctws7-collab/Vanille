/**
 * =============================================================================
 * ZENTRALE SEITENKONFIGURATION
 * =============================================================================
 * Alle Platzhalter und Unternehmensdaten werden hier gepflegt.
 * Ersetze die mit [ ] markierten Platzhalter durch echte Angaben, sobald diese
 * vorliegen. So aendern sich Marke, Kontaktdaten usw. an genau einer Stelle.
 */

export const site = {
  /** Markenname. Ueberall zentral verwendet. */
  brandName: "Vanora",
  tagline: "Premium Bourbon-Vanille aus Madagaskar für professionelle Anwender",

  /** Logo-Dateien (transparent, fuer beliebige Hintergruende).
   *  - mark: Emblem + Schriftzug (kompakt, fuer Kopf-/Fusszeile)
   *  - full: komplettes Lockup inkl. Claim (fuer Markenflaechen/OG) */
  logo: {
    mark: { src: "/images/logo/vanora-logo-mark.png", width: 991, height: 705 },
    full: { src: "/images/logo/vanora-logo.png", width: 991, height: 812 },
    alt: "Vanora – Madagascar Bourbon Vanilla",
  },

  /** Basis-URL der Seite (fuer SEO, Sitemap, Open Graph). */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.example.ch",

  /** Kurzbeschreibung (Fallback fuer Meta-Description). */
  description:
    "Premium Bourbon-Vanilleschoten direkt aus Madagaskar für Gastronomie, Patisserie, Chocolatiers und Manufakturen. Kostenlose Muster und individuelle B2B-Angebote aus der Schweiz.",

  /** Kontaktdaten – Platzhalter bis echte Daten vorliegen. */
  contact: {
    company: "Vanora",
    addressLine1: "[Strasse und Hausnummer]",
    addressLine2: "[PLZ Ort]",
    country: "Schweiz",
    email: "[info@ihre-domain.ch]",
    phone: "[+41 00 000 00 00]",
    phoneHref: "+410000000000",
    // WhatsApp im internationalen Format ohne + und Leerzeichen (z. B. 41790000000)
    whatsapp: "41000000000",
    whatsappMessage:
      "Guten Tag, ich interessiere mich für Ihre Bourbon-Vanille und hätte eine B2B-Anfrage.",
    openingHours: "Montag – Freitag, 08:00 – 17:00 Uhr (MEZ)",
  },

  /** Social-Media-Platzhalter (leer lassen blendet den Eintrag aus). */
  social: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },

  /** Rechtliche Angaben – Platzhalter fuer Impressum. */
  legal: {
    managingDirector: "[Name der Geschäftsführung]",
    register: "[Handelsregister-Nr. / UID CHE-000.000.000]",
    vatId: "[MwSt-Nr. CHE-000.000.000 MWST]",
  },
} as const;

export type SiteConfig = typeof site;
