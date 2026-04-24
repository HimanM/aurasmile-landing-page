import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MobileNavProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isNavOpen, toggleNav }) => {
  const navBgRef = useRef<HTMLDivElement>(null);
  const navContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navBgRef.current || !navContentRef.current) return;

    if (isNavOpen) {
      gsap.to(navBgRef.current, {
        width: '200vw',
        height: '200vh',
        top: '-300px',
        right: '-300px',
        duration: 0.7,
        ease: "power2.inOut"
      });
      gsap.to(navContentRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.2 });
    } else {
      gsap.to(navContentRef.current, { autoAlpha: 0, duration: 0.2 });
      gsap.to(navBgRef.current, {
        width: '48px',
        height: '48px',
        top: '20px',
        right: '20px',
        duration: 0.7,
        ease: "power2.inOut"
      });
    }
  }, [isNavOpen]);

  return (
    <>
      {/* Mobile Nav Overlay Background */}
      <div
        ref={navBgRef}
        className="fixed rounded-full pointer-events-none backdrop-blur-xl z-[45] md:hidden origin-top-right"
        style={{
          top: '20px',
          right: '20px',
          width: '48px',
          height: '48px'
        }}
      />

      {/* Mobile Nav Content */}
      <div 
        ref={navContentRef} 
        className="fixed inset-0 w-full h-[100dvh] flex flex-col items-center justify-center opacity-0 invisible z-50 pointer-events-none md:hidden"
      >
        <nav className="flex flex-col items-center gap-8 text-2xl tracking-[0.2em] font-light uppercase pointer-events-auto">
          {['About', 'Treatments', 'Team', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={toggleNav} 
              className="hover:text-white/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
