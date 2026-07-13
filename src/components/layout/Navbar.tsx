"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/config/navigation";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menue bei Navigation schliessen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll sperren, wenn mobiles Menue offen
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          aria-label="Vanora – zur Startseite"
          className="flex items-center rounded-lg py-1"
        >
          <Logo variant="mark" height={44} priority className="h-10 w-auto lg:h-11" />
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-gold-dark"
                    : "text-cocoa-light hover:text-cocoa"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="/muster-anfragen" size="sm">
            Kostenloses Muster anfragen
          </ButtonLink>
        </div>

        {/* Mobile: Umschalter */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full text-cocoa hover:bg-sand/60 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </nav>

      {/* Mobile-Menue */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-cocoa/10 bg-cream`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-gold/10 text-gold-dark"
                    : "text-cocoa-light hover:bg-sand/50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <ButtonLink
              href="/muster-anfragen"
              className="w-full"
              size="lg"
            >
              Kostenloses Muster anfragen
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
