"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizeHref } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

/** Aktuelle Sprache aus dem Pfad (Client-Hook). */
export function useLocale(): Locale {
  return localeFromPathname(usePathname());
}

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Wie next/link, ergänzt aber automatisch das Sprachpräfix des aktuellen
 * Pfades. So bleiben interne Verweise ohne manuelles Durchreichen der Sprache
 * korrekt lokalisiert.
 */
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  return <Link href={localizeHref(locale, href)} {...props} />;
}
