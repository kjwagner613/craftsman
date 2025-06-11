import React, { useEffect, useState } from 'react';

const Software = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount
    setTimeout(() => setIsVisible(true), 100);
    // Optionally, clean up on unmount
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`flex flex-col items-center w-full transition-opacity transition-transform duration-700 ease-in-out 
      ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
      <h1 className="text-3xl font-bold text-center">Software</h1>
      <p className="mt-2 text-lg text-justify max-w-[800px]">
        Software development is a natural evolution of my career—a way to solve problems, refine systems, and empower people through technology. Years spent supporting businesses, managing projects, and automating workflows have reinforced one truth: code is more than syntax—it’s the bridge between vision and execution. Regardless of the platform or industry, software drives transformation, scales solutions, and turns ideas into reality.
        My experience has honed the ability to balance precision with adaptability, ensuring projects meet deadlines, deliver value, and optimize performance. But beyond efficiency, I believe in craftsmanship—writing code with clarity, consideration, and patience, always keeping the end goal in mind.
        Technology should serve people, not complicate their work. My approach prioritizes function, elegance, and purpose—building systems that don’t just work, but work well.
      </p>
    </div>
  );
};

export default Software;