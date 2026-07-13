import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Diese Seite gibt es nicht
        </h1>
        <p className="mt-4 max-w-md text-cocoa-muted">
          Der gewünschte Inhalt wurde verschoben oder existiert nicht mehr.
          Kehren Sie zur Startseite zurück oder stellen Sie uns Ihre Anfrage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Zur Startseite</ButtonLink>
          <ButtonLink href="/kontakt" variant="secondary">
            Kontakt aufnehmen
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-cocoa-muted">
          Oder direkt zu den{" "}
          <Link href="/produkte" className="font-medium text-gold-dark underline">
            Produkten
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
