import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#7fb8d8]">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover [object-position:88%_center] lg:object-center lg:scale-105 gsap-fade-in"
        src="/Subtle_Animations_No_Audio_Video.mp4"
      />
      {/* Subtle overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default Background;
