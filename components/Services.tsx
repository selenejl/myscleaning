import React from 'react';
import { SERVICES, DETAILED_CHECKLIST } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs md:text-base font-bold text-sky-600 tracking-widest uppercase">What We Offer</h2>
          <p className="mt-2 text-2xl md:text-4xl font-black text-slate-900 leading-tight">Comprehensive Cleaning Solutions</p>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-slate-500 font-medium leading-relaxed">
            Tailored services to keep your environment pristine, healthy, and inviting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`group p-6 md:p-8 rounded-[1.5rem] border transition-all duration-300 ${
                service.id === 'detailed-cleaning' 
                  ? 'bg-sky-50 border-sky-200 ring-4 ring-sky-500/5' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl'
              }`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl shadow-sm flex items-center justify-center mb-5 md:mb-6 transition-colors ${
                service.id === 'detailed-cleaning'
                  ? 'bg-sky-600 text-white'
                  : 'bg-white text-sky-600 group-hover:bg-sky-600 group-hover:text-white'
              }`}>
                {/* Fix: Use React.ReactElement<any> to satisfy TypeScript when cloning and adding className */}
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-6 h-6 md:w-7 md:h-7' })}
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Cleaning Highlight Area (Checklist only, no image) */}
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="p-8 md:p-12 lg:p-16 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Meticulous Methodology
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-6">
                The MYS Meticulous Standard
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium mb-10 md:mb-12 max-w-2xl">
                While others skim the surface, we dive deep. Our process is defined by a rigorous checklist ensuring every corner is handled with care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {DETAILED_CHECKLIST.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group/item">
                    <div className="flex-shrink-0 w-7 h-7 bg-sky-500/20 rounded-lg flex items-center justify-center transition-colors group-hover/item:bg-sky-500/30">
                      {/* Fix: Use React.ReactElement<any> to satisfy TypeScript when cloning and adding className */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-4 h-4 text-sky-400' })}
                    </div>
                    <span className="text-sm md:text-base font-semibold text-slate-300 group-hover/item:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;