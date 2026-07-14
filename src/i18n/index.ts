import { de, type Dictionary } from "./dictionaries/de";
import { fr } from "./dictionaries/fr";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { de, fr };

/** Liefert das vollständige Wörterbuch für eine Sprache. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.de;
}

export type { Dictionary };
