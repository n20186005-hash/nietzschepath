import { factValues, galleryImages, HERO_IMAGE, MAPS_URL, OFFICIAL_TRAIL_URL, pageCopy } from "./trailData";

export type TopicPageKey = "carte" | "difficulte" | "acces";

type TopicSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

type TopicFaq = {
  question: string;
  answer: string;
};

type TopicPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  snippetLead: string;
  summary: string;
  quickFacts: { label: string; value: string }[];
  sections: TopicSection[];
  faqs: TopicFaq[];
  ctas: { label: string; href: string }[];
  internalLinks: { href: string; anchor: string; description: string }[];
};

export const topicPages: Record<TopicPageKey, TopicPageData> = {
  carte: {
    slug: "/carte-chemin-de-nietzsche",
    title: "Carte du Chemin de Nietzsche à Èze",
    description:
      "Carte du Chemin de Nietzsche à Èze avec départ près de la gare d’Èze-sur-Mer, arrivée à Èze Village et repères utiles pour suivre facilement le tracé.",
    eyebrow: "Guide détaillé",
    hero:
      "Cette page rassemble les infos les plus utiles pour suivre la carte du Chemin de Nietzsche entre la gare d’Èze-sur-Mer et Èze Village.",
    snippetLead:
      "Cette page répond directement à la question \\\"où voir la carte du Chemin de Nietzsche ?\\\" avec le départ le plus courant près de la gare d’Èze-sur-Mer, l'arrivée à Èze Village et les repères les plus utiles pour suivre le tracé.",
    summary:
      "Le tracé le plus recherché part de la gare d’Èze-sur-Mer, rejoint le sentier du Chemin de Nietzsche, puis remonte jusqu’au village médiéval d’Èze. C'est l'itinéraire le plus simple à comprendre pour un visiteur qui prépare sa marche sur mobile.",
    quickFacts: [
      { label: "Départ", value: factValues.start },
      { label: "Arrivée", value: factValues.end },
      { label: "Distance", value: factValues.distance },
      { label: "Dénivelé", value: factValues.elevation },
    ],
    sections: [
      {
        title: "Itinéraire sur la carte",
        paragraphs: [
          "Le point bas se situe près de la gare SNCF d’Èze-sur-Mer. De là, le sentier s'élève progressivement avec une alternance de portions cimentées, de marches et de passages rocheux avant d'atteindre Èze Village.",
          "Si vous cherchez la carte du Chemin de Nietzsche, le plus utile est de mémoriser les trois repères suivants : gare d’Èze-sur-Mer, sentier du Chemin de Nietzsche, puis entrée du village médiéval.",
        ],
        bullets: [
          "Départ bas : gare d’Èze-sur-Mer.",
          "Montée : sentier du Chemin de Nietzsche.",
          "Arrivée haute : Èze Village.",
          "Repère rapide : plus code P9F6+Q5 Eze, France.",
        ],
      },
      {
        title: "La petite cascade et le moulin oublié de La Calanca",
        paragraphs: [
          "Près de l’ancien moulin à huile de La Calanca, une petite cascade a été signalée par le bureau d’information touristique d’Èze. Son emplacement peut être consulté sur Google Maps aux coordonnées 43.72792421121981, 7.364799274273176. Ce point ne doit pas être interprété comme une invitation à quitter le chemin.",
          "Henri Geist et André Tiret décrivent le moulin et ses ouvrages hydrauliques dans « Le moulin oublié de la Calanca (Èze) », Archéam, saison 1997–1998, n° 5, p. 40–42. Les bassins en amont sont cachés dans les broussailles, difficiles d’accès et potentiellement dangereux.",
        ],
        bullets: [
          "Restez sur l’itinéraire principal et respectez les éventuelles restrictions.",
          "Ne cherchez pas à atteindre les anciens réservoirs ni à escalader les rochers humides.",
          "Voir l’encadré historique et de sécurité détaillé sur la page d’accueil.",
        ],
      },
      {
        title: "Montée ou descente sur la carte ?",
        table: {
          headers: ["Critère", "Montée", "Descente"],
          rows: [
            ["Point de départ", "Èze-sur-Mer", "Èze Village"],
            ["Lecture de la carte", "Plus intuitive depuis la gare", "Pratique si vous arrivez en bus au village"],
            ["Effort", "Plus soutenu", "Plus simple au cardio"],
            ["Temps moyen", factValues.durationUp, factValues.durationDown],
          ],
        },
      },
      {
        title: "Conseils pour suivre la carte sans se perdre",
        bullets: [
          "Ouvrez Google Maps avant de partir : le réseau mobile peut varier selon les portions.",
          "Repérez l'arrivée à Èze Village si vous faites la montée, ou la gare si vous faites la descente.",
          "Prévoir de l’eau et des chaussures stables reste plus important que la technicité du tracé.",
          "Le sentier est court, mais il vaut mieux partir tôt quand il fait chaud.",
        ],
      },
    ],
    faqs: [
      {
        question: "Où voir la carte du Chemin de Nietzsche ?",
        answer:
          "Le plus simple est d'ouvrir le lien Google Maps du site, avec la gare d’Èze-sur-Mer comme repère bas et Èze Village comme repère haut.",
      },
      {
        question: "Quel est le point de départ sur la carte ?",
        answer:
          "Le départ le plus courant se situe à proximité de la gare SNCF d’Èze-sur-Mer.",
      },
      {
        question: "Peut-on faire la descente en suivant la même carte ?",
        answer:
          "Oui. Le même tracé peut se faire dans les deux sens, soit en montant depuis Èze-sur-Mer, soit en redescendant depuis Èze Village.",
      },
      {
        question: "Où est le départ du Chemin de Nietzsche sur la carte ?",
        answer:
          "Le départ le plus souvent recherché sur la carte est situé près de la gare SNCF d’Èze-sur-Mer.",
      },
      {
        question: "Quelle gare faut-il indiquer pour trouver la carte du sentier ?",
        answer:
          "Pour trouver facilement le tracé, utilisez Èze-sur-Mer comme point de départ dans votre recherche Google Maps.",
      },
    ],
    ctas: [
      { label: "Ouvrir la carte Google Maps", href: MAPS_URL },
      { label: "Voir la fiche officielle Nice Côte d'Azur", href: OFFICIAL_TRAIL_URL },
    ],
    internalLinks: [
      {
        href: "/acces-chemin-de-nietzsche",
        anchor: "Voir l'accès au Chemin de Nietzsche depuis la gare d’Èze-sur-Mer",
        description: "Train, bus, parking et organisation la plus simple pour rejoindre le départ du sentier.",
      },
      {
        href: "/#cascade-moulin-la-calanca",
        anchor: "Découvrir la cascade et l’ancien moulin de La Calanca",
        description: "Repère GPS, origine du moulin, références historiques et avertissement de sécurité.",
      },
      {
        href: "/difficulte-chemin-de-nietzsche",
        anchor: "Comprendre la difficulté du Chemin de Nietzsche avant de suivre la carte",
        description: "Niveau, chaleur, terrain rocheux et conseils pour choisir montée ou descente.",
      },
    ],
  },
  difficulte: {
    slug: "/difficulte-chemin-de-nietzsche",
    title: "Difficulté du Chemin de Nietzsche",
    description:
      "Difficulté du Chemin de Nietzsche à Èze : niveau généralement modéré, mais montée plus exigeante depuis la gare d’Èze-sur-Mer à cause du dénivelé, des marches et de la chaleur.",
    eyebrow: "Guide détaillé",
    hero:
      "Le Chemin de Nietzsche est court, mais la difficulté ressentie dépend beaucoup du soleil, du sens choisi et de votre habitude de marche en terrain irrégulier.",
    snippetLead:
      "Cette page répond directement à la question \\\"le Chemin de Nietzsche est-il difficile ?\\\" : la randonnée est généralement classée comme modérée, mais la montée depuis la gare d’Èze-sur-Mer peut sembler exigeante à cause du dénivelé, des marches et de la chaleur.",
    summary:
      "La plupart des visiteurs classent le Chemin de Nietzsche comme une randonnée modérée. La distance est relativement courte, mais la montée, les marches et l'exposition au soleil rendent l'effort plus sérieux qu'il n'en a l'air sur le papier.",
    quickFacts: [
      { label: "Niveau", value: "Modéré" },
      { label: "Terrain", value: "Rocheux et marches" },
      { label: "Dénivelé", value: factValues.elevation },
      { label: "Montée", value: factValues.durationUp },
    ],
    sections: [
      {
        title: "Quel niveau pour le Chemin de Nietzsche ?",
        paragraphs: [
          "Pour un marcheur occasionnel, la montée peut sembler soutenue, surtout en été. Pour un randonneur habitué, le sentier reste relativement court mais demande tout de même un minimum de souffle et de stabilité.",
          "Le vrai sujet n'est pas seulement la distance, mais la combinaison entre dénivelé, marches irrégulières, terrain rocheux et chaleur.",
        ],
      },
      {
        title: "Ce qui rend la randonnée difficile",
        bullets: [
          "Montée continue depuis Èze-sur-Mer vers le village.",
          "Escaliers et appuis parfois irréguliers.",
          "Portions exposées au soleil avec peu d'ombre.",
          "Risque de fatigue plus marqué en plein été ou en milieu de journée.",
          "Descente plus facile pour le cardio, mais plus sensible pour les genoux.",
        ],
      },
      {
        title: "Pour qui le sentier est-il adapté ?",
        table: {
          headers: ["Profil", "Avis"],
          rows: [
            ["Randonneur habitué", "Difficulté modérée, sortie assez courte"],
            ["Visiteur occasionnel", "Faisable avec pauses et départ tôt"],
            ["Enfants", "Possible selon l'âge, sous surveillance"],
            ["Seniors", "À évaluer selon forme, chaleur et stabilité"],
            ["Par temps de pluie", "Moins recommandé à cause du terrain glissant"],
          ],
        },
      },
      {
        title: "Équipement conseillé",
        bullets: [
          "Chaussures fermes avec bonne accroche.",
          "1 à 1,5 litre d'eau par personne en saison chaude.",
          "Chapeau et protection solaire.",
          "Évitez les tongs et les chaussures lisses ; partez tôt en été.",
        ],
      },
    ],
    faqs: [
      {
        question: "Le Chemin de Nietzsche est-il difficile ?",
        answer:
          "Il est généralement considéré comme modéré, avec une montée assez exigeante si vous partez depuis Èze-sur-Mer.",
      },
      {
        question: "Qu'est-ce qui rend le sentier plus difficile ?",
        answer:
          "Le dénivelé, les marches, le terrain rocheux et surtout la chaleur en été sont les facteurs principaux.",
      },
      {
        question: "La descente est-elle plus facile ?",
        answer:
          "Oui pour le cardio, mais elle demande quand même de l'attention sur les appuis et peut fatiguer les genoux.",
      },
      {
        question: "Le Chemin de Nietzsche est-il difficile depuis la gare d’Èze-sur-Mer ?",
        answer:
          "Oui, la montée depuis la gare d’Èze-sur-Mer est la version la plus exigeante physiquement, même si le niveau reste globalement modéré.",
      },
      {
        question: "La difficulté change-t-elle si l'on descend depuis Èze Village ?",
        answer:
          "Oui. La descente est souvent plus accessible pour le souffle, mais elle reste technique par endroits à cause des marches et du terrain.",
      },
    ],
    ctas: [
      { label: "Voir la page accès", href: "/acces-chemin-de-nietzsche" },
      { label: "Voir la carte du sentier", href: "/carte-chemin-de-nietzsche" },
    ],
    internalLinks: [
      {
        href: "/carte-chemin-de-nietzsche",
        anchor: "Voir la carte du Chemin de Nietzsche avec le départ à Èze-sur-Mer",
        description: "Le tracé aide à visualiser la montée, l'arrivée au village et les points de repère essentiels.",
      },
      {
        href: "/acces-chemin-de-nietzsche",
        anchor: "Vérifier l'accès en train et le départ depuis la gare pour évaluer la difficulté",
        description: "Choisir le bon point de départ change beaucoup la sensation d'effort.",
      },
    ],
  },
  acces: {
    slug: "/acces-chemin-de-nietzsche",
    title: "Accès au Chemin de Nietzsche",
    description:
      "Accès au Chemin de Nietzsche avec train jusqu’à la gare d’Èze-sur-Mer pour la montée, ou départ depuis Èze Village pour une version plus facile de la randonnée.",
    eyebrow: "Guide détaillé",
    hero:
      "Pour rejoindre le Chemin de Nietzsche, le plus simple est de choisir votre point de départ selon votre sens de marche : gare d’Èze-sur-Mer pour monter, Èze Village pour descendre.",
    snippetLead:
      "Cette page répond directement à la question \\\"comment accéder au Chemin de Nietzsche ?\\\" : pour la montée, l'accès le plus simple se fait en train jusqu’à la gare d’Èze-sur-Mer ; pour une version plus facile, beaucoup de visiteurs commencent à Èze Village puis descendent.",
    summary:
      "L'accès le plus pratique pour la montée se fait via la gare d’Èze-sur-Mer. Pour une version plus simple, beaucoup de visiteurs rejoignent d'abord Èze Village en bus ou en voiture avant de redescendre à pied.",
    quickFacts: [
      { label: "Train", value: factValues.start },
      { label: "Bus", value: "Possible via Èze Village" },
      { label: "Parking", value: "Plus simple en haut" },
      { label: "Arrivée", value: factValues.end },
    ],
    sections: [
      {
        title: "Comment aller au Chemin de Nietzsche ?",
        paragraphs: [
          "Depuis Nice ou Monaco, le train jusqu’à Èze-sur-Mer reste l'option la plus claire pour commencer la montée. Une fois sorti de la gare, vous rejoignez rapidement la base du sentier.",
          "Si vous préférez une version moins physique, il est souvent plus pratique de rejoindre d'abord Èze Village, puis de faire la descente vers la mer.",
        ],
      },
      {
        title: "Options d'accès selon votre plan",
        table: {
          headers: ["Option", "Utilisation la plus logique"],
          rows: [
            ["Train jusqu’à Èze-sur-Mer", "Idéal pour monter le sentier"],
            ["Bus jusqu’à Èze Village", "Pratique pour descendre"],
            ["Voiture avec parking en haut", "Utile si vous combinez village + descente"],
            ["Aller-retour sur place", "Possible mais plus fatigant"],
          ],
        },
      },
      {
        title: "Accès depuis Nice",
        bullets: [
          "Prendre le train régional jusqu’à Èze-sur-Mer pour une montée directe.",
          "Ou rejoindre Èze Village si vous voulez privilégier la descente.",
          "Vérifiez les horaires retour avant de partir, surtout hors haute saison.",
        ],
      },
      {
        title: "Conseils pratiques avant de partir",
        bullets: [
          "Choisissez votre accès selon le sens de marche voulu.",
          "Montée : accès le plus logique par la gare d’Èze-sur-Mer.",
          "Descente : accès souvent plus confortable par Èze Village.",
          "Gardez de l'eau dès le départ, pas seulement une fois sur le sentier.",
        ],
      },
    ],
    faqs: [
      {
        question: "Où commence le Chemin de Nietzsche ?",
        answer:
          "Le départ bas le plus connu se situe près de la gare SNCF d’Èze-sur-Mer.",
      },
      {
        question: "Peut-on accéder au sentier en train ?",
        answer:
          "Oui. Le train jusqu’à Èze-sur-Mer est l'une des options les plus simples pour commencer la montée.",
      },
      {
        question: "Faut-il commencer par le village ou par la mer ?",
        answer:
          "Pour un effort plus sportif, commencez par la mer. Pour une version plus facile, commencez par Èze Village puis descendez.",
      },
      {
        question: "Quelle gare pour accéder au Chemin de Nietzsche ?",
        answer:
          "La gare la plus pratique est Èze-sur-Mer si vous voulez commencer la randonnée depuis le bas.",
      },
      {
        question: "Peut-on rejoindre le Chemin de Nietzsche en train depuis Nice ?",
        answer:
          "Oui. Depuis Nice, le train régional jusqu’à Èze-sur-Mer est l'une des solutions les plus simples pour atteindre le départ du sentier.",
      },
    ],
    ctas: [
      { label: "Ouvrir Google Maps", href: MAPS_URL },
      { label: "Voir la page difficulté", href: "/difficulte-chemin-de-nietzsche" },
    ],
    internalLinks: [
      {
        href: "/carte-chemin-de-nietzsche",
        anchor: "Voir la carte du Chemin de Nietzsche pour repérer le départ et l'arrivée",
        description: "Le tracé entre la gare d’Èze-sur-Mer et Èze Village est plus facile à comprendre sur une page dédiée.",
      },
      {
        href: "/difficulte-chemin-de-nietzsche",
        anchor: "Comparer l'accès en train avec la difficulté réelle de la montée",
        description: "Utile pour choisir entre montée depuis la mer ou descente depuis le village.",
      },
    ],
  },
};

export const topicLinks = [
  {
    href: topicPages.carte.slug,
    title: "Carte du Chemin de Nietzsche",
    description: "Carte du Chemin de Nietzsche avec départ près de la gare d’Èze-sur-Mer, arrivée à Èze Village et repères utiles pour suivre facilement le tracé.",
  },
  {
    href: topicPages.difficulte.slug,
    title: "Difficulté du Chemin de Nietzsche",
    description: "Difficulté du Chemin de Nietzsche à Èze : niveau généralement modéré, mais montée plus exigeante depuis la gare d’Èze-sur-Mer à cause du dénivelé, des marches et de la chaleur.",
  },
  {
    href: topicPages.acces.slug,
    title: "Accès au Chemin de Nietzsche",
    description: "Accès au Chemin de Nietzsche avec train jusqu’à la gare d’Èze-sur-Mer pour la montée, ou départ depuis Èze Village pour une version plus facile de la randonnée.",
  },
];

export function getTopicStructuredData(key: TopicPageKey) {
  const topic = topicPages[key];
  const pageUrl = `https://www.nietzschepath.com${topic.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: topic.title,
      description: topic.description,
      inLanguage: "fr",
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
        "@id": `${pageUrl}#hero-image`,
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
          name: "Accueil",
          item: "https://www.nietzschepath.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: topic.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: topic.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${pageUrl}#hero-image`,
      contentUrl: `https://www.nietzschepath.com${HERO_IMAGE}`,
      caption: topic.title,
      inLanguage: "fr",
    },
  ];
}

export function getTopicMetadata(key: TopicPageKey) {
  const topic = topicPages[key];

  return {
    title: {
      absolute: topic.title,
    },
    description: topic.description,
    alternates: {
      canonical: topic.slug,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
      url: `https://www.nietzschepath.com${topic.slug}`,
      siteName: "Nietzsche Path",
      locale: pageCopy.fr.locale,
      type: "article",
      images: [
        {
          url: HERO_IMAGE,
          alt: topic.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.description,
      images: [HERO_IMAGE],
    },
    keywords: [
      "chemin de nietzsche",
      topic.title.toLowerCase(),
      "èze",
      "randonnée èze",
      key,
    ],
  };
}

export const topicGallery = galleryImages.slice(0, 3);
