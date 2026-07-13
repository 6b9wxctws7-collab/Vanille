import { Icon } from "@/components/Icon";

type FormSuccessProps = {
  title: string;
  children: React.ReactNode;
};

/** Professionelle Bestaetigung nach erfolgreichem Formularversand. */
export function FormSuccess({ title, children }: FormSuccessProps) {
  return (
    <div
      role="status"
      className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-card"
    >
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold-dark">
        <Icon name="check" size={30} />
      </div>
      <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
      <div className="prose-cocoa mx-auto mt-3 max-w-md">{children}</div>
    </div>
  );
}
