"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateBusiness } from "@/lib/validation";
import {
  Honeypot,
  SelectField,
  TextArea,
  TextInput,
} from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import {
  industryOptions,
  orderFrequencyOptions,
  packagingOptions,
  productOptions,
} from "@/config/content";

/** Ausfuehrliches B2B-Anfrageformular. */
export function BusinessForm() {
  const { status, errors, message, submit } = useFormSubmit("/api/business");
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const local = validateBusiness(data);
    setClientErrors(local);
    if (Object.keys(local).length > 0) {
      const first = document.getElementById(Object.keys(local)[0]);
      first?.focus();
      return;
    }
    await submit(data);
  }

  if (status === "success") {
    return (
      <FormSuccess title="Vielen Dank für Ihre Anfrage">
        <p>
          Ihre Anfrage ist bei uns eingegangen. Ihr persönlicher Ansprechpartner
          prüft Ihren Bedarf und meldet sich mit einem individuellen Angebot –
          in der Regel innerhalb eines Werktags.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />

      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Kontakt
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput
            id="company"
            name="company"
            label="Firmenname"
            required
            autoComplete="organization"
            error={fieldErrors.company}
          />
          <TextInput
            id="website"
            name="website"
            label="Website (optional)"
            placeholder="https://"
            autoComplete="url"
            error={fieldErrors.website}
          />
          <TextInput
            id="firstName"
            name="firstName"
            label="Vorname"
            required
            autoComplete="given-name"
            error={fieldErrors.firstName}
          />
          <TextInput
            id="lastName"
            name="lastName"
            label="Nachname"
            required
            autoComplete="family-name"
            error={fieldErrors.lastName}
          />
          <TextInput
            id="email"
            name="email"
            type="email"
            inputMode="email"
            label="E-Mail"
            required
            autoComplete="email"
            error={fieldErrors.email}
          />
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            label="Telefonnummer (optional)"
            autoComplete="tel"
            error={fieldErrors.phone}
          />
          <SelectField
            id="industry"
            name="industry"
            label="Branche"
            required
            options={industryOptions}
            error={fieldErrors.industry}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
          Ihr Bedarf
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="product"
            name="product"
            label="Gewünschtes Produkt"
            required
            options={productOptions}
            error={fieldErrors.product}
          />
          <TextInput
            id="orderQuantity"
            name="orderQuantity"
            label="Erwartete Bestellmenge (optional)"
            placeholder="z. B. 2 kg pro Bestellung"
            error={fieldErrors.orderQuantity}
          />
          <SelectField
            id="orderFrequency"
            name="orderFrequency"
            label="Bestellhäufigkeit (optional)"
            options={orderFrequencyOptions}
            error={fieldErrors.orderFrequency}
          />
          <TextInput
            id="currentUsage"
            name="currentUsage"
            label="Aktueller Vanilleverbrauch (optional)"
            placeholder="z. B. ca. 5 kg pro Jahr"
            error={fieldErrors.currentUsage}
          />
          <SelectField
            id="packaging"
            name="packaging"
            label="Gewünschte Verpackungsgröße (optional)"
            options={packagingOptions}
            error={fieldErrors.packaging}
          />
          <TextInput
            id="purpose"
            name="purpose"
            label="Verwendungszweck (optional)"
            placeholder="z. B. Patisserie, Glace, Extraktion"
            error={fieldErrors.purpose}
          />
        </div>
        <TextArea
          id="message"
          name="message"
          label="Nachricht (optional)"
          placeholder="Weitere Angaben zu Ihrem Betrieb oder Ihrer Anfrage."
          error={fieldErrors.message}
        />
      </fieldset>

      <PrivacyCheckbox error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
      </Button>
      <p className="text-xs text-cocoa-muted">
        Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet. Pflichtfelder sind mit&nbsp;* markiert.
      </p>
    </form>
  );
}
