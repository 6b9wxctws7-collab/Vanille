"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateContact } from "@/lib/validation";
import { Honeypot, TextArea, TextInput } from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

export function ContactForm({ t, locale }: { t: Dictionary["forms"]; locale: Locale }) {
  const { status, errors, message, submit } = useFormSubmit("/api/contact", t.connectionError);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(form.entries()), locale };

    const local = validateContact(data, t.validation);
    setClientErrors(local);
    if (Object.keys(local).length > 0) {
      document.getElementById(Object.keys(local)[0])?.focus();
      return;
    }
    await submit(data);
  }

  if (status === "success") {
    return (
      <FormSuccess title={t.success.contactTitle}>
        <p>{t.success.contactText}</p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput id="name" name="name" label={t.labels.name} required autoComplete="name" error={fieldErrors.name} />
        <TextInput id="company" name="company" label={t.labels.companyOptional} autoComplete="organization" error={fieldErrors.company} />
        <TextInput id="email" name="email" type="email" inputMode="email" label={t.labels.email} required autoComplete="email" error={fieldErrors.email} />
        <TextInput id="phone" name="phone" type="tel" inputMode="tel" label={t.labels.phone} autoComplete="tel" error={fieldErrors.phone} />
      </div>
      <TextArea id="message" name="message" label={t.labels.messageRequired} required error={fieldErrors.message} />
      <PrivacyCheckbox t={t.privacy} error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? t.submit.sending : t.submit.contact}
      </Button>
    </form>
  );
}
