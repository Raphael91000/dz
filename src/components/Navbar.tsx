import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-green-500 group-hover:h-10 transition-all"></div>
              <div className="w-2 h-8 bg-white group-hover:h-10 transition-all"></div>
              <div className="w-2 h-8 bg-red-500 group-hover:h-10 transition-all"></div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                <span className="text-white">DZ</span>{' '}
                <span className="text-green-500">QUAD</span>
              </div>
              <div className="text-xs text-red-500 font-semibold">by DZ Cars</div>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white hover:text-green-500 transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+213775903564"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Réserver
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-white hover:text-green-500 transition-colors font-semibold text-lg py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+213775903564"
              className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-center transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Réserver
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
