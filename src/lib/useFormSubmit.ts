"use client";

import { useState } from "react";
import type { FieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

type Result = {
  ok: boolean;
  errors?: FieldErrors;
  message?: string;
};

/**
 * Kleiner Hook fuer den Formularversand an eine API-Route.
 * Kapselt Status, Feldfehler und eine allgemeine Fehlermeldung.
 */
export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<string>("");

  async function submit(payload: Record<string, unknown>) {
    setStatus("submitting");
    setErrors({});
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: Result = await res.json().catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setStatus("success");
        return true;
      }

      setErrors(data.errors ?? {});
      setMessage(
        data.message ??
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      );
      setStatus("error");
      return false;
    } catch {
      setMessage(
        "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      );
      setStatus("error");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setErrors({});
    setMessage("");
  }

  return { status, errors, message, submit, reset };
}
