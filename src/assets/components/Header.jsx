import React, { useEffect, useState } from 'react';

const Header = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (selected) {
      timer = setTimeout(() => setIsVisible(true), 1000);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center" style={{ maxWidth: "var(--max-width)" }}>
      <div className={`w-full mx-auto px-4 text-center transition-opacity transition-transform duration-700 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
        <h1 className="text-justify">“If you have built castles in the air, your work need not be lost; that is where they should be.
          Now put the foundations under them.”</h1>
        <h1 className="text-justify">
          ― Henry David Thoreau</h1>
        <br /><br />
        <h2 className="text-justify">Foundational Experience:</h2>
        <p className="text-justify">A strong foundation should elevate vision, aspirations, and innovation—not constrain them. Infrastructure must be built to support ambition, not force ambition to conform to limitations. That’s why I design every system with <strong>scalability</strong> and <strong>adaptability</strong> at its core.</p>
        <p className="text-justify">This quote resonates deeply with me because I believe in starting with possibility. Instead of asking, "What can I build within these constraints?", I ask, "What is the best solution here?" From there, I examine boundaries, explore feasibility, and refine. Through <strong>iterative design</strong> we will achieve results that can far exceed expectations.</p>
        <p className="text-justify">
          It’s about reaching beyond the standard, testing the limits of what’s possible, learning from every challenge, and <strong>charging forward toward excellence—
            <span
              style={{
                color: "#FFD700",
                fontSize: "1.2em",
                fontWeight: "bold",
                textShadow: `
                  -1px -1px 0 #333,
                  1px -1px 0 #333,
                  -1px 1px 0 #333,
                  1px 1px 0 #333
                `
              }}
            >
              beyond the requirements.
            </span>
          </strong>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Header;