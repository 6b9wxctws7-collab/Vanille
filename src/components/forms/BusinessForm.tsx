"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateBusiness } from "@/lib/validation";
import { Honeypot, SelectField, TextArea, TextInput } from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

export function BusinessForm({
  t,
  locale,
  defaultProduct,
}: {
  t: Dictionary["forms"];
  locale: Locale;
  defaultProduct?: string;
}) {
  const { status, errors, message, submit } = useFormSubmit("/api/business", t.connectionError);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(form.entries()), locale };

    const local = validateBusiness(data, t.validation);
    setClientErrors(local);
    if (Object.keys(local).length > 0) {
      document.getElementById(Object.keys(local)[0])?.focus();
      return;
    }
    await submit(data);
  }

  if (status === "success") {
    return (
      <FormSuccess title={t.success.businessTitle}>
        <p>{t.success.businessText}</p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />

      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.contactSection}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput id="company" name="company" label={t.labels.company} required autoComplete="organization" error={fieldErrors.company} />
          <TextInput id="website" name="website" label={t.labels.website} placeholder={t.placeholders.website} autoComplete="url" error={fieldErrors.website} />
          <TextInput id="firstName" name="firstName" label={t.labels.firstName} required autoComplete="given-name" error={fieldErrors.firstName} />
          <TextInput id="lastName" name="lastName" label={t.labels.lastName} required autoComplete="family-name" error={fieldErrors.lastName} />
          <TextInput id="email" name="email" type="email" inputMode="email" label={t.labels.email} required autoComplete="email" error={fieldErrors.email} />
          <TextInput id="phone" name="phone" type="tel" inputMode="tel" label={t.labels.phoneRequired} autoComplete="tel" error={fieldErrors.phone} />
          <SelectField id="industry" name="industry" label={t.labels.industry} required options={t.options.industry} placeholder={t.selectPlaceholder} error={fieldErrors.industry} />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-gold-dark">{t.needSection}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField id="product" name="product" label={t.labels.product} required options={t.options.product} placeholder={t.selectPlaceholder} defaultValue={defaultProduct} error={fieldErrors.product} />
          <TextInput id="orderQuantity" name="orderQuantity" label={t.labels.orderQuantity} placeholder={t.placeholders.orderQuantity} error={fieldErrors.orderQuantity} />
          <SelectField id="orderFrequency" name="orderFrequency" label={t.labels.orderFrequency} options={t.options.orderFrequency} placeholder={t.selectPlaceholder} error={fieldErrors.orderFrequency} />
          <TextInput id="currentUsage" name="currentUsage" label={t.labels.currentUsage} placeholder={t.placeholders.currentUsage} error={fieldErrors.currentUsage} />
          <SelectField id="packaging" name="packaging" label={t.labels.packaging} options={t.options.packaging} placeholder={t.selectPlaceholder} error={fieldErrors.packaging} />
          <TextInput id="purpose" name="purpose" label={t.labels.purpose} placeholder={t.placeholders.purpose} error={fieldErrors.purpose} />
        </div>
        <TextArea id="message" name="message" label={t.labels.message} placeholder={t.placeholders.businessMessage} error={fieldErrors.message} />
      </fieldset>

      <PrivacyCheckbox t={t.privacy} error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? t.submit.sending : t.submit.business}
      </Button>
      <p className="text-xs text-cocoa-muted">{t.requiredHint}</p>
    </form>
  );
}
