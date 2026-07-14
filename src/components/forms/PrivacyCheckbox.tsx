import type { Dictionary } from "@/i18n";
import { FieldError } from "./fields";
import { LocaleLink } from "@/components/i18n/LocaleLink";

type Props = {
  t: Dictionary["forms"]["privacy"];
  id?: string;
  error?: string;
};

export function PrivacyCheckbox({ t, id = "privacy", error }: Props) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 text-sm text-cocoa-muted">
        <input
          id={id}
          name={id}
          type="checkbox"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-cocoa/30 text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
        />
        <span>
          {t.before}{" "}
          <LocaleLink href="/datenschutz" className="font-medium text-gold-dark underline">
            {t.link}
          </LocaleLink>{" "}
          {t.after} <span className="text-gold-dark">*</span>
        </span>
      </label>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
