"use client";

import { ButtonLink } from "@/components/ui/Button";
import { LocaleLink, useLocale } from "@/components/i18n/LocaleLink";
import { getDictionary } from "@/i18n";

export default function NotFound() {
  const locale = useLocale();
  const t = getDictionary(locale).notFoundPage;

  return (
    <section className="section">
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="eyebrow">{t.code}</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-md text-cocoa-muted">{t.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">{t.home}</ButtonLink>
          <ButtonLink href="/kontakt" variant="secondary">
            {t.contact}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-cocoa-muted">
          {t.orDirect}{" "}
          <LocaleLink href="/produkte" className="font-medium text-gold-dark underline">
            {t.products}
          </LocaleLink>
          .
        </p>
      </div>
    </section>
  );
}
