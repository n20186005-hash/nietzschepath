"use client";

import { MapPin, Star, Navigation, Quote, Clock, AlertTriangle, Compass, Camera, Info, ExternalLink, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

const REVIEWS = [
  {
    id: 1,
    name: "Alexandre Dupont",
    date: "2023-10",
    rating: 5,
    text: "Une randonnée incroyable ! La vue sur la Méditerranée depuis les hauteurs est à couper le souffle. Le chemin est rocailleux et assez raide, prévoyez de bonnes chaussures. On comprend pourquoi Nietzsche y a trouvé l'inspiration.",
    source: "Google Maps"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    date: "2023-09",
    rating: 5,
    text: "Absolutely stunning hike from Èze-sur-Mer up to the medieval village. It took us about an hour. It's steep but totally worth it. Bring plenty of water as there's no shade in the afternoon.",
    source: "Google Maps"
  },
  {
    id: 3,
    name: "Marco Rossi",
    date: "2023-08",
    rating: 4,
    text: "Bellissimo sentiero, ma non per tutti. La salita è impegnativa e sotto il sole estivo può essere faticosa. I panorami ripagano di ogni sforzo. Il villaggio in cima è un gioiello.",
    source: "TripAdvisor"
  },
  {
    id: 4,
    name: "Emily Chen",
    date: "2023-06",
    rating: 5,
    text: "Highly recommend going down instead of up if you're not an experienced hiker! We took the bus up to Èze village and walked down to the beach. The views of the water are right in front of you the whole way down.",
    source: "Google Maps"
  },
  {
    id: 5,
    name: "Julien M.",
    date: "2023-05",
    rating: 5,
    text: "Un lieu chargé d'histoire. Marcher sur les traces de Nietzsche en admirant cette côte d'azur sauvage est une expérience presque mystique. Attention aux chevilles, le sol est très irrégulier.",
    source: "Google Maps"
  },
  {
    id: 6,
    name: "Lisa V.",
    date: "2023-04",
    rating: 4,
    text: "Great workout with rewarding views. We started early morning at 8 AM and avoided the heat and the crowds. By the time we reached the top, the village was just waking up. Perfect timing.",
    source: "TripAdvisor"
  },
  {
    id: 7,
    name: "Thomas B.",
    date: "2022-11",
    rating: 5,
    text: "Fait en plein hiver, la lumière rasante sur la mer est magnifique. Le chemin était presque vide. Une vraie marche méditative.",
    source: "Google Maps"
  },
  {
    id: 8,
    name: "Elena G.",
    date: "2022-09",
    rating: 5,
    text: "Tough climb but the medieval village at the end feels like a prize. The contrast between the blue sea, green pines, and white rocks is picture-perfect. Don't do this in flip-flops!",
    source: "Google Maps"
  },
  {
    id: 9,
    name: "Nicolas F.",
    date: "2022-07",
    rating: 4,
    text: "Superbe mais exigeant. On l'a fait en plein été, erreur de débutant ! Heureusement la vue d'en haut fait tout oublier. Prenez au moins 1.5L d'eau par personne.",
    source: "TripAdvisor"
  }
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-all"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40 transition-opacity duration-500">
          <img 
            src="/images/home/hero-bg.jpg" 
            alt="Chemin de Nietzsche vue" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback si l'image locale n'est pas encore ajoutée
              e.currentTarget.src = "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?q=80&w=2000&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#fafafa]/80 to-[#fafafa] dark:from-black/60 dark:via-[#0a0a0a]/80 dark:to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
            Sur les traces du philosophe
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-6 text-black dark:text-white">
            Chemin de Nietzsche
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-10 flex items-center justify-center gap-4">
            <span className="italic">Nietzsche Path</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
            <span className="italic">Nietzsche Trail</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-wider font-medium">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>06360 Èze, France</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span>4.5/5 (1,036 avis)</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-black/50 dark:from-white/50 to-transparent"></div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Quote Section */}
        <section className="text-center max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-8 rotate-180" />
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
            "De toutes les choses que j'ai écrites, mon 'Zarathoustra' est la plus intime. Et cette idée m'est venue sur les sentiers d'Èze."
          </blockquote>
          <cite className="text-sm tracking-widest uppercase text-gray-500">— Friedrich Nietzsche</cite>
        </section>

        {/* Aperçu & Histoire */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-black dark:text-white">L'Esprit du Lieu</h2>
            <div className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
              Suspendu entre le bleu profond de la Méditerranée et le ciel azur, le Chemin de Nietzsche n'est pas qu'une simple randonnée : c'est une ascension physique et spirituelle. Ce sentier escarpé relie le bord de mer d'Èze au spectaculaire village perché, offrant des panoramas à couper le souffle à chaque lacet.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
              C'est ici, lors de l'hiver 1883-1884, que le philosophe allemand Friedrich Nietzsche a trouvé la clarté mentale nécessaire pour composer la troisième partie de son œuvre majeure, <span className="text-gray-900 dark:text-gray-200 italic">Ainsi parlait Zarathoustra</span>. La rudesse du terrain rocailleux, combinée à la beauté absolue du paysage, incarne parfaitement sa philosophie du dépassement de soi.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="/images/gallery/village-view.jpg" 
              alt="Village d'Èze perché" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
        </section>

        {/* Informations Pratiques */}
        <section className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-10 md:p-16 rounded-sm shadow-sm dark:shadow-none transition-colors duration-500">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black dark:text-white mb-4">Préparer l'Ascension</h2>
            <p className="text-gray-500">Informations pratiques et conseils pour votre marche.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="space-y-3">
              <Clock className="w-6 h-6 text-gray-400" />
              <h3 className="text-black dark:text-white font-medium uppercase tracking-wider text-sm">Durée</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">1h à 1h30 (Montée)<br/>45 min (Descente)</p>
            </div>
            <div className="space-y-3">
              <Compass className="w-6 h-6 text-gray-400" />
              <h3 className="text-black dark:text-white font-medium uppercase tracking-wider text-sm">Difficulté</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Moyenne à Difficile<br/>Fort dénivelé (400m)</p>
            </div>
            <div className="space-y-3">
              <AlertTriangle className="w-6 h-6 text-gray-400" />
              <h3 className="text-black dark:text-white font-medium uppercase tracking-wider text-sm">Terrain</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Rocailleux, marches inégales, escarpé</p>
            </div>
            <div className="space-y-3">
              <Camera className="w-6 h-6 text-gray-400" />
              <h3 className="text-black dark:text-white font-medium uppercase tracking-wider text-sm">Lumière</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Matin tôt (douceur)<br/>Fin d'après-midi (dorée)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div>
              <h3 className="text-xl text-black dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-black dark:bg-white"></span>
                Conseils & Équipement
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex gap-3"><span className="text-gray-400 dark:text-gray-600">—</span> <strong>Chaussures :</strong> Baskets de trail ou chaussures de randonnée obligatoires. Pas de tongs !</li>
                <li className="flex gap-3"><span className="text-gray-400 dark:text-gray-600">—</span> <strong>Hydratation :</strong> Prévoyez au moins 1L d'eau par personne (aucun point d'eau sur le chemin).</li>
                <li className="flex gap-3"><span className="text-gray-400 dark:text-gray-600">—</span> <strong>Protection :</strong> Crème solaire et chapeau, le sentier est très exposé au soleil.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-black dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-black dark:bg-white"></span>
                Itinéraires Suggérés
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-light">
                <li className="flex gap-3"><span className="text-gray-400 dark:text-gray-600">↑</span> <strong>La version philosophique :</strong> Montée depuis la gare d'Èze-sur-Mer. L'effort physique renforce l'expérience. Retour en bus.</li>
                <li className="flex gap-3"><span className="text-gray-400 dark:text-gray-600">↓</span> <strong>La version contemplative :</strong> Prenez le bus jusqu'au village d'Èze, visitez, puis redescendez à pied face à la mer. Plus facile pour le cardio, mais attention aux genoux.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Avis / Témoignages */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-black dark:text-white mb-4">Échos des Voyageurs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Évaluations et commentaires de Google Maps (dernière mise à jour : 2026). Nous ne présentons qu'une sélection d'avis vérifiés avec des notes élevées. Pour voir tous les commentaires complets et récents,{' '}
              <a href="https://maps.app.goo.gl/qUr3Du6hvNA6diu89" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition-colors">
                veuillez cliquer sur ce lien Google Maps
              </a>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white dark:bg-[#161616] p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex flex-col shadow-sm dark:shadow-none">
                <div className="flex text-yellow-500 dark:text-yellow-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-light italic mb-6 flex-grow text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
                  <div>
                    <p className="text-black dark:text-white text-sm">{review.name}</p>
                    <p className="text-gray-500 dark:text-gray-600 text-xs">{review.date}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map & Access */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none md:w-1/2 transition-colors duration-500"></div>
          
          <div className="relative z-20 md:w-1/2 py-16 pr-8">
            <h2 className="text-3xl font-serif text-black dark:text-white mb-6">Accès & Carte</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-8">
              Le point de départ bas se trouve juste à côté de la gare SNCF d'Èze-sur-Mer. 
              Le point d'arrivée haut se situe à l'entrée du village médiéval d'Èze.
            </p>
            
            <a 
              href="https://maps.app.goo.gl/qUr3Du6hvNA6diu89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm dark:shadow-none"
            >
              Ouvrir dans Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="md:absolute top-0 right-0 w-full md:w-2/3 h-[400px] md:h-full z-0 grayscale opacity-70">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.5909351537507!2d7.358143635994624!3d43.72525638013801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc35d121a26e3%3A0x96fb3f935826b8f4!2sChemin%20de%20Nietzsche!5e0!3m2!1sen!2sus!4v1774318336452!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Chemin de Nietzsche"
            ></iframe>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-black pt-16 pb-8 px-6 text-center text-sm transition-colors duration-500">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-gray-500">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="/terms-of-service" className="hover:text-black dark:hover:text-white transition-colors">Conditions d'utilisation</Link>
            <Link href="/cookie-settings" className="hover:text-black dark:hover:text-white transition-colors">Paramètres des cookies</Link>
          </div>
          <div>
            <p>Support technique : <a href="mailto:claritleonelmnicol@gmail.com" className="hover:text-black dark:hover:text-white transition-colors underline decoration-gray-300 dark:decoration-gray-800 underline-offset-4">claritleonelmnicol@gmail.com</a></p>
          </div>
        </div>
        <p className="text-gray-400 dark:text-gray-600 font-serif tracking-widest">
          © {new Date().getFullYear()} NIETZSCHE PATH · TOUS DROITS RÉSERVÉS.
        </p>
      </footer>
    </main>
  );
}