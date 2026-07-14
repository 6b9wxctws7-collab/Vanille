"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n";
import { localeFromPathname } from "@/i18n/routing";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";

export function Navbar({ nav }: { nav: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Pfad ohne Sprachpräfix für den Aktiv-Vergleich.
  const locale = localeFromPathname(pathname);
  const rel = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  const isActive = (href: string) =>
    href === "/" ? rel === "/" : rel.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 shadow-[0_1px_0_0_rgba(43,35,32,0.06)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between lg:h-20"
        aria-label={nav.home}
      >
        <LocaleLink href="/" aria-label={nav.home} className="flex items-center rounded-lg py-1">
          <Logo variant="mark" height={44} priority className="h-10 w-auto lg:h-11" />
        </LocaleLink>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.items.map((item) => (
            <li key={item.href}>
              <LocaleLink
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-gold-dark"
                    : "text-cocoa-light hover:text-cocoa"
                }`}
              >
                {item.label}
              </LocaleLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher label={nav.languageLabel} />
          <ButtonLink href="/muster-anfragen" size="sm">
            {nav.cta}
          </ButtonLink>
        </div>

        {/* Mobile: Umschalter */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher label={nav.languageLabel} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-cocoa hover:bg-sand/60"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile-Menue */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-cocoa/10 bg-cream`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {nav.items.map((item) => (
            <li key={item.href}>
              <LocaleLink
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-gold/10 text-gold-dark"
                    : "text-cocoa-light hover:bg-sand/50"
                }`}
              >
                {item.label}
              </LocaleLink>
            </li>
          ))}
          <li className="mt-2">
            <ButtonLink href="/muster-anfragen" className="w-full" size="lg">
              {nav.cta}
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
