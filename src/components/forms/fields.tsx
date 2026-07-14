import type { ReactNode, SelectHTMLAttributes } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-cocoa placeholder:text-cocoa-muted/60 transition-colors focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark";

function borderClass(error?: string) {
  return error ? "border-red-400" : "border-cocoa/15";
}

type LabelProps = {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
};

export function FieldLabel({ htmlFor, children, required }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-cocoa">
      {children}
      {required && <span className="ml-0.5 text-gold-dark">*</span>}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextInput({ label, error, id, required, ...props }: InputProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <FieldLabel htmlFor={id!} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldBase} ${borderClass(error)}`}
        {...props}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function TextArea({ label, error, id, required, ...props }: TextareaProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <FieldLabel htmlFor={id!} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={id}
        required={required}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldBase} ${borderClass(error)} resize-y`}
        {...props}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  placeholder?: string;
};

export function SelectField({
  label,
  error,
  id,
  required,
  options,
  placeholder = "Bitte wählen",
  defaultValue = "",
  ...props
}: SelectProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <FieldLabel htmlFor={id!} required={required}>
        {label}
      </FieldLabel>
      <select
        id={id}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldBase} ${borderClass(error)}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

/** Versteckter Honeypot gegen Spam-Bots. */
export function Honeypot() {
  return (
    <div className="hidden" aria-hidden="true">
      <label htmlFor="company_website">
        Bitte dieses Feld frei lassen
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  );
}
