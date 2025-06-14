import React, { useEffect, useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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
      <div className={`w-full px-4 text-center transition-opacity transition-transform duration-700 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>

        <div className="mt-2 text-justify" style={{ maxWidth: "var(--max-width)" }}>
          <h4>Me - Professionally:</h4>

          <p>I'm a methodical problem-solver, passionate about tech, Software development, and optimizing workflows. Over the past 30 years, I’ve built a reputation for resourcefulness, clarity in troubleshooting, and a strong focus on scalable solutions. Whether refining backend architecture, troubleshooting cross-platform compatibility, or designing user-friendly interfaces, I thrive on finding efficient, reliable answers.</p>
          <p>Beyond technical expertise, I value collaboration and knowledge-sharing. I enjoy helping others streamline their environments, ensuring that tech works for people—not against them. My work spans full-stack development, network configurations, cloud integration, and Automation, and I take pride in creating audit-proof, business-aligned solutions that empower both teams and individuals.</p>
          <p>Outside of code and configurations, I approach challenges with persistence, logic, and experience, always striving for robust outcomes, intuitive for the user. WWhen it was exceptionally ambitious, complex, or just frustrating, I have often been the one pushing through the night to find the solution before the morning.</p>

          <h4>Me - Personally: </h4>
          <p>I do my best to see the best version of people and situations—and support that realization. The comedy of life is that sometimes the opposite unfolds, and when it does, I try to find humor in it rather than disappointment. I believe the drama between us is just a distraction, clouding our vision to the immense gift of it all.</p>
          <p>I used to think golf and relationships would always be the most frustrating challenges in life—until I decided to learn to code. That taught me an entirely new definition of frustration. 😆 Still, I push forward, knowing that learning, breaking things down, and understanding each component at its core matters more than just recalling the way to achieve a particular result. To me, its the difference between assembling a model, and crafting a solution.</p>
          <p>I'm loyal, and I guess I have an old-school sense of right. I believe that true learning comes not just from knowing what something does, but understanding why it does. And finally—they say everything we need to know, we learned in kindergarten. I say kindergarten—and the sunscreen song.</p>

        </div>
        <h2 className="text-justify">Foundational Experience:</h2>
        <p className="text-justify">A strong foundation should elevate vision, aspirations, and innovation—not constrain them. Infrastructure must be built to support ambition, not force ambition to conform to limitations. That’s why I design every system with <strong>scalability</strong> and <strong>adaptability</strong> at its core.</p>
        <p className="text-justify">Click the button below to go back to the top, then select a pillar to find out how that experiece works in union with the others to the successful achievement of business objectives.</p>
        <p className="text-justify">Also you can click on the cloud to get back to the first page.</p>
      </div>
      <button
        onClick={scrollToTop}
        className="button"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Header;