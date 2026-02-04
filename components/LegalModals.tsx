
import React from 'react';
import { X } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Information Collection",
          text: `We collect personal information such as your name, email address, and phone number when you submit an inquiry form on our website. This data is essential for providing accurate quotes and communicating regarding our cleaning services.`
        },
        {
          heading: "2. Use of Information",
          text: `Your data is used exclusively for service delivery, scheduling, and customer support. We do not sell or trade your personal information to third parties for marketing purposes.`
        },
        {
          heading: "3. Data Security",
          text: `We implement industry-standard security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.`
        },
        {
          heading: "4. Your Rights",
          text: `You have the right to request access to the personal information we hold about you or ask for its correction or deletion at any time by contacting us directly.`
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "1. Booking & Quotes",
          text: `All quotes provided via our website or over the phone are estimates based on standard property sizes and typical conditions. We reserve the right to adjust pricing upon physical inspection if the property requires significantly more work than discussed.`
        },
        {
          heading: "2. Cancellation Policy",
          text: `We require at least 24 hours' notice for cancellations or rescheduling. Cancellations made with less than 24 hours' notice may incur a small fee to cover our team's scheduling costs.`
        },
        {
          heading: "3. Satisfaction Guarantee",
          text: `At ${BUSINESS_NAME}, we pride ourselves on meticulous standards. If you are not satisfied with an area we cleaned, please notify us within 24 hours, and we will return to rectify it at no additional cost.`
        },
        {
          heading: "4. Access & Safety",
          text: `Clients must provide safe access to the property and ensure a safe working environment for our staff. This includes securing pets and notifying us of any hazardous conditions or fragile items.`
        }
      ]
    }
  };

  const current = content[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-black text-slate-900">{current.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
          <div className="space-y-8">
            {current.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-2">
                  {section.heading}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
              Last Updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-black rounded-xl active:scale-95 transition-transform"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;
