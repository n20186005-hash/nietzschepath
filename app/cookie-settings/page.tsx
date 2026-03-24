import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookieSettings() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-black dark:text-white">Paramètres des cookies</h1>
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-12">Dernière mise à jour : Mars 2026</p>

        <div className="space-y-8 text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez choisir d'accepter ou de refuser certains types de cookies. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité du site Web.
          </p>

          <section className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm">
            <h2 className="text-xl font-serif text-black dark:text-white mb-2 flex justify-between items-center">
              Cookies strictement nécessaires
              <span className="text-xs uppercase tracking-widest text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Toujours actifs</span>
            </h2>
            <p className="text-sm">
              Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu'en réponse à des actions effectuées par vous qui équivalent à une demande de services, telles que la définition de vos préférences de confidentialité ou de votre langue.
            </p>
          </section>

          <section className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm">
            <h2 className="text-xl font-serif text-black dark:text-white mb-2">Cookies d'analyse</h2>
            <p className="text-sm mb-4">
              Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus populaires et comment les visiteurs se déplacent sur le site.
            </p>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="analytics" className="w-4 h-4 accent-black dark:accent-white" defaultChecked />
              <label htmlFor="analytics" className="text-sm font-medium">Accepter les cookies d'analyse</label>
            </div>
          </section>

          <section className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm">
            <h2 className="text-xl font-serif text-black dark:text-white mb-2">Cookies marketing</h2>
            <p className="text-sm mb-4">
              Ces cookies peuvent être mis en place au sein de notre site Web par nos partenaires publicitaires. Ils peuvent être utilisés par ces sociétés pour établir un profil de vos intérêts et vous proposer des publicités pertinentes sur d'autres sites Web.
            </p>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="marketing" className="w-4 h-4 accent-black dark:accent-white" />
              <label htmlFor="marketing" className="text-sm font-medium">Accepter les cookies marketing</label>
            </div>
          </section>

          <div className="pt-8">
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Enregistrer les préférences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}