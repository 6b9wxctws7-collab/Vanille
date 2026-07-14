"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Icon } from "@/components/Icon";

/** Newsletter-Anmeldung (Platzhalter, an Mailchimp/Brevo koppelbar). */
export function NewsletterSignup({ t }: { t: Dictionary["newsletter"] }) {
  const { status, errors, message, submit } = useFormSubmit("/api/newsletter");
  const [email, setEmail] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await submit({ email, company_website: "" });
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 rounded-xl bg-gold/10 px-4 py-3 text-sm font-medium text-gold-dark">
        <Icon name="check" size={18} />
        {t.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-2">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          {t.emailLabel}
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          className="min-w-0 flex-1 rounded-full border border-cocoa/15 bg-white px-4 py-2.5 text-sm text-cocoa placeholder:text-cocoa-muted/60 focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-white hover:bg-gold-dark disabled:opacity-60"
          aria-label={t.aria}
        >
          <Icon name="arrow-right" size={18} />
        </button>
      </div>
      {(errors.email || message) && (
        <p className="text-xs text-red-600">{errors.email || message}</p>
      )}
    </form>
  );
}
