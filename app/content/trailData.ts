export type Locale = "fr" | "en";

type FaqItem = {
  question: string;
  answer: string;
};

export const MAPS_URL = "https://maps.app.goo.gl/e6vchLoZPxMYTd28A";
export const OFFICIAL_TRAIL_URL = "https://www.explorenicecotedazur.com/itineraire/chemin-de-nietzsche/";
export const HERO_IMAGE = "/images/home/chemin-de-nietzsche-eze-hero.jpg";

export const factValues = {
  distance: "2,1 km",
  durationUp: "1h à 1h30",
  durationDown: "45 à 60 min",
  elevation: "350-400 m D+",
  difficulty: "Moderee",
  start: "Gare d'Eze-sur-Mer",
  end: "Eze Village",
  rating: "4.5/5",
  reviewsLabelFr: "sur Google Maps",
  reviewsLabelEn: "on Google Maps",
  address: "06360 Eze, France",
  plusCode: "P9F6+Q5 Eze, France",
};

export const galleryImages = [
  {
    src: "/images/gallery/chemin-de-nietzsche-eze-vue-mer.jpg",
    altFr: "Vue sur la Mediterranee depuis le Chemin de Nietzsche a Eze",
    altEn: "Mediterranean view from the Nietzsche Path in Eze",
    captionFr: "Vue mer depuis le sentier entre Eze-sur-Mer et le village.",
    captionEn: "Sea view from the trail between Eze-sur-Mer and the village.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-rochers-marche.jpg",
    altFr: "Passage rocheux sur le sentier du Chemin de Nietzsche",
    altEn: "Rocky section on the Nietzsche Path trail",
    captionFr: "Portion rocheuse avec marches irregulieres.",
    captionEn: "Rocky section with uneven stone steps.",
  },
  {
    src: "/images/gallery/sentier-nietzsche-panorama-cote-azur.jpg",
    altFr: "Panorama sur la Cote d'Azur depuis le sentier Nietzsche",
    altEn: "French Riviera panorama from the Nietzsche trail",
    captionFr: "Panorama ouvert sur la baie et la cote.",
    captionEn: "Wide panorama over the bay and coastline.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-vers-eze-village.jpg",
    altFr: "Chemin pieton menant vers Eze Village",
    altEn: "Trail section leading toward Eze Village",
    captionFr: "Le sentier monte progressivement vers le village perche.",
    captionEn: "The path climbs steadily toward the hilltop village.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-vegetation-mediterraneenne.jpg",
    altFr: "Vegetation mediterraneenne le long du Chemin de Nietzsche",
    altEn: "Mediterranean vegetation along the Nietzsche Path",
    captionFr: "Pins, rochers et vegetation typiques de la Riviera.",
    captionEn: "Pines, rocks, and Riviera vegetation along the route.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-escaliers-pierre.jpg",
    altFr: "Escaliers de pierre sur la randonnee du Chemin de Nietzsche",
    altEn: "Stone steps on the Chemin de Nietzsche hike",
    captionFr: "Des escaliers en pierre rendent la montee plus soutenue.",
    captionEn: "Stone steps make the uphill route more demanding.",
  },
  {
    src: "/images/gallery/descente-chemin-de-nietzsche-vue-mer.jpg",
    altFr: "Vue descendante vers la mer depuis Eze Village",
    altEn: "View toward the sea on the descent from Eze Village",
    captionFr: "En descente, la mer reste souvent devant vous.",
    captionEn: "On the descent, the sea often stays right in front of you.",
  },
  {
    src: "/images/gallery/arrivee-chemin-de-nietzsche-eze-village.jpg",
    altFr: "Arrivee vers le village medieval d'Eze",
    altEn: "Arrival near the medieval village of Eze",
    captionFr: "L'arrivee haute se fait a proximite du village medieval.",
    captionEn: "The upper arrival point is near the medieval village.",
  },
];

export const homepageFaqs: Record<Locale, FaqItem[]> = {
  fr: [
    {
      question: "Ou commence le Chemin de Nietzsche ?",
      answer:
        "Le depart le plus courant se situe pres de la gare SNCF d'Eze-sur-Mer, puis le sentier remonte jusqu'a Eze Village.",
    },
    {
      question: "Quelle gare pour le Chemin de Nietzsche ?",
      answer:
        "La gare la plus pratique pour commencer la randonnee est Eze-sur-Mer. C'est le repere le plus utile pour la plupart des visiteurs qui arrivent en train.",
    },
    {
      question: "Le Chemin de Nietzsche est-il difficile ?",
      answer:
        "Le niveau est generalement considere comme modere, avec une montee plus exigeante si vous partez depuis la mer, surtout en periode chaude.",
    },
    {
      question: "Ou voir la carte du Chemin de Nietzsche ?",
      answer:
        "Le plus simple est d'utiliser Google Maps avec deux reperes clairs : la gare d'Eze-sur-Mer en bas et Eze Village en haut.",
    },
    {
      question: "Peut-on acceder au Chemin de Nietzsche en train ?",
      answer:
        "Oui. Le train jusqu'a Eze-sur-Mer est l'une des solutions les plus simples pour rejoindre le depart du sentier.",
    },
  ],
  en: [
    {
      question: "Where does the Nietzsche Path start?",
      answer:
        "Most visitors start near Eze-sur-Mer train station and then hike up to Eze Village.",
    },
    {
      question: "Which station should you use for the Nietzsche Path?",
      answer:
        "Eze-sur-Mer station is the most practical rail stop if you want to start the hike from the lower trailhead.",
    },
    {
      question: "Is the Nietzsche Path difficult?",
      answer:
        "It is usually considered moderate, with the uphill route feeling more demanding in hot weather.",
    },
    {
      question: "Where can you see the Nietzsche Path map?",
      answer:
        "Google Maps is the easiest option, using Eze-sur-Mer station as the lower reference point and Eze Village as the upper one.",
    },
  ],
};

type PageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  locale: string;
  urlPath: string;
  htmlLang: string;
  heroEyebrow: string;
  h1: string;
  heroLead: string;
  altNamesLabel: string;
  altNames: string[];
  ratingLabel: string;
  quickFactsTitle: string;
  factLabels: {
    distance: string;
    duration: string;
    elevation: string;
    difficulty: string;
  };
  ctas: {
    map: string;
    access: string;
    compare: string;
  };
  summaryTitle: string;
  summaryBody: string;
  sections: {
    map: {
      title: string;
      body: string;
      points: { label: string; value: string }[];
      link: string;
      official: string;
    };
    difficulty: {
      title: string;
      intro: string;
      bullets: string[];
    };
    duration: {
      title: string;
      intro: string;
      bullets: string[];
    };
    start: {
      title: string;
      intro: string;
      bullets: string[];
    };
    compare: {
      title: string;
      headers: string[];
      rows: { label: string; up: string; down: string }[];
    };
    photos: {
      title: string;
      intro: string;
    };
    history: {
      title: string;
      paragraphs: string[];
    };
    tips: {
      title: string;
      intro: string;
      bullets: string[];
    };
    hikers: {
      title: string;
      intro: string;
      bullets: string[];
      linkLabel: string;
    };
  };
  footer: {
    disclaimer: string;
    sources: string;
    copyright: string;
    support: string;
  };
};

export const pageCopy: Record<Locale, PageCopy> = {
  fr: {
    metadataTitle: "Chemin de Nietzsche a Eze : Carte, Duree, Difficulte & Acces",
    metadataDescription:
      "Guide du Chemin de Nietzsche a Eze : carte du sentier, depart depuis Eze-sur-Mer, difficulte, duree, denivele, acces en train et conseils pour la randonnee.",
    locale: "fr_FR",
    urlPath: "/",
    htmlLang: "fr",
    heroEyebrow: "Randonnee a Eze, France",
    h1: "Chemin de Nietzsche",
    heroLead:
      "Sentier reliant Eze-sur-Mer au village medieval d'Eze, avec vues sur la Mediterranee, denivele soutenu et acces simple depuis la gare.",
    altNamesLabel: "Aussi recherche sous",
    altNames: ["Chemin de Nietzsche Eze", "Sentier de Nietzsche", "Nietzsche Path"],
    ratingLabel: "4.5/5 sur Google Maps",
    quickFactsTitle: "Les infos utiles en un coup d'oeil",
    factLabels: {
      distance: "Distance",
      duration: "Duree montee",
      elevation: "Denivele",
      difficulty: "Difficulte",
    },
    ctas: {
      map: "Voir la carte",
      access: "Comment y aller",
      compare: "Monter ou descendre ?",
    },
    summaryTitle: "Chemin de Nietzsche a Eze",
    summaryBody:
      "Distance : 2,1 km · Duree : environ 1h a 1h30 en montee · Denivele : 350 a 400 m D+ · Difficulte : moderee · Acces : gare d'Eze-sur-Mer.",
    sections: {
      map: {
        title: "Carte du Chemin de Nietzsche",
        body: "L'itineraire le plus connu suit la gare d'Eze-sur-Mer, rejoint le Chemin de Nietzsche, puis remonte jusqu'a l'entree d'Eze Village. C'est le trace que recherchent le plus souvent les visiteurs sur mobile.",
        points: [
          { label: "Depart", value: "Gare d'Eze-sur-Mer" },
          { label: "Arrivee", value: "Eze Village" },
          { label: "Direction", value: "Bas vers haut ou l'inverse" },
          { label: "Repere", value: "Plus code P9F6+Q5 Eze, France" },
        ],
        link: "Ouvrir la carte Google Maps",
        official: "Voir aussi la fiche randonnee officielle Nice Cote d'Azur",
      },
      difficulty: {
        title: "Difficulte du Chemin de Nietzsche",
        intro:
          "Le Chemin de Nietzsche est generalement considere comme modere, mais la montee peut sembler soutenue quand il fait chaud ou si vous n'avez pas l'habitude des escaliers irreguliers.",
        bullets: [
          "Terrain rocheux avec marches et appuis parfois inegaux.",
          "Montee plus exigeante au cardio que la descente.",
          "Chaussures de randonnee ou de trail conseillees ; evitez les sandales.",
          "Peu d'ombre sur certaines portions : chaleur et soleil sont les vrais facteurs de difficulte.",
          "A faire avec prudence avec enfants, seniors ou par temps de pluie.",
        ],
      },
      duration: {
        title: "Combien de temps pour faire le Chemin de Nietzsche ?",
        intro:
          "La duree depend surtout du sens choisi et du nombre d'arrets photo. La reference la plus frequente est autour d'1h a 1h30 pour la montee.",
        bullets: [
          "Montee : environ 1h a 1h30 depuis Eze-sur-Mer.",
          "Descente : environ 45 a 60 minutes depuis Eze Village.",
          "Ajoutez du temps si vous visitez le village, prenez beaucoup de photos ou marchez en plein ete.",
          "Un depart tot le matin rend l'effort plus confortable et la lumiere souvent meilleure.",
        ],
      },
      start: {
        title: "Ou commence le Chemin de Nietzsche ?",
        intro:
          "Le depart bas se situe pres de la gare SNCF d'Eze-sur-Mer. Le sentier monte ensuite vers le village medieval d'Eze, ce qui en fait une option tres pratique si vous arrivez en train depuis Nice ou Monaco.",
        bullets: [
          "Train : descendre a la gare d'Eze-sur-Mer puis rejoindre le sentier a pied.",
          "Bus : vous pouvez aussi rejoindre Eze Village et faire la descente.",
          "Parking : plus simple a gerer en haut si vous combinez avec la visite du village.",
          "Astuce : verifiez toujours la chaleur et emportez de l'eau avant de partir.",
        ],
      },
      compare: {
        title: "Monter ou descendre le Chemin de Nietzsche ?",
        headers: ["Critere", "Montee", "Descente"],
        rows: [
          { label: "Depart", up: "Eze-sur-Mer", down: "Eze Village" },
          { label: "Effort", up: "Plus exigeant", down: "Plus facile au cardio" },
          { label: "Vue mer", up: "Reguliere", down: "Souvent face a vous" },
          { label: "Duree", up: "1h a 1h30", down: "45 a 60 min" },
          { label: "Ideal pour", up: "Randonneurs motives", down: "Visiteurs occasionnels" },
        ],
      },
      photos: {
        title: "Photos du Chemin de Nietzsche",
        intro:
          "Les recherches autour des photos montrent que les visiteurs veulent surtout voir le denivele, la vue mer et l'arrivee vers Eze. Chaque image ci-dessous est decrite avec un texte alt plus explicite pour renforcer la comprehension du sentier.",
      },
      history: {
        title: "Histoire et contexte",
        paragraphs: [
          "Le sentier est associe a Friedrich Nietzsche, qui a sejourne a plusieurs reprises sur la Cote d'Azur a partir de 1883. La marche entre mer et village est souvent reliee a la periode de creation de la troisieme partie d'Ainsi parlait Zarathoustra.",
          "Cette dimension culturelle reste importante, mais sur le plan pratique le site sert surtout de guide de visite : acces, difficulte, duree, terrain et organisation de la sortie passent avant le recit philosophique.",
        ],
      },
      tips: {
        title: "Conseils pratiques pour la randonnee",
        intro: "Avant de partir, mieux vaut preparer quelques points simples pour rendre la sortie plus confortable.",
        bullets: [
          "Prenez au moins 1 a 1,5 litre d'eau par personne en saison chaude.",
          "Choisissez des chaussures stables sur terrain sec comme sur marches de pierre.",
          "Evitez les heures les plus chaudes en ete.",
          "Le matin offre souvent une lumiere plus douce et moins de foule.",
          "Gardez du temps pour visiter Eze Village ou pour revenir en bus ou en train.",
        ],
      },
      hikers: {
        title: "Ce que les randonneurs apprecient",
        intro:
          "Plutot que d'afficher des citations individuelles difficiles a verifier dans le temps, nous resumons ici les points qui reviennent le plus souvent dans les avis publics.",
        bullets: [
          "Les vues ouvertes sur la Mediterranee tout au long du parcours.",
          "Une montee courte mais bien physique.",
          "Le contraste entre mer, rochers, pins et village medieval.",
          "La descente comme option plus accessible pour les visiteurs occasionnels.",
          "La chaleur estivale et le manque d'ombre comme principaux points d'attention.",
        ],
        linkLabel: "Voir les avis recents sur Google Maps",
      },
    },
    footer: {
      disclaimer:
        "Ce site est un guide de voyage independant consacre au Chemin de Nietzsche. Il n'est pas affilie a la gestion officielle du site.",
      sources:
        "Les informations pratiques sont consolidees a partir de ressources publiques, dont Google Maps et la fiche randonnee officielle Nice Cote d'Azur.",
      copyright: "Tous droits reserves.",
      support: "Support technique",
    },
  },
  en: {
    metadataTitle: "Nietzsche Path in Eze: Map, Difficulty, Time & Access",
    metadataDescription:
      "Visitor guide to the Nietzsche Path in Eze, France: trail map, start near Eze-sur-Mer station, hiking difficulty, walking time, elevation gain, and transport tips.",
    locale: "en_US",
    urlPath: "/en",
    htmlLang: "en",
    heroEyebrow: "Hike in Eze, France",
    h1: "Nietzsche Path",
    heroLead:
      "A scenic trail linking Eze-sur-Mer to medieval Eze Village, with Mediterranean views, a steady climb, and easy access from the train station.",
    altNamesLabel: "Also searched as",
    altNames: ["Chemin de Nietzsche", "Nietzsche Trail", "Chemin de Nietzsche Eze"],
    ratingLabel: "4.5/5 on Google Maps",
    quickFactsTitle: "Key visitor facts",
    factLabels: {
      distance: "Distance",
      duration: "Uphill time",
      elevation: "Elevation gain",
      difficulty: "Difficulty",
    },
    ctas: {
      map: "View map",
      access: "How to get there",
      compare: "Up or down?",
    },
    summaryTitle: "Nietzsche Path in Eze",
    summaryBody:
      "Distance: 2.1 km · Time: about 1 to 1.5 hours uphill · Elevation gain: 350 to 400 m · Difficulty: moderate · Start: Eze-sur-Mer station.",
    sections: {
      map: {
        title: "Nietzsche Path Map",
        body: "Most visitors follow the route from Eze-sur-Mer station up to Eze Village. That is the path most often searched by people planning the hike on mobile.",
        points: [
          { label: "Start", value: "Eze-sur-Mer station" },
          { label: "Finish", value: "Eze Village" },
          { label: "Direction", value: "Uphill or downhill" },
          { label: "Landmark", value: "Plus code P9F6+Q5 Eze, France" },
        ],
        link: "Open in Google Maps",
        official: "See the official Nice Cote d'Azur hiking page",
      },
      difficulty: {
        title: "How difficult is the Nietzsche Path?",
        intro:
          "The trail is usually described as moderate, but the uphill section can feel demanding in hot weather or if you are not used to uneven stone steps.",
        bullets: [
          "Rocky terrain with uneven steps in several sections.",
          "The uphill route is much more physically demanding than the descent.",
          "Trail shoes or solid walking shoes are strongly recommended.",
          "Heat and sun exposure are often the main difficulty rather than the distance itself.",
          "Use extra caution with children, older visitors, or after rain.",
        ],
      },
      duration: {
        title: "How long does it take to hike the Nietzsche Path?",
        intro:
          "Timing depends on direction, weather, and photo stops. The most common reference point is around 1 to 1.5 hours for the uphill hike.",
        bullets: [
          "Uphill: about 1 to 1.5 hours from Eze-sur-Mer.",
          "Downhill: about 45 to 60 minutes from Eze Village.",
          "Add extra time if you plan to explore the village or stop frequently for photos.",
          "An early start usually means cooler temperatures and softer light.",
        ],
      },
      start: {
        title: "Where does the Nietzsche Path start?",
        intro:
          "The lower trailhead is near Eze-sur-Mer train station. From there, the route climbs toward medieval Eze Village, making it practical for visitors arriving by train from Nice or Monaco.",
        bullets: [
          "Train: get off at Eze-sur-Mer station and walk to the trail.",
          "Bus: you can also reach Eze Village first and walk down.",
          "Parking: easier to combine with a village visit if you start from the top.",
          "Tip: check heat conditions and carry enough water before you start.",
        ],
      },
      compare: {
        title: "Should you hike up or down?",
        headers: ["Criteria", "Uphill", "Downhill"],
        rows: [
          { label: "Start", up: "Eze-sur-Mer", down: "Eze Village" },
          { label: "Effort", up: "More demanding", down: "Easier cardio-wise" },
          { label: "Sea views", up: "Frequent", down: "Often right ahead" },
          { label: "Time", up: "1 to 1.5 hours", down: "45 to 60 min" },
          { label: "Best for", up: "Motivated hikers", down: "Casual visitors" },
        ],
      },
      photos: {
        title: "Nietzsche Path Photos",
        intro:
          "People searching for trail photos usually want to understand the gradient, sea views, and what the approach to Eze looks like. Each image uses a descriptive alt text to make that clearer.",
      },
      history: {
        title: "History and context",
        paragraphs: [
          "The trail is associated with Friedrich Nietzsche, who stayed on the French Riviera several times from 1883 onward. The walk between the sea and the village is often linked to the period when he worked on the third part of Thus Spoke Zarathustra.",
          "That cultural background matters, but for most visitors this page focuses first on practical planning: access, difficulty, walking time, terrain, and how to organize the hike.",
        ],
      },
      tips: {
        title: "Practical hiking tips",
        intro: "A few simple preparations make the walk much more comfortable.",
        bullets: [
          "Carry at least 1 to 1.5 liters of water per person in warm weather.",
          "Wear stable shoes for dry ground and stone steps.",
          "Avoid the hottest hours in summer.",
          "Morning usually means softer light and fewer people.",
          "Leave time for Eze Village or your return journey by bus or train.",
        ],
      },
      hikers: {
        title: "What hikers value most",
        intro:
          "Instead of showing individual quotes that can be hard to verify over time, this section summarizes the themes that appear most often in public reviews.",
        bullets: [
          "Open Mediterranean views along the route.",
          "A short but clearly physical climb.",
          "The contrast between sea, rock, pines, and the medieval village.",
          "The downhill option as an easier experience for casual visitors.",
          "Summer heat and limited shade as the main caution points.",
        ],
        linkLabel: "Read recent Google Maps reviews",
      },
    },
    footer: {
      disclaimer:
        "This website is an independent travel guide about the Nietzsche Path and is not affiliated with the official site management.",
      sources:
        "Practical facts are compiled from public sources, including Google Maps and the official Nice Cote d'Azur hiking page.",
      copyright: "All rights reserved.",
      support: "Technical support",
    },
  },
};

export function getStructuredData(locale: Locale) {
  const copy = pageCopy[locale];
  const pageUrl = `https://www.nietzschepath.com${copy.urlPath}`;
  const faqItems = homepageFaqs[locale];

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: copy.metadataTitle,
      description: copy.metadataDescription,
      inLanguage: copy.htmlLang,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.nietzschepath.com/#website",
        name: "Nietzsche Path",
        url: "https://www.nietzschepath.com/",
      },
      about: {
        "@id": "https://www.nietzschepath.com/#attraction",
      },
      primaryImageOfPage: {
        "@id": "https://www.nietzschepath.com/#hero-image",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "fr" ? "Accueil" : "Home",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": ["TouristAttraction", "Place"],
      "@id": "https://www.nietzschepath.com/#attraction",
      name: locale === "fr" ? "Chemin de Nietzsche" : "Nietzsche Path",
      alternateName: ["Chemin de Nietzsche a Eze", "Sentier de Nietzsche", "Nietzsche Trail"],
      description: copy.summaryBody,
      url: pageUrl,
      image: galleryImages.slice(0, 4).map((image) => `https://www.nietzschepath.com${image.src}`),
      touristType: locale === "fr" ? "Sentier de randonnee" : "Hiking trail",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chemin de Nietzsche",
        addressLocality: "Eze",
        postalCode: "06360",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.7253,
        longitude: 7.3581,
      },
      hasMap: MAPS_URL,
      sameAs: [MAPS_URL, OFFICIAL_TRAIL_URL],
      additionalProperty: [
        { "@type": "PropertyValue", name: locale === "fr" ? "Distance" : "Distance", value: factValues.distance },
        { "@type": "PropertyValue", name: locale === "fr" ? "Duree" : "Duration", value: factValues.durationUp },
        { "@type": "PropertyValue", name: locale === "fr" ? "Denivele positif" : "Elevation gain", value: factValues.elevation },
        { "@type": "PropertyValue", name: locale === "fr" ? "Difficulte" : "Difficulty", value: factValues.difficulty },
        { "@type": "PropertyValue", name: locale === "fr" ? "Depart" : "Start point", value: factValues.start },
        { "@type": "PropertyValue", name: locale === "fr" ? "Arrivee" : "Finish", value: factValues.end },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": "https://www.nietzschepath.com/#hero-image",
      contentUrl: `https://www.nietzschepath.com${HERO_IMAGE}`,
      caption: locale === "fr" ? "Chemin de Nietzsche a Eze" : "Nietzsche Path in Eze",
      inLanguage: copy.htmlLang,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
