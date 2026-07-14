/**
 * Gemeinsame, framework-freie Validierung für Client und Server.
 * Die Fehlermeldungen werden als sprachabhängiges Objekt (vm) übergeben,
 * damit Client und Server dieselben Regeln in der jeweiligen Sprache nutzen.
 */

export type FieldErrors = Record<string, string>;

/** Struktur der Validierungsmeldungen (entspricht dict.forms.validation). */
export type ValidationMessages = {
  company: string;
  name: string;
  firstName: string;
  lastName: string;
  emailRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  industry: string;
  product: string;
  message: string;
  privacy: string;
  checkInputs: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

function privacyOk(value: unknown): boolean {
  return value === true || value === "on" || value === "true";
}

export function validateSample(
  data: Record<string, unknown>,
  vm: ValidationMessages,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!req(data.company)) errors.company = vm.company;
  if (!req(data.name)) errors.name = vm.name;
  const email = req(data.email);
  if (!email) errors.email = vm.emailRequired;
  else if (!isEmail(email)) errors.email = vm.emailInvalid;
  const phone = req(data.phone);
  if (phone && !isPhone(phone)) errors.phone = vm.phoneInvalid;
  if (!req(data.industry)) errors.industry = vm.industry;
  if (!privacyOk(data.privacy)) errors.privacy = vm.privacy;
  return errors;
}

export function validateBusiness(
  data: Record<string, unknown>,
  vm: ValidationMessages,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!req(data.company)) errors.company = vm.company;
  if (!req(data.firstName)) errors.firstName = vm.firstName;
  if (!req(data.lastName)) errors.lastName = vm.lastName;
  const email = req(data.email);
  if (!email) errors.email = vm.emailRequired;
  else if (!isEmail(email)) errors.email = vm.emailInvalid;
  const phone = req(data.phone);
  if (phone && !isPhone(phone)) errors.phone = vm.phoneInvalid;
  if (!req(data.industry)) errors.industry = vm.industry;
  if (!req(data.product)) errors.product = vm.product;
  if (!privacyOk(data.privacy)) errors.privacy = vm.privacy;
  return errors;
}

export function validateContact(
  data: Record<string, unknown>,
  vm: ValidationMessages,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!req(data.name)) errors.name = vm.name;
  const email = req(data.email);
  if (!email) errors.email = vm.emailRequired;
  else if (!isEmail(email)) errors.email = vm.emailInvalid;
  if (!req(data.message)) errors.message = vm.message;
  if (!privacyOk(data.privacy)) errors.privacy = vm.privacy;
  return errors;
}
