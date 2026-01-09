import { Phone, MessageCircle, Instagram, MapPin, Mail, Shield, Clock, Users, CheckCircle, Crown } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  const pricing = [
    { duration: '1 heure', price: '40 €', popular: false },
    { duration: '2 heures', price: '60 €', popular: true },
    { duration: '3 heures', price: '90 €', popular: false },
  ];

  const included = [
    { icon: Shield, text: 'Casque fourni' },
    { icon: Shield, text: 'Gants fournis' },
    { icon: CheckCircle, text: 'Boisson offerte' },
  ];

  const conditions = [
    'Permis de conduire obligatoire',
    'Pièce d\'identité ou passeport',
    'Caution demandée',
    'Âge minimum : 18 ans',
  ];

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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-red-900 opacity-90"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center items-center gap-4">
            <div className="w-20 h-1 bg-green-500"></div>
            <Crown className="w-16 h-16 text-red-500" />
            <div className="w-20 h-1 bg-red-500"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">DZ</span>{' '}
            <span className="text-green-500">QUAD</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-semibold text-red-500">
            by DZ Cars
          </p>

          <div className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Tahia la balade 🇩🇿
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Vivez l'aventure ultime à Ghazaouet ! Explorez les paysages magnifiques de l'Algérie
            en quad tout-terrain. Sensations fortes garanties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+213775903564"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Réserver maintenant
            </a>
            <a
              href="https://wa.me/213775903564"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
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
            <span className="text-green-500">Nos</span> Tarifs
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Des prix transparents pour une expérience inoubliable
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  item.popular
                    ? 'from-green-600 to-green-800 scale-105 shadow-2xl'
                    : 'from-gray-800 to-gray-900'
                } p-8 rounded-2xl border-2 ${
                  item.popular ? 'border-green-400' : 'border-gray-700'
                } hover:scale-105 transition-transform`}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    POPULAIRE
                  </div>
                )}
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-4">{item.duration}</h3>
                  <div className="text-5xl font-bold mb-6">{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-600 p-6 rounded-xl text-center mb-6">
            <Users className="w-10 h-10 mx-auto mb-3" />
            <p className="text-xl font-bold">
              Passager supplémentaire : +10 €
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl text-center">
            <p className="text-lg font-bold flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Casque + Gants fournis
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-red-500">Ce qui est</span> Inclus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {included.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border-2 border-green-600 text-center hover:border-red-600 transition-colors"
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <p className="text-xl font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-green-500">Conditions</span> de Location
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-red-600">
            <ul className="space-y-4">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{condition}</span>
                </li>
              ))}
            </ul>
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
