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
      className="flex items-center justify-center"
    >
      <div className="w-full px-4 text-center" style={{ maxWidth: "var(--max-width)" }}>
        <div className="picblock flex column items-center justify-center">
          <picture>
            <source
              srcSet="/castlebadge-100-wBevel.png"
              media="(max-width: 700px)"
              type="image/png"
            />
            <source
              srcSet="/castlebadge-200-wBevel.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/castlebadge-300-wBevel.png"
              alt="Castle in a cloud badge illustration"
              className="" style={{ transform: "scale(0.8)", marginTop: "1rem" }}
            />
          </picture>
          <picture>
            <source
              srcSet="/kw-BevelPic-100.png"
              media="(max-width: 700px)"
              type="image/png"
            />
            <source
              srcSet="/kw-BevelPic-200.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/kw-BevelPic-300.png"
              alt="Portrait of Kevin Wagner"
              className="" style={{ transform: "scale(0.95)", marginLeft: "2.2rem" }}
            />
          </picture>
          <picture>
            <source
              srcSet="/logo-kw-100-matt.png"
              media="(max-width: 700px)"
              type="image/png"
            />
            <source
              srcSet="/logo-kw-200-matt.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/logo-kw-300-matt.png"
              alt="KW and JS logo"
              className="transform scale-120" style={{ marginLeft: "3rem", marginTop: "1.5rem" }}
              onError={(e) => { e.target.onerror = null; e.target.src = "/onlyMe.png"; }}
            />
          </picture></div>
        <h1 className="text-justify">“If you have built castles in the air, your work need not be lost; that is where they should be.
          Now put the foundations under them.”</h1>
        <h1 className="text-justify">
          ― Henry David Thoreau</h1>
        <br /><br />

        <div
          className="text-justify"
          style={{
            fontSize: "1.2rem",
            fontFamily: "var(--font-main)",
            lineHeight: 1.6
          }}
        >
          This quote resonates deeply with me because I believe in starting with possibility. Instead of asking, "What can I build within these constraints?", I ask, "What is the best solution here?" From there, I examine boundaries, explore feasibility, and refine. Through <strong>iterative design</strong> we will achieve results that can far exceed expectations.
        </div>
        <h1 className="">Hello, I'm Kevin </h1>
        <div
          className="text-justify"
          style={{
            fontSize: "1.2rem",
            fontFamily: "var(--font-main)",
            lineHeight: 1.6
          }}
        >It’s all about reaching beyond the standard, testing the limits of what is accepted, continually challenging yourself. <strong>Excellence through continual improvement. — <span>&nbsp;</span>
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
              <p className="text-center">Look beyond requirements, to history.</p>
              <p className="text-center">The experiences that shaped the need.</p>
              <p className="text-center">Always with the end goal in mind.</p>
            </span>
          </strong></div>
        <h1>Craftmanship.</h1>
        <p className="text-left">After all, you can always scale back.</p>
        <button
          onClick={handleClick}
          className="mt-[2rem] px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded transition-all duration-500"
        >
          Click here for my portfolio
        </button>
      </div>
    </motion.div>
  );
};

export default AboutMe;