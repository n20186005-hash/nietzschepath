import { MapPin, Star, Navigation } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-16 md:py-24 font-sans">
      {/* Hero Section */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance">
          Chemin de Nietzsche
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6 flex items-center justify-center gap-2">
          <span>Nietzsche Path</span>
          <span className="text-gray-300">|</span>
          <span>Nietzsche Trail</span>
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span>06360 Èze, France</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>4.5/5 (1,036 avis)</span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-24 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">À propos</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Un sentier escarpé et spectaculaire reliant Èze-Bord-de-Mer au village perché d'Èze. 
          Fréquenté par le philosophe Friedrich Nietzsche, ce chemin offre des vues panoramiques 
          époustouflantes sur la mer Méditerranée. Préparez-vous à une ascension exigeante mais inoubliable.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["Randonnée", "Vue panoramique", "Nature", "Historique"].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">Aperçu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?q=80&w=1000&auto=format&fit=crop" 
              alt="Sentier et vue mer" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop" 
              alt="Village d'Èze" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="mb-24 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">Informations Pratiques</h2>
        <ul className="space-y-4 text-gray-600 text-lg">
          <li className="flex items-start gap-3">
            <span className="font-bold text-black mt-1">—</span>
            <span><strong>Durée :</strong> Environ 1h à 1h30 pour la montée.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-black mt-1">—</span>
            <span><strong>Difficulté :</strong> Moyenne à difficile (fort dénivelé, terrain rocailleux).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-black mt-1">—</span>
            <span><strong>Équipement :</strong> Chaussures de marche obligatoires, eau en abondance (pas de point d'eau sur le chemin).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-black mt-1">—</span>
            <span><strong>Meilleure période :</strong> Évitez les heures chaudes en été. Privilégiez le matin tôt ou le hors-saison.</span>
          </li>
        </ul>
      </section>

      {/* Location / Map Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold m-0 tracking-tight">Accès & Carte</h2>
          <a 
            href="https://maps.app.goo.gl/qUr3Du6hvNA6diu89" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            Ouvrir dans Google Maps
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 aspect-video md:aspect-[21/9] relative w-full border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.5909351537507!2d7.358143635994624!3d43.72525638013801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc35d121a26e3%3A0x96fb3f935826b8f4!2sChemin%20de%20Nietzsche!5e0!3m2!1sen!2sus!4v1774318336452!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Chemin de Nietzsche"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-16 border-t border-gray-200 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Chemin de Nietzsche Guide.</p>
        <p className="mt-2">www.nietzschepath.com</p>
      </footer>
    </main>
  );
}