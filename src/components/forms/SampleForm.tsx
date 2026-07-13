"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateSample } from "@/lib/validation";
import {
  Honeypot,
  SelectField,
  TextArea,
  TextInput,
} from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";
import { industryOptions, productOptions } from "@/config/content";

/** Kompaktes Musteranfrage-Formular. */
export function SampleForm() {
  const { status, errors, message, submit } = useFormSubmit("/api/sample");
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      company: form.get("company"),
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      industry: form.get("industry"),
      product: form.get("product"),
      message: form.get("message"),
      privacy: form.get("privacy"),
      company_website: form.get("company_website"),
    };

    const local = validateSample(data);
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
      <FormSuccess title="Vielen Dank für Ihre Musteranfrage">
        <p>
          Wir haben Ihre Anfrage erhalten und melden uns in der Regel innerhalb
          eines Werktags bei Ihnen. Für qualifizierte Geschäftskunden prüfen wir
          gerne die Zusendung eines Produktmusters.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />
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
          id="name"
          name="name"
          label="Ansprechpartner"
          required
          autoComplete="name"
          error={fieldErrors.name}
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
          label="Telefon (optional)"
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
        <SelectField
          id="product"
          name="product"
          label="Gewünschtes Produkt (optional)"
          options={productOptions}
          error={fieldErrors.product}
        />
      </div>
      <TextArea
        id="message"
        name="message"
        label="Ihr Bedarf (optional)"
        placeholder="Kurz zu Menge, Verwendungszweck und gewünschter Qualität."
        error={fieldErrors.message}
      />
      <PrivacyCheckbox error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Muster anfragen"}
      </Button>
      <p className="text-xs text-cocoa-muted">
        Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet. Pflichtfelder sind mit&nbsp;* markiert.
      </p>
    </form>
  );
}
