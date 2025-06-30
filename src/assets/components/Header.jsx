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
      <div className={`w-full   text-center transition-opacity transition-transform duration-700 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>

        <div className="mt-2 text-justify" style={{ maxWidth: "var(--max-width)" }}>
          <h4>Me - Professionally:</h4>

          <p>With over three decades immersed in IT and technical support, I have cultivated a reputation as a methodical problem-solver and a trusted resource in high-pressure environments. My journey across diverse roles has honed my adaptability, reliability, and resourcefulness. Whether the challenge fits squarely within my expertise or requires that I tread unfamiliar ground, I approach every problem with determination and a solution-oriented mindset, thriving especially when circumstances demand quick thinking and focus. </p>
          <p>My passion extends beyond technical mastery; I believe technology should empower people, not hinder them. I am deeply committed to collaboration and knowledge-sharing, and I am energized by opportunities to help others streamline their workflows. My proficiencies span video and audio editing, system design and integration, hardware and software configuration and troubleshooting, process automation, cloud support and development, just to name a few,  and most recently, software development. I take pride in building audit-ready, business-aligned solutions that are robust, intuitive, and supportive of both teams and individuals.</p>
          <p>When confronted with complex, ambitious, or even frustrating challenges, I rely on persistence, logic, and seasoned experience, striving for outcomes that are as robust as they are user-friendly.</p>

          <h4>Me - Personally: </h4>
          <p>I believe in seeing the best in people and situations, supporting their highest potential whenever I can. Life’s unpredictability can sometimes lead to the opposite of what we expect; in those moments, I seek out the humanity in it rather than dwell on disappointment. To me, unnecessary drama only distracts us immense wonder of life and robs us of precious time.</p>
          <p>For a long time, I thought nothing could be more challenging than golf or relationships—until I took up coding. That journey refreshed my patience and sharpened my perseverance. Software development has become my favorite proving ground: identifying issues, tracing them to their roots, planning and testing solutions, and iterating until resolved. I relish breaking down complex systems into their fundamental components, understanding each part in isolation to better diagnose and repair the whole. It’s the difference between hacking away at a problem and carefully crafting a lasting solution. </p>
          <p>I have an old-school sense of integrity and a firm belief that true understanding comes from grasping concepts at their most basic level, not just memorizing facts. Of all the lessons I’ve learned and forgotten, the ones most essential for navigating life have remained surprisingly consistent: from the book title, “Everything I Needed to Know, I Learned in Kindergarten”—and every line in “The Sunscreen Song.”</p>

        </div>
        <h2 className="text-justify">Foundational Experience:</h2>
        <p className="text-justify">A strong foundation should elevate vision, aspirations, and innovation—not constrain them. Infrastructure must be built to support ambition, not force ambition to conform to limitations. That’s why I design every system with <strong>scalability</strong> and <strong>adaptability</strong> at its core.</p>
        <p className="text-justify">Click the button below to go back to the top, then select a pillar to find out how that experience works in union with the others to the successful achievement of business objectives.</p>
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