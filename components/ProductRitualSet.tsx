
import React, { useState } from 'react';
import { Star, Check, ArrowRight, Clock, ShieldCheck, Gift } from 'lucide-react';

const ProductRitualSet: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    "https://i.imgur.com/xhFZuPd.png", // Main product
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800", // Lifestyle
    "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=800", // Detail
  ];

  return (
    <section className="bg-[#FDF8E1] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#2D2A26] tracking-tight uppercase">
            Start Your <span className="text-[#E66E33]">New Ritual</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Wellness should never feel like a chore. The Goldy's Ritual Set is packed with everything you need to craft the perfect floral cup every single day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-[#E66E33] font-black uppercase tracking-widest text-sm">
              <Star size={18} fill="currentColor" /> BEST VALUE
            </div>
            <div className="flex items-center gap-2 text-[#E66E33] font-black uppercase tracking-widest text-sm">
              <Gift size={18} /> FREE GIFTS
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Product Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-white rounded-[32px] overflow-hidden shadow-2xl group border-4 border-[#FFBF00]/10">
              <img 
                src={images[currentImg]} 
                alt="Goldy's Ritual Set" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-12 left-0 right-0 text-center text-white z-10 drop-shadow-lg">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                  FLORAL RADIANCE<br />ANY TIME OF DAY
                </h3>
                <p className="text-sm md:text-base font-bold opacity-90">100% natural adaptogenic blends.</p>
              </div>
              
              <button 
                onClick={() => setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFBF00] border-2 border-[#2D2A26] rounded-full flex items-center justify-center text-[#2D2A26] shadow-lg hover:scale-110 transition-all z-20"
              >
                <ArrowRight className="rotate-180" size={24} />
              </button>
              <button 
                onClick={() => setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFBF00] border-2 border-[#2D2A26] rounded-full flex items-center justify-center text-[#2D2A26] shadow-lg hover:scale-110 transition-all z-20"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${currentImg === i ? 'border-[#FFBF00] scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-[#FFBF00]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm font-black text-[#2D2A26] opacity-80 underline uppercase tracking-widest">234,985 Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#2D2A26] uppercase tracking-tight">
                Goldy's Ritual Set
              </h1>
              <p className="text-xl font-black text-[#E66E33] tracking-widest uppercase">60 Servings</p>
            </div>

            <div className="space-y-4">
              {[
                "30-Day Guarantee",
                "2x Bloom Blend (30 Servings Each)"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-[#2D2A26] font-black uppercase tracking-tight text-sm">
                  <div className="bg-[#FFBF00] border border-[#2D2A26] rounded-full p-0.5 text-[#2D2A26]">
                    <Check size={14} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Free Gifts Box - Sunset Theme */}
            <div className="bg-white rounded-2xl p-6 border-4 border-[#FFBF00]/20 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 bg-[#FFBF00] text-[#2D2A26] text-[10px] font-black uppercase px-3 py-1 tracking-widest rounded-br-lg border-b border-r border-[#2D2A26]/10">
                FREE GIFTS
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4">
                {[
                  "+ Acacia Storage Jar",
                  "+ Golden Measuring Spoon",
                  "+ Bamboo Whisk",
                  "+ Floral Wisdom Magnet",
                  "+ FREE Recipe E-Book",
                  "+ FREE Priority Shipping"
                ].map((gift, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#E66E33] font-black text-xs uppercase tracking-tight">
                    <span>{gift}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col">
                <span className="text-[#E66E33] font-black uppercase tracking-[0.2em] text-xs">NEW YEAR SALE</span>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-[#2D2A26]">$57.60</span>
                  <span className="text-2xl text-gray-300 line-through font-bold">$100</span>
                  <span className="bg-[#E66E33] text-white px-3 py-1 rounded-full text-[12px] font-black uppercase border border-black/10">42% OFF TODAY</span>
                </div>
                <span className="text-sm font-black text-gray-400 mt-1 uppercase tracking-widest">$0.96 Per Serving</span>
              </div>

              <div className="flex items-center gap-2 text-[#E66E33] font-black uppercase tracking-widest text-xs">
                <Clock size={18} />
                <span>Sale Ends in 00:00:00</span>
              </div>

              <div className="bg-[#FFF8E6] text-[#2D2A26] font-black px-4 py-2 rounded-lg border-2 border-[#FFBF00]/30 inline-flex items-center gap-2 uppercase text-xs tracking-tight">
                New Year Discount Auto-Applied ✅
              </div>
            </div>

            <div className="space-y-6">
              <button className="w-full py-6 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-2xl font-black text-2xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[8px_8px_0px_0px_rgba(45,42,38,1)] uppercase tracking-widest">
                GET STARTED <ArrowRight size={28} />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <ShieldCheck size={14} />
                Secure Checkout Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRitualSet;
