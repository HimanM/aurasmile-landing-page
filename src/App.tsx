import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X, Linkedin, Github } from 'lucide-react';

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const navBgRef = useRef<HTMLDivElement>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for elements
      gsap.set('.gsap-fade-in', { opacity: 0 });
      gsap.set('.gsap-slide-up', { y: 20, opacity: 0 });
      gsap.set('.gsap-line-grow', { scaleX: 0, transformOrigin: 'left' });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to('.gsap-fade-in', { opacity: 1, duration: 1.2, stagger: 0.1 }, 0)
        .to('.gsap-slide-up', { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.2)
        .to('.gsap-line-grow', { scaleX: 1, duration: 1 }, 0.4);
    }, container);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!navBgRef.current || !navContentRef.current) return;
    
    if (isNavOpen) {
      gsap.to(navBgRef.current, { 
        scale: 80, 
        duration: 0.7, 
        ease: "power2.inOut" 
      });
      gsap.to(navContentRef.current, { autoAlpha: 1, duration: 0.4, delay: 0.3 });
    } else {
      gsap.to(navContentRef.current, { autoAlpha: 0, duration: 0.2 });
      gsap.to(navBgRef.current, { 
        scale: 1, 
        duration: 0.7, 
        ease: "power2.inOut", 
        delay: 0.1 
      });
    }
  }, [isNavOpen]);

  return (
    <div ref={container} className="relative w-full h-[100dvh] text-white overflow-hidden bg-slate-900 font-sans selection:bg-white/30 flex flex-col">
      {/* Background Section */}
      <div className="absolute inset-0 z-0 bg-[#7fb8d8]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover [object-position:88%_center] md:object-center gsap-fade-in"
          src="/Subtle_Animations_No_Audio_Video.mp4"
        />
        {/* Subtle overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col px-6 sm:px-10 lg:px-16 pt-5 sm:pt-8 pb-5 sm:pb-8 lg:pb-12">
        
        {/* Mobile Nav Overlay Background */}
        <div 
          ref={navBgRef} 
          className="fixed rounded-full pointer-events-none bg-black/40 backdrop-blur-xl z-[45] md:hidden origin-center" 
          style={{ 
            top: '20px', 
            right: '20px', 
            width: '48px', 
            height: '48px',
            transform: 'scale(1)'
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

        {/* Header */}
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

        {/* Main Grid Wrapper */}
        <main className="flex-1 flex flex-col justify-end pb-2 sm:pb-6 md:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 relative w-full h-full items-end">
            
            {/* Left Main Content */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-end">
              <h1 className="text-[2.25rem] leading-[1.05] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] font-bold tracking-tight uppercase gsap-slide-up">
                The Smile<br />
                For Dental<br />
                With Bright
              </h1>

              <div className="w-full h-[1px] bg-white/40 my-4 sm:my-5 lg:my-8 gsap-line-grow max-w-4xl"></div>

              <div className="flex flex-col gap-1 sm:gap-2 gsap-slide-up">
                <h2 className="text-[1.75rem] leading-none sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-light uppercase tracking-tight whitespace-nowrap">
                  Brighter Teeth
                </h2>
                <div className="flex items-center w-full mt-1 sm:mt-2">
                  <h2 className="text-[1.75rem] leading-none sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-light uppercase tracking-tight whitespace-nowrap">
                    Today
                  </h2>
                  
                  {/* Arrow and Button */}
                  <div className="flex items-center gap-4 sm:gap-8 ml-4 sm:ml-8 lg:ml-12 flex-1 max-w-md">
                    {/* Professional Unified SVG Arrow */}
                    <svg 
                      className="hidden sm:block flex-1 max-w-[80px] lg:max-w-[140px] text-white opacity-80 shrink-0" 
                      viewBox="0 0 140 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 8H139M139 8L132 1M139 8L132 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <button className="px-5 py-2.5 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white transition-all text-[10px] sm:text-xs lg:text-sm font-medium tracking-widest uppercase whitespace-nowrap shrink-0 relative z-20">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 sm:mt-8 lg:mt-12 text-[10px] sm:text-xs lg:text-sm text-white/90 leading-relaxed max-w-xl gsap-slide-up">
                Calm, premium dentistry focused on comfort, precision, and<br className="hidden sm:block"/>
                natural results here. Digital scans, calm care & clear plans for<br className="hidden sm:block"/>
                veneers, implants, and hygiene.
              </p>
            </div>

            {/* Right Subtext Details */}
            <div className="col-span-1 lg:col-span-5 h-full relative hidden lg:block">
              {/* Top Text */}
              <div className="absolute left-0 top-[15%] max-w-[220px] text-xs text-white/90 leading-[1.6] gsap-slide-up">
                Aurum Care blends<br />
                digital dentistry with<br />
                gentle care - clean lines,<br />
                calm spaces, and<br />
                precise results, from<br />
                first scan to final smile
              </div>

              {/* Bottom Text */}
              <div className="absolute right-0 bottom-8 max-w-[220px] text-xs text-white/90 leading-[1.6] text-right gsap-slide-up">
                Premium dentistry<br />
                with digital scans,<br />
                gentle treatment, and<br />
                precise restorations<br />
                clear plans, calm<br />
                visits, and naturally<br />
                bright smiles
              </div>
            </div>

          </div>
        </main>

        {/* Social Icons (Bottom Middle) */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 sm:gap-6 lg:gap-8 z-[60] gsap-fade-in pointer-events-auto">
          <a 
            href="https://linkedin.com/in/himanm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          </a>
          <a 
            href="https://github.com/himanm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
