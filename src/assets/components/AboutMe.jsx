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
              srcSet="/castlebadge-xs.png"
              media="(max-width: 750px)"
              type="image/png"
            />
            <source
              srcSet="/castlebadge-sm.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/castlebadge.png"
              alt="Castle in a cloud badge illustration"
              className="transform scale-90 " style={{ marginTop: "1rem" }}
            />
          </picture>
          <picture>
            <source
              srcSet="/onlyMe-xs.png"
              media="(max-width: 750px)"
              type="image/png"
            />
            <source
              srcSet="/onlyMe-sm.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/onlyMe.png"
              alt="Portrait of Kevin Wagner"
              className="transform scale-90" style={{ marginLeft: "2.2rem" }}
            />
          </picture>
          <picture>
            <source
              srcSet="/KWandJS-xs.png"
              media="(max-width: 750px)"
              type="image/png"
            />
            <source
              srcSet="/KWandJS-sm.png"
              media="(max-width: 1000px)"
              type="image/png"
            />
            <img
              src="/KWandJS.png"
              alt="KW and JS logo"
              className="transform scale-100" style={{ marginLeft: "2rem", marginTop: "1.5rem" }}
              onError={(e) => { e.target.onerror = null; e.target.src = "/onlyMe.png"; }}
            />
          </picture></div>
        <h1 className="text-justify">“If you have built castles in the air, your work need not be lost; that is where they should be.
          Now put the foundations under them.”</h1>
        <h1 className="text-justify">
          ― Henry David Thoreau</h1>
        <br /><br />

        <p className="text-justify">This quote resonates deeply with me because I believe in starting with possibility. Instead of asking, "What can I build within these constraints?", I ask, "What is the best solution here?" From there, I examine boundaries, explore feasibility, and refine. Through <strong>iterative design</strong> we will achieve results that can far exceed expectations.</p>
        <h1 className="">Hello, I'm Kevin </h1>
        <p className="text-justify">
          It’s all about reaching beyond the standard, testing the limits of what’s possible, learning from every challenge, and <strong>charging forward toward excellence — <span>&nbsp;</span>
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
              beyond the requirements. More than just what's expected.
            </span>
          </strong></p>
        <p>Crafting the parameters you live by.
        </p>
        <p className="text-left">After all, you can always scale back</p>


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