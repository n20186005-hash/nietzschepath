"use client";

import Link from "next/link";
import { ExternalLink, MapPin, Moon, Star, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { factValues, HERO_IMAGE, MAPS_URL, pageCopy } from "../content/trailData";
import { getTopicStructuredData, TopicPageKey, topicGallery, topicLinks, topicPages } from "../content/topicPages";

type TopicPageProps = {
  topicKey: TopicPageKey;
};

export default function TopicPage({ topicKey }: TopicPageProps) {
  const { theme, toggleTheme } = useTheme();
  const topic = topicPages[topicKey];
  const structuredData = getTopicStructuredData(topicKey);
  const relatedLinks = topicLinks.filter((link) => link.href !== topic.slug);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <button
        onClick={toggleTheme}
        className="fixed right-5 top-5 z-50 rounded-full border border-stone-200 bg-white/85 p-3 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-black/80"
        aria-label="Changer de theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5 text-stone-700" />
        )}
      </button>

      <header className="relative overflow-hidden border-b border-stone-200 dark:border-stone-900">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt={topic.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/88 to-stone-50 dark:from-black/75 dark:via-black/82 dark:to-[#0a0a0a]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-black dark:text-stone-400 dark:hover:text-white"
          >
            ← Retour a l'accueil
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
              {topic.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-black dark:text-white md:text-6xl">
              {topic.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-700 dark:text-stone-300 md:text-2xl md:leading-10">
              {topic.hero}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-600 dark:text-stone-300">
              <span className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 dark:border-stone-800 dark:bg-white/5">
                {factValues.address}
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 hover:text-black dark:border-stone-800 dark:bg-white/5 dark:hover:text-white"
              >
                <Star className="h-4 w-4 text-amber-500" />
                {pageCopy.fr.ratingLabel}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
          <h2 className="font-serif text-3xl text-black dark:text-white">Reponse rapide</h2>
          <p className="mt-5 text-xl leading-9 text-stone-800 dark:text-stone-200">
            {topic.snippetLead}
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
            <h2 className="font-serif text-3xl text-black dark:text-white">Resume pratique</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700 dark:text-stone-300">
              {topic.summary}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {topic.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 dark:border-stone-800 dark:bg-black/20"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-lg text-stone-900 dark:text-stone-100">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-stone-200 bg-black p-8 text-stone-100 dark:border-stone-800">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Actions utiles</p>
            <div className="mt-6 flex flex-col gap-4">
              {topic.ctas.map((cta) =>
                cta.href.startsWith("/") ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm text-black transition hover:bg-stone-200"
                  >
                    {cta.label}
                    <span>→</span>
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm text-black transition hover:bg-stone-200"
                  >
                    {cta.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>

            <div className="mt-8 border-t border-stone-800 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Reperes</p>
              <div className="mt-4 space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{factValues.start}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{factValues.end}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{factValues.plusCode}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {topic.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5"
          >
            <h2 className="font-serif text-3xl text-black dark:text-white">{section.title}</h2>

            {section.paragraphs && (
              <div className="mt-6 space-y-4 text-lg leading-8 text-stone-700 dark:text-stone-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-6 space-y-3 text-stone-700 dark:text-stone-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-stone-400 dark:bg-stone-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-stone-50 text-left text-xs uppercase tracking-[0.22em] text-stone-500 dark:bg-black/20 dark:text-stone-400">
                      {section.table.headers.map((header) => (
                        <th key={header} className="px-5 py-4 font-medium">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr
                        key={row.join("-")}
                        className="border-t border-stone-200 text-sm text-stone-700 dark:border-stone-800 dark:text-stone-300"
                      >
                        {row.map((cell) => (
                          <td key={cell} className="px-5 py-4 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section className="grid gap-6 lg:grid-cols-3">
          {topicGallery.map((image) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-white/5"
            >
              <img src={image.src} alt={image.altFr} className="aspect-[4/5] w-full object-cover" />
              <div className="border-t border-stone-200 px-5 py-4 text-sm text-stone-600 dark:border-stone-800 dark:text-stone-300">
                {image.captionFr}
              </div>
            </a>
          ))}
        </section>

        <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
          <h2 className="font-serif text-3xl text-black dark:text-white">Questions frequentes</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            Ces reponses ciblent les recherches les plus frequentes autour de la carte, de la difficulte, du depart, de la gare et de l'acces en train.
          </p>
          <div className="mt-8 space-y-5">
            {topic.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5 dark:border-stone-800 dark:bg-black/20"
              >
                <h3 className="text-lg text-stone-900 dark:text-stone-100">{faq.question}</h3>
                <p className="mt-3 leading-7 text-stone-700 dark:text-stone-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
          <h2 className="font-serif text-3xl text-black dark:text-white">Liens internes utiles</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topic.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-5 text-stone-700 transition hover:text-black dark:border-stone-800 dark:bg-black/20 dark:text-stone-300 dark:hover:text-white"
              >
                <p className="text-lg text-stone-900 dark:text-stone-100">{link.anchor}</p>
                <p className="mt-2 text-sm leading-6">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-white/5">
          <h2 className="font-serif text-3xl text-black dark:text-white">Autres guides utiles</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/"
              className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-5 text-stone-700 transition hover:text-black dark:border-stone-800 dark:bg-black/20 dark:text-stone-300 dark:hover:text-white"
            >
              <p className="text-lg text-stone-900 dark:text-stone-100">Guide principal du Chemin de Nietzsche</p>
              <p className="mt-2 text-sm leading-6">Page complete avec vue d'ensemble, duree, difficulte, acces, photos et contexte.</p>
            </Link>

            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-5 text-stone-700 transition hover:text-black dark:border-stone-800 dark:bg-black/20 dark:text-stone-300 dark:hover:text-white"
              >
                <p className="text-lg text-stone-900 dark:text-stone-100">{link.title}</p>
                <p className="mt-2 text-sm leading-6">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-stone-200 bg-stone-100 px-6 py-12 text-sm text-stone-600 dark:border-stone-900 dark:bg-black dark:text-stone-400">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-black dark:hover:text-white">
              Politique de confidentialite
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-black dark:hover:text-white">
              Conditions d'utilisation
            </Link>
            <Link href="/cookie-settings" className="transition hover:text-black dark:hover:text-white">
              Parametres des cookies
            </Link>
          </div>
          <div className="space-y-2 leading-7">
            <p>{pageCopy.fr.footer.disclaimer}</p>
            <p>{pageCopy.fr.footer.sources}</p>
            <p>
              {pageCopy.fr.footer.support}:{" "}
              <a
                href="mailto:claritleonelmnicol@gmail.com"
                className="underline decoration-stone-300 underline-offset-4 transition hover:text-black dark:decoration-stone-700 dark:hover:text-white"
              >
                claritleonelmnicol@gmail.com
              </a>
            </p>
          </div>
          <p>
            © {new Date().getFullYear()} Nietzsche Path · {pageCopy.fr.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  );
}
