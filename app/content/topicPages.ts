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
    title: "Carte du Chemin de Nietzsche a Eze",
    description:
      "Carte du Chemin de Nietzsche a Eze : point de depart a Eze-sur-Mer, arrivee a Eze Village, sens de marche, reperes pratiques et lien Google Maps.",
    eyebrow: "Guide detaille",
    hero:
      "Cette page rassemble les infos les plus utiles pour suivre la carte du Chemin de Nietzsche entre la gare d'Eze-sur-Mer et Eze Village.",
    snippetLead:
      "Cette page repond directement a la question \"ou voir la carte du Chemin de Nietzsche ?\" avec le depart le plus courant pres de la gare d'Eze-sur-Mer, l'arrivee a Eze Village et les reperes les plus utiles pour suivre le trace.",
    summary:
      "Le trace le plus recherche part de la gare d'Eze-sur-Mer, rejoint le sentier du Chemin de Nietzsche, puis remonte jusqu'au village medieval d'Eze. C'est l'itineraire le plus simple a comprendre pour un visiteur qui prepare sa marche sur mobile.",
    quickFacts: [
      { label: "Depart", value: factValues.start },
      { label: "Arrivee", value: factValues.end },
      { label: "Distance", value: factValues.distance },
      { label: "Denivele", value: factValues.elevation },
    ],
    sections: [
      {
        title: "Itineraire sur la carte",
        paragraphs: [
          "Le point bas se situe pres de la gare SNCF d'Eze-sur-Mer. De la, le sentier s'eleve progressivement avec une alternance de portions cimentees, de marches et de passages rocheux avant d'atteindre Eze Village.",
          "Si vous cherchez la carte du Chemin de Nietzsche, le plus utile est de memoriser les trois reperes suivants : gare d'Eze-sur-Mer, sentier du Chemin de Nietzsche, puis entree du village medieval.",
        ],
        bullets: [
          "Depart bas : gare d'Eze-sur-Mer.",
          "Montee : sentier du Chemin de Nietzsche.",
          "Arrivee haute : Eze Village.",
          "Repere rapide : plus code P9F6+Q5 Eze, France.",
        ],
      },
      {
        title: "Montee ou descente sur la carte ?",
        table: {
          headers: ["Critere", "Montee", "Descente"],
          rows: [
            ["Point de depart", "Eze-sur-Mer", "Eze Village"],
            ["Lecture de la carte", "Plus intuitive depuis la gare", "Pratique si vous arrivez en bus au village"],
            ["Effort", "Plus soutenu", "Plus simple au cardio"],
            ["Temps moyen", factValues.durationUp, factValues.durationDown],
          ],
        },
      },
      {
        title: "Conseils pour suivre la carte sans se perdre",
        bullets: [
          "Ouvrez Google Maps avant de partir : le reseau mobile peut varier selon les portions.",
          "Reperez l'arrivee a Eze Village si vous faites la montee, ou la gare si vous faites la descente.",
          "Prevoir eau et chaussures stables reste plus important que la technicite du trace.",
          "Le sentier est court, mais il vaut mieux partir tot quand il fait chaud.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ou voir la carte du Chemin de Nietzsche ?",
        answer:
          "Le plus simple est d'ouvrir le lien Google Maps du site, avec la gare d'Eze-sur-Mer comme repere bas et Eze Village comme repere haut.",
      },
      {
        question: "Quel est le point de depart sur la carte ?",
        answer:
          "Le depart le plus courant se situe a proximite de la gare SNCF d'Eze-sur-Mer.",
      },
      {
        question: "Peut-on faire la descente en suivant la meme carte ?",
        answer:
          "Oui. Le meme trace peut se faire dans les deux sens, soit en montant depuis Eze-sur-Mer, soit en redescendant depuis Eze Village.",
      },
      {
        question: "Ou est le depart du Chemin de Nietzsche sur la carte ?",
        answer:
          "Le depart le plus souvent recherche sur la carte est situe pres de la gare SNCF d'Eze-sur-Mer.",
      },
      {
        question: "Quelle gare faut-il indiquer pour trouver la carte du sentier ?",
        answer:
          "Pour trouver facilement le trace, utilisez Eze-sur-Mer comme point de depart dans votre recherche Google Maps.",
      },
    ],
    ctas: [
      { label: "Ouvrir la carte Google Maps", href: MAPS_URL },
      { label: "Voir la fiche officielle Nice Cote d'Azur", href: OFFICIAL_TRAIL_URL },
    ],
    internalLinks: [
      {
        href: "/acces-chemin-de-nietzsche",
        anchor: "Voir l'acces au Chemin de Nietzsche depuis la gare d'Eze-sur-Mer",
        description: "Train, bus, parking et organisation la plus simple pour rejoindre le depart du sentier.",
      },
      {
        href: "/difficulte-chemin-de-nietzsche",
        anchor: "Comprendre la difficulte du Chemin de Nietzsche avant de suivre la carte",
        description: "Niveau, chaleur, terrain rocheux et conseils pour choisir montee ou descente.",
      },
    ],
  },
  difficulte: {
    slug: "/difficulte-chemin-de-nietzsche",
    title: "Difficulte du Chemin de Nietzsche",
    description:
      "Difficulte du Chemin de Nietzsche a Eze : niveau modere, denivele, terrain rocheux, chaleur, chaussures conseillees et conseils selon votre profil.",
    eyebrow: "Guide detaille",
    hero:
      "Le Chemin de Nietzsche est court, mais la difficulte ressentie depend beaucoup du soleil, du sens choisi et de votre habitude de marche en terrain irregulier.",
    snippetLead:
      "Cette page repond directement a la question \"le Chemin de Nietzsche est-il difficile ?\" : la randonnee est generalement classee comme moderee, mais la montee depuis la gare d'Eze-sur-Mer peut sembler exigeante a cause du denivele, des marches et de la chaleur.",
    summary:
      "La plupart des visiteurs classent le Chemin de Nietzsche comme une randonnee moderee. La distance est relativement courte, mais la montee, les marches et l'exposition au soleil rendent l'effort plus serieux qu'il n'en a l'air sur le papier.",
    quickFacts: [
      { label: "Niveau", value: "Modere" },
      { label: "Terrain", value: "Rocheux et marches" },
      { label: "Denivele", value: factValues.elevation },
      { label: "Montee", value: factValues.durationUp },
    ],
    sections: [
      {
        title: "Quel niveau pour le Chemin de Nietzsche ?",
        paragraphs: [
          "Pour un marcheur occasionnel, la montee peut sembler soutenue, surtout en ete. Pour un randonneur habitue, le sentier reste relativement court mais demande tout de meme un minimum de souffle et de stabilite.",
          "Le vrai sujet n'est pas seulement la distance, mais la combinaison entre denivele, marches irregulieres, terrain rocheux et chaleur.",
        ],
      },
      {
        title: "Ce qui rend la randonnee difficile",
        bullets: [
          "Montee continue depuis Eze-sur-Mer vers le village.",
          "Escaliers et appuis parfois irreguliers.",
          "Portions exposees au soleil avec peu d'ombre.",
          "Risque de fatigue plus marque en plein ete ou en milieu de journee.",
          "Descente plus facile pour le cardio, mais plus sensible pour les genoux.",
        ],
      },
      {
        title: "Pour qui le sentier est-il adapte ?",
        table: {
          headers: ["Profil", "Avis"],
          rows: [
            ["Randonneur habitue", "Difficulte moderee, sortie assez courte"],
            ["Visiteur occasionnel", "Faisable avec pauses et depart tot"],
            ["Enfants", "Possible selon l'age, sous surveillance"],
            ["Seniors", "A evaluer selon forme, chaleur et stabilite"],
            ["Par temps de pluie", "Moins recommande a cause du terrain glissant"],
          ],
        },
      },
      {
        title: "Equipement conseille",
        bullets: [
          "Chaussures fermes avec bonne accroche.",
          "1 a 1,5 litre d'eau par personne en saison chaude.",
          "Chapeau et protection solaire.",
          "Eviter tongs, chaussures lisses ou depart trop tardif en ete.",
        ],
      },
    ],
    faqs: [
      {
        question: "Le Chemin de Nietzsche est-il difficile ?",
        answer:
          "Il est generalement considere comme modere, avec une montee assez exigeante si vous partez depuis Eze-sur-Mer.",
      },
      {
        question: "Qu'est-ce qui rend le sentier plus difficile ?",
        answer:
          "Le denivele, les marches, le terrain rocheux et surtout la chaleur en ete sont les facteurs principaux.",
      },
      {
        question: "La descente est-elle plus facile ?",
        answer:
          "Oui pour le cardio, mais elle demande quand meme de l'attention sur les appuis et peut fatiguer les genoux.",
      },
      {
        question: "Le Chemin de Nietzsche est-il difficile depuis la gare d'Eze-sur-Mer ?",
        answer:
          "Oui, la montee depuis la gare d'Eze-sur-Mer est la version la plus exigeante physiquement, meme si le niveau reste globalement modere.",
      },
      {
        question: "La difficulte change-t-elle si l'on descend depuis Eze Village ?",
        answer:
          "Oui. La descente est souvent plus accessible pour le souffle, mais elle reste technique par endroits a cause des marches et du terrain.",
      },
    ],
    ctas: [
      { label: "Voir la page acces", href: "/acces-chemin-de-nietzsche" },
      { label: "Voir la carte du sentier", href: "/carte-chemin-de-nietzsche" },
    ],
    internalLinks: [
      {
        href: "/carte-chemin-de-nietzsche",
        anchor: "Voir la carte du Chemin de Nietzsche avec le depart a Eze-sur-Mer",
        description: "Le trace aide a visualiser la montee, l'arrivee au village et les points de repere essentiels.",
      },
      {
        href: "/acces-chemin-de-nietzsche",
        anchor: "Verifier l'acces en train et le depart depuis la gare pour evaluer la difficulte",
        description: "Choisir le bon point de depart change beaucoup la sensation d'effort.",
      },
    ],
  },
  acces: {
    slug: "/acces-chemin-de-nietzsche",
    title: "Acces au Chemin de Nietzsche",
    description:
      "Acces au Chemin de Nietzsche : depart depuis la gare d'Eze-sur-Mer, options train, bus, parking, arrivee a Eze Village et conseils pratiques depuis Nice.",
    eyebrow: "Guide detaille",
    hero:
      "Pour rejoindre le Chemin de Nietzsche, le plus simple est de choisir votre point de depart selon votre sens de marche : gare d'Eze-sur-Mer pour monter, Eze Village pour descendre.",
    snippetLead:
      "Cette page repond directement a la question \"comment acceder au Chemin de Nietzsche ?\" : pour la montee, l'acces le plus simple se fait en train jusqu'a la gare d'Eze-sur-Mer ; pour une version plus facile, beaucoup de visiteurs commencent a Eze Village puis descendent.",
    summary:
      "L'acces le plus pratique pour la montee se fait via la gare d'Eze-sur-Mer. Pour une version plus simple, beaucoup de visiteurs rejoignent d'abord Eze Village en bus ou en voiture avant de redescendre a pied.",
    quickFacts: [
      { label: "Train", value: factValues.start },
      { label: "Bus", value: "Possible via Eze Village" },
      { label: "Parking", value: "Plus simple en haut" },
      { label: "Arrivee", value: factValues.end },
    ],
    sections: [
      {
        title: "Comment aller au Chemin de Nietzsche ?",
        paragraphs: [
          "Depuis Nice ou Monaco, le train jusqu'a Eze-sur-Mer reste l'option la plus claire pour commencer la montee. Une fois sorti de la gare, vous rejoignez rapidement la base du sentier.",
          "Si vous preferez une version moins physique, il est souvent plus pratique de rejoindre d'abord Eze Village, puis de faire la descente vers la mer.",
        ],
      },
      {
        title: "Options d'acces selon votre plan",
        table: {
          headers: ["Option", "Utilisation la plus logique"],
          rows: [
            ["Train jusqu'a Eze-sur-Mer", "Ideal pour monter le sentier"],
            ["Bus jusqu'a Eze Village", "Pratique pour descendre"],
            ["Voiture avec parking en haut", "Utile si vous combinez village + descente"],
            ["Aller-retour sur place", "Possible mais plus fatigant"],
          ],
        },
      },
      {
        title: "Acces depuis Nice",
        bullets: [
          "Prendre le train regional jusqu'a Eze-sur-Mer pour une montee directe.",
          "Ou rejoindre Eze Village si vous voulez privilegier la descente.",
          "Verifiez les horaires retour avant de partir, surtout hors haute saison.",
        ],
      },
      {
        title: "Conseils pratiques avant de partir",
        bullets: [
          "Choisissez votre acces selon le sens de marche voulu.",
          "Montee : acces le plus logique par la gare d'Eze-sur-Mer.",
          "Descente : acces souvent plus confortable par Eze Village.",
          "Gardez de l'eau des le depart, pas seulement une fois sur le sentier.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ou commence le Chemin de Nietzsche ?",
        answer:
          "Le depart bas le plus connu se situe pres de la gare SNCF d'Eze-sur-Mer.",
      },
      {
        question: "Peut-on acceder au sentier en train ?",
        answer:
          "Oui. Le train jusqu'a Eze-sur-Mer est l'une des options les plus simples pour commencer la montee.",
      },
      {
        question: "Faut-il commencer par le village ou par la mer ?",
        answer:
          "Pour un effort plus sportif, commencez par la mer. Pour une version plus facile, commencez par Eze Village puis descendez.",
      },
      {
        question: "Quelle gare pour acceder au Chemin de Nietzsche ?",
        answer:
          "La gare la plus pratique est Eze-sur-Mer si vous voulez commencer la randonnee depuis le bas.",
      },
      {
        question: "Peut-on rejoindre le Chemin de Nietzsche en train depuis Nice ?",
        answer:
          "Oui. Depuis Nice, le train regional jusqu'a Eze-sur-Mer est l'une des solutions les plus simples pour atteindre le depart du sentier.",
      },
    ],
    ctas: [
      { label: "Ouvrir Google Maps", href: MAPS_URL },
      { label: "Voir la page difficulte", href: "/difficulte-chemin-de-nietzsche" },
    ],
    internalLinks: [
      {
        href: "/carte-chemin-de-nietzsche",
        anchor: "Voir la carte du Chemin de Nietzsche pour reperer le depart et l'arrivee",
        description: "Le trace entre la gare d'Eze-sur-Mer et Eze Village est plus facile a comprendre sur une page dediee.",
      },
      {
        href: "/difficulte-chemin-de-nietzsche",
        anchor: "Comparer l'acces en train avec la difficulte reelle de la montee",
        description: "Utile pour choisir entre montee depuis la mer ou descente depuis le village.",
      },
    ],
  },
};

export const topicLinks = [
  {
    href: topicPages.carte.slug,
    title: "Carte du Chemin de Nietzsche",
    description: "Trace du sentier, points de repere et lecture rapide du parcours entre Eze-sur-Mer et Eze Village.",
  },
  {
    href: topicPages.difficulte.slug,
    title: "Difficulte du Chemin de Nietzsche",
    description: "Niveau reel, terrain, denivele, chaleur et conseils selon votre profil de marche.",
  },
  {
    href: topicPages.acces.slug,
    title: "Acces au Chemin de Nietzsche",
    description: "Train, bus, parking, depart depuis Eze-sur-Mer et organisation la plus simple depuis Nice.",
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
      "eze",
      "randonnee eze",
      key,
    ],
  };
}

export const topicGallery = galleryImages.slice(0, 3);
