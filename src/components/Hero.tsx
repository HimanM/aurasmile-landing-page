import React from 'react';

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
