
import React from 'react';
import { DETAILED_CHECKLIST } from '../constants';

const DetailChecklist: React.FC = () => {
  return (
    <section className="py-20 bg-sky-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-bold text-sky-400 tracking-wide uppercase">The Details Matter</h2>
            <p className="mt-2 text-4xl font-extrabold leading-tight">
              Our Perfectionist <br />Approach
            </p>
            <p className="mt-6 text-lg text-sky-100 leading-relaxed">
              We believe a truly clean home is found in the details. While others might skim the surface, 
              MYS Cleaning dives deep into every corner. Our comprehensive checklist ensures your space 
              doesn't just look clean—it feels restored.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DETAILED_CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center">
                    {/* Fix: Use React.ReactElement<any> to satisfy TypeScript when cloning and adding className */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-3 h-3 text-white' })}
                  </div>
                  <span className="text-sm font-medium text-sky-50">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl bg-sky-800 flex items-center justify-center p-8 border border-sky-700">
               <div className="text-center">
                  <div className="w-20 h-20 bg-sky-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Quality Assured</h3>
                  <p className="text-sky-300 text-sm">Every detail meticulously checked by our team.</p>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailChecklist;
