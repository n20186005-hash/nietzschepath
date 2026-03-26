import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Nietzsche Path",
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'fr': '/privacy-policy',
      'en': '/en/privacy-policy',
      'zh': '/zh/privacy-policy',
      'x-default': '/privacy-policy',
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-black dark:text-white">Politique de confidentialité</h1>
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-12">Dernière mise à jour : Mars 2026</p>

        <div className="space-y-8 text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">1. Collecte d'informations</h2>
            <p>
              Nous nous engageons à protéger votre vie privée. Ce site sert principalement de plateforme d'information et ne collecte généralement pas activement d'informations d'identification personnelle des utilisateurs. Cependant, par le biais des journaux de serveur et des outils d'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les temps d'accès et les enregistrements de pages vues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">2. Utilisation des cookies</h2>
            <p>
              Pour offrir une meilleure expérience utilisateur et comprendre comment le site est utilisé, nous pouvons utiliser des cookies. Ces cookies sont utilisés pour se souvenir des préférences des utilisateurs et analyser le trafic du site. Vous pouvez ajuster les paramètres des cookies dans votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">3. Liens tiers</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers (par exemple, Google Maps). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à lire les déclarations de confidentialité de chaque site qui collecte des informations personnelles lorsque vous quittez notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">4. Nous contacter</h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à : <a href="mailto:claritleonelmnicol@gmail.com" className="underline hover:text-black dark:hover:text-white">claritleonelmnicol@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}