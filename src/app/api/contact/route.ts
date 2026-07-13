import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
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

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: "Bitte prüfen Sie Ihre Angaben." },
      { status: 422 },
    );
  }

  try {
    await processSubmission({
      type: "contact",
      data,
      meta: {
        receivedAt: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") ?? undefined,
      },
    });
  } catch (err) {
    console.error("Fehler bei der Verarbeitung der Kontaktanfrage:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
