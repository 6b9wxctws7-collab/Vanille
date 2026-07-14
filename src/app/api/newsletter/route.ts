import { NextResponse } from "next/server";
import { isEmail } from "@/lib/validation";
import { isSpam, processSubmission } from "@/lib/submissions";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Bad request." }, { status: 400 });
  }

  const locale = typeof data.locale === "string" && isLocale(data.locale) ? data.locale : "de";
  const t = getDictionary(locale).forms;

  if (isSpam(data)) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, errors: { email: t.validation.emailInvalid }, message: t.validation.checkInputs },
      { status: 422 },
    );
  }

  try {
    await processSubmission({
      type: "newsletter",
      data: { email },
      meta: { receivedAt: new Date().toISOString() },
    });
  } catch (err) {
    console.error("Fehler bei der Newsletter-Anmeldung:", err);
    return NextResponse.json({ ok: false, message: t.errorGeneric }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
