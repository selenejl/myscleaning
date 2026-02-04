
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import { PHONE_NUMBER } from './constants';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Supabase connection error:', error.message);
        } else {
          console.log('Supabase connected successfully!', data);
        }
      } catch (err) {
        console.error('Unexpected error connecting to Supabase:', err);
      }
    };
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-sky-100 selection:text-sky-900">
      <Navbar />

      <main className="flex-grow">
        <section id="home" className="scroll-mt">
          <Hero />
        </section>

        <section id="services" className="scroll-mt">
          <Services />
        </section>

        <section id="reviews" className="scroll-mt">
          <Reviews />
        </section>

        <section id="contact" className="scroll-mt py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ready for a cleaner space?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Fill out the form to request a custom quote for your home. Our detailed cleaning specialists typically respond within 4 hours.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Call Now</p>
                      <a
                        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                        className="text-lg font-black text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenLegal={openLegal} />

      <LegalModals
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        type={legalModal.type}
      />
    </div>
  );
};

export default App;
