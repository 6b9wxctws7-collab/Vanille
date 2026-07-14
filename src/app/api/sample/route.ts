import { NextResponse } from "next/server";
import { validateSample } from "@/lib/validation";
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

  const errors = validateSample(data, t.validation);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: t.validation.checkInputs },
      { status: 422 },
    );
  }

  try {
    await processSubmission({
      type: "sample",
      data,
      meta: {
        receivedAt: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") ?? undefined,
      },
    });
  } catch (err) {
    console.error("Fehler bei der Verarbeitung der Musteranfrage:", err);
    return NextResponse.json({ ok: false, message: t.errorGeneric }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
