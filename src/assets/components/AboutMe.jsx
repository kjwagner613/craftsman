import { motion } from 'framer-motion';
import { layout, grids, typography, combineClasses, components, commonStyles } from '../../utils';



const AboutMe = ({ setSelectedSection }) => {
  const handleClick = () => setSelectedSection('Header');

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className={layout.centerColumn}
    >
      <div className={`${commonStyles.container} text-center`}>
        <div className={combineClasses("mb-8", layout.centerColumn)}>

          <div className={components.picBlock}>


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
            “The sky’s the limit” is where I prefer to begin. I’ve always encouraged those I supported to be creative beyond reason. Start there—and let’s see if I can lay the foundations needed to build and sustain it. The gap between imagination and reality is shrinking. We’ve come a long way from Quadra 950s powered by 33MHz Motorola chips.
            That same drive still pushes me—to provide, to deliver, no matter the obstacle. Anything worth achieving takes time, focused persistence, and maybe a little sacrifice. And that’s exactly what makes the light on the other side of effort, past exhaustion, so bright.

          </div>
          <h1 className="leading-[2]">Hello, I'm Kevin Wagner<br />
            Methodical Problem-Solver<br />Systems Optimizer<br />Technologist<br />Developer.</h1>
          <div
            className="text-justify w-[90vw] max-w-[900px] "
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
              <p className="font-[var(--font-main)] text-center whitespace-nowrap ">Look beyond requirements &rarr; to history.</p>
              <p className="font-[var(--font-main)] text-center">The experiences that shaped the need.</p>
              <p className="font-[var(--font-main)] text-center">Always with the end goal in mind.</p>
            </div>
          </div>
          <div className="" style={{ fontFamily: "var(--font-secondary)", fontSize: "2.5rem" }}>
            <br /> Craftsmanship.
          </div>
          <div className="mb-[2rem]" style={{ fontFamily: "var(--font-main)", fontSize: "1.5rem" }}><br />You will never know what you can achieve, unless you try.<br /></div>



          <button
            onClick={handleClick}>
            Click here for my portfolio
          </button>
          <p className="">You can navigate this portfolio by clicking the columns on the structure on the next page, or the NavBar up top. Please send me a message if there is anything you would like me to expand on. Thank you for your time.</p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutMe;