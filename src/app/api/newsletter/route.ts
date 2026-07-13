import { NextResponse } from "next/server";
import { isEmail } from "@/lib/validation";
import { isSpam, processSubmission } from "@/lib/submissions";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  if (isSpam(data)) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!isEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        errors: { email: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
        message: "Bitte prüfen Sie Ihre E-Mail-Adresse.",
      },
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
    return NextResponse.json(
      { ok: false, message: "Anmeldung fehlgeschlagen. Bitte später erneut versuchen." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
