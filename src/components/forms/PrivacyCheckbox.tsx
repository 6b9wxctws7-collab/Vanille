import Link from "next/link";
import { FieldError } from "./fields";

type Props = {
  id?: string;
  error?: string;
};

export function PrivacyCheckbox({ id = "privacy", error }: Props) {
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
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-medium text-gold-dark underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
          meiner Anfrage zu. <span className="text-gold-dark">*</span>
        </span>
      </label>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
