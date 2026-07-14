"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShort, localeNames } from "@/i18n/config";
import { localeFromPathname, switchLocalePath } from "@/i18n/routing";

type Props = {
  label: string;
  className?: string;
};

/** Sprachumschalter (DE / FR), erhält den aktuellen Pfad bei. */
export function LanguageSwitcher({ label, className = "" }: Props) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-cocoa/15 bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label={label}
    >
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <Link
            key={loc}
            href={switchLocalePath(pathname, loc)}
            hrefLang={loc}
            aria-label={localeNames[loc]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "bg-gold text-white"
                : "text-cocoa-muted hover:text-gold-dark"
            }`}
          >
            {localeShort[loc]}
          </Link>
        );
      })}
    </div>
  );
}
