
import React from 'react';
import { BUSINESS_NAME, PHONE_NUMBER } from '../constants';
import Logo from './Logo';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 md:py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand and Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo light size="sm" className="opacity-90" />
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] font-medium text-slate-500">
              Perth, WA
            </p>
          </div>

          {/* Quick Contact - Centered with 'Contact' label */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-sky-500/80 mb-1">Contact</span>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="text-xl md:text-2xl font-black text-white hover:text-sky-400 transition-colors tracking-tight"
            >
              {PHONE_NUMBER}
            </a>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold mt-1">Available Mon – Sun</span>
          </div>

          {/* Secondary Info & Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest mb-1.5">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-slate-500 hover:text-sky-400 transition-colors"
              >
                Privacy
              </button>
              <span className="text-slate-800">•</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="text-slate-500 hover:text-sky-400 transition-colors"
              >
                Terms
              </button>
            </div>
            <p className="text-[10px] font-medium text-slate-600">
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
