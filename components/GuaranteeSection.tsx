
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-[#FDF8E1] py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto bg-white rounded-[40px] md:rounded-[64px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 border-4 border-[#FFBF00]/10 shadow-2xl relative">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 md:space-y-10 z-10 text-center lg:text-left">
          <div className="space-y-4">
            <h4 className="text-[#E66E33] font-black tracking-[0.2em] uppercase text-sm md:text-base">
              TRY IT FOR 30 DAYS.
            </h4>
            <h2 className="text-4xl md:text-7xl font-black text-[#2D2A26] leading-[1.05] tracking-tight uppercase">
              You'll Love It<br /><span className="text-[#E66E33]">Guaranteed.</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              If you don't love it, you get your money back. No questions asked.
            </p>
          </div>

          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <button className="w-full md:w-auto px-12 py-6 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-2xl font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[10px_10px_0px_0px_rgba(45,42,38,1)] uppercase tracking-widest">
              TRY GOLDY'S TODAY <ArrowRight size={28} />
            </button>
            <div className="flex items-center gap-3 text-[#2D2A26] text-sm md:text-base font-black uppercase tracking-widest opacity-40">
              <CheckCircle2 size={20} className="text-[#E66E33]" />
              30-Day Money Back Guarantee
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center items-center py-8">
          <div className="relative z-10 w-full max-w-[380px] md:max-w-[450px] transform -rotate-2 hover:rotate-0 transition-transform duration-700">
             <img 
               src="https://i.imgur.com/w72hfF2.png" 
               alt="Goldy's Ritual Pouch" 
               className="w-full h-auto drop-shadow-[0_30px_60px_rgba(45,42,38,0.15)]"
             />
          </div>

          <div className="absolute top-0 right-0 lg:-right-8 xl:right-0 transform translate-x-1/4 -translate-y-1/4 md:translate-x-0 md:-translate-y-4 z-20">
            <img 
              src="https://i.imgur.com/0GmTipt.png" 
              alt="30-Day Money Back Guarantee" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_15px_45px_rgba(230,110,51,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
