
import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    name: "Sarah Jenkins",
    location: "Subiaco",
    rating: 5,
    text: "MYS Cleaning did an incredible job with our end-of-lease clean. We got our full bond back without a single question from the property manager. Highly recommend their attention to detail.",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    location: "Cottesloe",
    rating: 5,
    text: "Professional, punctual, and very thorough. They cleaned areas of my apartment I hadn't even thought of. The best cleaning service I've used in Perth.",
    date: "1 month ago"
  },
  {
    name: "Emma Thompson",
    location: "Scarborough",
    rating: 5,
    text: "I booked a deep clean after a renovation and the results were stunning. The team was efficient and left the house smelling fresh and looking brand new.",
    date: "3 weeks ago"
  },
  {
    name: "David Wilson",
    location: "Fremantle",
    rating: 5,
    text: "Reliable service every single fortnight. It's such a relief coming home to a perfectly cleaned house. They are trustworthy and very detail-oriented.",
    date: "2 months ago"
  },
  {
    name: "Jessica Miller",
    location: "Joondalup",
    rating: 4,
    text: "Great communication and excellent cleaning standards. They were a bit late due to traffic but kept me updated and made sure the job was finished to perfection.",
    date: "1 month ago"
  },
  {
    name: "Robert Taylor",
    location: "Perth CBD",
    rating: 5,
    text: "The premium detailed clean is worth every cent. They cleaned inside the oven and windows until they were sparkling. Very impressed with the professionalism.",
    date: "5 days ago"
  },
  {
    name: "Linda Harrison",
    location: "South Perth",
    rating: 5,
    text: "MYS Cleaning has been maintaining our family home for six months now. They are always polite, thorough, and careful with our belongings. Five stars!",
    date: "3 months ago"
  },
  {
    name: "James Anderson",
    location: "Victoria Park",
    rating: 5,
    text: "Exceptional service! I used them for a move-in clean and it made the transition so much easier. The bathrooms were spotless.",
    date: "2 weeks ago"
  },
  {
    name: "Sophie Lewis",
    location: "Nedlands",
    rating: 5,
    text: "Attention to detail is their superpower. Even the skirting boards and door frames were wiped down. Truly high standards.",
    date: "1 month ago"
  },
  {
    name: "Mark Stevens",
    location: "Duncraig",
    rating: 5,
    text: "I've tried several cleaning companies in Perth, but MYS is the most consistent. They actually do what they say they will do.",
    date: "2 months ago"
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Update items to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsToShow);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-base font-bold text-sky-600 tracking-widest uppercase">Testimonials</h2>
          <p className="mt-2 text-2xl md:text-4xl font-black text-slate-900 leading-tight">What Our Clients Say</p>
          <p className="mt-4 text-slate-600 font-medium text-base md:text-lg">
            Join our satisfied homeowners across Perth who trust our meticulous standards.
          </p>
        </div>

        <div className="relative group">
          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {REVIEWS.map((review, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-full px-2 md:px-3 sm:w-1/2 lg:w-1/3`}
                >
                  <div className="h-full bg-white p-5 md:p-7 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-all duration-300 relative min-h-[220px] md:min-h-[260px]">
                    <div className="absolute top-5 right-5 md:right-7 text-slate-100/30">
                      <Quote size={28} className="md:w-8 md:h-8" />
                    </div>
                    
                    <div className="flex mb-3 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`md:w-3.5 md:h-3.5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 italic mb-4 md:mb-5 leading-relaxed font-medium text-sm md:text-[15px]">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                      <div>
                        <h4 className="text-slate-900 font-black text-xs md:text-sm">{review.name}</h4>
                        <p className="text-slate-500 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mt-0.5">{review.location}</p>
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:block">
            <button 
              onClick={prev}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-20"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={next}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:scale-110 active:scale-95 transition-all z-20"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Specific Navigation */}
          <div className="flex md:hidden justify-center items-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-slate-600 active:bg-sky-50 active:text-sky-600 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentIndex === i ? 'w-6 bg-sky-600' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-slate-600 active:bg-sky-50 active:text-sky-600 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop Pagination Dots */}
          <div className="hidden md:flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === i ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm font-bold text-slate-700 ml-2">
              Joined by <span className="text-sky-600">40+</span> happy Perth locals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
