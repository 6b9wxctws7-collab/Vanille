import type { ReactNode } from "react";

/** Einheitliche Typografie fuer Rechtstexte. */
export function LegalContent({
  disclaimer,
  children,
}: {
  disclaimer: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed text-cocoa-light [&_h2]:mt-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-cocoa [&_h3]:font-semibold [&_h3]:text-cocoa [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          <div className="rounded-2xl border border-gold/25 bg-gold/5 p-4 text-sm text-cocoa-light">
            {disclaimer}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
