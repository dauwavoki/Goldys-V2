
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { PRODUCT_OPTIONS } from '../constants';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 lg:hidden transform transition-transform shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-4 max-w-xl mx-auto">
        <div>
          <p className="text-[10px] font-bold text-[#F36E42] uppercase tracking-wider">Ritual Set</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-[#1A1A1A]">${PRODUCT_OPTIONS[0].price.toFixed(2)}</span>
            <span className="text-xs line-through text-gray-400">${PRODUCT_OPTIONS[0].originalPrice?.toFixed(2)}</span>
          </div>
        </div>
        <button className="flex-1 bg-[#1A1A1A] text-[#FFC100] py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <ShoppingCart size={18} />
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
