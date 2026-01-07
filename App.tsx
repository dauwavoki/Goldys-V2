
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewSocialProof from './components/ReviewSocialProof';
import UnlockBenefits from './components/UnlockBenefits';
import ProductRitualSet from './components/ProductRitualSet';
import GuaranteeSection from './components/GuaranteeSection';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import StickyFooter from './components/StickyFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF8E1]">
      {/* Topmost Global Announcement - California Sunset Yellow/Black */}
      <div className="bg-[#FFBF00] text-[#2D2A26] py-2 text-center text-[10px] md:text-xs font-black tracking-widest uppercase border-b border-black/10">
        UP TO 40% OFF + FREE GIFTS
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Section right under Hero */}
        <ReviewSocialProof />

        {/* Detailed Benefits Section focused on Goldy's Flower */}
        <UnlockBenefits />
        
        {/* Marquee Banner - Dark Mode Sunset */}
        <div className="bg-[#2D2A26] py-14 md:py-16 overflow-hidden whitespace-nowrap border-y border-[#FFBF00]/20">
          <div className="animate-marquee inline-block text-[#FFBF00] font-black tracking-[0.2em] text-xl md:text-4xl uppercase">
            &nbsp;FREE SHIPPING OVER $50 • 100% ORGANIC • LAB TESTED • NO PESTICIDES • ETHICALLY SOURCED •&nbsp;
            FREE SHIPPING OVER $50 • 100% ORGANIC • LAB TESTED • NO PESTICIDES • ETHICALLY SOURCED •&nbsp;
            FREE SHIPPING OVER $50 • 100% ORGANIC • LAB TESTED • NO PESTICIDES • ETHICALLY SOURCED •&nbsp;
          </div>
        </div>

        {/* Responsive Image Strip */}
        <section className="w-full overflow-hidden bg-[#FDF8E1]">
          <div className="w-full h-[600px] md:h-[300px] lg:h-[350px] transition-all duration-700 ease-in-out">
            <img 
              src="https://i.imgur.com/UOEjcpi.jpeg" 
              alt="Goldy's Flower Ritual" 
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </section>

        {/* Product Detail / Purchase Section */}
        <ProductRitualSet />

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* Existing Benefits */}
        <Benefits />
        <Comparison />
        
        {/* Lifestyle Banner */}
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
          <img 
            src="https://i.imgur.com/fAC6gaH.jpeg" 
            alt="Lifestyle" 
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center max-w-3xl px-4 space-y-6">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase">The Art of Stillness</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">Experience mindfulness through every petal. Rediscover your inner peace with Goldy's Flower.</p>
            <button className="mt-8 px-12 py-5 bg-[#FFBF00] text-[#2D2A26] border-2 border-[#2D2A26] rounded-xl font-black text-lg hover:scale-105 transition-all shadow-[6px_6px_0px_0px_rgba(45,42,38,1)] uppercase tracking-wider">
              SHOP GOLDY'S
            </button>
          </div>
        </section>

        <Reviews />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2A26] text-white pt-24 pb-32 lg:pb-24 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img 
              src="https://i.imgur.com/UmfsSyv.png" 
              alt="Goldy's Logo" 
              className="w-full h-auto object-contain max-w-[280px]" 
            />
            <p className="text-white/60 leading-relaxed text-sm">Goldy's Flower Co. is dedicated to providing the highest quality THCa flower and floral products. Sustainably grown, scientifically backed, and loved by our community.</p>
            <div className="flex gap-4">
              {[ 'IG', 'FB', 'TW' ].map(social => (
                <div key={social} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFBF00] hover:text-[#2D2A26] transition-colors cursor-pointer text-[10px] font-black">
                  {social}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#FFBF00]">Shop</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">THCa Flower</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pre-Rolls</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gummies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ritual Set</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#FFBF00]">Information</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lab Results</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#FFBF00]">Newsletter</h4>
            <p className="text-white/60 mb-6 text-sm">Stay golden. Join our community for early access to new flower drops.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:ring-2 focus:ring-[#FFBF00] text-sm text-white placeholder-white/30"
              />
              <button className="w-full bg-[#FFBF00] text-[#2D2A26] py-4 rounded-lg font-black hover:opacity-90 transition-all text-sm uppercase tracking-widest">JOIN US</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 text-[10px] text-white/40 flex flex-col md:flex-row justify-between gap-4 uppercase tracking-widest font-bold">
          <p>© 2024 Goldy's Flower Co. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      <StickyFooter />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
