/**
 * Gemeinsame, framework-freie Validierung fuer Client und Server.
 * So gelten auf beiden Seiten dieselben Regeln und Fehlermeldungen.
 */

export type FieldErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Zulaessig: Ziffern, Leerzeichen, +, -, /, (, ) – mind. 6 Ziffern
const PHONE_RE = /^[+]?[\d\s()/-]{6,}$/;

export function isEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export function isPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return PHONE_RE.test(value.trim()) && digits.length >= 6;
}

function req(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Validierung der Musteranfrage. */
export function validateSample(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};

  if (!req(data.company)) errors.company = "Bitte geben Sie Ihren Firmennamen an.";
  if (!req(data.name)) errors.name = "Bitte geben Sie Ihren Namen an.";

  const email = req(data.email);
  if (!email) errors.email = "Bitte geben Sie eine E-Mail-Adresse an.";
  else if (!isEmail(email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";

  const phone = req(data.phone);
  if (phone && !isPhone(phone))
    errors.phone = "Bitte geben Sie eine gültige Telefonnummer an.";

  if (!req(data.industry)) errors.industry = "Bitte wählen Sie Ihre Branche.";

  if (data.privacy !== true && data.privacy !== "on")
    errors.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  return errors;
}

/** Validierung der ausfuehrlichen B2B-Anfrage. */
export function validateBusiness(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};

  if (!req(data.company)) errors.company = "Bitte geben Sie Ihren Firmennamen an.";
  if (!req(data.firstName)) errors.firstName = "Bitte geben Sie Ihren Vornamen an.";
  if (!req(data.lastName)) errors.lastName = "Bitte geben Sie Ihren Nachnamen an.";

  const email = req(data.email);
  if (!email) errors.email = "Bitte geben Sie eine E-Mail-Adresse an.";
  else if (!isEmail(email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";

  const phone = req(data.phone);
  if (phone && !isPhone(phone))
    errors.phone = "Bitte geben Sie eine gültige Telefonnummer an.";

  if (!req(data.industry)) errors.industry = "Bitte wählen Sie Ihre Branche.";
  if (!req(data.product)) errors.product = "Bitte wählen Sie ein Produkt.";

  if (data.privacy !== true && data.privacy !== "on")
    errors.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  return errors;
}

/** Validierung des einfachen Kontaktformulars. */
export function validateContact(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};

  if (!req(data.name)) errors.name = "Bitte geben Sie Ihren Namen an.";

  const email = req(data.email);
  if (!email) errors.email = "Bitte geben Sie eine E-Mail-Adresse an.";
  else if (!isEmail(email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";

  if (!req(data.message)) errors.message = "Bitte geben Sie eine Nachricht ein.";

  if (data.privacy !== true && data.privacy !== "on")
    errors.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  return errors;
}
