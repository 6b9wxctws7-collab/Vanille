"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n";
import { LocaleLink } from "@/components/i18n/LocaleLink";

const STORAGE_KEY = "cookie-consent";

/**
 * Vorbereitete Cookie-Hinweis-Komponente.
 * Speichert die Auswahl lokal. Die eigentliche Analytics-Einbindung
 * (siehe Analytics.tsx) kann an das Ergebnis gekoppelt werden.
 */
export function CookieBanner({ t }: { t: Dictionary["cookie"] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      /* localStorage nicht verfuegbar */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.dialogLabel}
      aria-live="polite"
      className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-2xl rounded-2xl border border-cocoa/10 bg-white p-5 shadow-card-hover sm:inset-x-6 sm:bottom-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-cocoa-muted">
          {t.text}{" "}
          <LocaleLink href="/datenschutz" className="font-medium text-gold-dark underline">
            {t.privacyLink}
          </LocaleLink>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-full border border-cocoa/20 px-4 py-2 text-sm font-semibold text-cocoa hover:border-gold"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white hover:bg-gold-dark"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
