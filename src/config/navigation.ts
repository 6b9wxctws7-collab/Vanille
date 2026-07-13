export type NavItem = {
  label: string;
  href: string;
};

/** Hauptnavigation (feste Kopfzeile). */
export const mainNav: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Produkte", href: "/produkte" },
  { label: "Qualität", href: "/qualitaet" },
  { label: "Herkunft", href: "/herkunft" },
  { label: "Für Geschäftskunden", href: "/fuer-geschaeftskunden" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Footer-Spalte „Rechtliches“. */
export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
  { label: "Allgemeine Geschäftsbedingungen", href: "/agb" },
  { label: "Lieferbedingungen", href: "/lieferbedingungen" },
];
