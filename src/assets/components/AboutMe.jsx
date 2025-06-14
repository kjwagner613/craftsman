import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ setSelectedSection }) => {
  const handleClick = () => setSelectedSection('header');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fitems-center justify-center"
    >
      <div className="w-full mx-auto px-4 text-center" style={{ maxWidth: "var(--max-width)" }}>
        <picture>
          <source
            srcSet="/meandcastle-small.png"
            media="(max-width: 900px)"
            type="image/png"
          />
          <img
            src="/meandcastle.png"
            alt="Pic of me and Castle on a Cloud"
            className="mb-8 transform scale-100 sm:scale-75 md:scale-50"
          />
        </picture>
        <h1 className="">Hello, I'm Kevin Wagner</h1>
        <h1 className="text-center">First, just a little about me</h1>
        <div className="mt-2 text-justify" style={{ maxWidth: "var(--max-width)" }}>
          <h4>Professionally:</h4>

          <p>I'm a methodical problem-solver, passionate about tech, Software development, and optimizing workflows. Over the past 30 years, I’ve built a reputation for resourcefulness, clarity in troubleshooting, and a strong focus on scalable solutions. Whether refining backend architecture, troubleshooting cross-platform compatibility, or designing user-friendly interfaces, I thrive on finding efficient, reliable answers.</p>
          <p>Beyond technical expertise, I value collaboration and knowledge-sharing. I enjoy helping others streamline their environments, ensuring that tech works for people—not against them. My work spans full-stack development, network configurations, cloud integration, and Automation, and I take pride in creating audit-proof, business-aligned solutions that empower both teams and individuals.</p>
          <p>Outside of code and configurations, I approach challenges with persistence and logic, always striving for structured, user-focused outcomes. If you're working on something ambitious, complex, or just frustrating, I’m the kind of person who finds a way to make it work—and make it make sense.</p>

          <h4>Personally: </h4>
          <p>I do my best to see the best version of people and situations—and support that realization. The comedy of life is that sometimes the opposite unfolds, and when it does, I try to find humor in it rather than disappointment. I believe the drama between us is just a distraction, clouding our vision to the immense gift of it all.</p>
          <p>I used to think golf and relationships would always be the most frustrating challenges in life—until I decided to learn to code. That taught me an entirely new definition of frustration. 😆 Still, I push forward, knowing that learning, breaking things down, and understanding each component at its core matters more than just recalling an expected outcome.</p>
          <p>I'm loyal, and I guess I have an old-school sense of right. I believe that true learning comes not just from knowing what something does, but understanding why it does. And finally—they say everything we need to know, we learned in kindergarten. I say kindergarten—and the sunscreen song.</p>

        </div>

        <button
          onClick={handleClick}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded transition-all duration-500"
        >
          Click here for my portfolio
        </button>
      </div>
    </motion.div>
  );
};

export default AboutMe;