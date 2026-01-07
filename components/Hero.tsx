
import React from 'react';
import { ArrowRight, ShieldCheck, Flower2, Sparkles, Heart, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Sale Countdown Banner - Dark Sunset */}
      <div className="bg-[#2D2A26] text-[#FFBF00] py-2 px-6 md:px-12 flex justify-between items-center relative z-20 border-b border-[#FFBF00]/10">
        <div className="flex flex-col text-left leading-tight">
          <span className="font-black uppercase text-[10px] md:text-xs tracking-widest">NEW YEAR SALE</span>
          <span className="text-[9px] md:text-[10px] opacity-80 uppercase font-black">SAVE UP TO 40% OFF + FREE GIFTS</span>
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          {[
            { label: 'DAY', value: '00' },
            { label: 'HRS', value: '00' },
            { label: 'MIN', value: '00' },
            { label: 'SEC', value: '00' }
          ].map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex flex-col items-center">
                <span className="text-lg md:text-xl font-bold font-mono leading-none">{item.value}</span>
                <span className="text-[8px] uppercase tracking-tighter opacity-70 mt-0.5 font-bold">{item.label}</span>
              </div>
              {idx < 3 && <span className="text-lg font-bold opacity-30 mb-2">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-120px)] flex flex-col md:flex-row items-center overflow-hidden bg-[#FDF8E1]">
        
        {/* Desktop Background (Hidden on Mobile) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/xhFZuPd.png" 
            alt="Goldy's Ritual Wellness" 
            className="w-full h-full object-cover object-right"
          />
          {/* Gradient for legibility */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-[#FDF8E1] via-[#FDF8E1]/60 to-transparent"></div>
        </div>

        {/* Mobile Layout Container */}
        <div className="flex flex-col w-full z-10 md:hidden">
          {/* Text TOP (Mobile) */}
          <div className="px-6 py-10 text-center">
            <h4 className="text-[#E66E33] font-black tracking-[0.2em] uppercase text-[10px] mb-3">
              GOLDY'S RITUAL SET
            </h4>
            <h1 className="text-4xl font-black text-[#2D2A26] leading-tight tracking-tight">
              For Brighter Mornings<br />
              And <span className="text-[#E66E33] italic">Better Days</span>
            </h1>
          </div>

          {/* Image MIDDLE (Mobile) */}
          <div className="w-full aspect-square overflow-hidden">
            <img 
              src="https://i.imgur.com/xhFZuPd.png" 
              alt="Ritual Set" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content BOTTOM (Mobile) */}
          <div className="px-6 py-10 space-y-8">
            <p className="text-sm text-[#2D2A26] leading-relaxed font-medium opacity-90 text-center">
              Make your routine a ritual. We created the Goldy's Ritual Set to help you rise 
              every day as the best version of yourself.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-[#E66E33]"><Flower2 size={20} /></div>
                <p className="text-[#1A1A1A] text-xs font-semibold">Premium high-potency THCa flower for ultimate clarity.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#E66E33]"><Zap size={20} /></div>
                <p className="text-[#1A1A1A] text-xs font-semibold">Expertly crafted pre-rolls for your daily convenience.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#E66E33]"><Sparkles size={20} /></div>
                <p className="text-[#1A1A1A] text-xs font-semibold">Deliciously infused gummies to feel better every day.</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <button className="w-full py-5 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-xl font-black text-base flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(45,42,38,1)] uppercase tracking-wide active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
                TRY IT NOW <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-2 text-[#2D2A26] justify-center text-[10px] font-bold opacity-70">
                <ShieldCheck size={14} className="text-[#E66E33]" />
                <span>30-DAY MONEY BACK GUARANTEE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Content (Visible on MD+) */}
        <div className="hidden md:block max-w-7xl mx-auto px-12 py-16 relative z-10 w-full">
          <div className="max-w-xl">
            <h4 className="text-[#E66E33] font-black tracking-[0.2em] uppercase text-sm mb-4">
              GOLDY'S RITUAL SET
            </h4>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#2D2A26] leading-[1.1] tracking-tight mb-6">
              For Brighter Mornings<br />
              And <span className="text-[#E66E33] italic">Better Days</span>
            </h1>

            <p className="text-lg text-[#2D2A26] leading-relaxed max-w-lg font-medium mb-10 opacity-80">
              Make your routine a ritual. We created the Goldy's Ritual Set to help you rise 
              every day as the best version of yourself.
            </p>

            <div className="space-y-5 mb-12">
              {[
                { icon: <Flower2 size={24} />, text: "Premium high-potency THCa flower for ultimate clarity." },
                { icon: <Zap size={24} />, text: "Expertly crafted pre-rolls for your daily convenience." },
                { icon: <Sparkles size={24} />, text: "Deliciously infused gummies to feel better every day." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-[#E66E33] flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-[#1A1A1A] font-semibold text-base leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <button className="px-16 py-5 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(45,42,38,1)] uppercase tracking-wide">
                TRY IT NOW
                <ArrowRight size={22} />
              </button>
              <div className="flex items-center gap-2 text-[#2D2A26] text-sm font-bold opacity-70">
                <ShieldCheck size={18} className="text-[#E66E33]" />
                <span>30-DAY MONEY BACK GUARANTEE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
