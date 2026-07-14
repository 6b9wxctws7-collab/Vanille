/**
 * =============================================================================
 * WÖRTERBUCH – Deutsch (Referenzsprache)
 * =============================================================================
 * Diese Datei definiert zugleich den Typ `Dictionary` (siehe src/i18n/index.ts).
 * Die französische Fassung (fr.ts) muss dieselbe Struktur besitzen.
 */
export const de = {
  meta: {
    siteDescription:
      "Premium Bourbon-Vanilleschoten direkt aus Madagaskar für Gastronomie, Patisserie, Chocolatiers und Manufakturen. Kostenlose Muster und individuelle B2B-Angebote aus der Schweiz.",
    defaultTitle: "Vanora – Premium Bourbon-Vanille aus Madagaskar",
    home: {
      title: "Premium Bourbon-Vanille aus Madagaskar für Profis",
      description:
        "B2B-Lieferant für Bourbon-Vanilleschoten aus Madagaskar. Wir beliefern Patisserie, Gastronomie, Chocolatiers und Manufakturen in der Schweiz – mit Mustern und individuellen Angeboten.",
    },
    produkte: {
      title: "Produkte – Bourbon-Vanilleschoten für den Grosshandel",
      description:
        "Gourmet-Bourbon-Vanille und Vanille für Extraktion und Verarbeitung aus Madagaskar. Verpackungseinheiten von 100 g bis 1 kg und grössere Mengen auf Anfrage.",
    },
    qualitaet: {
      title: "Qualität – Worauf es bei professioneller Vanille ankommt",
      description:
        "Aroma, Feuchtigkeit, Länge, Flexibilität, Verarbeitung, Lagerung, Chargenkonstanz und Rückverfolgbarkeit: die entscheidenden Qualitätsmerkmale professioneller Bourbon-Vanille.",
    },
    herkunft: {
      title: "Herkunft – Vanille aus Madagaskar, transparent und rückverfolgbar",
      description:
        "Von der Bestäubung bis zur Lieferung: die Lieferkette unserer Bourbon-Vanille aus Madagaskar. Nachvollziehbare Chargen und langfristige Produzentenbeziehungen.",
    },
    geschaeftskunden: {
      title: "Für Geschäftskunden – individuelle Vanille-Angebote",
      description:
        "Persönliche Beratung, Mengenstaffelungen, wiederkehrende Lieferungen und chargenbezogene Spezifikationen. Stellen Sie Ihre B2B-Anfrage für Bourbon-Vanille aus Madagaskar.",
    },
    ueberUns: {
      title: "Über uns – direkter Vanillehandel mit Sitz in der Schweiz",
      description:
        "Aus persönlichen Kontakten zu Vanilleproduzenten in Madagaskar entstanden: hochwertige Bourbon-Vanille, transparent und direkt für professionelle Anwender.",
    },
    kontakt: {
      title: "Kontakt – B2B-Anfragen für Bourbon-Vanille",
      description:
        "Kontaktieren Sie uns per Formular, E-Mail, Telefon oder WhatsApp. Wir beraten Geschäftskunden zu Mustern, Mengen und individuellen Angeboten.",
    },
    muster: {
      title: "Kostenloses Muster anfragen",
      description:
        "Fordern Sie ein Produktmuster unserer Bourbon-Vanille aus Madagaskar an. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Musters.",
    },
    impressum: { title: "Impressum", description: "Impressum und Anbieterkennzeichnung." },
    datenschutz: {
      title: "Datenschutzerklärung",
      description: "Informationen zum Umgang mit personenbezogenen Daten.",
    },
    agb: {
      title: "Allgemeine Geschäftsbedingungen",
      description: "Allgemeine Geschäftsbedingungen für Geschäftskunden.",
    },
    lieferbedingungen: {
      title: "Lieferbedingungen",
      description: "Informationen zu Versand und Lieferung.",
    },
    notFound: { title: "Seite nicht gefunden", description: "Die gewünschte Seite existiert nicht." },
  },

  nav: {
    items: [
      { label: "Startseite", href: "/" },
      { label: "Produkte", href: "/produkte" },
      { label: "Qualität", href: "/qualitaet" },
      { label: "Herkunft", href: "/herkunft" },
      { label: "Für Geschäftskunden", href: "/fuer-geschaeftskunden" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    cta: "Kostenloses Muster anfragen",
    home: "Vanora – zur Startseite",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    languageLabel: "Sprache",
  },

  hero: {
    eyebrow: "Premium Bourbon-Vanille aus Madagaskar für professionelle Anwender",
    title:
      "Bourbon-Vanille aus Madagaskar – direkt, rückverfolgbar und für Profis ausgewählt",
    subtitle:
      "Wir beliefern Patisserien, Chocolatiers, Gastronomiebetriebe und Manufakturen mit aromatischer Vanille in verlässlicher Qualität und flexiblen B2B-Mengen.",
    ctaSample: "Kostenloses Muster anfragen",
    ctaProducts: "Produkte ansehen",
    imageAlt: "Vanillepflanzen in einer Plantage in Madagaskar",
    trustBadges: [
      "Direkte Produzentenbeziehungen",
      "Chargenbezogene Qualitätsprüfung",
      "Flexible B2B-Mengen",
      "Lieferung aus der Schweiz",
    ],
  },

  industries: {
    eyebrow: "Einsatzbereiche",
    title: "Für wen unsere Vanille geeignet ist",
    description:
      "Ob sichtbares Mark im Dessert oder aromatische Grundlage für die Weiterverarbeitung – wir liefern die passende Qualität für Ihren Betrieb.",
    items: [
      {
        title: "Patisserien und Konditoreien",
        description:
          "Für Cremes, Mousses, Tortenfüllungen und feine Desserts, in denen sich ein klares, komplexes Vanillearoma entfalten soll.",
        icon: "cake",
      },
      {
        title: "Chocolatiers und Confiserien",
        description:
          "Für Ganache, Pralinenfüllungen und Trüffel – dort, wo Vanille die Schokolade begleitet, ohne sie zu überdecken.",
        icon: "chocolate",
      },
      {
        title: "Eisdielen und Glacemanufakturen",
        description:
          "Für Glace und Sorbets mit ausgeprägtem Mark und sichtbaren Vanillepunkten als Zeichen echter Schote.",
        icon: "icecream",
      },
      {
        title: "Hotels und Restaurants",
        description:
          "Für die à-la-carte-Küche und Bankett-Desserts, bei denen gleichbleibende Qualität über die Saison zählt.",
        icon: "hotel",
      },
      {
        title: "Bäckereien",
        description:
          "Für Feingebäck, Hefeteige, Puddings und Füllungen mit natürlicher Vanillenote statt reinem Aroma.",
        icon: "bread",
      },
      {
        title: "Lebensmittelmanufakturen",
        description:
          "Für Konfitüren, Aufstriche, Milchprodukte und andere Erzeugnisse mit definierter, wiederkehrender Rezeptur.",
        icon: "jar",
      },
      {
        title: "Destillerien",
        description:
          "Für Liköre, Spirituosen und Ansätze, in denen Vanille als aromatische Grundlage eingesetzt wird.",
        icon: "bottle",
      },
      {
        title: "Feinkost- und Gewürzhändler",
        description:
          "Für den Weiterverkauf sortierter Schoten an eine anspruchsvolle, fachkundige Kundschaft.",
        icon: "shop",
      },
    ],
  },

  productsSection: {
    eyebrow: "Unsere Produkte",
    title: "Zwei Qualitäten für unterschiedliche Anwendungen",
    description:
      "Feste Preise nennen wir bewusst nicht. Sie hängen von Menge, Qualität und aktueller Charge ab – und werden auf Anfrage individuell angeboten.",
    allButton: "Alle Produktdetails ansehen",
    detailsLink: "Details ansehen",
  },

  products: [
    {
      slug: "gourmet-bourbon-vanille",
      name: "Gourmet-Bourbon-Vanille",
      shortDescription:
        "Weiche, aromatische und fleischige Vanilleschoten für hochwertige Desserts, Cremes, Schokolade, Gebäck und Gastronomie.",
      longDescription:
        "Unsere Gourmet-Qualität besteht aus sorgfältig sortierten, biegsamen Schoten mit hohem Markanteil. Sie eignet sich überall dort, wo Vanille sichtbar und geschmacklich im Vordergrund steht – vom Tellergericht bis zur feinen Patisserie.",
      features: [
        "Vanilla planifolia",
        "Herkunft Madagaskar",
        "sorgfältig fermentiert und getrocknet",
        "intensive, komplexe Aromatik",
        "verschiedene Längen und Sortierungen",
        "Verpackungseinheiten ab 100 Gramm",
      ],
      cta: "Angebot anfragen",
      image: "/images/produkte/gourmet-bourbon-vanille.jpg",
      imageAlt:
        "Gebündelte, glänzende Bourbon-Vanilleschoten aus Madagaskar in Gourmet-Qualität",
      qualityClasses: [
        "Gourmet / Grade A (biegsam, hoher Feuchtegehalt)",
        "Sortierung nach Längenklassen",
      ],
      useCases: [
        "Cremes, Mousses und Tortenfüllungen",
        "Schokolade, Ganache und Pralinen",
        "Glace und Sorbets",
        "Feingebäck und Desserts",
      ],
    },
    {
      slug: "vanille-extraktion-verarbeitung",
      name: "Vanille für Extraktion und Verarbeitung",
      shortDescription:
        "Vanilleschoten für Extrakte, Sirupe, Spirituosen, Eis, Pulver und industrielle Weiterverarbeitung.",
      longDescription:
        "Diese Qualität stellt das Aroma in den Vordergrund und verzichtet auf hohe optische Anforderungen. Sie ist die wirtschaftliche Grundlage für Extrakte, Sirupe, Pulver und weitere Erzeugnisse, bei denen die Schote nicht sichtbar bleibt.",
      features: [
        "gutes Aroma bei geringeren optischen Anforderungen",
        "ideal für Extraktion und Verarbeitung",
        "attraktive B2B-Konditionen",
        "größere Mengen auf Anfrage",
      ],
      cta: "Produktspezifikation anfragen",
      image: "/images/produkte/vanille-extraktion.jpg",
      imageAlt:
        "Vanilleschoten für die Extraktion und Weiterverarbeitung auf hellem Untergrund",
      qualityClasses: [
        "TK / Extraktqualität (Grade B)",
        "Sortierung nach Aroma statt Optik",
      ],
      useCases: [
        "Vanilleextrakte und -essenzen",
        "Sirupe und Liköre",
        "Vanillepulver",
        "Industrielle Weiterverarbeitung",
      ],
    },
  ],

  benefits: {
    eyebrow: "Zusammenarbeit",
    title: "Warum mit uns arbeiten?",
    description:
      "Wir verstehen uns als verlässlicher Partner für die tägliche Verarbeitung – nicht als anonymer Zwischenhändler.",
    items: [
      {
        title: "Direkter Zugang zu Produzenten",
        description:
          "Wir arbeiten mit ausgewählten Partnern in Madagaskar zusammen – kurze Wege statt anonymer Zwischenhändler.",
        icon: "handshake",
      },
      {
        title: "Transparente Lieferkette",
        description:
          "Chargen bleiben nachvollziehbar, von der Anbauregion bis zur Auslieferung aus der Schweiz.",
        icon: "route",
      },
      {
        title: "Persönliche Qualitätskontrolle",
        description:
          "Jede Lieferung wird nach definierten Merkmalen geprüft, bevor sie zu Ihnen gelangt.",
        icon: "check",
      },
      {
        title: "Kleine und größere Mengen",
        description:
          "Vom ersten Testbezug bis zur wiederkehrenden Belieferung – die Menge richtet sich nach Ihrem Bedarf.",
        icon: "scale",
      },
      {
        title: "Schnelle Kommunikation",
        description:
          "Ein fester Ansprechpartner in der Schweiz beantwortet Anfragen unkompliziert und zeitnah.",
        icon: "chat",
      },
      {
        title: "Muster vor der ersten Bestellung",
        description:
          "Qualifizierte Geschäftskunden können die Qualität vorab prüfen, bevor sie sich entscheiden.",
        icon: "sample",
      },
    ],
  },

  process: {
    eyebrow: "Ablauf",
    title: "So funktioniert die Zusammenarbeit",
    description: "In vier klaren Schritten von der ersten Anfrage bis zur Lieferung.",
    steps: [
      {
        title: "Bedarf mitteilen",
        description: "Sie nennen uns gewünschte Qualität, Menge und Verwendungszweck.",
      },
      {
        title: "Muster erhalten",
        description: "Geeignete Geschäftskunden erhalten ein Produktmuster zur Prüfung.",
      },
      {
        title: "Qualität prüfen",
        description: "Sie testen Aroma, Feuchtigkeit und Verarbeitung in Ihrem Betrieb.",
      },
      {
        title: "Angebot und Lieferung",
        description:
          "Sie erhalten ein individuelles Angebot; die Ware wird nach Vereinbarung geliefert.",
      },
    ],
  },

  origin: {
    eyebrow: "Herkunft",
    title: "Von Madagaskar direkt zu professionellen Anwendern",
    text: "Unsere Vanille stammt von ausgewählten Produzenten und Partnern in Madagaskar. Wir setzen auf langfristige Beziehungen, nachvollziehbare Chargen und eine sorgfältige Auswahl der Schoten. Jede Lieferung wird nach definierten Qualitätsmerkmalen geprüft.",
    button: "Mehr über unsere Herkunft",
    imageAlt: "Junger Produzent trägt Vanillepflanzen in Madagaskar",
  },

  qualitySection: {
    eyebrow: "Qualitätsmerkmale",
    title: "Woran wir jede Charge messen",
    description:
      "Produktspezifikationen und Analyseunterlagen stellen wir Geschäftskunden je nach Charge auf Anfrage zur Verfügung.",
    items: [
      { label: "Botanische Art", description: "Vanilla planifolia (Bourbon-Typ)." },
      { label: "Herkunft", description: "Madagaskar, definierte Anbauregionen." },
      { label: "Länge der Schoten", description: "Sortierung nach Längenklassen je nach Qualität." },
      { label: "Feuchtigkeitsbereich", description: "Definierter Feuchtebereich je Charge und Qualitätsstufe." },
      { label: "Optischer Zustand", description: "Bewertung von Farbe, Oberfläche und Unversehrtheit." },
      { label: "Flexibilität", description: "Biegsamkeit als Hinweis auf Feuchte und Frische." },
      { label: "Aroma", description: "Sensorische Beurteilung von Intensität und Profil." },
      { label: "Chargennummer", description: "Eindeutige Kennzeichnung jeder Lieferung." },
      { label: "Rückverfolgbarkeit", description: "Zuordnung der Charge zu Herkunft und Verarbeitung." },
      { label: "Mögliche Laboranalysen", description: "Analyseunterlagen je nach Charge auf Anfrage." },
    ],
  },

  sampleCta: {
    title: "Überzeugen Sie sich selbst von der Qualität",
    text: "Sie verarbeiten regelmäßig Vanille in Ihrem Betrieb? Teilen Sie uns kurz Ihren Bedarf mit. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters.",
    button: "Muster anfragen",
  },

  footer: {
    productsHeading: "Produkte",
    businessHeading: "Geschäftskunden",
    newsletterHeading: "Newsletter",
    newsletterText:
      "Gelegentliche Informationen zu Verfügbarkeit, Chargen und Konditionen. Kein Spam.",
    productLinks: [
      { label: "Gourmet-Bourbon-Vanille", href: "/produkte#gourmet-bourbon-vanille" },
      { label: "Vanille für Extraktion", href: "/produkte#vanille-extraktion-verarbeitung" },
      { label: "Produktdatenblätter", href: "/produkte#datenblaetter" },
      { label: "Qualität", href: "/qualitaet" },
    ],
    businessLinks: [
      { label: "Für Geschäftskunden", href: "/fuer-geschaeftskunden" },
      { label: "Musteranfrage", href: "/muster-anfragen" },
      { label: "Herkunft", href: "/herkunft" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutzerklärung", href: "/datenschutz" },
      { label: "Allgemeine Geschäftsbedingungen", href: "/agb" },
      { label: "Lieferbedingungen", href: "/lieferbedingungen" },
    ],
    rights: "Alle Rechte vorbehalten.",
    socialLabel: "Social Media (Platzhalter)",
  },

  cookie: {
    text: "Wir verwenden nur technisch notwendige Cookies. Optionale Statistik-Cookies (z. B. für Reichweitenmessung) setzen wir erst nach Ihrer Zustimmung. Mehr dazu in der",
    privacyLink: "Datenschutzerklärung",
    decline: "Nur notwendige",
    accept: "Alle akzeptieren",
    dialogLabel: "Cookie-Hinweis",
  },

  newsletter: {
    placeholder: "Ihre geschäftliche E-Mail",
    aria: "Zum Newsletter anmelden",
    emailLabel: "E-Mail-Adresse",
    success: "Vielen Dank! Bitte bestätigen Sie ggf. Ihre Anmeldung per E-Mail.",
  },

  mobileCta: { call: "Anrufen", sample: "Muster" },

  whatsapp: {
    aria: "Über WhatsApp Kontakt aufnehmen",
    message:
      "Guten Tag, ich interessiere mich für Ihre Bourbon-Vanille und hätte eine B2B-Anfrage.",
  },

  common: {
    requestQuote: "Angebot anfragen",
    requestSample: "Muster anfragen",
    details: "Details ansehen",
    skipToContent: "Zum Inhalt springen",
    breadcrumbLabel: "Brotkrumen",
  },

  produktePage: {
    heroEyebrow: "Produkte",
    heroTitle: "Bourbon-Vanilleschoten für professionelle Anwender",
    heroDescription:
      "Zwei klar unterscheidbare Qualitäten – abgestimmt auf sichtbare Anwendungen und auf die Weiterverarbeitung. Preise nennen wir individuell auf Anfrage.",
    variabilityHint:
      "Verfügbarkeit, Eigenschaften und Preise können je nach Ernte, Charge und Bestellmenge variieren.",
    featuresLabel: "Merkmale",
    qualityClassesLabel: "Mögliche Qualitätsklassen",
    useCasesLabel: "Einsatzbereiche",
    packagingLabel: "Verfügbare Verpackungseinheiten",
    gallery: {
      eyebrow: "Einblicke",
      title: "Von der Schote bis zur Verpackung",
      description:
        "Ausgewählte, gebündelte und sortierte Schoten – sorgfältig getrocknet und für den Versand vorbereitet.",
      items: [
        { src: "/images/produkte/vanille-buendel.jpg", alt: "Gebündelte Vanilleschoten werden von Hand sortiert", caption: "Sortierte Bündel" },
        { src: "/images/produkte/vanille-trocknung.jpg", alt: "Vanilleschoten liegen zum Trocknen ausgebreitet", caption: "Trocknung" },
        { src: "/images/produkte/vanille-verpackung.jpg", alt: "Vakuumierte Beutel mit Vanilleschoten für den Versand", caption: "Versandfertige Gebinde" },
      ],
    },
    storageTitle: "Lagerhinweise",
    storageItems: [
      "Kühl, dunkel und vor direkter Sonneneinstrahlung geschützt lagern.",
      "Luftdicht verschlossen aufbewahren, um Aroma und Feuchte zu erhalten.",
      "Nicht im Kühlschrank lagern – Kondenswasser vermeiden.",
    ],
    originTitle: "Herkunft",
    originText:
      "Vanilla planifolia aus ausgewählten Regionen Madagaskars. Jede Charge bleibt der Herkunft zugeordnet und wird nach definierten Merkmalen geprüft.",
    originLink: "Mehr zur Lieferkette",
    downloadsEyebrow: "Downloads",
    downloadsTitle: "Produktdatenblätter",
    downloadsDescription:
      "Datenblätter und – je nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf Anfrage bereit. Die Download-Felder sind vorbereitet und werden ergänzt, sobald die Dokumente vorliegen.",
    dataSheetPrefix: "Datenblatt:",
    dataSheetSub: "PDF-Platzhalter – auf Anfrage verfügbar",
    request: "Anfragen",
  },

  packagingUnits: ["100 g", "250 g", "500 g", "1 kg", "größere Mengen auf Anfrage"],

  qualitaetPage: {
    heroEyebrow: "Qualität",
    heroTitle: "Worauf es bei professioneller Vanille ankommt",
    heroDescription:
      "Qualität ist mehr als ein Etikett. Wir beurteilen jede Charge nach nachvollziehbaren Kriterien – damit Sie im Betrieb verlässlich arbeiten können.",
    criteria: [
      { title: "Aroma", description: "Ausschlaggebend ist ein klares, komplexes Profil ohne Fehlnoten. Wir beurteilen Intensität und Charakter sensorisch je Charge.", icon: "leaf" },
      { title: "Feuchtigkeit", description: "Der Feuchtegehalt bestimmt Geschmeidigkeit und Verarbeitung. Zu trockene Schoten verlieren an Aroma, zu feuchte neigen zu Problemen bei der Lagerung.", icon: "shield" },
      { title: "Länge", description: "Längenklassen dienen der Sortierung und Kalkulation. Sie sagen wenig über das Aroma aus, sind für die Verarbeitung aber praktisch relevant.", icon: "scale" },
      { title: "Flexibilität", description: "Biegsame Schoten sind ein Hinweis auf ausgewogene Feuchte und Frische. Sie lassen sich gut aufschneiden und auskratzen.", icon: "check" },
      { title: "Zustand", description: "Farbe, Oberfläche und Unversehrtheit werden bewertet. Für sichtbare Anwendungen zählt die Optik stärker als bei der Extraktion.", icon: "shield" },
      { title: "Verarbeitung", description: "Fermentation und Trocknung entscheiden über das Ergebnis. Eine sorgfältige Verarbeitung ist die Grundlage für konstante Qualität.", icon: "handshake" },
      { title: "Lagerung", description: "Kühl, dunkel und luftdicht gelagert bleibt Vanille lange verwendbar. Richtige Lagerung schützt Aroma und Flexibilität.", icon: "jar" },
      { title: "Chargenkonstanz", description: "Für Betriebe zählt Wiederholbarkeit. Wir dokumentieren Chargen, damit Sie planbar und gleichbleibend arbeiten können.", icon: "route" },
      { title: "Rückverfolgbarkeit", description: "Jede Charge bleibt der Herkunft und Verarbeitung zugeordnet – nachvollziehbar von der Anbauregion bis zur Lieferung.", icon: "map-pin" },
    ],
    transparencyEyebrow: "Transparenz",
    transparencyTitle: "Prüfung und Dokumentation",
    transparencyDescription: "Wir halten uns an nachvollziehbare Merkmale statt an Werbeversprechen.",
    transparencyParagraphs: [
      "Für jede Lieferung definieren wir die relevanten Merkmale und prüfen sie vor der Auslieferung. Produktspezifikationen und – je nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf Anfrage zur Verfügung.",
      "Bewusst verzichten wir auf unbelegte Aussagen. Begriffe wie „Bio“ oder „Fair Trade“ verwenden wir nur, wenn entsprechende Zertifikate vorliegen. Gesundheitsbezogene oder wissenschaftlich unbelegte Versprechen machen wir nicht.",
    ],
  },

  herkunftPage: {
    heroEyebrow: "Herkunft",
    heroTitle: "Von Madagaskar direkt zu professionellen Anwendern",
    heroDescription:
      "Unsere Vanille stammt von ausgewählten Produzenten und Partnern in Madagaskar. Wir setzen auf langfristige Beziehungen und nachvollziehbare Chargen.",
    brandBandText:
      "Vanora steht für Bourbon-Vanille, die ihren Weg von den Plantagen Madagaskars bis in Ihren Betrieb nachvollziehbar zurücklegt.",
    featureEyebrow: "Anbauregion Madagaskar",
    featureTitle: "Vanille wächst hier an schattigen Trägerbäumen – gepflegt in Handarbeit.",
    featureAlt: "Vanilleplantage mit Trägerbäumen und Ranken in Madagaskar",
    factsEyebrow: "Herkunftsdaten",
    factsTitle: "Nachvollziehbar bis zur Region",
    factsDescription:
      "Konkrete Angaben ergänzen wir, sobald sie vorliegen. Bis dahin markieren wir sie klar als Platzhalter.",
    facts: [
      { label: "Anbauregion", value: "[Region, z. B. SAVA]" },
      { label: "Partner / Produzenten", value: "[Name der Partner]" },
      { label: "Botanische Art", value: "Vanilla planifolia" },
      { label: "Erntezeitraum", value: "[Zeitraum]" },
      { label: "Zertifizierungen", value: "[sofern vorhanden]" },
    ],
    supplyEyebrow: "Lieferkette",
    supplyTitle: "Neun Schritte von der Blüte bis zu Ihnen",
    supplyDescription: "Jeder Schritt trägt zum Aroma und zur Nachvollziehbarkeit bei.",
    supplyChain: [
      { title: "Anbau", description: "Die Vanillepflanze wächst in tropischen Regionen Madagaskars an schattigen Trägern." },
      { title: "Bestäubung", description: "Die Blüten werden von Hand bestäubt – ein aufwändiger, entscheidender Schritt." },
      { title: "Ernte", description: "Die Schoten werden zum richtigen Reifezeitpunkt geerntet, um das Aromapotenzial zu sichern." },
      { title: "Fermentation", description: "Durch kontrolliertes Schwitzen und Ruhen entwickelt sich das charakteristische Aroma." },
      { title: "Trocknung", description: "Die Schoten trocknen langsam, bis Feuchte und Flexibilität ausgewogen sind." },
      { title: "Sortierung", description: "Sortierung nach Länge, Zustand und Qualität in definierte Klassen." },
      { title: "Qualitätskontrolle", description: "Prüfung nach festgelegten Merkmalen und Dokumentation der Charge." },
      { title: "Export", description: "Fachgerechte Verpackung und Ausfuhr aus Madagaskar mit Chargenzuordnung." },
      { title: "Lieferung an den Kunden", description: "Kommissionierung und Versand an Geschäftskunden aus der Schweiz." },
    ],
    producersEyebrow: "Produzenten",
    producersTitle: "Menschen hinter der Vanille",
    producersDescription:
      "Echte Einblicke aus der Anbauregion – von der Pflege der Pflanzen über die Ernte bis zur Sortierung. Wir zeigen ausschließlich echtes Bildmaterial.",
    gallery: [
      { src: "/images/herkunft/pflege.jpg", alt: "Produzent pflegt die Vanillepflanzen an den Trägerbäumen", caption: "Pflege der Pflanzen" },
      { src: "/images/herkunft/bestaeubung.jpg", alt: "Produzent arbeitet an den Vanilleranken in der Plantage", caption: "Handarbeit in der Plantage" },
      { src: "/images/herkunft/gruene-schote.jpg", alt: "Hand hält eine reifende grüne Vanilleschote an der Ranke", caption: "Reifende grüne Schoten" },
      { src: "/images/herkunft/qualitaetskontrolle.jpg", alt: "Produzenten bündeln und prüfen getrocknete Vanilleschoten", caption: "Bündeln und Prüfen" },
      { src: "/images/herkunft/sortierung.jpg", alt: "Getrocknete Vanilleschoten werden auf Tischen sortiert", caption: "Sortierung nach der Trocknung" },
      { src: "/images/herkunft/transport.jpg", alt: "Ein Mann transportiert Säcke aus der Anbauregion", caption: "Transport aus der Region" },
    ],
    note: "Wir verzichten bewusst auf unbelegte Aussagen zu Nachhaltigkeit oder Zertifizierung. Solche Angaben ergänzen wir nur mit entsprechendem Nachweis.",
    mapRegion: "Anbauregion: [Platzhalter]",
  },

  geschaeftskundenPage: {
    heroEyebrow: "Für Geschäftskunden",
    heroTitle: "Ein Partner für Ihren regelmässigen Vanillebedarf",
    heroDescription:
      "Wir arbeiten ausschliesslich mit Geschäftskunden – vom kleinen Handwerksbetrieb bis zur Manufaktur. Persönlich, transparent und ohne Onlineshop-Standard.",
    services: [
      { title: "Persönliche Beratung", description: "Ein fester Ansprechpartner in der Schweiz begleitet Sie von der ersten Frage bis zur laufenden Belieferung.", icon: "chat" },
      { title: "Individuelle Angebote", description: "Preise und Konditionen richten sich nach Qualität, Menge und aktueller Charge – individuell für Ihren Betrieb.", icon: "handshake" },
      { title: "Mengenstaffelungen", description: "Grössere Abnahmemengen werden bei der Kalkulation berücksichtigt.", icon: "scale" },
      { title: "Wiederkehrende Lieferungen", description: "Für regelmässigen Bedarf vereinbaren wir passende Intervalle und planbare Mengen.", icon: "route" },
      { title: "Musteranfragen", description: "Qualifizierte Geschäftskunden können die Qualität vorab prüfen, bevor sie sich entscheiden.", icon: "sample" },
      { title: "Chargenbezogene Spezifikationen", description: "Produktspezifikationen und – je nach Charge – Analyseunterlagen auf Anfrage.", icon: "shield" },
      { title: "Flexible Verpackungsgrössen", description: "Von 100 g bis 1 kg und grösseren Gebinden – abgestimmt auf Ihre Abläufe.", icon: "jar" },
      { title: "Sondervereinbarungen", description: "Für grössere Abnehmer sind individuelle Vereinbarungen möglich.", icon: "check" },
    ],
    formEyebrow: "Anfrage",
    formTitle: "Ihre B2B-Anfrage",
    formText:
      "Je mehr wir über Ihren Bedarf wissen, desto passender können wir ein Angebot erstellen. Alle Angaben ausser den Pflichtfeldern sind freiwillig.",
    trustPoints: [
      { icon: "clock", text: "Antwort in der Regel innerhalb eines Werktags" },
      { icon: "shield", text: "Ihre Angaben werden vertraulich behandelt" },
      { icon: "sample", text: "Muster für qualifizierte Geschäftskunden möglich" },
    ],
  },

  ueberUnsPage: {
    heroEyebrow: "Über uns",
    heroTitle: "Direkter Vanillehandel aus persönlicher Überzeugung",
    storyEyebrow: "Unsere Geschichte",
    storyTitle: "Wie wir entstanden sind",
    story: [
      "Vanora entstand aus persönlichen Kontakten zu Vanilleproduzenten in Madagaskar und dem Ziel, hochwertige Vanille transparenter und direkter für professionelle Anwender verfügbar zu machen.",
      "Statt anonymer Handelsketten setzen wir auf direkte Beziehungen, nachvollziehbare Chargen und eine sorgfältige Auswahl der Schoten. So können Betriebe verlässlich mit einer Qualität arbeiten, die sie vorab prüfen und wiederholt beziehen können.",
      "Wir machen bewusst keine Angaben zu Unternehmensjahren, Teamgrössen oder Kennzahlen, die wir nicht belegen können. Was zählt, ist die Qualität in Ihrer Küche oder Manufaktur – und ein Ansprechpartner, der erreichbar ist.",
    ],
    storyImageAlt: "Produzenten bündeln und sortieren Bourbon-Vanilleschoten in Madagaskar",
    principlesEyebrow: "Was uns wichtig ist",
    principlesTitle: "Grundsätze unserer Arbeit",
    principles: [
      { title: "Persönlicher Ansprechpartner", description: "Sie sprechen direkt mit einer festen Kontaktperson – ohne Umwege über anonyme Hotlines.", icon: "chat" },
      { title: "Sitz in der Schweiz", description: "Wir liefern und kommunizieren aus der Schweiz.", icon: "map-pin" },
      { title: "Fokus auf B2B", description: "Unser Angebot richtet sich an Betriebe, die Vanille verarbeiten.", icon: "handshake" },
      { title: "Langfristige Produzentenbeziehungen", description: "Wir setzen auf Kontinuität statt auf wechselnde Quellen.", icon: "route" },
      { title: "Nachvollziehbare Qualität", description: "Chargen bleiben rückverfolgbar und werden geprüft.", icon: "shield" },
      { title: "Unkomplizierte Kommunikation", description: "Kurze Wege, klare Antworten, verlässliche Absprachen.", icon: "check" },
    ],
  },

  kontaktPage: {
    heroEyebrow: "Kontakt",
    heroTitle: "Wir sind persönlich für Sie da",
    heroDescription:
      "Ob erste Frage, Musteranfrage oder konkretes Angebot – melden Sie sich auf dem Weg, der Ihnen am liebsten ist.",
    b2bNote: "Hinweis: Unser Angebot richtet sich an Geschäftskunden (B2B).",
    addressLabel: "Adresse",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    hoursLabel: "Geschäftszeiten",
    whatsappButton: "Über WhatsApp schreiben",
    formTitle: "Schreiben Sie uns",
    formSubtitle: "Wir melden uns in der Regel innerhalb eines Werktags.",
    faqEyebrow: "FAQ",
    faqTitle: "Häufige Fragen",
    faqDescription:
      "Antworten auf die wichtigsten Fragen rund um Muster, Mengen, Herkunft und Lieferung.",
  },

  faq: [
    { question: "Welche Mindestbestellmenge gibt es?", answer: "Wir arbeiten flexibel. Kleinere Erstbezüge sind ebenso möglich wie regelmäßige größere Lieferungen. Die konkrete Menge stimmen wir im Rahmen Ihrer Anfrage ab." },
    { question: "Kann ich ein Muster erhalten?", answer: "Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters, damit Sie Aroma und Verarbeitung vorab beurteilen können. Nutzen Sie dafür unser Musterformular." },
    { question: "Woher stammt die Vanille?", answer: "Unsere Bourbon-Vanille (Vanilla planifolia) stammt von ausgewählten Produzenten und Partnern in Madagaskar. Jede Charge bleibt der Herkunft zugeordnet." },
    { question: "Welche Verpackungseinheiten sind verfügbar?", answer: "Verfügbar sind unter anderem 100 g, 250 g, 500 g und 1 kg. Größere Mengen bereiten wir individuell auf Anfrage vor." },
    { question: "Wie wird die Vanille gelagert?", answer: "Wir empfehlen eine kühle, dunkle und luftdichte Lagerung. Detaillierte Lagerhinweise finden Sie auf der Produktseite und in den Produktdatenblättern." },
    { question: "Gibt es unterschiedliche Qualitätsstufen?", answer: "Ja. Wir unterscheiden insbesondere zwischen Gourmet-Qualität für sichtbare Anwendungen und Vanille für Extraktion und Verarbeitung. Die passende Stufe hängt von Ihrem Verwendungszweck ab." },
    { question: "Liefern Sie nur innerhalb der Schweiz?", answer: "Wir liefern aus der Schweiz. Lieferungen ins Ausland klären wir individuell im Rahmen Ihrer Anfrage." },
    { question: "Können größere Mengen regelmäßig geliefert werden?", answer: "Ja. Für wiederkehrende Belieferungen vereinbaren wir passende Mengen und Intervalle – gerne auch mit Mengenstaffelung." },
    { question: "Sind Analyseunterlagen verfügbar?", answer: "Produktspezifikationen und – je nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf Anfrage zur Verfügung." },
    { question: "Wie erhalte ich ein individuelles Angebot?", answer: "Teilen Sie uns über das Anfrageformular Produkt, Menge und Verwendungszweck mit. Wir melden uns mit einem auf Ihren Bedarf abgestimmten Angebot." },
  ],

  musterPage: {
    heroEyebrow: "Musteranfrage",
    heroTitle: "Überzeugen Sie sich selbst von der Qualität",
    heroDescription:
      "Sie verarbeiten regelmässig Vanille in Ihrem Betrieb? Teilen Sie uns kurz Ihren Bedarf mit. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters.",
    stepsEyebrow: "So geht es weiter",
    stepsTitle: "In wenigen Schritten zum Muster",
    note: "Muster richten sich an Betriebe, die Vanille verarbeiten. Bitte haben Sie Verständnis, dass wir Musteranfragen individuell prüfen.",
  },

  forms: {
    sampleSectionNeed: "Ihr Bedarf (optional)",
    contactSection: "Kontakt",
    needSection: "Ihr Bedarf",
    selectPlaceholder: "Bitte wählen",
    requiredHint: "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Pflichtfelder sind mit * markiert.",
    labels: {
      company: "Firmenname",
      contactPerson: "Ansprechpartner",
      name: "Name",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefon (optional)",
      phoneRequired: "Telefonnummer (optional)",
      companyOptional: "Firma (optional)",
      website: "Website (optional)",
      industry: "Branche",
      product: "Gewünschtes Produkt",
      productOptional: "Gewünschtes Produkt (optional)",
      orderQuantity: "Erwartete Bestellmenge (optional)",
      orderFrequency: "Bestellhäufigkeit (optional)",
      currentUsage: "Aktueller Vanilleverbrauch (optional)",
      packaging: "Gewünschte Verpackungsgröße (optional)",
      purpose: "Verwendungszweck (optional)",
      message: "Nachricht (optional)",
      messageRequired: "Ihre Nachricht",
      need: "Ihr Bedarf (optional)",
    },
    placeholders: {
      need: "Kurz zu Menge, Verwendungszweck und gewünschter Qualität.",
      website: "https://",
      orderQuantity: "z. B. 2 kg pro Bestellung",
      currentUsage: "z. B. ca. 5 kg pro Jahr",
      purpose: "z. B. Patisserie, Glace, Extraktion",
      businessMessage: "Weitere Angaben zu Ihrem Betrieb oder Ihrer Anfrage.",
    },
    privacy: {
      before: "Ich habe die",
      link: "Datenschutzerklärung",
      after: "gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.",
    },
    submit: { sample: "Muster anfragen", business: "Anfrage senden", contact: "Nachricht senden", sending: "Wird gesendet …" },
    success: {
      sampleTitle: "Vielen Dank für Ihre Musteranfrage",
      sampleText: "Wir haben Ihre Anfrage erhalten und melden uns in der Regel innerhalb eines Werktags bei Ihnen. Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters.",
      businessTitle: "Vielen Dank für Ihre Anfrage",
      businessText: "Ihre Anfrage ist bei uns eingegangen. Ihr persönlicher Ansprechpartner prüft Ihren Bedarf und meldet sich mit einem individuellen Angebot – in der Regel innerhalb eines Werktags.",
      contactTitle: "Nachricht erhalten",
      contactText: "Vielen Dank für Ihre Nachricht. Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen zurück.",
    },
    errorGeneric: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    connectionError: "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
    options: {
      industry: [
        "Patisserie / Konditorei",
        "Chocolatier / Confiserie",
        "Eisdiele / Glacemanufaktur",
        "Hotel / Restaurant",
        "Bäckerei",
        "Lebensmittelmanufaktur",
        "Destillerie",
        "Feinkost- / Gewürzhandel",
        "Andere",
      ],
      product: ["Gourmet-Bourbon-Vanille", "Vanille für Extraktion und Verarbeitung", "Beides / noch unentschieden"],
      orderFrequency: ["Einmalig / Testbezug", "Monatlich", "Vierteljährlich", "Nach Bedarf"],
      packaging: ["100 g", "250 g", "500 g", "1 kg", "Größere Mengen"],
    },
    validation: {
      company: "Bitte geben Sie Ihren Firmennamen an.",
      name: "Bitte geben Sie Ihren Namen an.",
      firstName: "Bitte geben Sie Ihren Vornamen an.",
      lastName: "Bitte geben Sie Ihren Nachnamen an.",
      emailRequired: "Bitte geben Sie eine E-Mail-Adresse an.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      phoneInvalid: "Bitte geben Sie eine gültige Telefonnummer an.",
      industry: "Bitte wählen Sie Ihre Branche.",
      product: "Bitte wählen Sie ein Produkt.",
      message: "Bitte geben Sie eine Nachricht ein.",
      privacy: "Bitte stimmen Sie der Datenschutzerklärung zu.",
      checkInputs: "Bitte prüfen Sie Ihre Angaben.",
    },
  },

  notFoundPage: {
    code: "Fehler 404",
    title: "Diese Seite gibt es nicht",
    text: "Der gewünschte Inhalt wurde verschoben oder existiert nicht mehr. Kehren Sie zur Startseite zurück oder stellen Sie uns Ihre Anfrage.",
    home: "Zur Startseite",
    contact: "Kontakt aufnehmen",
    orDirect: "Oder direkt zu den",
    products: "Produkten",
  },

  legal: {
    disclaimer:
      "Hinweis: Dieser Text ist eine vorbereitete Vorlage mit Platzhaltern. Bitte lassen Sie die Inhalte vor der Veröffentlichung rechtlich prüfen und ersetzen Sie alle mit [ ] markierten Angaben.",
    eyebrow: "Rechtliches",
    impressum: {
      companyHeading: "Angaben zum Unternehmen",
      contactHeading: "Kontakt",
      contactLabelEmail: "E-Mail:",
      contactLabelPhone: "Telefon:",
      repHeading: "Vertretungsberechtigte Person",
      registerHeading: "Registereintrag",
      registerLabel: "Handelsregister / UID:",
      vatLabel: "MwSt-Nummer:",
      liabilityHeading: "Haftungsausschluss",
      liabilityText:
        "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. [Bitte anpassen.]",
      copyrightHeading: "Urheberrecht",
      copyrightText:
        "Die auf dieser Website veröffentlichten Inhalte unterliegen dem Urheberrecht. [Bitte anpassen.]",
    },
    datenschutz: {
      sections: [
        { heading: "1. Verantwortliche Stelle", text: "Verantwortlich ist das im Impressum genannte Unternehmen. E-Mail für Datenschutzanfragen: siehe Kontaktangaben." },
        { heading: "2. Erhebung und Verarbeitung von Daten", text: "Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung der Website sowie zur Bearbeitung Ihrer Anfragen erforderlich ist." },
        { heading: "3. Kontakt- und Anfrageformulare", text: "Wenn Sie uns über ein Formular (Kontakt, Muster- oder B2B-Anfrage) kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihres Anliegens. Die Anfragen werden nicht öffentlich gespeichert. [Bitte ergänzen: Speicherdauer, ggf. eingesetzte Dienste wie Resend, Supabase, HubSpot, Brevo oder Mailchimp.]" },
        { heading: "4. Newsletter", text: "Für den Versand eines Newsletters verarbeiten wir Ihre E-Mail-Adresse auf Grundlage Ihrer Einwilligung. Sie können sich jederzeit abmelden. [Bitte ergänzen: eingesetzter Dienst und Verfahren.]" },
        { heading: "5. Cookies und Reichweitenmessung", text: "Wir verwenden technisch notwendige Cookies. Optionale Statistik-Cookies (z. B. Google Analytics oder Plausible) setzen wir erst nach Ihrer Einwilligung über den Cookie-Hinweis. [Bitte an das eingesetzte Werkzeug anpassen.]" },
        { heading: "6. Ihre Rechte", text: "Sie haben – im Rahmen der geltenden Gesetze – das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch. Wenden Sie sich hierzu an die im Impressum genannte Kontaktadresse." },
        { heading: "7. Kontakt zum Datenschutz", text: "[Bitte ergänzen: Ansprechpartner / Kontaktstelle für Datenschutz.]" },
      ],
    },
    agb: {
      sections: [
        { heading: "1. Geltungsbereich", text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Angebote, Lieferungen und Leistungen gegenüber Geschäftskunden (B2B). [Bitte anpassen.]" },
        { heading: "2. Angebot und Vertragsschluss", text: "Unsere Angebote sind freibleibend. Preise und Verfügbarkeit richten sich nach Menge, Qualität und aktueller Charge und werden individuell angeboten. Ein Vertrag kommt mit unserer Auftragsbestätigung zustande." },
        { heading: "3. Preise", text: "Es gelten die im jeweiligen individuellen Angebot genannten Preise. [Bitte ergänzen: Währung, MwSt, Nebenkosten.]" },
        { heading: "4. Lieferung", text: "Einzelheiten zur Lieferung regeln unsere Lieferbedingungen sowie das individuelle Angebot. [Bitte anpassen.]" },
        { heading: "5. Zahlungsbedingungen", text: "[Bitte ergänzen: Zahlungsziele, Zahlungsarten, Verzug.]" },
        { heading: "6. Gewährleistung und Haftung", text: "Naturprodukte unterliegen natürlichen Schwankungen. Massgeblich sind die im Angebot bzw. in der Produktspezifikation genannten Merkmale. [Bitte ergänzen.]" },
        { heading: "7. Anwendbares Recht und Gerichtsstand", text: "Es gilt Schweizer Recht. Gerichtsstand ist [Ort]. [Bitte anpassen.]" },
      ],
    },
    lieferbedingungen: {
      sections: [
        { heading: "Liefergebiet", text: "Wir liefern aus der Schweiz. Lieferungen ins Ausland klären wir individuell im Rahmen Ihrer Anfrage. [Bitte anpassen.]" },
        { heading: "Lieferzeit", text: "Die Lieferzeit richtet sich nach Verfügbarkeit, Charge und Bestellmenge und wird im individuellen Angebot bestätigt. [Bitte ergänzen.]" },
        { heading: "Versandkosten", text: "[Bitte ergänzen: Versandkosten, Mindermengenzuschläge, Freigrenzen.]" },
        { heading: "Verpackung", text: "Die Ware wird fachgerecht verpackt. Verfügbare Verpackungseinheiten reichen von 100 g bis 1 kg; grössere Gebinde auf Anfrage." },
        { heading: "Transport und Gefahrenübergang", text: "[Bitte ergänzen: Incoterms bzw. Regelung zum Gefahrenübergang.]" },
        { heading: "Annahme und Prüfung", text: "Bitte prüfen Sie die Ware bei Erhalt. Beanstandungen richten Sie bitte zeitnah an unseren Kontakt. [Bitte anpassen.]" },
      ],
    },
  },
};

export type Dictionary = typeof de;
