
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Phone, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const HERO_IMAGES = [
  {
    url: "/hero/hero-1.jpg",
    alt: "Inviting bedroom with large window and scenic view"
  },
  {
    url: "/hero/hero-2.jpg",
    alt: "Spacious kitchen and dining area opening to a sunlit deck"
  },
  {
    url: "/hero/hero-3.jpg",
    alt: "Modern minimalist bedroom workspace"
  },
  {
    url: "/hero/hero-4.jpg",
    alt: "Bright living room with skylights and garden view"
  },
  {
    url: "/hero/hero-5.png",
    alt: "Modern bright living room with polished wooden floors and large windows"
  },
  {
    url: "/hero/hero-6.png",
    alt: "Spotless modern kitchen with marble countertops"
  },
  {
    url: "/hero/hero-7.png",
    alt: "Pristine luxury bathroom with glass shower and white tiles"
  }
];

const Hero: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-sky-50 rounded-l-[100px] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Professional & <br />
              <span className="text-sky-600">Reliable</span> Cleaning
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              MYS Cleaning is Australia's detail-focused specialist. We provide premium residential and end-of-lease services with meticulous standards.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 border border-transparent text-base font-black rounded-2xl shadow-xl shadow-sky-500/20 text-white bg-sky-600 active:scale-95 md:hover:bg-sky-700 md:hover:scale-[1.02] transition-all"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center px-7 py-4 border border-slate-200 text-base font-bold rounded-2xl text-slate-700 bg-white active:bg-slate-50 transition-all"
              >
                <Phone className="mr-2 w-5 h-5 text-sky-600" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 group">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-200 h-[350px] sm:h-[450px] md:h-[550px]">
              {HERO_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeImage ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
              ))}

              {/* Navigation Arrows (visible on hover) */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeImage ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                    aria-label={`Switch to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-slate-50">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wider">Trusted by</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900">Perth Locals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
