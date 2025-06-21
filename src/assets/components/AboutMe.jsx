import { motion } from 'framer-motion';

const AboutMe = ({ setSelectedSection }) => {
  const handleClick = () => setSelectedSection('Header');

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="flex items-center justify-center"
    >
      <div className="w-[90vw] max-w-[1000px] text-center">
        <div className="flex flex-col items-center mb-8">
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
                className="" style={{ marginTop: "3vh", transform: "scale(0.95)", marginLeft: "2.2rem" }}
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
                alt="KW castle on a cloud logo"
                className="transform scale-120" style={{ marginLeft: "3rem", marginTop: "1.5rem" }}
                onError={(e) => { e.target.onerror = null; e.target.src = "/kw-BevelPic-100.png"; }}
              />
            </picture>
          </div>
          {/* Add space below the image block */}
          <div style={{ height: "2rem" }} />
          <h1 className="text-justify">“If you have built castles in the air, your work need not be lost; that is where they should be.
            Now put the foundations under them.”</h1>
          <h1 className="text-justify">
            ― Henry David Thoreau</h1>
          <br /><br />

          <div
            className="text-justify w-[90vw] max-w-[1000px] "
            style={{
              fontSize: "1.2rem",
              fontFamily: "var(--font-main)",
              lineHeight: 1.6,
            }}
          >
            This quote resonates deeply with me, I have always encouraged people to be creative beyond reason. Start with that and let's see if I can put the foundations required for them to go for it. It is less and less now, our capabilities have grown so much.  I still have that thing pushing me to provide and deliver no matter the obstacles. Anything worth achieving takes time, focused persistent effort, and more time.
          </div>
          <h1 className="">Hello, I'm Kevin Wagner</h1>
          <div
            className="text-justify w-[90vw] max-w-[1000px] "
            style={{
              fontSize: "1.2rem",
              fontFamily: "var(--font-main)",
            }}
          ><div className="leading-[3] ">It’s all about reaching beyond the standard, pushing the limits of what you know, getting uncomfortable and challenging yourself. <br></br><strong>Excellence through continuous improvement. — <span>&nbsp;</span></strong></div>
            <span
              style={{
                color: "white",
                fontSize: "1.8em",
                fontWeight: "bold",
                textShadow: `
                  -1px -1px 0 #333,
                  1px -1px 0 #333,
                  -1px 1px 0 #333,
                  1px 1px 0 #333
                `
              }}
            >
            </span>

            <div className="flex flex-col mt-6 leading-[2]">
              <p className="font-[var(--font-main)] text-center whitespace-nowrap ">Look beyond requirements, &rarr; to history.</p>
              <p className="font-[var(--font-main)] text-center">The experiences that shaped the need.</p>
              <p className="font-[var(--font-main)] text-center">Always with the end goal in mind.</p  >
            </div>
          </div>
          <div className="" style={{ fontFamily: "var(--font-secondary)", fontSize: "2.5rem" }}>
            <br /> Craftsmanship.
          </div>
          <div className="text-left " style={{ fontFamily: "var(--font-main)", fontSize: "1.5rem" }}><br />After all, you can always roll it back. <br /></div>



          <button
            onClick={handleClick}
            className="mt-[4rem] px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded transition-all duration-500"
          >
            Click here for my portfolio
          </button>
          <p className="w-[90vw] max-w-[1000px] ">You can navigate this portfolio by clicking the columns on the structure on the next page, or the NavBar up top. Please send me a message if there is anything you would like me to expand on. Thank you for your time.</p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutMe;