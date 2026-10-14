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
  difficulty: "Modérée",
  start: "Gare d’Èze-sur-Mer",
  end: "Èze Village",
  rating: "4.5/5",
  reviewsLabelFr: "sur Google Maps",
  reviewsLabelEn: "on Google Maps",
  address: "06360 Èze, France",
  plusCode: "P9F6+Q5 Eze, France",
};

export const galleryImages = [
  {
    src: "/images/gallery/chemin-de-nietzsche-eze-vue-mer.jpg",
    altFr: "Vue sur la Méditerranée depuis le Chemin de Nietzsche à Èze",
    altEn: "Mediterranean view from the Nietzsche Path in Èze",
    captionFr: "Vue mer depuis le sentier entre Èze-sur-Mer et le village.",
    captionEn: "Sea view from the trail between Èze-sur-Mer and the village.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-rochers-marche.jpg",
    altFr: "Passage rocheux sur le sentier du Chemin de Nietzsche",
    altEn: "Rocky section on the Nietzsche Path trail",
    captionFr: "Portion rocheuse avec marches irrégulières.",
    captionEn: "Rocky section with uneven stone steps.",
  },
  {
    src: "/images/gallery/sentier-nietzsche-panorama-cote-azur.jpg",
    altFr: "Panorama sur la Côte d'Azur depuis le sentier Nietzsche",
    altEn: "French Riviera panorama from the Nietzsche trail",
    captionFr: "Panorama ouvert sur la baie et la côte.",
    captionEn: "Wide panorama over the bay and coastline.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-vers-eze-village.jpg",
    altFr: "Chemin piéton menant vers Èze Village",
    altEn: "Trail section leading toward Èze Village",
    captionFr: "Le sentier monte progressivement vers le village perché.",
    captionEn: "The path climbs steadily toward the hilltop village.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-vegetation-mediterraneenne.jpg",
    altFr: "Végétation méditerranéenne le long du Chemin de Nietzsche",
    altEn: "Mediterranean vegetation along the Nietzsche Path",
    captionFr: "Pins, rochers et végétation typiques de la Riviera.",
    captionEn: "Pines, rocks, and Riviera vegetation along the route.",
  },
  {
    src: "/images/gallery/chemin-de-nietzsche-escaliers-pierre.jpg",
    altFr: "Escaliers de pierre sur la randonnée du Chemin de Nietzsche",
    altEn: "Stone steps on the Chemin de Nietzsche hike",
    captionFr: "Des escaliers en pierre rendent la montée plus soutenue.",
    captionEn: "Stone steps make the uphill route more demanding.",
  },
  {
    src: "/images/gallery/descente-chemin-de-nietzsche-vue-mer.jpg",
    altFr: "Vue descendante vers la mer depuis Èze Village",
    altEn: "View toward the sea on the descent from Èze Village",
    captionFr: "En descente, la mer reste souvent devant vous.",
    captionEn: "On the descent, the sea often stays right in front of you.",
  },
  {
    src: "/images/gallery/arrivee-chemin-de-nietzsche-eze-village.jpg",
    altFr: "Arrivée vers le village médiéval d’Èze",
    altEn: "Arrival near the medieval village of Èze",
    captionFr: "L'arrivée haute se fait à proximité du village médiéval.",
    captionEn: "The upper arrival point is near the medieval village.",
  },
];

export const homepageFaqs: Record<Locale, FaqItem[]> = {
  fr: [
    {
      question: "Où commence le Chemin de Nietzsche ?",
      answer:
        "Le départ le plus courant se situe près de la gare SNCF d’Èze-sur-Mer, puis le sentier remonte jusqu’à Èze Village.",
    },
    {
      question: "Quelle gare pour le Chemin de Nietzsche ?",
      answer:
        "La gare la plus pratique pour commencer la randonnée est Èze-sur-Mer. C'est le repère le plus utile pour la plupart des visiteurs qui arrivent en train.",
    },
    {
      question: "Le Chemin de Nietzsche est-il difficile ?",
      answer:
        "Le niveau est généralement considéré comme modéré, avec une montée plus exigeante si vous partez depuis la mer, surtout en période chaude.",
    },
    {
      question: "Où voir la carte du Chemin de Nietzsche ?",
      answer:
        "Le plus simple est d'utiliser Google Maps avec deux repères clairs : la gare d’Èze-sur-Mer en bas et Èze Village en haut.",
    },
    {
      question: "Peut-on accéder au Chemin de Nietzsche en train ?",
      answer:
        "Oui. Le train jusqu’à Èze-sur-Mer est l'une des solutions les plus simples pour rejoindre le départ du sentier.",
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
        "Google Maps is the easiest option, using Eze-sur-Mer station as the lower référence point and Eze Village as the upper one.",
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
    metadataTitle: "Chemin de Nietzsche à Èze : Carte, Durée, Difficulté & Accès",
    metadataDescription:
      "Guide du Chemin de Nietzsche à Èze : carte du sentier, départ depuis Èze-sur-Mer, difficulté, durée, dénivelé, accès en train et conseils pour la randonnée.",
    locale: "fr_FR",
    urlPath: "/",
    htmlLang: "fr",
    heroEyebrow: "Randonnée à Èze, France",
    h1: "Chemin de Nietzsche",
    heroLead:
      "Sentier reliant Èze-sur-Mer au village médiéval d’Èze, avec vues sur la Méditerranée, dénivelé soutenu et accès simple depuis la gare.",
    altNamesLabel: "Aussi recherché sous",
    altNames: ["Chemin de Nietzsche Èze", "Sentier de Nietzsche", "Nietzsche Path"],
    ratingLabel: "4.5/5 sur Google Maps",
    quickFactsTitle: "Les infos utiles en un coup d’œil",
    factLabels: {
      distance: "Distance",
      duration: "Durée montée",
      elevation: "Dénivelé",
      difficulty: "Difficulté",
    },
    ctas: {
      map: "Voir la carte",
      access: "Comment y aller",
      compare: "Monter ou descendre ?",
    },
    summaryTitle: "Chemin de Nietzsche à Èze",
    summaryBody:
      "Distance : 2,1 km · Durée : environ 1h à 1h30 en montée · Dénivelé : 350 à 400 m D+ · Difficulté : modérée · Accès : gare d’Èze-sur-Mer.",
    sections: {
      map: {
        title: "Carte du Chemin de Nietzsche",
        body: "L'itinéraire le plus connu suit la gare d’Èze-sur-Mer, rejoint le Chemin de Nietzsche, puis remonte jusqu’à l'entrée d’Èze Village. C'est le tracé que recherchent le plus souvent les visiteurs sur mobile.",
        points: [
          { label: "Départ", value: "Gare d’Èze-sur-Mer" },
          { label: "Arrivée", value: "Èze Village" },
          { label: "Direction", value: "Bas vers haut ou l'inverse" },
          { label: "Repère", value: "Plus code P9F6+Q5 Eze, France" },
        ],
        link: "Ouvrir la carte Google Maps",
        official: "Voir aussi la fiche randonnée officielle Nice Côte d'Azur",
      },
      difficulty: {
        title: "Difficulté du Chemin de Nietzsche",
        intro:
          "Le Chemin de Nietzsche est généralement considéré comme modéré, mais la montée peut sembler soutenue quand il fait chaud ou si vous n'avez pas l'habitude des escaliers irréguliers.",
        bullets: [
          "Terrain rocheux avec marches et appuis parfois inégaux.",
          "Montée plus exigeante au cardio que la descente.",
          "Chaussures de randonnée ou de trail conseillées ; évitez les sandales.",
          "Peu d'ombre sur certaines portions : chaleur et soleil sont les vrais facteurs de difficulté.",
          "À faire avec prudence avec enfants, seniors ou par temps de pluie.",
        ],
      },
      duration: {
        title: "Combien de temps pour faire le Chemin de Nietzsche ?",
        intro:
          "La durée dépend surtout du sens choisi et du nombre d'arrêts photo. La référence la plus fréquente est autour d'1h à 1h30 pour la montée.",
        bullets: [
          "Montée : environ 1h à 1h30 depuis Èze-sur-Mer.",
          "Descente : environ 45 à 60 minutes depuis Èze Village.",
          "Ajoutez du temps si vous visitez le village, prenez beaucoup de photos ou marchez en plein été.",
          "Un départ tôt le matin rend l'effort plus confortable et la lumière souvent meilleure.",
        ],
      },
      start: {
        title: "Où commence le Chemin de Nietzsche ?",
        intro:
          "Le départ bas se situe près de la gare SNCF d’Èze-sur-Mer. Le sentier monte ensuite vers le village médiéval d’Èze, ce qui en fait une option très pratique si vous arrivez en train depuis Nice ou Monaco.",
        bullets: [
          "Train : descendre à la gare d’Èze-sur-Mer puis rejoindre le sentier à pied.",
          "Bus : vous pouvez aussi rejoindre Èze Village et faire la descente.",
          "Parking : plus simple à gérer en haut si vous combinez avec la visite du village.",
          "Astuce : vérifiez toujours la chaleur et emportez de l'eau avant de partir.",
        ],
      },
      compare: {
        title: "Monter ou descendre le Chemin de Nietzsche ?",
        headers: ["Critère", "Montée", "Descente"],
        rows: [
          { label: "Départ", up: "Èze-sur-Mer", down: "Èze Village" },
          { label: "Effort", up: "Plus exigeant", down: "Plus facile au cardio" },
          { label: "Vue mer", up: "Régulière", down: "Souvent face à vous" },
          { label: "Durée", up: "1h à 1h30", down: "45 à 60 min" },
          { label: "Idéal pour", up: "Randonneurs motivés", down: "Visiteurs occasionnels" },
        ],
      },
      photos: {
        title: "Photos du Chemin de Nietzsche",
        intro:
          "Les recherches autour des photos montrent que les visiteurs veulent surtout voir le dénivelé, la vue mer et l'arrivée vers Èze. Chaque image ci-dessous est décrite avec un texte alt plus explicite pour renforcer la compréhension du sentier.",
      },
      history: {
        title: "Histoire et contexte",
        paragraphs: [
          "Le sentier est associé à Friedrich Nietzsche, qui a séjourné à plusieurs reprises sur la Côte d'Azur à partir de 1883. La marche entre mer et village est souvent reliée à la période de création de la troisième partie d'Ainsi parlait Zarathoustra.",
          "Des documents sur Nietzsche et la Côte d’Azur, communiqués par le bureau d’information touristique d’Èze, éclairent la place des promenades dans son séjour sur la Riviera. La Côte d’Azur des écrivains (Christian Arthaud et Éric L. Paul, Édisud, p. 140–144) replace ses marches dans leur contexte littéraire.",
          "Nietzsche évoque l’hiver niçois dans une lettre : « Les jours se succèdent ici d’une beauté que je qualifierais d’insolente. » Citation reproduite dans Christian Arthaud et Éric L. Paul, La Côte d’Azur des écrivains (Édisud), p. 142 ; la source secondaire est signalée pour permettre sa vérification.",
        ],
      },
      tips: {
        title: "Conseils pratiques pour la randonnée",
        intro: "Avant de partir, mieux vaut préparer quelques points simples pour rendre la sortie plus confortable.",
        bullets: [
          "Prenez au moins 1 à 1,5 litre d'eau par personne en saison chaude.",
          "Choisissez des chaussures stables sur terrain sec comme sur marches de pierre.",
          "Évitez les heures les plus chaudes en été.",
          "Le matin offre souvent une lumière plus douce et moins de foule.",
          "Gardez du temps pour visiter Èze Village ou pour revenir en bus ou en train.",
        ],
      },
      hikers: {
        title: "Ce que les randonneurs apprécient",
        intro:
          "Plutôt que d'afficher des citations individuelles difficiles à vérifier dans le temps, nous résumons ici les points qui reviennent le plus souvent dans les avis publics.",
        bullets: [
          "Les vues ouvertes sur la Méditerranée tout au long du parcours.",
          "Une montée courte mais bien physique.",
          "Le contraste entre mer, rochers, pins et village médiéval.",
          "La descente comme option plus accèssible pour les visiteurs occasionnels.",
          "La chaleur estivale et le manque d'ombre comme principaux points d'attention.",
        ],
        linkLabel: "Voir les avis récents sur Google Maps",
      },
    },
    footer: {
      disclaimer:
        "Ce site est un guide de voyage indépendant consacré au Chemin de Nietzsche. Il n'est pas affilié à la gestion officielle du site.",
      sources:
        "Les informations pratiques sont consolidées à partir de ressources publiques, dont Google Maps et la fiche randonnée officielle Nice Côte d'Azur.",
      copyright: "Tous droits réservés.",
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
      "A scenic trail linking Eze-sur-Mer to medieval Eze Village, with Mediterranean views, a steady climb, and easy accèss from the train station.",
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
          "Timing dépends on direction, weather, and photo stops. The most common référence point is around 1 to 1.5 hours for the uphill hike.",
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
          "Documents shared by the Èze tourist information office provide literary context for Nietzsche’s Riviera walks, including Christian Arthaud and Éric L. Paul, La Côte d’Azur des écrivains (Édisud, pp. 140–144). This remains an indépendent, unofficial visitor guide.",
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
        "This website is an indépendent travel guide about the Nietzsche Path and is not affiliated with the official site management.",
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
      alternateName: ["Chemin de Nietzsche à Èze", "Sentier de Nietzsche", "Nietzsche Trail"],
      description: copy.summaryBody,
      url: pageUrl,
      image: galleryImages.slice(0, 4).map((image) => `https://www.nietzschepath.com${image.src}`),
      touristType: locale === "fr" ? "Sentier de randonnée" : "Hiking trail",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chemin de Nietzsche",
        addressLocality: "Èze",
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
        { "@type": "PropertyValue", name: locale === "fr" ? "Durée" : "Duration", value: factValues.durationUp },
        { "@type": "PropertyValue", name: locale === "fr" ? "Dénivelé positif" : "Elevation gain", value: factValues.elevation },
        { "@type": "PropertyValue", name: locale === "fr" ? "Difficulté" : "Difficulty", value: factValues.difficulty },
        { "@type": "PropertyValue", name: locale === "fr" ? "Départ" : "Start point", value: factValues.start },
        { "@type": "PropertyValue", name: locale === "fr" ? "Arrivée" : "Finish", value: factValues.end },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": "https://www.nietzschepath.com/#hero-image",
      contentUrl: `https://www.nietzschepath.com${HERO_IMAGE}`,
      caption: locale === "fr" ? "Chemin de Nietzsche à Èze" : "Nietzsche Path in Èze",
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
