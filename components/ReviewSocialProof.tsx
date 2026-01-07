
import React, { useRef, useState, useEffect } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const TOP_REVIEWS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=1000&auto=format&fit=crop",
    headline: "CAN'T RECOMMEND ENOUGH...",
    quote: "I'm obsessed with the quality and taste. It has not only enhanced my mornings but has also brought about positive changes in my health.",
    author: "Brenda M.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&h=1000&auto=format&fit=crop",
    headline: "LOOK AND FEEL GOOD",
    quote: "Absolutely love this!! I have everything I need to make the perfect cup of coffee and it's a beautiful addition to my kitchen counter.",
    author: "Rachel A.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=1000&auto=format&fit=crop",
    headline: "BEST THING TO WAKE UP TO",
    quote: "Two cups every morning and I feel so much more focused within days. Thanks Goldy's for the change!",
    author: "Adam M.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&h=1000&auto=format&fit=crop",
    headline: "SIMPLY TRANSFORMATIVE",
    quote: "The ritual has become the anchor of my day. I feel a level of calm and sustained energy I haven't had in years.",
    author: "David K.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=1000&auto=format&fit=crop",
    headline: "BETTER THAN EXPECTED",
    quote: "I was skeptical at first, but after a week of using the Goldy's Ritual Set, I'm a believer. The taste is divine and the focus is real.",
    author: "Jessica T.",
  }
];

const EXTENDED_REVIEWS = [...TOP_REVIEWS, ...TOP_REVIEWS, ...TOP_REVIEWS];

const ReviewSocialProof: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScrollState);
      el.scrollLeft = el.clientWidth * 0.5;
      return () => el.removeEventListener('scroll', handleScrollState);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#2D2A26] py-16 md:py-24 text-[#FFBF00] overflow-hidden relative">
      <div className="max-w-full relative">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 px-6 max-w-4xl mx-auto space-y-4">
          <p className="text-white text-base md:text-lg leading-relaxed font-medium">
            Our customers are at the heart of everything we do, and their stories speak for themselves. 
            People everywhere are experiencing the life-changing benefits of Goldy's.
          </p>
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-1 text-[#FFBF00]">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-sm font-black tracking-widest opacity-90 uppercase">234,985 REVIEWS</p>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group">
          
          <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#2D2A26] via-[#2D2A26]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#2D2A26] via-[#2D2A26]/80 to-transparent z-10 pointer-events-none"></div>

          <button 
            onClick={() => scroll('left')}
            className={`absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 md:p-5 bg-[#FFBF00] rounded-full text-[#2D2A26] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-[#2D2A26] ${!showLeftArrow ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
            disabled={!showLeftArrow}
          >
            <ChevronLeft size={24} md:size={32} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 md:p-5 bg-[#FFBF00] rounded-full text-[#2D2A26] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-[#2D2A26] ${!showRightArrow ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
            disabled={!showRightArrow}
          >
            <ChevronRight size={24} md:size={32} strokeWidth={2.5} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto py-4 px-[10vw] snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {EXTENDED_REVIEWS.map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`} 
                className="min-w-[85vw] md:min-w-[850px] bg-[#FDF8E1] rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col md:flex-row snap-center shadow-2xl border-4 border-[#FFBF00]/20"
              >
                <div className="w-full md:w-[45%] h-[260px] md:h-auto overflow-hidden relative">
                  <img 
                    src={review.image} 
                    alt={review.author} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDF8E1] to-transparent hidden md:block"></div>
                </div>
                
                <div className="p-8 md:p-14 flex-1 flex flex-col justify-between text-[#2D2A26]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5 text-[#E66E33]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                      </div>
                      <span className="text-[12px] font-black uppercase opacity-50 tracking-[0.1em]">Five Stars</span>
                    </div>
                    
                    <h5 className="font-black text-2xl md:text-3xl leading-tight uppercase tracking-tight text-[#2D2A26]">
                      "{review.headline}"
                    </h5>
                    
                    <p className="text-base md:text-xl leading-relaxed opacity-80 italic font-medium">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="pt-10 flex items-center justify-between mt-auto">
                    <span className="font-black text-lg md:text-xl">{review.author}</span>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-[#FFBF00] rounded-full border-2 border-[#2D2A26]">
                      <CheckCircle size={16} className="text-[#2D2A26]" />
                      <span className="text-[11px] md:text-[12px] font-black uppercase tracking-widest text-[#2D2A26]">Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ReviewSocialProof;
