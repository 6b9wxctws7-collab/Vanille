import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cocoa/10 bg-cream-200/40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(176,141,87,0.10), transparent 40%)",
        }}
      />
      <div className="container-page py-14 sm:py-16 lg:py-20">
        {crumbs && (
          <nav aria-label="Brotkrumen" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cocoa-muted">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={c.href} className="hover:text-gold-dark">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cocoa-muted">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function InlineArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:underline"
    >
      {children}
      <Icon name="arrow-right" size={16} />
    </Link>
  );
}
