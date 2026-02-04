import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { CleaningServiceType, InquiryFormData } from '../types';
import { supabase } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: CleaningServiceType.GENERAL_RESIDENTIAL,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            service_type: formData.serviceType,
            message: formData.message,
          },
        ]);

      if (error) {
        throw error;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: CleaningServiceType.GENERAL_RESIDENTIAL,
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting enquiry:', error);
      setIsSubmitting(false);
      // Ideally show an error message to the user here
      alert('Failed to submit enquiry. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-sky-50 rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] border border-sky-100 shadow-xl shadow-sky-50">
        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 font-medium max-w-sm">
          Your inquiry has been received. One of our cleaning experts will contact you shortly to provide a personalized quote.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sky-600 font-bold uppercase tracking-widest text-xs hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-5 py-3.5 md:py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-sky-500/10 focus:bg-white focus:border-sky-500 transition-all outline-none font-medium text-sm md:text-base";

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs md:text-sm font-bold text-slate-700 uppercase tracking-widest mb-2 px-1">Full Name</label>
            <input
              required
              type="text"
              id="fullName"
              placeholder="Your Name"
              className={inputClasses}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs md:text-sm font-bold text-slate-700 uppercase tracking-widest mb-2 px-1">Email Address</label>
            <input
              required
              type="email"
              id="email"
              placeholder="email@example.com"
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="phone" className="block text-xs md:text-sm font-bold text-slate-700 uppercase tracking-widest mb-2 px-1">Phone Number</label>
            <input
              required
              type="tel"
              id="phone"
              placeholder="+61 04XX XXX XXX"
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-xs md:text-sm font-bold text-slate-700 uppercase tracking-widest mb-2 px-1">Service Type</label>
            <select
              id="serviceType"
              className={`${inputClasses} appearance-none cursor-pointer`}
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as CleaningServiceType })}
            >
              {Object.values(CleaningServiceType).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs md:text-sm font-bold text-slate-700 uppercase tracking-widest mb-2 px-1">Special Requirements</label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about your property..."
            className={`${inputClasses} resize-none`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-4 px-6 bg-sky-600 active:bg-sky-700 disabled:bg-sky-400 text-white font-black rounded-2xl shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98] mt-2 text-sm md:text-base"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Request Free Quote
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;