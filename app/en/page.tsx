import type { Metadata } from "next";
import TrailGuidePage from "../components/TrailGuidePage";
import { HERO_IMAGE, MAPS_URL, pageCopy } from "../content/trailData";

const copy = pageCopy.en;

export const metadata: Metadata = {
  title: {
    absolute: copy.metadataTitle,
  },
  description: copy.metadataDescription,
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    url: "https://www.nietzschepath.com/en",
    siteName: "Nietzsche Path",
    locale: copy.locale,
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Nietzsche Path in Eze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    images: [HERO_IMAGE],
  },
  keywords: [
    "nietzsche path",
    "nietzsche trail eze",
    "eze nietzsche path",
    "nietzsche path map",
    "nietzsche path difficulty",
    "nietzsche path hike",
  ],
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Eze",
    "geo.position": "43.7253;7.3581",
    ICBM: "43.7253, 7.3581",
    "place:location:latitude": "43.7253",
    "place:location:longitude": "7.3581",
    "maps:url": MAPS_URL,
  },
};

export default function EnglishPage() {
  return <TrailGuidePage locale="en" />;
}
