import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Background from './components/Background';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';

export default function App() {
  const container = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={container} className="relative w-full h-[100dvh] text-white overflow-hidden bg-slate-900 font-sans selection:bg-white/30 flex flex-col">
      <Background />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col px-6 sm:px-10 lg:px-16 pt-5 sm:pt-8 pb-5 sm:pb-8 lg:pb-12">
        <MobileNav isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <Hero />
        <SocialLinks />
      </div>
    </div>
  );
}
