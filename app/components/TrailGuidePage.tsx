"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  Footprints,
  MapPin,
  Moon,
  Navigation,
  Star,
  Sun,
  Train,
} from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { useTheme } from "../ThemeProvider";
import {
  factValues,
  galleryImages,
  getStructuredData,
  HERO_IMAGE,
  Locale,
  MAPS_URL,
  OFFICIAL_TRAIL_URL,
  pageCopy,
} from "../content/trailData";

type TrailGuidePageProps = {
  locale: Locale;
};

export default function TrailGuidePage({ locale }: TrailGuidePageProps) {
  const { theme, toggleTheme } = useTheme();
  const copy = pageCopy[locale];
  const carouselRef = useRef<HTMLDivElement>(null);
  const structuredData = getStructuredData(locale);
  const localizedFacts = {
    distance: locale === "fr" ? "2,1 km" : "2.1 km",
    durationUp: factValues.durationUp,
    elevation: locale === "fr" ? "350-400 m D+" : "350-400 m gain",
    difficulty: locale === "fr" ? "Moderee" : "Moderate",
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) {
      return;
    }

    carouselRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <main
      lang={copy.htmlLang}
      className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-stone-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <button
        onClick={toggleTheme}
        className="fixed right-5 top-5 z-50 rounded-full border border-stone-200 bg-white/85 p-3 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-black/80"
        aria-label={locale === "fr" ? "Changer de theme" : "Toggle theme"}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5 text-stone-700" />
        )}
      </button>

      <header className="relative overflow-hidden border-b border-stone-200 dark:border-stone-900">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt={locale === "fr" ? "Chemin de Nietzsche a Eze" : "Nietzsche Path in Eze"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/86 to-stone-50 dark:from-black/70 dark:via-black/80 dark:to-[#0a0a0a]" />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
              {copy.heroEyebrow}
            </p>
            <h1 className="mb-5 font-serif text-5xl tracking-tight text-black dark:text-white md:text-7xl">
              {copy.h1}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300 md:text-2xl md:leading-10">
              {copy.heroLead}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
              <span className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 dark:border-stone-800 dark:bg-white/5">
                {copy.altNamesLabel}: {copy.altNames.join(" · ")}
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 hover:text-black dark:border-stone-800 dark:bg-white/5 dark:hover:text-white"
              >
                <Star className="h-4 w-4 text-amber-500" />
                {copy.ratingLabel}
              </a>
            </div>

            <div className="mt-10 rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-white/5">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                {copy.quickFactsTitle}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <FactCard
                  icon={<Navigation className="h-5 w-5" />}
                  label={copy.factLabels.distance}
                  value={localizedFacts.distance}
                />
                <FactCard
                  icon={<Clock className="h-5 w-5" />}
                  label={copy.factLabels.duration}
                  value={localizedFacts.durationUp}
                />
                <FactCard
                  icon={<Footprints className="h-5 w-5" />}
                  label={copy.factLabels.elevation}
                  value={localizedFacts.elevation}
                />
                <FactCard
                  icon={<AlertTriangle className="h-5 w-5" />}
                  label={copy.factLabels.difficulty}
                  value={localizedFacts.difficulty}
                />
              </div>

              <div className="mt-6 grid gap-4 border-t border-stone-200 pt-6 text-sm text-stone-600 dark:border-stone-800 dark:text-stone-300 md:grid-cols-[1.3fr_1fr]">
                <div>
                  <h2 className="font-serif text-2xl text-black dark:text-white">
                    {copy.summaryTitle}
                  </h2>
                  <p className="mt-3 leading-7">{copy.summaryBody}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <AnchorButton href="#carte" label={copy.ctas.map} />
                  <AnchorButton href="#depart" label={copy.ctas.access} />
                  <AnchorButton href="#montee-descente" label={copy.ctas.compare} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-500 dark:text-stone-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {factValues.address}
                </span>
                <span>{factValues.plusCode}</span>
                <span>
                  {factValues.rating}{" "}
                  {locale === "fr" ? factValues.reviewsLabelFr : factValues.reviewsLabelEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-24 px-6 py-20">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl text-black dark:text-white md:text-4xl">
              {copy.sections.map.title}
            </h2>
            <p className="text-lg leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.map.body}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.sections.map.points.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                    {point.label}
                  </p>
                  <p className="mt-2 text-lg text-stone-900 dark:text-stone-100">{point.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-stone-800 dark:bg-white dark:text-black dark:hover:bg-stone-200"
              >
                {copy.sections.map.link}
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={OFFICIAL_TRAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-6 py-3 text-sm text-stone-700 transition hover:text-black dark:border-stone-700 dark:text-stone-300 dark:hover:text-white"
              >
                {copy.sections.map.official}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            id="carte"
            className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.5909351537507!2d7.358143635994624!3d43.72525638013801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc35d121a26e3%3A0x96fb3f935826b8f4!2sChemin%20de%20Nietzsche!5e0!3m2!1sfr!2sfr!4v1774318336452!5m2!1sfr!2sfr"
              title={copy.sections.map.title}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <ContentCard title={copy.sections.difficulty.title} icon={<Compass className="h-5 w-5" />}>
            <p className="leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.difficulty.intro}
            </p>
            <BulletList items={copy.sections.difficulty.bullets} />
          </ContentCard>

          <ContentCard title={copy.sections.duration.title} icon={<Clock className="h-5 w-5" />}>
            <p className="leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.duration.intro}
            </p>
            <BulletList items={copy.sections.duration.bullets} />
          </ContentCard>
        </section>

        <section id="depart" className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <ContentCard title={copy.sections.start.title} icon={<Train className="h-5 w-5" />}>
            <p className="leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.start.intro}
            </p>
            <BulletList items={copy.sections.start.bullets} />
          </ContentCard>

          <div className="rounded-[28px] border border-stone-200 bg-black p-8 text-stone-100 dark:border-stone-800">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">
              {locale === "fr" ? "Reperes pratiques" : "Practical markers"}
            </p>
            <div className="mt-6 space-y-6">
              <RouteRow
                label={locale === "fr" ? "Depart bas" : "Lower trailhead"}
                value={factValues.start}
              />
              <RouteRow
                label={locale === "fr" ? "Arrivee haute" : "Upper finish"}
                value={factValues.end}
              />
              <RouteRow
                label={locale === "fr" ? "Adresse" : "Address"}
                value={factValues.address}
              />
              <RouteRow
                label={locale === "fr" ? "Plus code" : "Plus code"}
                value={factValues.plusCode}
              />
            </div>
          </div>
        </section>

        <section
          id="montee-descente"
          className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-white/5"
        >
          <div className="border-b border-stone-200 px-6 py-6 dark:border-stone-800 md:px-8">
            <h2 className="font-serif text-3xl text-black dark:text-white">
              {copy.sections.compare.title}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-stone-50 text-left text-xs uppercase tracking-[0.22em] text-stone-500 dark:bg-black/20 dark:text-stone-400">
                  {copy.sections.compare.headers.map((header) => (
                    <th key={header} className="px-6 py-4 font-medium md:px-8">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.sections.compare.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-t border-stone-200 text-sm text-stone-700 dark:border-stone-800 dark:text-stone-300"
                  >
                    <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-100 md:px-8">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 md:px-8">{row.up}</td>
                    <td className="px-6 py-4 md:px-8">{row.down}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="mb-8 max-w-3xl">
            <h2 className="font-serif text-3xl text-black dark:text-white md:text-4xl">
              {copy.sections.photos.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.photos.intro}
            </p>
          </div>

          <div className="relative group">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-stone-200 bg-white/90 p-3 shadow-sm transition group-hover:flex dark:border-stone-800 dark:bg-black/85"
              aria-label={locale === "fr" ? "Image precedente" : "Previous image"}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image) => (
                <a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[82vw] flex-none overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-white/5 sm:w-[52vw] lg:w-[27vw]"
                >
                  <img
                    src={image.src}
                    alt={locale === "fr" ? image.altFr : image.altEn}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="border-t border-stone-200 px-5 py-4 text-sm text-stone-600 dark:border-stone-800 dark:text-stone-300">
                    {locale === "fr" ? image.captionFr : image.captionEn}
                  </div>
                </a>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 rounded-full border border-stone-200 bg-white/90 p-3 shadow-sm transition group-hover:flex dark:border-stone-800 dark:bg-black/85"
              aria-label={locale === "fr" ? "Image suivante" : "Next image"}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <ContentCard title={copy.sections.tips.title} icon={<AlertTriangle className="h-5 w-5" />}>
            <p className="leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.tips.intro}
            </p>
            <BulletList items={copy.sections.tips.bullets} />
          </ContentCard>

          <ContentCard title={copy.sections.history.title} icon={<MapPin className="h-5 w-5" />}>
            <div className="space-y-4 text-stone-700 dark:text-stone-300">
              {copy.sections.history.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentCard>
        </section>

        <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5 md:p-10">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl text-black dark:text-white md:text-4xl">
              {copy.sections.hikers.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700 dark:text-stone-300">
              {copy.sections.hikers.intro}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {copy.sections.hikers.bullets.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-5 text-stone-700 dark:border-stone-800 dark:bg-black/20 dark:text-stone-300"
              >
                {item}
              </div>
            ))}
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-stone-300 px-6 py-3 text-sm text-stone-700 transition hover:text-black dark:border-stone-700 dark:text-stone-300 dark:hover:text-white"
          >
            {copy.sections.hikers.linkLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </div>

      <footer className="border-t border-stone-200 bg-stone-100 px-6 py-12 text-sm text-stone-600 dark:border-stone-900 dark:bg-black dark:text-stone-400">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-black dark:hover:text-white">
              {locale === "fr" ? "Politique de confidentialite" : "Privacy Policy"}
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-black dark:hover:text-white">
              {locale === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
            </Link>
            <Link href="/cookie-settings" className="transition hover:text-black dark:hover:text-white">
              {locale === "fr" ? "Parametres des cookies" : "Cookie Settings"}
            </Link>
          </div>

          <div className="space-y-2 leading-7">
            <p>{copy.footer.disclaimer}</p>
            <p>{copy.footer.sources}</p>
            <p>
              {copy.footer.support}:{" "}
              <a
                href="mailto:claritleonelmnicol@gmail.com"
                className="underline decoration-stone-300 underline-offset-4 transition hover:text-black dark:decoration-stone-700 dark:hover:text-white"
              >
                claritleonelmnicol@gmail.com
              </a>
            </p>
          </div>

          <p>
            © {new Date().getFullYear()} Nietzsche Path · {copy.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  );
}

function AnchorButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-black dark:border-stone-700 dark:text-stone-300 dark:hover:border-white dark:hover:text-white"
    >
      {label}
    </a>
  );
}

function FactCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-black/20">
      <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400">
        {icon}
        <span className="text-xs uppercase tracking-[0.22em]">{label}</span>
      </div>
      <p className="mt-3 text-lg text-stone-900 dark:text-stone-100">{value}</p>
    </div>
  );
}

function ContentCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
      <div className="mb-5 flex items-center gap-3 text-stone-500 dark:text-stone-400">
        {icon}
        <span className="text-xs uppercase tracking-[0.22em]">
          {title}
        </span>
      </div>
      <div className="space-y-5">
        <h2 className="font-serif text-3xl text-black dark:text-white">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-stone-700 dark:text-stone-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-stone-400 dark:bg-stone-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RouteRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{label}</p>
      <p className="mt-2 text-lg text-white">{value}</p>
    </div>
  );
}
