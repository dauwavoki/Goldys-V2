
import React from 'react';
import { BENEFITS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  const displayBenefits = BENEFITS;

  return (
    <section className="bg-white py-24 overflow-hidden border-t-8 border-[#FDF8E1]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2D2A26] uppercase tracking-tight">More Than <span className="text-[#E66E33] italic">Just Flowers</span></h2>
          <p className="text-gray-600 font-medium text-lg">Unlike processed supplements, our floral blends work in harmony with your natural biological rhythms.</p>
        </div>

        <div className="space-y-32">
          {displayBenefits.map((b, i) => {
            return (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative group">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FDF8E1] relative">
                    <img 
                      src={b.image} 
                      alt={b.title} 
                      className="w-full h-auto min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] px-8 py-3 rounded-full font-black shadow-2xl uppercase tracking-widest text-sm">
                        View Product
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-4xl md:text-5xl font-black text-[#2D2A26] uppercase tracking-tight">{b.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-[#E66E33] pl-6 font-medium">
                    "{b.description}"
                  </p>
                  
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-[#E66E33]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#E66E33] rounded-full" />
                      </div>
                      <span className="text-gray-700 font-bold uppercase tracking-tight text-sm">Rich in polyphenols for cell protection.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-[#FFBF00]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#FFBF00] border border-[#2D2A26] rounded-full" />
                      </div>
                      <span className="text-gray-700 font-bold uppercase tracking-tight text-sm">Ethically hand-picked during peak potency.</span>
                    </li>
                  </ul>

                  <div className="pt-8">
                    <button className="w-full md:w-auto px-12 py-5 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[6px_6px_0px_0px_rgba(45,42,38,1)] uppercase tracking-widest text-lg">
                      BUY NOW <ArrowRight size={22} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
