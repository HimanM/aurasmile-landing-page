import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="flex justify-between items-center w-full gsap-slide-up relative z-[60]">
      <div className="text-sm tracking-[0.15em] font-semibold uppercase flex-none text-left">
        Aurasmile
      </div>
      
      <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-16 text-xs lg:text-sm font-medium tracking-wide flex-1">
        {['About', 'Treatments', 'Team', 'Pricing', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white/80 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Nav Hamburger */}
      <div className="md:hidden flex-none relative z-[70] [transform:translateZ(0)]">
        <button 
          onClick={toggleNav} 
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all active:scale-95"
        >
          {isNavOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
