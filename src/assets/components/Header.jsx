import React, { useEffect, useState } from 'react';

const Header = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selected) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [selected]);

  return (
    <div className={`flex flex-col items-center w-full transition-opacity transition-transform duration-700 ease-in-out
      ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <div className="mt-2 text-lg text-justify max-w-[800px]">
        <p className="test-playball">“If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.”</p>
        <p className="test-playball">― Henry David Thoreau</p>
        <h4>About me, Professionally:</h4>
        <p>I use that quote because I start there, imagine the best solution, regardless of its existence. then see if you can make it work. Don't start with a catalog.</p> 
        <p>I'm a methodical problem-solver, passionate about tech, software development, and optimizing workflows. Over the past 30 years, I’ve built a reputation for resourcefulness, clarity in troubleshooting, and a strong focus on scalable solutions. Whether refining backend architecture, troubleshooting cross-platform compatibility, or designing user-friendly interfaces, I thrive on finding efficient, reliable answers.</p>
        <p>Beyond technical expertise, I value collaboration and knowledge-sharing. I enjoy helping others streamline their environments, ensuring that tech works for people—not against them. My work spans full-stack development, network configurations, cloud integration, and automation, and I take pride in creating audit-proof, business-aligned solutions that empower both teams and individuals.</p>
        <p>Outside of code and configurations, I approach challenges with persistence and logic, always striving for structured, user-focused outcomes. If you're working on something ambitious, complex, or just frustrating, I’m the kind of person who finds a way to make it work—and make it make sense.</p>

        <h4>About Me, Un-Professionally: </h4>
        <p>I do my best to see the best version of people and situations—and support that realization. The comedy of life is that sometimes the opposite unfolds, and when it does, I try to find humor in it rather than disappointment. I believe the drama between us is just a distraction, clouding our vision to the immense gift of it all.</p>
        <p>I used to think golf and relationships would always be the most frustrating challenges in life—until I decided to learn to code. That taught me an entirely new definition of frustration. 😆 Still, I push forward, knowing that learning, breaking things down, and understanding each component at its core matters more than just recalling an expected outcome.</p>
        <p>I'm loyal, and I guess I have an old-school sense of right. I believe that true learning comes not just from knowing what something does, but understanding why it does. And finally—they say everything we need to know, we learned in kindergarten. I say kindergarten—and the sunscreen song.</p>

      </div>
    </div>
  );
};

export default Header;