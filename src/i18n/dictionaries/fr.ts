/**
 * =============================================================================
 * DICTIONNAIRE – Français
 * =============================================================================
 * Même structure que de.ts (langue de référence).
 */
import type { Dictionary } from "./de";

export const fr: Dictionary = {
  meta: {
    siteDescription:
      "Gousses de vanille Bourbon premium directement de Madagascar pour la restauration, la pâtisserie, les chocolatiers et les manufactures. Échantillons gratuits et offres B2B individuelles depuis la Suisse.",
    defaultTitle: "Vanora – Vanille Bourbon premium de Madagascar",
    home: {
      title: "Vanille Bourbon premium de Madagascar pour les professionnels",
      description:
        "Fournisseur B2B de gousses de vanille Bourbon de Madagascar. Nous livrons la pâtisserie, la restauration, les chocolatiers et les manufactures en Suisse – avec échantillons et offres individuelles.",
    },
    produkte: {
      title: "Produits – Gousses de vanille Bourbon pour le commerce de gros",
      description:
        "Vanille Bourbon Gourmet et vanille pour l'extraction et la transformation, de Madagascar. Conditionnements de 100 g à 1 kg et plus grandes quantités sur demande.",
    },
    qualitaet: {
      title: "Qualité – Ce qui compte pour une vanille professionnelle",
      description:
        "Arôme, humidité, longueur, souplesse, transformation, conservation, constance des lots et traçabilité : les critères de qualité essentiels d'une vanille Bourbon professionnelle.",
    },
    herkunft: {
      title: "Origine – Vanille de Madagascar, transparente et traçable",
      description:
        "De la pollinisation à la livraison : la chaîne d'approvisionnement de notre vanille Bourbon de Madagascar. Lots traçables et relations durables avec les producteurs.",
    },
    geschaeftskunden: {
      title: "Pour les professionnels – offres de vanille sur mesure",
      description:
        "Conseil personnalisé, dégressivité des quantités, livraisons récurrentes et spécifications par lot. Envoyez votre demande B2B pour de la vanille Bourbon de Madagascar.",
    },
    ueberUns: {
      title: "À propos – commerce direct de vanille basé en Suisse",
      description:
        "Né de contacts personnels avec des producteurs de vanille à Madagascar : une vanille Bourbon de qualité, transparente et directe pour les professionnels.",
    },
    kontakt: {
      title: "Contact – demandes B2B pour la vanille Bourbon",
      description:
        "Contactez-nous par formulaire, e-mail, téléphone ou WhatsApp. Nous conseillons les professionnels sur les échantillons, les quantités et les offres individuelles.",
    },
    muster: {
      title: "Demander un échantillon gratuit",
      description:
        "Demandez un échantillon de notre vanille Bourbon de Madagascar. Pour les clients professionnels qualifiés, nous étudions volontiers l'envoi d'un échantillon.",
    },
    impressum: { title: "Mentions légales", description: "Mentions légales et informations sur l'éditeur." },
    datenschutz: {
      title: "Politique de confidentialité",
      description: "Informations sur le traitement des données personnelles.",
    },
    agb: {
      title: "Conditions générales de vente",
      description: "Conditions générales de vente pour les clients professionnels.",
    },
    lieferbedingungen: {
      title: "Conditions de livraison",
      description: "Informations sur l'expédition et la livraison.",
    },
    notFound: { title: "Page introuvable", description: "La page demandée n'existe pas." },
  },

  nav: {
    items: [
      { label: "Accueil", href: "/" },
      { label: "Produits", href: "/produkte" },
      { label: "Qualité", href: "/qualitaet" },
      { label: "Origine", href: "/herkunft" },
      { label: "Pour les professionnels", href: "/fuer-geschaeftskunden" },
      { label: "À propos", href: "/ueber-uns" },
      { label: "Contact", href: "/kontakt" },
    ],
    cta: "Demander un échantillon gratuit",
    home: "Vanora – vers l'accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
  },

  hero: {
    eyebrow: "Vanille Bourbon premium de Madagascar pour les professionnels",
    title:
      "Vanille Bourbon de Madagascar – directe, traçable et sélectionnée pour les professionnels",
    subtitle:
      "Nous fournissons pâtisseries, chocolatiers, restaurants et manufactures en vanille aromatique, de qualité fiable et en quantités B2B flexibles.",
    ctaSample: "Demander un échantillon gratuit",
    ctaProducts: "Voir les produits",
    imageAlt: "Plants de vanille dans une plantation à Madagascar",
    trustBadges: [
      "Relations directes avec les producteurs",
      "Contrôle qualité par lot",
      "Quantités B2B flexibles",
      "Expédition depuis la Suisse",
    ],
  },

  industries: {
    eyebrow: "Domaines d'application",
    title: "À qui s'adresse notre vanille",
    description:
      "Qu'il s'agisse de grains visibles dans un dessert ou d'une base aromatique pour la transformation – nous livrons la qualité adaptée à votre établissement.",
    items: [
      {
        title: "Pâtisseries et confiseries",
        description:
          "Pour crèmes, mousses, garnitures de gâteaux et desserts fins, où un arôme de vanille clair et complexe doit s'exprimer.",
        icon: "cake",
      },
      {
        title: "Chocolatiers et confiseurs",
        description:
          "Pour ganaches, fourrages de pralines et truffes – là où la vanille accompagne le chocolat sans le masquer.",
        icon: "chocolate",
      },
      {
        title: "Glaciers et manufactures de glaces",
        description:
          "Pour glaces et sorbets au grain prononcé, avec des points de vanille visibles, signe d'une véritable gousse.",
        icon: "icecream",
      },
      {
        title: "Hôtels et restaurants",
        description:
          "Pour la cuisine à la carte et les desserts de banquet, où la régularité de la qualité compte tout au long de la saison.",
        icon: "hotel",
      },
      {
        title: "Boulangeries",
        description:
          "Pour la petite pâtisserie, les pâtes levées, les crèmes et les fourrages, avec une note de vanille naturelle plutôt qu'un simple arôme.",
        icon: "bread",
      },
      {
        title: "Manufactures alimentaires",
        description:
          "Pour confitures, pâtes à tartiner, produits laitiers et autres préparations à recette définie et récurrente.",
        icon: "jar",
      },
      {
        title: "Distilleries",
        description:
          "Pour liqueurs, spiritueux et macérations, où la vanille sert de base aromatique.",
        icon: "bottle",
      },
      {
        title: "Épiceries fines et négociants en épices",
        description:
          "Pour la revente de gousses triées à une clientèle exigeante et avertie.",
        icon: "shop",
      },
    ],
  },

  productsSection: {
    eyebrow: "Nos produits",
    title: "Deux qualités pour des usages différents",
    description:
      "Nous ne communiquons volontairement pas de prix fixes. Ils dépendent de la quantité, de la qualité et du lot en cours – et sont proposés individuellement sur demande.",
    allButton: "Voir tous les détails produits",
    detailsLink: "Voir les détails",
  },

  products: [
    {
      slug: "gourmet-bourbon-vanille",
      name: "Vanille Bourbon Gourmet",
      shortDescription:
        "Gousses de vanille souples, aromatiques et charnues pour desserts, crèmes, chocolat, pâtisserie et restauration haut de gamme.",
      longDescription:
        "Notre qualité Gourmet se compose de gousses soigneusement triées, souples et riches en grains. Elle convient partout où la vanille est visible et se place au premier plan gustatif – de l'assiette à la pâtisserie fine.",
      features: [
        "Vanilla planifolia",
        "Origine Madagascar",
        "fermentée et séchée avec soin",
        "arôme intense et complexe",
        "différentes longueurs et calibres",
        "conditionnements dès 100 grammes",
      ],
      cta: "Demander une offre",
      image: "/images/produkte/gourmet-bourbon-vanille.jpg",
      imageAlt:
        "Gousses de vanille Bourbon de Madagascar en qualité Gourmet, brillantes et liées en bottes",
      qualityClasses: [
        "Gourmet / Grade A (souple, humidité élevée)",
        "Tri par classes de longueur",
      ],
      useCases: [
        "Crèmes, mousses et garnitures de gâteaux",
        "Chocolat, ganache et pralines",
        "Glaces et sorbets",
        "Petite pâtisserie et desserts",
      ],
    },
    {
      slug: "vanille-extraktion-verarbeitung",
      name: "Vanille pour l'extraction et la transformation",
      shortDescription:
        "Gousses de vanille pour extraits, sirops, spiritueux, glaces, poudres et transformation industrielle.",
      longDescription:
        "Cette qualité met l'arôme au premier plan et renonce aux exigences esthétiques élevées. Elle constitue la base économique des extraits, sirops, poudres et autres produits où la gousse n'est pas visible.",
      features: [
        "bon arôme avec des exigences visuelles moindres",
        "idéale pour l'extraction et la transformation",
        "conditions B2B attractives",
        "plus grandes quantités sur demande",
      ],
      cta: "Demander la fiche technique",
      image: "/images/produkte/vanille-extraktion.jpg",
      imageAlt:
        "Gousses de vanille pour l'extraction et la transformation sur fond clair",
      qualityClasses: [
        "TK / qualité extraction (Grade B)",
        "Tri selon l'arôme plutôt que l'aspect",
      ],
      useCases: [
        "Extraits et essences de vanille",
        "Sirops et liqueurs",
        "Poudre de vanille",
        "Transformation industrielle",
      ],
    },
  ],

  benefits: {
    eyebrow: "Collaboration",
    title: "Pourquoi travailler avec nous ?",
    description:
      "Nous nous considérons comme un partenaire fiable pour la transformation au quotidien – pas comme un intermédiaire anonyme.",
    items: [
      {
        title: "Accès direct aux producteurs",
        description:
          "Nous collaborons avec des partenaires sélectionnés à Madagascar – des circuits courts plutôt que des intermédiaires anonymes.",
        icon: "handshake",
      },
      {
        title: "Chaîne d'approvisionnement transparente",
        description:
          "Les lots restent traçables, de la région de culture jusqu'à l'expédition depuis la Suisse.",
        icon: "route",
      },
      {
        title: "Contrôle qualité personnel",
        description:
          "Chaque livraison est contrôlée selon des critères définis avant de vous parvenir.",
        icon: "check",
      },
      {
        title: "Petites et grandes quantités",
        description:
          "Du premier achat test à la livraison récurrente – la quantité s'adapte à votre besoin.",
        icon: "scale",
      },
      {
        title: "Communication rapide",
        description:
          "Un interlocuteur dédié en Suisse répond aux demandes simplement et rapidement.",
        icon: "chat",
      },
      {
        title: "Échantillon avant la première commande",
        description:
          "Les clients professionnels qualifiés peuvent vérifier la qualité au préalable avant de se décider.",
        icon: "sample",
      },
    ],
  },

  process: {
    eyebrow: "Déroulement",
    title: "Comment se déroule la collaboration",
    description: "En quatre étapes claires, de la première demande à la livraison.",
    steps: [
      {
        title: "Exprimer le besoin",
        description: "Vous nous indiquez la qualité, la quantité et l'usage souhaités.",
      },
      {
        title: "Recevoir un échantillon",
        description: "Les clients professionnels éligibles reçoivent un échantillon à évaluer.",
      },
      {
        title: "Évaluer la qualité",
        description: "Vous testez l'arôme, l'humidité et la transformation dans votre établissement.",
      },
      {
        title: "Offre et livraison",
        description:
          "Vous recevez une offre individuelle ; la marchandise est livrée selon accord.",
      },
    ],
  },

  origin: {
    eyebrow: "Origine",
    title: "De Madagascar directement aux professionnels",
    text: "Notre vanille provient de producteurs et partenaires sélectionnés à Madagascar. Nous misons sur des relations durables, des lots traçables et une sélection soigneuse des gousses. Chaque livraison est contrôlée selon des critères de qualité définis.",
    button: "En savoir plus sur notre origine",
    imageAlt: "Jeune producteur transportant des plants de vanille à Madagascar",
  },

  qualitySection: {
    eyebrow: "Critères de qualité",
    title: "Ce que nous mesurons sur chaque lot",
    description:
      "Nous mettons à disposition des clients professionnels, selon le lot, les spécifications produit et les documents d'analyse sur demande.",
    items: [
      { label: "Espèce botanique", description: "Vanilla planifolia (type Bourbon)." },
      { label: "Origine", description: "Madagascar, régions de culture définies." },
      { label: "Longueur des gousses", description: "Tri par classes de longueur selon la qualité." },
      { label: "Plage d'humidité", description: "Plage d'humidité définie selon le lot et le niveau de qualité." },
      { label: "État visuel", description: "Évaluation de la couleur, de la surface et de l'intégrité." },
      { label: "Souplesse", description: "La souplesse indique l'humidité et la fraîcheur." },
      { label: "Arôme", description: "Évaluation sensorielle de l'intensité et du profil." },
      { label: "Numéro de lot", description: "Identification unique de chaque livraison." },
      { label: "Traçabilité", description: "Rattachement du lot à l'origine et à la transformation." },
      { label: "Analyses de laboratoire possibles", description: "Documents d'analyse selon le lot sur demande." },
    ],
  },

  sampleCta: {
    title: "Jugez par vous-même de la qualité",
    text: "Vous transformez régulièrement de la vanille dans votre établissement ? Indiquez-nous brièvement votre besoin. Pour les clients professionnels qualifiés, nous étudions volontiers l'envoi d'un échantillon.",
    button: "Demander un échantillon",
  },

  footer: {
    productsHeading: "Produits",
    businessHeading: "Professionnels",
    newsletterHeading: "Newsletter",
    newsletterText:
      "Informations occasionnelles sur la disponibilité, les lots et les conditions. Pas de spam.",
    productLinks: [
      { label: "Vanille Bourbon Gourmet", href: "/produkte#gourmet-bourbon-vanille" },
      { label: "Vanille pour l'extraction", href: "/produkte#vanille-extraktion-verarbeitung" },
      { label: "Fiches techniques produit", href: "/produkte#datenblaetter" },
      { label: "Qualité", href: "/qualitaet" },
    ],
    businessLinks: [
      { label: "Pour les professionnels", href: "/fuer-geschaeftskunden" },
      { label: "Demande d'échantillon", href: "/muster-anfragen" },
      { label: "Origine", href: "/herkunft" },
      { label: "À propos", href: "/ueber-uns" },
      { label: "Contact", href: "/kontakt" },
    ],
    legalLinks: [
      { label: "Mentions légales", href: "/impressum" },
      { label: "Politique de confidentialité", href: "/datenschutz" },
      { label: "Conditions générales de vente", href: "/agb" },
      { label: "Conditions de livraison", href: "/lieferbedingungen" },
    ],
    rights: "Tous droits réservés.",
    socialLabel: "Réseaux sociaux (à compléter)",
  },

  cookie: {
    text: "Nous utilisons uniquement des cookies techniquement nécessaires. Les cookies statistiques optionnels (p. ex. pour la mesure d'audience) ne sont activés qu'après votre consentement. Plus d'informations dans la",
    privacyLink: "politique de confidentialité",
    decline: "Uniquement nécessaires",
    accept: "Tout accepter",
    dialogLabel: "Information sur les cookies",
  },

  newsletter: {
    placeholder: "Votre e-mail professionnel",
    aria: "S'inscrire à la newsletter",
    emailLabel: "Adresse e-mail",
    success: "Merci ! Veuillez le cas échéant confirmer votre inscription par e-mail.",
  },

  mobileCta: { call: "Appeler", sample: "Échantillon" },

  whatsapp: {
    aria: "Nous contacter via WhatsApp",
    message:
      "Bonjour, je m'intéresse à votre vanille Bourbon et souhaiterais faire une demande B2B.",
  },

  common: {
    requestQuote: "Demander une offre",
    requestSample: "Demander un échantillon",
    details: "Voir les détails",
    skipToContent: "Aller au contenu",
    breadcrumbLabel: "Fil d'Ariane",
  },

  produktePage: {
    heroEyebrow: "Produits",
    heroTitle: "Gousses de vanille Bourbon pour les professionnels",
    heroDescription:
      "Deux qualités clairement distinctes – adaptées aux usages visibles et à la transformation. Les prix sont communiqués individuellement sur demande.",
    variabilityHint:
      "La disponibilité, les caractéristiques et les prix peuvent varier selon la récolte, le lot et la quantité commandée.",
    featuresLabel: "Caractéristiques",
    qualityClassesLabel: "Classes de qualité possibles",
    useCasesLabel: "Domaines d'utilisation",
    packagingLabel: "Conditionnements disponibles",
    gallery: {
      eyebrow: "Aperçus",
      title: "De la gousse à l'emballage",
      description:
        "Gousses sélectionnées, liées et triées – séchées avec soin et préparées pour l'expédition.",
      items: [
        { src: "/images/produkte/vanille-buendel.jpg", alt: "Des gousses de vanille liées sont triées à la main", caption: "Bottes triées" },
        { src: "/images/produkte/vanille-trocknung.jpg", alt: "Gousses de vanille étalées pour le séchage", caption: "Séchage" },
        { src: "/images/produkte/vanille-verpackung.jpg", alt: "Sachets sous vide de gousses de vanille prêts à l'expédition", caption: "Colis prêts à l'expédition" },
      ],
    },
    storageTitle: "Conseils de conservation",
    storageItems: [
      "Conserver au frais, à l'abri de la lumière et du soleil direct.",
      "Conserver hermétiquement fermé pour préserver l'arôme et l'humidité.",
      "Ne pas conserver au réfrigérateur – éviter la condensation.",
    ],
    originTitle: "Origine",
    originText:
      "Vanilla planifolia issue de régions sélectionnées de Madagascar. Chaque lot reste rattaché à son origine et est contrôlé selon des critères définis.",
    originLink: "En savoir plus sur la chaîne d'approvisionnement",
    downloadsEyebrow: "Téléchargements",
    downloadsTitle: "Fiches techniques produit",
    downloadsDescription:
      "Nous fournissons aux clients professionnels les fiches techniques et – selon le lot – les documents d'analyse sur demande. Les champs de téléchargement sont prévus et seront complétés dès que les documents seront disponibles.",
    dataSheetPrefix: "Fiche technique :",
    dataSheetSub: "Espace réservé PDF – disponible sur demande",
    request: "Demander",
  },

  packagingUnits: ["100 g", "250 g", "500 g", "1 kg", "plus grandes quantités sur demande"],

  qualitaetPage: {
    heroEyebrow: "Qualité",
    heroTitle: "Ce qui compte pour une vanille professionnelle",
    heroDescription:
      "La qualité est plus qu'une étiquette. Nous évaluons chaque lot selon des critères vérifiables – pour que vous puissiez travailler de façon fiable dans votre établissement.",
    criteria: [
      { title: "Arôme", description: "L'essentiel est un profil clair et complexe, sans faux goûts. Nous évaluons l'intensité et le caractère de manière sensorielle, lot par lot.", icon: "leaf" },
      { title: "Humidité", description: "Le taux d'humidité détermine la souplesse et la transformation. Trop sèches, les gousses perdent en arôme ; trop humides, elles posent des problèmes de conservation.", icon: "shield" },
      { title: "Longueur", description: "Les classes de longueur servent au tri et au calcul. Elles disent peu de chose sur l'arôme, mais sont utiles pour la transformation.", icon: "scale" },
      { title: "Souplesse", description: "Des gousses souples indiquent une humidité équilibrée et de la fraîcheur. Elles se coupent et se grattent facilement.", icon: "check" },
      { title: "État", description: "La couleur, la surface et l'intégrité sont évaluées. Pour les usages visibles, l'aspect compte davantage que pour l'extraction.", icon: "shield" },
      { title: "Transformation", description: "La fermentation et le séchage déterminent le résultat. Une transformation soigneuse est la base d'une qualité constante.", icon: "handshake" },
      { title: "Conservation", description: "Conservée au frais, à l'obscurité et à l'abri de l'air, la vanille reste longtemps utilisable. Une bonne conservation protège l'arôme et la souplesse.", icon: "jar" },
      { title: "Constance des lots", description: "Pour les établissements, la reproductibilité compte. Nous documentons les lots afin que vous puissiez travailler de façon planifiable et régulière.", icon: "route" },
      { title: "Traçabilité", description: "Chaque lot reste rattaché à son origine et à sa transformation – traçable de la région de culture jusqu'à la livraison.", icon: "map-pin" },
    ],
    transparencyEyebrow: "Transparence",
    transparencyTitle: "Contrôle et documentation",
    transparencyDescription: "Nous nous en tenons à des critères vérifiables plutôt qu'à des promesses publicitaires.",
    transparencyParagraphs: [
      "Pour chaque livraison, nous définissons les critères pertinents et les contrôlons avant l'expédition. Nous mettons à disposition des clients professionnels les spécifications produit et – selon le lot – les documents d'analyse sur demande.",
      "Nous renonçons délibérément aux affirmations non étayées. Nous n'employons des termes comme « bio » ou « commerce équitable » que si les certificats correspondants existent. Nous ne faisons aucune promesse de santé ou scientifiquement non prouvée.",
    ],
  },

  herkunftPage: {
    heroEyebrow: "Origine",
    heroTitle: "De Madagascar directement aux professionnels",
    heroDescription:
      "Notre vanille provient de producteurs et partenaires sélectionnés à Madagascar. Nous misons sur des relations durables et des lots traçables.",
    brandBandText:
      "Vanora, c'est une vanille Bourbon dont le parcours, des plantations de Madagascar jusqu'à votre établissement, reste traçable.",
    featureEyebrow: "Région de culture, Madagascar",
    featureTitle: "Ici, la vanille pousse sur des arbres-tuteurs ombragés – entretenue à la main.",
    featureAlt: "Plantation de vanille avec arbres-tuteurs et lianes à Madagascar",
    factsEyebrow: "Données d'origine",
    factsTitle: "Traçable jusqu'à la région",
    factsDescription:
      "Nous compléterons les informations concrètes dès qu'elles seront disponibles. D'ici là, nous les signalons clairement comme des espaces réservés.",
    facts: [
      { label: "Région de culture", value: "[Région, p. ex. SAVA]" },
      { label: "Partenaires / producteurs", value: "[Nom des partenaires]" },
      { label: "Espèce botanique", value: "Vanilla planifolia" },
      { label: "Période de récolte", value: "[Période]" },
      { label: "Certifications", value: "[le cas échéant]" },
    ],
    supplyEyebrow: "Chaîne d'approvisionnement",
    supplyTitle: "Neuf étapes, de la fleur jusqu'à vous",
    supplyDescription: "Chaque étape contribue à l'arôme et à la traçabilité.",
    supplyChain: [
      { title: "Culture", description: "Le vanillier pousse dans les régions tropicales de Madagascar, sur des tuteurs ombragés." },
      { title: "Pollinisation", description: "Les fleurs sont pollinisées à la main – une étape exigeante et décisive." },
      { title: "Récolte", description: "Les gousses sont récoltées au bon stade de maturité pour préserver leur potentiel aromatique." },
      { title: "Fermentation", description: "Un étuvage et un repos contrôlés développent l'arôme caractéristique." },
      { title: "Séchage", description: "Les gousses sèchent lentement, jusqu'à un équilibre entre humidité et souplesse." },
      { title: "Tri", description: "Tri par longueur, état et qualité en classes définies." },
      { title: "Contrôle qualité", description: "Contrôle selon des critères définis et documentation du lot." },
      { title: "Exportation", description: "Emballage soigné et exportation depuis Madagascar avec rattachement du lot." },
      { title: "Livraison au client", description: "Préparation de commande et expédition aux clients professionnels depuis la Suisse." },
    ],
    producersEyebrow: "Producteurs",
    producersTitle: "Les personnes derrière la vanille",
    producersDescription:
      "De véritables aperçus de la région de culture – de l'entretien des plants à la récolte jusqu'au tri. Nous ne montrons que des images authentiques.",
    gallery: [
      { src: "/images/herkunft/pflege.jpg", alt: "Un producteur entretient les plants de vanille sur les arbres-tuteurs", caption: "Entretien des plants" },
      { src: "/images/herkunft/bestaeubung.jpg", alt: "Un producteur travaille sur les lianes de vanille dans la plantation", caption: "Travail manuel à la plantation" },
      { src: "/images/herkunft/gruene-schote.jpg", alt: "Une main tient une gousse de vanille verte en maturation sur la liane", caption: "Gousses vertes en maturation" },
      { src: "/images/herkunft/qualitaetskontrolle.jpg", alt: "Des producteurs lient et contrôlent des gousses de vanille séchées", caption: "Mise en bottes et contrôle" },
      { src: "/images/herkunft/sortierung.jpg", alt: "Des gousses de vanille séchées sont triées sur des tables", caption: "Tri après le séchage" },
      { src: "/images/herkunft/transport.jpg", alt: "Un homme transporte des sacs depuis la région de culture", caption: "Transport depuis la région" },
    ],
    note: "Nous renonçons délibérément aux affirmations non étayées sur la durabilité ou la certification. Nous ne les ajoutons qu'avec les preuves correspondantes.",
    mapRegion: "Région de culture : [à compléter]",
  },

  geschaeftskundenPage: {
    heroEyebrow: "Pour les professionnels",
    heroTitle: "Un partenaire pour vos besoins réguliers en vanille",
    heroDescription:
      "Nous travaillons exclusivement avec des clients professionnels – du petit atelier artisanal à la manufacture. De façon personnelle, transparente et sans standard de boutique en ligne.",
    services: [
      { title: "Conseil personnalisé", description: "Un interlocuteur dédié en Suisse vous accompagne, de la première question à l'approvisionnement continu.", icon: "chat" },
      { title: "Offres individuelles", description: "Les prix et conditions dépendent de la qualité, de la quantité et du lot en cours – individuellement pour votre établissement.", icon: "handshake" },
      { title: "Dégressivité des quantités", description: "Les volumes d'achat plus importants sont pris en compte dans le calcul.", icon: "scale" },
      { title: "Livraisons récurrentes", description: "Pour un besoin régulier, nous convenons d'intervalles adaptés et de quantités planifiables.", icon: "route" },
      { title: "Demandes d'échantillon", description: "Les clients professionnels qualifiés peuvent vérifier la qualité au préalable avant de se décider.", icon: "sample" },
      { title: "Spécifications par lot", description: "Spécifications produit et – selon le lot – documents d'analyse sur demande.", icon: "shield" },
      { title: "Conditionnements flexibles", description: "De 100 g à 1 kg et en plus grands contenants – adaptés à vos process.", icon: "jar" },
      { title: "Accords particuliers", description: "Pour les plus gros acheteurs, des accords individuels sont possibles.", icon: "check" },
    ],
    formEyebrow: "Demande",
    formTitle: "Votre demande B2B",
    formText:
      "Plus nous en savons sur votre besoin, plus notre offre pourra être précise. Hormis les champs obligatoires, toutes les informations sont facultatives.",
    trustPoints: [
      { icon: "clock", text: "Réponse en général sous un jour ouvré" },
      { icon: "shield", text: "Vos informations sont traitées de façon confidentielle" },
      { icon: "sample", text: "Échantillon possible pour les clients professionnels qualifiés" },
    ],
  },

  ueberUnsPage: {
    heroEyebrow: "À propos",
    heroTitle: "Commerce direct de vanille, par conviction personnelle",
    storyEyebrow: "Notre histoire",
    storyTitle: "Comment nous sommes nés",
    story: [
      "Vanora est né de contacts personnels avec des producteurs de vanille à Madagascar et de la volonté de rendre une vanille de qualité plus transparente et plus directe pour les professionnels.",
      "Plutôt que des chaînes commerciales anonymes, nous misons sur des relations directes, des lots traçables et une sélection soigneuse des gousses. Les établissements peuvent ainsi travailler de façon fiable avec une qualité qu'ils peuvent vérifier au préalable et se procurer à nouveau.",
      "Nous renonçons volontairement à indiquer des années d'existence, des effectifs ou des chiffres que nous ne pouvons pas prouver. Ce qui compte, c'est la qualité dans votre cuisine ou votre manufacture – et un interlocuteur joignable.",
    ],
    storyImageAlt: "Des producteurs lient et trient des gousses de vanille Bourbon à Madagascar",
    principlesEyebrow: "Ce qui nous tient à cœur",
    principlesTitle: "Les principes de notre travail",
    principles: [
      { title: "Interlocuteur dédié", description: "Vous parlez directement à une personne de contact fixe – sans détour par des hotlines anonymes.", icon: "chat" },
      { title: "Basé en Suisse", description: "Nous livrons et communiquons depuis la Suisse.", icon: "map-pin" },
      { title: "Focalisation B2B", description: "Notre offre s'adresse aux établissements qui transforment la vanille.", icon: "handshake" },
      { title: "Relations durables avec les producteurs", description: "Nous misons sur la continuité plutôt que sur des sources changeantes.", icon: "route" },
      { title: "Qualité vérifiable", description: "Les lots restent traçables et sont contrôlés.", icon: "shield" },
      { title: "Communication simple", description: "Des circuits courts, des réponses claires, des accords fiables.", icon: "check" },
    ],
  },

  kontaktPage: {
    heroEyebrow: "Contact",
    heroTitle: "Nous sommes à votre écoute",
    heroDescription:
      "Première question, demande d'échantillon ou offre concrète – contactez-nous par le moyen qui vous convient le mieux.",
    b2bNote: "Remarque : notre offre s'adresse aux clients professionnels (B2B).",
    addressLabel: "Adresse",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    hoursLabel: "Heures d'ouverture",
    whatsappButton: "Écrire via WhatsApp",
    formTitle: "Écrivez-nous",
    formSubtitle: "Nous répondons en général sous un jour ouvré.",
    faqEyebrow: "FAQ",
    faqTitle: "Questions fréquentes",
    faqDescription:
      "Réponses aux principales questions sur les échantillons, les quantités, l'origine et la livraison.",
  },

  faq: [
    { question: "Quelle est la quantité minimale de commande ?", answer: "Nous travaillons de façon flexible. De petits premiers achats sont possibles, tout comme des livraisons régulières plus importantes. Nous convenons de la quantité précise dans le cadre de votre demande." },
    { question: "Puis-je recevoir un échantillon ?", answer: "Pour les clients professionnels qualifiés, nous étudions volontiers l'envoi d'un échantillon afin que vous puissiez évaluer au préalable l'arôme et la transformation. Utilisez pour cela notre formulaire d'échantillon." },
    { question: "D'où provient la vanille ?", answer: "Notre vanille Bourbon (Vanilla planifolia) provient de producteurs et partenaires sélectionnés à Madagascar. Chaque lot reste rattaché à son origine." },
    { question: "Quels conditionnements sont disponibles ?", answer: "Sont notamment disponibles 100 g, 250 g, 500 g et 1 kg. Les plus grandes quantités sont préparées individuellement sur demande." },
    { question: "Comment conserver la vanille ?", answer: "Nous recommandons une conservation au frais, à l'obscurité et à l'abri de l'air. Vous trouverez des conseils détaillés sur la page produit et dans les fiches techniques." },
    { question: "Existe-t-il différents niveaux de qualité ?", answer: "Oui. Nous distinguons notamment la qualité Gourmet pour les usages visibles et la vanille pour l'extraction et la transformation. Le niveau adapté dépend de votre usage." },
    { question: "Livrez-vous uniquement en Suisse ?", answer: "Nous livrons depuis la Suisse. Nous étudions les livraisons à l'étranger individuellement dans le cadre de votre demande." },
    { question: "De plus grandes quantités peuvent-elles être livrées régulièrement ?", answer: "Oui. Pour les approvisionnements récurrents, nous convenons de quantités et d'intervalles adaptés – volontiers avec dégressivité." },
    { question: "Des documents d'analyse sont-ils disponibles ?", answer: "Nous mettons à disposition des clients professionnels les spécifications produit et – selon le lot – les documents d'analyse sur demande." },
    { question: "Comment obtenir une offre individuelle ?", answer: "Indiquez-nous le produit, la quantité et l'usage via le formulaire de demande. Nous revenons vers vous avec une offre adaptée à votre besoin." },
  ],

  musterPage: {
    heroEyebrow: "Demande d'échantillon",
    heroTitle: "Jugez par vous-même de la qualité",
    heroDescription:
      "Vous transformez régulièrement de la vanille dans votre établissement ? Indiquez-nous brièvement votre besoin. Pour les clients professionnels qualifiés, nous étudions volontiers l'envoi d'un échantillon.",
    stepsEyebrow: "La suite",
    stepsTitle: "Votre échantillon en quelques étapes",
    note: "Les échantillons s'adressent aux établissements qui transforment la vanille. Merci de votre compréhension : nous étudions chaque demande d'échantillon individuellement.",
  },

  forms: {
    sampleSectionNeed: "Votre besoin (facultatif)",
    contactSection: "Contact",
    needSection: "Votre besoin",
    selectPlaceholder: "Veuillez choisir",
    requiredHint: "Vos informations sont utilisées exclusivement pour le traitement de votre demande. Les champs obligatoires sont marqués d'un *.",
    labels: {
      company: "Nom de l'entreprise",
      contactPerson: "Interlocuteur",
      name: "Nom",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "E-mail",
      phone: "Téléphone (facultatif)",
      phoneRequired: "Numéro de téléphone (facultatif)",
      companyOptional: "Entreprise (facultatif)",
      website: "Site web (facultatif)",
      industry: "Secteur",
      product: "Produit souhaité",
      productOptional: "Produit souhaité (facultatif)",
      orderQuantity: "Quantité de commande estimée (facultatif)",
      orderFrequency: "Fréquence de commande (facultatif)",
      currentUsage: "Consommation actuelle de vanille (facultatif)",
      packaging: "Conditionnement souhaité (facultatif)",
      purpose: "Usage prévu (facultatif)",
      message: "Message (facultatif)",
      messageRequired: "Votre message",
      need: "Votre besoin (facultatif)",
    },
    placeholders: {
      need: "En bref : quantité, usage et qualité souhaitée.",
      website: "https://",
      orderQuantity: "p. ex. 2 kg par commande",
      currentUsage: "p. ex. env. 5 kg par an",
      purpose: "p. ex. pâtisserie, glace, extraction",
      businessMessage: "Autres informations sur votre établissement ou votre demande.",
    },
    privacy: {
      before: "J'ai lu la",
      link: "politique de confidentialité",
      after: "et j'accepte le traitement de mes informations pour le traitement de ma demande.",
    },
    submit: { sample: "Demander un échantillon", business: "Envoyer la demande", contact: "Envoyer le message", sending: "Envoi en cours …" },
    success: {
      sampleTitle: "Merci pour votre demande d'échantillon",
      sampleText: "Nous avons bien reçu votre demande et vous répondons en général sous un jour ouvré. Pour les clients professionnels qualifiés, nous étudions volontiers l'envoi d'un échantillon.",
      businessTitle: "Merci pour votre demande",
      businessText: "Votre demande nous est bien parvenue. Votre interlocuteur dédié étudie votre besoin et revient vers vous avec une offre individuelle – en général sous un jour ouvré.",
      contactTitle: "Message reçu",
      contactText: "Merci pour votre message. Nous revenons vers vous en général sous un jour ouvré.",
    },
    errorGeneric: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
    connectionError: "Échec de la connexion. Veuillez vérifier votre connexion internet et réessayer.",
    options: {
      industry: [
        "Pâtisserie / confiserie",
        "Chocolatier / confiseur",
        "Glacier / manufacture de glaces",
        "Hôtel / restaurant",
        "Boulangerie",
        "Manufacture alimentaire",
        "Distillerie",
        "Épicerie fine / épices",
        "Autre",
      ],
      product: ["Vanille Bourbon Gourmet", "Vanille pour l'extraction et la transformation", "Les deux / encore indécis"],
      orderFrequency: ["Unique / achat test", "Mensuelle", "Trimestrielle", "Selon besoin"],
      packaging: ["100 g", "250 g", "500 g", "1 kg", "Plus grandes quantités"],
    },
    validation: {
      company: "Veuillez indiquer le nom de votre entreprise.",
      name: "Veuillez indiquer votre nom.",
      firstName: "Veuillez indiquer votre prénom.",
      lastName: "Veuillez indiquer votre nom de famille.",
      emailRequired: "Veuillez indiquer une adresse e-mail.",
      emailInvalid: "Veuillez indiquer une adresse e-mail valide.",
      phoneInvalid: "Veuillez indiquer un numéro de téléphone valide.",
      industry: "Veuillez choisir votre secteur.",
      product: "Veuillez choisir un produit.",
      message: "Veuillez saisir un message.",
      privacy: "Veuillez accepter la politique de confidentialité.",
      checkInputs: "Veuillez vérifier vos informations.",
    },
  },

  notFoundPage: {
    code: "Erreur 404",
    title: "Cette page n'existe pas",
    text: "Le contenu demandé a été déplacé ou n'existe plus. Revenez à l'accueil ou envoyez-nous votre demande.",
    home: "Vers l'accueil",
    contact: "Nous contacter",
    orDirect: "Ou directement vers les",
    products: "produits",
  },

  legal: {
    disclaimer:
      "Remarque : ce texte est un modèle préparé avec des espaces réservés. Veuillez faire vérifier les contenus juridiquement avant publication et remplacer toutes les mentions marquées [ ].",
    eyebrow: "Informations légales",
    impressum: {
      companyHeading: "Informations sur l'entreprise",
      contactHeading: "Contact",
      contactLabelEmail: "E-mail :",
      contactLabelPhone: "Téléphone :",
      repHeading: "Représentant légal",
      registerHeading: "Inscription au registre",
      registerLabel: "Registre du commerce / IDE :",
      vatLabel: "Numéro de TVA :",
      liabilityHeading: "Clause de non-responsabilité",
      liabilityText:
        "Les contenus de ce site ont été élaborés avec soin. Nous ne pouvons toutefois garantir l'exactitude, l'exhaustivité ni l'actualité des contenus. [À adapter.]",
      copyrightHeading: "Droits d'auteur",
      copyrightText:
        "Les contenus publiés sur ce site sont protégés par le droit d'auteur. [À adapter.]",
    },
    datenschutz: {
      sections: [
        { heading: "1. Responsable du traitement", text: "Le responsable est l'entreprise indiquée dans les mentions légales. E-mail pour les demandes relatives à la protection des données : voir les coordonnées." },
        { heading: "2. Collecte et traitement des données", text: "Nous ne traitons en principe des données personnelles que dans la mesure nécessaire à la mise à disposition du site et au traitement de vos demandes." },
        { heading: "3. Formulaires de contact et de demande", text: "Lorsque vous nous contactez via un formulaire (contact, demande d'échantillon ou B2B), nous traitons les données que vous fournissez pour traiter votre demande. Les demandes ne sont pas stockées publiquement. [À compléter : durée de conservation, éventuels services utilisés comme Resend, Supabase, HubSpot, Brevo ou Mailchimp.]" },
        { heading: "4. Newsletter", text: "Pour l'envoi d'une newsletter, nous traitons votre adresse e-mail sur la base de votre consentement. Vous pouvez vous désinscrire à tout moment. [À compléter : service utilisé et procédure.]" },
        { heading: "5. Cookies et mesure d'audience", text: "Nous utilisons des cookies techniquement nécessaires. Les cookies statistiques optionnels (p. ex. Google Analytics ou Plausible) ne sont activés qu'après votre consentement via l'information sur les cookies. [À adapter à l'outil utilisé.]" },
        { heading: "6. Vos droits", text: "Vous disposez – dans le cadre des lois applicables – d'un droit d'accès, de rectification, d'effacement, de limitation du traitement ainsi que d'opposition. Adressez-vous pour cela à l'adresse de contact indiquée dans les mentions légales." },
        { heading: "7. Contact protection des données", text: "[À compléter : interlocuteur / point de contact pour la protection des données.]" },
      ],
    },
    agb: {
      sections: [
        { heading: "1. Champ d'application", text: "Les présentes conditions générales s'appliquent à toutes les offres, livraisons et prestations vis-à-vis des clients professionnels (B2B). [À adapter.]" },
        { heading: "2. Offre et conclusion du contrat", text: "Nos offres sont sans engagement. Les prix et la disponibilité dépendent de la quantité, de la qualité et du lot en cours et sont proposés individuellement. Le contrat est conclu à notre confirmation de commande." },
        { heading: "3. Prix", text: "Les prix indiqués dans l'offre individuelle concernée s'appliquent. [À compléter : devise, TVA, frais annexes.]" },
        { heading: "4. Livraison", text: "Les modalités de livraison sont régies par nos conditions de livraison ainsi que par l'offre individuelle. [À adapter.]" },
        { heading: "5. Conditions de paiement", text: "[À compléter : délais de paiement, moyens de paiement, retard.]" },
        { heading: "6. Garantie et responsabilité", text: "Les produits naturels sont soumis à des variations naturelles. Les caractéristiques indiquées dans l'offre ou la spécification produit font foi. [À compléter.]" },
        { heading: "7. Droit applicable et for", text: "Le droit suisse s'applique. Le for est [Lieu]. [À adapter.]" },
      ],
    },
    lieferbedingungen: {
      sections: [
        { heading: "Zone de livraison", text: "Nous livrons depuis la Suisse. Nous étudions les livraisons à l'étranger individuellement dans le cadre de votre demande. [À adapter.]" },
        { heading: "Délai de livraison", text: "Le délai de livraison dépend de la disponibilité, du lot et de la quantité commandée et est confirmé dans l'offre individuelle. [À compléter.]" },
        { heading: "Frais d'expédition", text: "[À compléter : frais d'expédition, suppléments pour petites quantités, franchises.]" },
        { heading: "Emballage", text: "La marchandise est emballée de façon appropriée. Les conditionnements disponibles vont de 100 g à 1 kg ; plus grands contenants sur demande." },
        { heading: "Transport et transfert des risques", text: "[À compléter : Incoterms ou règle relative au transfert des risques.]" },
        { heading: "Réception et contrôle", text: "Veuillez vérifier la marchandise à la réception. Adressez vos réclamations rapidement à notre contact. [À adapter.]" },
      ],
    },
  },
};
