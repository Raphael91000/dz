import { useRef } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Mail, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  const quadIncluded = [
    { icon: Shield, text: 'Casque' },
    { icon: Shield, text: 'Gants' },
    { icon: CheckCircle, text: '1 boisson offerte' },
  ];

  const carIncluded = [
    { icon: CheckCircle, text: '1 boisson offerte' },
  ];

  const conditions = [
    'Permis de conduire',
    'Passeport',
    'Caution',
  ];

  const quadPricing = [
    { duration: '1 heure', price: '6 000 DA (40 €)' },
    { duration: '2 heures', price: '8 000 DA (60 €)' },
    { duration: 'Demi-journée', price: '12 000 DA (90 €)' },
    { duration: 'Passager supplémentaire', price: '+2 000 DA (+10 €)' },
  ];

  const carPricing = [
    { duration: 'Citroën C3 (par jour)', price: '9 000 DA (60 €)' },
  ];

  const infoRequests = [
    'La date et l’heure souhaitée',
    'Nombre de quads souhaitées',
  ];

  const carInfoRequests = [
    'La date et l’heure souhaitée',
    'Nombre de voitures souhaitées',
  ];

  const carouselImages = [
    '/quad1.jpeg',
    '/quad2.jpeg',
    '/quad4.jpeg',
    '/quad5.jpeg',
    '/pa.jpeg',
    '/p.jpeg',
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) {
      return;
    }
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'Téléphone',
      icon: Phone,
      href: 'tel:+213775903564',
      label: '+213 7-75-90-35-64',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/213775903564',
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/dzquad213',
      label: '@dzquad213',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden px-4 sm:px-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/dz.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="flex flex-col items-start text-left">
            <div className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Salem Aleykoum 🇩🇿
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-6 text-white">
            🇩🇿 OFFRE 2025 🇩🇿
            </div>
            <p className="text-lg md:text-2xl max-w-3xl text-gray-100 leading-relaxed">
            DZ QUAD / DZ CARS vous propose la location de quads en libre service et tout-terrain,
            ainsi que de voitures, pour une expérience fun, pratique et inoubliable à Ghazaouet en
            pleine nature.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/213775903564"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 text-center"
              >
                Nous contacter
              </a>
              <a
                href="#tarifs"
                className="bg-white/90 hover:bg-white text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 text-center"
              >
                Découvrir nos offres
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-green-500">Nos</span> Offres
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Découvrez nos offres quads et voitures pour une expérience inoubliable
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://wa.me/213775903564"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border-2 border-gray-700 hover:border-green-500 transition-colors"
            >
              <div className="text-center">
                <img
                  src="/c3.webp"
                  alt="Voiture"
                  className="w-full h-60 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Location de Voitures</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Conduite confortable et pratique pour vos déplacements à Ghazaouet.
                </p>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">Tarifs</div>
                  <ul className="space-y-2 text-gray-300">
                    {carPricing.map((item, index) => (
                      <li key={index} className="flex items-center justify-between gap-3">
                        <span>{item.duration}</span>
                        <span className="font-semibold text-white">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">À prévoir</div>
                  <ul className="space-y-2 text-gray-300">
                    {conditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">Inclus</div>
                  <ul className="space-y-2 text-gray-300">
                    {carIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <item.icon className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-8">
                  <div className="text-lg font-bold mb-3">Merci de nous indiquer</div>
                  <ul className="space-y-2 text-gray-300">
                    {carInfoRequests.map((info, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/90 group-hover:bg-white text-black px-6 py-3 rounded-lg font-bold transition-all text-center">
                  Je réserve maintenant
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/213775903564"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border-2 border-gray-700 hover:border-red-500 transition-colors"
            >
              <div className="text-center">
                <img
                  src="/quad6.jpg"
                  alt="Quad"
                  className="w-full h-60 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Location de Quads</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Sensations fortes en libre service et tout-terrain pour une aventure unique.
                </p>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">Tarifs</div>
                  <ul className="space-y-2 text-gray-300">
                    {quadPricing.map((item, index) => (
                      <li key={index} className="flex items-center justify-between gap-3">
                        <span>{item.duration}</span>
                        <span className="font-semibold text-white">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">À prévoir</div>
                  <ul className="space-y-2 text-gray-300">
                    {conditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-6">
                  <div className="text-lg font-bold mb-3">Inclus</div>
                  <ul className="space-y-2 text-gray-300">
                    {quadIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <item.icon className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-5 rounded-xl text-left mb-8">
                  <div className="text-lg font-bold mb-3">Merci de nous indiquer</div>
                  <ul className="space-y-2 text-gray-300">
                    {infoRequests.map((info, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/90 group-hover:bg-white text-black px-6 py-3 rounded-lg font-bold transition-all text-center">
                  Je réserve maintenant
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Tahia Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-4">
            TAHIA LA BALADE 🇩🇿
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10">
            Offrez vous une expérience unique avec nous en vous baladant dans les plus beaux
            endroits de Ghazaouet.
          </p>
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black w-10 h-10 rounded-full font-bold items-center justify-center"
              aria-label="Précédent"
            >
              ‹
            </button>
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory"
            >
              {carouselImages.map((src) => (
                <div key={src} className="w-full sm:w-72 md:w-80 flex-shrink-0 snap-center">
                  <img
                    src={src}
                    alt="Balade en quad"
                    className="w-full h-56 sm:h-56 md:h-64 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black w-10 h-10 rounded-full font-bold items-center justify-center"
              aria-label="Suivant"
            >
              ›
            </button>
            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full font-bold"
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full font-bold"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-red-500">Nos</span> Quads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/341520/pexels-photo-341520.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/2174653/pexels-photo-2174653.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Quad ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-green-900 via-black to-red-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Contactez</span>-<span className="text-green-500">nous</span>
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Nous sommes à votre disposition pour toute question
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${link.color} p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-3 shadow-xl text-center`}
              >
                <link.icon className="w-12 h-12" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.tiktok.com/@dzquad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-900 border-2 border-white p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-3"
            >
              <span className="text-3xl">📱</span>
              <span>TikTok</span>
              <span className="text-sm text-gray-400">@dzquad</span>
            </a>

            <a
              href="https://www.snapchat.com/add/dz_quad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-3"
            >
              <span className="text-3xl">👻</span>
              <span>Snapchat</span>
              <span className="text-sm">Dz_quad</span>
            </a>

            <a
              href="mailto:rachid.931@hotmail.fr"
              className="bg-red-600 hover:bg-red-700 p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-3"
            >
              <Mail className="w-12 h-12" />
              <span>Email</span>
              <span className="text-sm text-gray-200">rachid.931@hotmail.fr</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-red-500">Notre</span> Localisation
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-green-500" />
            Ghazaouet, Algérie
          </p>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-600 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103129.16488433815!2d-1.8641!3d35.0942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a3a9b6b6b6b%3A0x3b6b6b6b6b6b6b6b!2sGhazaouet!5e0!3m2!1sen!2sdz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900 via-black to-red-900 py-12 px-4 border-t-4 border-green-600">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-white">DZ</span>{' '}
              <span className="text-green-500">QUAD</span>
            </h3>
            <p className="text-red-500 font-semibold">by DZ Cars</p>
          </div>

          <p className="text-gray-300 mb-6">
            Tahia la balade 🇩🇿 - Votre aventure en quad commence ici
          </p>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 DZ Quad by DZ Cars. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm">
              Contact:{' '}
              <a
                href="mailto:rachid.931@hotmail.fr"
                className="text-green-500 hover:text-green-400 underline"
              >
                rachid.931@hotmail.fr
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
