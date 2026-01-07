
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-white border-b border-gray-100 py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex-1 flex justify-start">
        <Menu className="cursor-pointer text-[#2D2A26] hover:opacity-70 transition-opacity" size={28} />
      </div>
      
      <div className="flex-1 flex justify-center">
        <a href="/" className="transition-transform hover:scale-110 duration-300">
          <img 
            src="https://i.imgur.com/710tmhB.png" 
            alt="Goldy's Flower Logo" 
            className="h-14 md:h-20 w-auto object-contain"
          />
        </a>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="relative cursor-pointer group">
          <ShoppingCart size={28} className="text-[#2D2A26] group-hover:text-[#B5543D] transition-colors" />
          <span className="absolute -top-1 -right-1 bg-[#B5543D] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
