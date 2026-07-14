"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateSample } from "@/lib/validation";
import { Honeypot, SelectField, TextArea, TextInput } from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

export function SampleForm({ t, locale }: { t: Dictionary["forms"]; locale: Locale }) {
  const { status, errors, message, submit } = useFormSubmit("/api/sample", t.connectionError);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(form.entries()), locale };

    const local = validateSample(data, t.validation);
    setClientErrors(local);
    if (Object.keys(local).length > 0) {
      document.getElementById(Object.keys(local)[0])?.focus();
      return;
    }
    await submit(data);
  }

  if (status === "success") {
    return (
      <FormSuccess title={t.success.sampleTitle}>
        <p>{t.success.sampleText}</p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput id="company" name="company" label={t.labels.company} required autoComplete="organization" error={fieldErrors.company} />
        <TextInput id="name" name="name" label={t.labels.contactPerson} required autoComplete="name" error={fieldErrors.name} />
        <TextInput id="email" name="email" type="email" inputMode="email" label={t.labels.email} required autoComplete="email" error={fieldErrors.email} />
        <TextInput id="phone" name="phone" type="tel" inputMode="tel" label={t.labels.phone} autoComplete="tel" error={fieldErrors.phone} />
        <SelectField id="industry" name="industry" label={t.labels.industry} required options={t.options.industry} placeholder={t.selectPlaceholder} error={fieldErrors.industry} />
        <SelectField id="product" name="product" label={t.labels.productOptional} options={t.options.product} placeholder={t.selectPlaceholder} error={fieldErrors.product} />
      </div>
      <TextArea id="message" name="message" label={t.labels.need} placeholder={t.placeholders.need} error={fieldErrors.message} />
      <PrivacyCheckbox t={t.privacy} error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? t.submit.sending : t.submit.sample}
      </Button>
      <p className="text-xs text-cocoa-muted">{t.requiredHint}</p>
    </form>
  );
}
