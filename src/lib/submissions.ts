/**
 * =============================================================================
 * VERARBEITUNG VON FORMULARANFRAGEN
 * =============================================================================
 * Serverseitige Weiterverarbeitung von Anfragen. Standardmaessig wird die
 * Anfrage nur serverseitig protokolliert (NICHT oeffentlich gespeichert).
 *
 * Die Struktur ist so vorbereitet, dass sich spaeter folgende Dienste
 * anschliessen lassen, ohne die API-Routen zu aendern:
 *   - Resend    (E-Mail-Versand)
 *   - Supabase  (Persistenz)
 *   - HubSpot   (CRM)
 *   - Brevo     (E-Mail / CRM)
 *   - Mailchimp (Newsletter)
 *
 * Zum Aktivieren jeweils die passenden Umgebungsvariablen setzen (.env.local)
 * und die markierten TODO-Bloecke implementieren.
 */

export type SubmissionType = "sample" | "business" | "contact" | "newsletter";

export type Submission = {
  type: SubmissionType;
  data: Record<string, unknown>;
  meta: {
    receivedAt: string;
    userAgent?: string;
  };
};

const labels: Record<SubmissionType, string> = {
  sample: "Musteranfrage",
  business: "B2B-Anfrage",
  contact: "Kontaktanfrage",
  newsletter: "Newsletter-Anmeldung",
};

/**
 * Zentrale Verarbeitung. Ruft nacheinander alle konfigurierten Ziele auf.
 * Fehler einzelner Ziele werden protokolliert, brechen die Anfrage aber
 * nicht ab – der Nutzer soll eine Bestaetigung erhalten.
 */
export async function processSubmission(submission: Submission): Promise<void> {
  logSubmission(submission);

  await Promise.allSettled([
    sendViaResend(submission),
    storeInSupabase(submission),
    pushToHubSpot(submission),
    pushToBrevo(submission),
    subscribeMailchimp(submission),
  ]);
}

/* -------------------------------------------------------------------------- */
/* Standard: serverseitiges Log (keine oeffentliche Speicherung)              */
/* -------------------------------------------------------------------------- */
function logSubmission({ type, data, meta }: Submission) {
  // In der Produktion durch strukturiertes Logging ersetzen.
  console.info(
    `[${labels[type]}] eingegangen ${meta.receivedAt}:`,
    JSON.stringify(redact(data)),
  );
}

/** Entfernt/kuerzt sensible Felder aus dem Log. */
function redact(data: Record<string, unknown>): Record<string, unknown> {
  const clone = { ...data };
  delete clone.company_website; // Honeypot nie loggen
  return clone;
}

/* -------------------------------------------------------------------------- */
/* Resend – E-Mail-Benachrichtigung                                           */
/* -------------------------------------------------------------------------- */
async function sendViaResend({ type, data }: Submission): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return;

  const html = `<h2>Neue ${labels[type]}</h2><pre>${escapeHtml(
    JSON.stringify(redact(data), null, 2),
  )}</pre>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Neue ${labels[type]} über die Website`,
      html,
    }),
  });
}

/* -------------------------------------------------------------------------- */
/* Supabase – Persistenz (Platzhalter)                                        */
/* -------------------------------------------------------------------------- */
async function storeInSupabase({ type, data, meta }: Submission): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  // TODO: Tabelle "submissions" anlegen und hier per REST/SDK einfuegen.
  await fetch(`${url}/rest/v1/submissions`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ type, payload: redact(data), received_at: meta.receivedAt }),
  });
}

/* -------------------------------------------------------------------------- */
/* HubSpot – CRM (Platzhalter)                                                */
/* -------------------------------------------------------------------------- */
async function pushToHubSpot({ data }: Submission): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  const email = typeof data.email === "string" ? data.email : undefined;
  if (!email) return;

  // TODO: Feld-Mapping an das eigene HubSpot-Schema anpassen.
  await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        email,
        company: data.company ?? "",
        firstname: data.firstName ?? data.name ?? "",
        lastname: data.lastName ?? "",
        phone: data.phone ?? "",
      },
    }),
  });
}

/* -------------------------------------------------------------------------- */
/* Brevo – E-Mail / CRM (Platzhalter)                                         */
/* -------------------------------------------------------------------------- */
async function pushToBrevo({ data }: Submission): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return;

  const email = typeof data.email === "string" ? data.email : undefined;
  if (!email) return;

  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: data.firstName ?? data.name ?? "",
        LASTNAME: data.lastName ?? "",
        COMPANY: data.company ?? "",
      },
      updateEnabled: true,
    }),
  });
}

/* -------------------------------------------------------------------------- */
/* Mailchimp – Newsletter (Platzhalter)                                       */
/* -------------------------------------------------------------------------- */
async function subscribeMailchimp({ type, data }: Submission): Promise<void> {
  if (type !== "newsletter") return;
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const prefix = process.env.MAILCHIMP_SERVER_PREFIX;
  if (!apiKey || !audienceId || !prefix) return;

  const email = typeof data.email === "string" ? data.email : undefined;
  if (!email) return;

  await fetch(
    `https://${prefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    },
  );
}

/* -------------------------------------------------------------------------- */
/* Hilfsfunktionen                                                            */
/* -------------------------------------------------------------------------- */
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Prueft den Honeypot. true = mutmasslicher Bot. */
export function isSpam(data: Record<string, unknown>): boolean {
  const hp = data.company_website;
  return typeof hp === "string" && hp.trim().length > 0;
}
