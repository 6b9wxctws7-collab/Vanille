"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { useLocale } from "@/components/i18n/LocaleLink";
import { localizeHref } from "@/i18n/routing";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-white shadow-card hover:bg-gold-dark hover:shadow-card-hover",
  secondary:
    "border border-cocoa/20 bg-white/70 text-cocoa hover:border-gold hover:text-gold-dark",
  ghost: "text-cocoa hover:text-gold-dark",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: CommonProps & Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const locale = useLocale();
  return (
    <Link
      href={localizeHref(locale, href)}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
