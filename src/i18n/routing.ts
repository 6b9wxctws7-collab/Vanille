import { locales, defaultLocale, isLocale, type Locale } from "./config";

/**
 * Stellt einem internen Pfad das Sprachpräfix voran.
 * Externe Links (http, mailto, tel), reine Anker (#…) und bereits
 * lokalisierte Pfade bleiben unverändert.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  const firstSegment = href.split("/")[1];
  if (isLocale(firstSegment)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** Extrahiert die Sprache aus einem Pfad (Fallback: Standardsprache). */
export function localeFromPathname(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? (seg as Locale) : defaultLocale;
}

/** Tauscht das Sprachpräfix eines Pfades gegen eine andere Sprache aus. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}${pathname === "/" ? "" : pathname}`;
}

export { locales, defaultLocale };
