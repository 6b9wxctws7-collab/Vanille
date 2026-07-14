export const locales = ["de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  fr: "Français",
};

/** Kurzform fuer den Sprachumschalter. */
export const localeShort: Record<Locale, string> = {
  de: "DE",
  fr: "FR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
