import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

/** Ermittelt die bevorzugte Sprache aus dem Accept-Language-Header. */
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (header) {
    // z. B. "fr-CH,fr;q=0.9,de;q=0.8" -> ["fr","fr","de"]
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    for (const lang of preferred) {
      if ((locales as readonly string[]).includes(lang)) {
        return lang as Locale;
      }
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ist bereits ein Locale-Präfix vorhanden?
  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`),
  );
  if (hasLocale) return NextResponse.next();

  // Sonst: passende Sprache erkennen und umleiten.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Alles ausser API, Next-Interna, Sitemap/robots und Dateien mit Endung.
  matcher: ["/((?!api|_next|images|.*\\..*|robots.txt|sitemap.xml).*)"],
};
