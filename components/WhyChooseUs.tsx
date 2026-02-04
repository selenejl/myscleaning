import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1 hidden sm:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600" 
                  alt="Cleaning professional" 
                  className="rounded-3xl shadow-lg w-full h-48 md:h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
                  alt="Cleaning supplies" 
                  className="rounded-3xl shadow-lg w-full h-32 md:h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8 md:pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&q=80&w=600" 
                  alt="Clean kitchen" 
                  className="rounded-3xl shadow-lg w-full h-32 md:h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600" 
                  alt="Clean bathroom" 
                  className="rounded-3xl shadow-lg w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-xs md:text-base font-bold text-sky-600 tracking-widest uppercase">Why Choose MYS</h2>
            <p className="mt-2 text-2xl md:text-4xl font-black text-slate-900 leading-tight">The Standard for Professional Cleaning</p>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              We understand that your home is your sanctuary. Our team is dedicated to providing more than just a clean; we provide peace of mind.
            </p>

            <div className="mt-8 md:mt-10 space-y-6 md:space-y-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
                    {/* Fix: Use React.ReactElement<any> to satisfy TypeScript when cloning and adding className */}
                    {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-slate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm md:text-base text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;