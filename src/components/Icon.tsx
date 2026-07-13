import type { SVGProps } from "react";

/**
 * Schlanke Inline-Icon-Bibliothek (keine externe Abhaengigkeit).
 * Stroke-basiert, passt sich per `currentColor` an die Textfarbe an.
 */

type IconName =
  | "cake"
  | "chocolate"
  | "icecream"
  | "hotel"
  | "bread"
  | "jar"
  | "bottle"
  | "shop"
  | "handshake"
  | "route"
  | "check"
  | "scale"
  | "chat"
  | "sample"
  | "leaf"
  | "shield"
  | "truck"
  | "phone"
  | "mail"
  | "whatsapp"
  | "map-pin"
  | "clock"
  | "arrow-right"
  | "download"
  | "menu"
  | "close"
  | "plus"
  | "minus";

const paths: Record<IconName, JSX.Element> = {
  cake: (
    <>
      <path d="M3 21h18M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M12 3v3M9 4.5 12 6l3-1.5" />
      <path d="M5 15c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0" />
    </>
  ),
  chocolate: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 9h16M4 14h16M9 4v16M15 4v16" />
    </>
  ),
  icecream: (
    <>
      <path d="M8 10a4 4 0 1 1 8 0" />
      <path d="M7 10h10l-5 11-5-11Z" />
    </>
  ),
  hotel: (
    <>
      <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16" />
      <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M10 21v-3a2 2 0 0 1 4 0v3" />
    </>
  ),
  bread: (
    <>
      <path d="M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4Z" />
      <path d="M9 9c0-1.5 1-2.5 3-2.5S15 7.5 15 9" />
    </>
  ),
  jar: (
    <>
      <path d="M8 3h8M7 7h10v11a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V7Z" />
      <path d="M7 7c0-1.5 1-3 2-4M17 7c0-1.5-1-3-2-4M9 12h6" />
    </>
  ),
  bottle: (
    <>
      <path d="M10 2h4v3l1.5 2.5A4 4 0 0 1 16 9.5V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9.5a4 4 0 0 1 .5-2L10 5V2Z" />
      <path d="M8 13h8" />
    </>
  ),
  shop: (
    <>
      <path d="M4 9h16l-1-4H5L4 9Z" />
      <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17 8 14a2 2 0 0 1 0-3l3-3 3 2 3-2 3 3-5 5-2-2" />
      <path d="M3 8l4-2 4 2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h6a3 3 0 0 0 3-3V9" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14M5 7 3 12h4L5 7Zm14 0-2 5h4l-2-5Z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </>
  ),
  sample: (
    <>
      <path d="M9 3h6v4l2 12a2 2 0 0 1-2 2.5H9A2 2 0 0 1 7 19L9 7V3Z" />
      <path d="M8 12h8M9 3h6" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20C3 12 8 5 20 4c1 12-6 17-14 16Z" />
      <path d="M4 20 14 9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </>
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 3 5a1 1 0 0 1 1-1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.5c-.3.7-.3 1.6.4 2.6a8 8 0 0 0 3.6 3.4c1.2.5 1.9.4 2.5 0 .3-.2.5-.7.4-1l-.9-1-1.3.5-1.6-1.6.5-1.3-1-1c-.3-.1-.8 0-1 .4Z" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  download: (
    <>
      <path d="M12 3v12M8 11l4 4 4-4" />
      <path d="M4 19h16" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
};

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
