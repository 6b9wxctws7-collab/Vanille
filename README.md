# [Markenname] – B2B-Website für Bourbon-Vanille aus Madagaskar

Moderne, responsive B2B-Website für ein Schweizer Unternehmen, das Premium-
Bourbon-Vanilleschoten aus Madagaskar an Gastronomie, Patisserien, Chocolatiers,
Bäckereien, Eisdielen, Hotels und Lebensmittelmanufakturen verkauft.

Der Schwerpunkt liegt auf **Vertrauen, Musteranfragen und persönlichem
B2B-Vertrieb** – die Seite funktioniert vollständig **ohne Onlineshop**.

Gebaut mit **Next.js (App Router)**, **TypeScript** und **Tailwind CSS**.

---

## Schnellstart

Voraussetzungen: **Node.js 18.17+** (empfohlen: 20+) und **npm**.

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen vorbereiten (optional, siehe unten)
cp .env.example .env.local

# 3. Entwicklungsserver starten
npm run dev
# → http://localhost:3000

# 4. Produktions-Build erstellen und starten
npm run build
npm run start
```

---

## Wichtigste Anpassungen (zentral)

Alle Marken- und Kontaktdaten werden an **einer** Stelle gepflegt:

| Was                                   | Datei                        |
| ------------------------------------- | ---------------------------- |
| Markenname, Kontakt, Adresse, WhatsApp, Rechtliches | `src/config/site.ts`         |
| Navigation & Footer-Links             | `src/config/navigation.ts`   |
| Produkte, Branchen, Vorteile, FAQ …   | `src/config/content.ts`      |
| Bilder                                | `public/images/` (siehe README dort) |

> Ersetzen Sie überall die mit `[ ]` markierten **Platzhalter** durch echte
> Angaben (z. B. `[Markenname]`, `[+41 …]`, Adresse, Rechtstexte).

### WhatsApp-Button

In `src/config/site.ts` unter `contact.whatsapp` die Nummer im internationalen
Format **ohne** `+` und Leerzeichen eintragen (z. B. `41790000000`).

---

## Projektstruktur

```
src/
├── app/                      # Seiten (App Router) & API-Routen
│   ├── layout.tsx            # Grundgerüst, SEO, Navbar/Footer, Widgets
│   ├── page.tsx              # Startseite
│   ├── produkte/             # Produktseite
│   ├── qualitaet/            # Qualität
│   ├── herkunft/             # Herkunft / Lieferkette
│   ├── fuer-geschaeftskunden/# B2B-Seite mit Anfrageformular
│   ├── ueber-uns/            # Über uns
│   ├── kontakt/              # Kontakt + FAQ
│   ├── muster-anfragen/      # Musteranfrage
│   ├── impressum|datenschutz|agb|lieferbedingungen/
│   ├── sitemap.ts            # Sitemap
│   ├── robots.ts             # robots.txt
│   ├── not-found.tsx         # 404-Seite
│   └── api/                  # Formular-Endpunkte (sample, business, contact, newsletter)
├── components/               # Wiederverwendbare Komponenten
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Seitenabschnitte (Hero, Benefits …)
│   ├── forms/                # Formulare & Felder
│   └── ui/                   # Button, Reveal, SectionHeading …
├── config/                   # site, navigation, content (Inhalte)
└── lib/                      # Validierung, Formular-Hook, SEO, Submissions
```

---

## Formulare & Anbindung von Diensten

Die Formulare (Muster-, B2B-, Kontaktanfrage, Newsletter) senden an einfache
API-Routen unter `src/app/api/*`. **Standardmässig werden Anfragen nur
serverseitig protokolliert und nicht öffentlich gespeichert.**

Die Verarbeitung ist in `src/lib/submissions.ts` gebündelt und bereits für
folgende Dienste **vorbereitet** – zum Aktivieren nur die passenden
Umgebungsvariablen (`.env.local`) setzen:

- **Resend** – E-Mail-Benachrichtigung (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`)
- **Supabase** – Persistenz (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`)
- **HubSpot** – CRM (`HUBSPOT_ACCESS_TOKEN`)
- **Brevo** – E-Mail/CRM (`BREVO_API_KEY`)
- **Mailchimp** – Newsletter (`MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`)

Alle Werte siehe `.env.example`. Ist keiner gesetzt, bleibt der jeweilige
Versand inaktiv – der Nutzer erhält trotzdem eine Erfolgsmeldung.

**Spam-Schutz:** Jedes Formular enthält ein verstecktes Honeypot-Feld
(`company_website`). Ausgefüllte Honeypots werden serverseitig verworfen.

**Validierung:** Client und Server nutzen dieselben Regeln
(`src/lib/validation.ts`) mit verständlichen deutschen Fehlermeldungen.

---

## SEO & strukturierte Daten

- Individuelle **Seitentitel** und **Meta-Beschreibungen** pro Seite
  (`src/lib/seo.ts` + `metadata` je Seite).
- **Open-Graph-** und **Twitter-Card**-Metadaten.
- **Sitemap** (`/sitemap.xml`) und **robots.txt** (`/robots.txt`).
- **Strukturierte Daten (JSON-LD)** für `Organization`, `Product` und `FAQPage`
  (`src/components/StructuredData.tsx`).

> Preise werden bewusst **nicht** ausgezeichnet – Angebote erfolgen auf Anfrage.

---

## Web-Analytics (Platzhalter)

In `src/components/Analytics.tsx` vorbereitet für **Google Analytics** oder
**Plausible**. Aktivierung über `NEXT_PUBLIC_GA_ID` bzw.
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. Für strikte Einwilligung lässt sich das Laden an
den Cookie-Hinweis (`src/components/CookieBanner.tsx`) koppeln.

---

## Barrierefreiheit & Performance

- Semantisches HTML, sinnvolle Überschriftenhierarchie, „Skip-Link“.
- Gut sichtbare **Fokuszustände**, `aria`-Attribute, tastaturbedienbares Menü
  und Akkordeon.
- Bilder über `next/image` (automatische Optimierung), Schriften über
  `next/font`.
- Dezente Scroll-Animationen respektieren `prefers-reduced-motion`.

---

## Bilder

Fotos in `public/images/` ablegen – siehe `public/images/README.md`. Ohne echte
Bilder werden automatisch gebrandete Platzhalter angezeigt.

---

## Rechtliche Hinweise

Impressum, Datenschutz, AGB und Lieferbedingungen sind als **Vorlagen mit
Platzhaltern** angelegt und müssen vor Veröffentlichung rechtlich geprüft und
vervollständigt werden. Es werden **keine** unbelegten Bio-/Fair-Trade-Aussagen,
erfundenen Zertifikate, Laborwerte oder Kundenbewertungen verwendet.

---

## Skripte

| Befehl          | Zweck                          |
| --------------- | ------------------------------ |
| `npm run dev`   | Entwicklungsserver             |
| `npm run build` | Produktions-Build              |
| `npm run start` | Produktionsserver              |
| `npm run lint`  | Linting                        |
