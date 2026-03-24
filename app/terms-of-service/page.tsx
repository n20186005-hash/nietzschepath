import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil (返回首页)
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-black dark:text-white">Conditions d'utilisation</h1>
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-12">Dernière mise à jour : Mars 2026</p>

        <div className="space-y-8 text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant ce site Web, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">2. Utilisation du contenu</h2>
            <p>
              Les informations fournies sur ce site Web sont à des fins d'information générale uniquement. Bien que nous nous efforcions de maintenir les informations exactes et à jour, nous ne faisons aucune représentation ou garantie d'aucune sorte, expresse ou implicite, quant à l'exhaustivité, l'exactitude, la fiabilité ou l'adéquation des informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              Sauf indication contraire, tout le contenu de ce site (y compris les textes, images, logos) est protégé par le droit d'auteur. Aucune reproduction, distribution ou utilisation commerciale n'est autorisée sans autorisation explicite. Les crédits photos peuvent inclure des ressources libres de droits provenant de plateformes telles que Unsplash ou de contributeurs sur Google Maps.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-black dark:text-white mb-4">4. Limitation de responsabilité</h2>
            <p>
              Dans toute la mesure permise par la loi, ce site et ses propriétaires ne seront pas responsables des dommages directs, indirects, accessoires ou consécutifs découlant de l'utilisation ou de l'incapacité d'utiliser ce site. Lors de la visite de sites naturels, veuillez toujours donner la priorité à la sécurité.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}