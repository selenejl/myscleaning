import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="flex items-center cursor-pointer"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <Logo size="sm" className="md:hidden" />
              <Logo className="hidden md:flex" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-full shadow-lg shadow-sky-500/10 text-white bg-sky-600 hover:bg-sky-700 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'top-full opacity-100 translate-y-0' : '-top-[500px] opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="block px-4 py-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all"
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 px-2">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="flex items-center justify-center w-full px-6 py-5 text-lg font-black text-white bg-sky-600 rounded-2xl shadow-xl shadow-sky-500/20 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5 mr-3" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;