"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { validateContact } from "@/lib/validation";
import { Honeypot, TextArea, TextInput } from "@/components/forms/fields";
import { PrivacyCheckbox } from "@/components/forms/PrivacyCheckbox";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { Button } from "@/components/ui/Button";

/** Einfaches Kontaktformular. */
export function ContactForm() {
  const { status, errors, message, submit } = useFormSubmit("/api/contact");
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const fieldErrors = { ...clientErrors, ...errors };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const local = validateContact(data);
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
      <FormSuccess title="Nachricht erhalten">
        <p>
          Vielen Dank für Ihre Nachricht. Wir melden uns in der Regel innerhalb
          eines Werktags bei Ihnen zurück.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          id="name"
          name="name"
          label="Name"
          required
          autoComplete="name"
          error={fieldErrors.name}
        />
        <TextInput
          id="company"
          name="company"
          label="Firma (optional)"
          autoComplete="organization"
          error={fieldErrors.company}
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
      </div>
      <TextArea
        id="message"
        name="message"
        label="Ihre Nachricht"
        required
        error={fieldErrors.message}
      />
      <PrivacyCheckbox error={fieldErrors.privacy} />

      {status === "error" && message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
