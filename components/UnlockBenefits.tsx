
import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Brain, Flower2, Zap } from 'lucide-react';

const UnlockBenefits: React.FC = () => {
  return (
    <section className="bg-[#FDF8E1] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h4 className="text-[#E66E33] font-black tracking-[0.2em] uppercase text-xs md:text-sm">
            UNLOCK THE BENEFITS
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-[#2D2A26] tracking-tight">
            More Than <span className="text-[#E66E33]">Just Flowers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Our premium flower blends combine potency with organic cultivation to boost your physical and 
            mental wellness. It's incredible how a simple ritual with Goldy's can help you feel 
            better, think better, and do better.
          </p>
        </div>

        {/* Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="hidden lg:flex flex-col gap-24 text-right w-full max-w-[340px] z-20">
            {[
              { icon: <Flower2 size={44} />, title: "Premium Quality", desc: "Hand-selected THCa flower at peak potency for the purest experience." },
              { icon: <Brain size={44} />, title: "Mental Clarity", desc: "Clear the fog. Treat your mind to improved focus and sustained concentration." },
              { icon: <ShieldCheck size={44} />, title: "Natural Wellness", desc: "Say yes to a balanced endocannabinoid system and overall body harmony." }
            ].map((item, i) => (
              <div key={i} className={`space-y-3 ${i === 1 ? 'pr-8' : ''}`}>
                <div className="flex justify-end text-[#E66E33]">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#2D2A26] uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Middle Column */}
          <div className="relative flex-shrink-0 z-10">
            <img 
              src="https://i.imgur.com/X2lEdEy.png" 
              alt="Goldy's Ritual Pack" 
              className="relative z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[480px] h-auto transform hover:rotate-3 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(45,42,38,0.12)] mx-auto"
            />
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex flex-col gap-24 text-left w-full max-w-[340px] z-20">
            {[
              { icon: <Zap size={44} />, title: "Smooth Energy", desc: "Clean, natural vibes that lead to higher productivity and better mood." },
              { icon: <Sparkles size={44} />, title: "Pure Joy", desc: "Balance your day from morning to night with high-terpene aromatic blends." },
              { icon: <Heart size={44} />, title: "Sustainable Living", desc: "Ethically sourced from organic farms that prioritize the earth and your health." }
            ].map((item, i) => (
              <div key={i} className={`space-y-3 ${i === 1 ? 'pl-8' : ''}`}>
                <div className="flex justify-start text-[#E66E33]">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#2D2A26] uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Benefits */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
            {[
              { icon: <Flower2 size={32} />, title: "Premium Quality", desc: "Hand-selected THCa flower at peak potency for the purest experience." },
              { icon: <Zap size={32} />, title: "Smooth Energy", desc: "Clean, natural vibes that lead to higher productivity and better mood." },
              { icon: <Brain size={32} />, title: "Mental Clarity", desc: "Clear the fog. Treat your mind to improved focus and sustained concentration." },
              { icon: <Sparkles size={32} />, title: "Pure Joy", desc: "Balance your day with high-terpene aromatic flower blends." },
              { icon: <ShieldCheck size={32} />, title: "Natural Wellness", desc: "Say yes to a balanced system and overall body harmony." },
              { icon: <Heart size={32} />, title: "Sustainable Living", desc: "Ethically sourced from organic farms that prioritize health." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 bg-white/60 p-6 rounded-[24px] border-2 border-[#FFBF00]/20">
                <div className="text-[#E66E33]">{item.icon}</div>
                <h3 className="text-lg font-black text-[#2D2A26] uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-24 md:mt-32 text-center space-y-6">
          <button className="px-12 py-5 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-xl font-black text-lg md:text-xl flex items-center justify-center gap-3 mx-auto hover:scale-105 active:scale-95 transition-all shadow-[8px_8px_0px_0px_rgba(45,42,38,1)] uppercase tracking-widest">
            TRY GOLDY'S TODAY <ArrowRight size={24} />
          </button>
          <div className="flex items-center justify-center gap-2 text-[#2D2A26] text-xs md:text-sm font-black opacity-70">
            <div className="bg-[#E66E33] p-0.5 rounded-full text-white">
              <ShieldCheck size={14} />
            </div>
            <span>30-DAY MONEY BACK GUARANTEE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockBenefits;
