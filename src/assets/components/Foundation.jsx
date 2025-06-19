import React, { useEffect, useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Foundation = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (selected) {
      timer = setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className={`flex flex-col items-center w-full transition-opacity transition-transform duration-700 ease-in-out
      ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
      <h1>Foundation</h1>
      <div className="mt-2 mb-[15vh] text-justify" style={{ maxWidth: "var(--max-width)" }}>
        <h4>The Core of My Work</h4>
        <p>Throughout my career, my focus has been aligning technology with evolving business needs—building systems that enhance efficiency, reliability, and adaptability through LEAN principles, integration, and iterative refinement.</p>
        <p>For nearly a decade, I delivered global solutions by supporting tools I didn’t always use firsthand, yet deeply understood. Whether reconfiguring routers, designing converters, or engineering facility infrastructure, I found that the true leverage of technology lay not just in its deployment, but in its ability to be reshaped as a solution.</p>
        <p>This realization—amplified during SAP implementations—led me to pursue Software development more deeply. Now, I work across frontend and backend technologies, with a Foundation in HTML, CSS, and JavaScript, proficiency in Python, Django, Node.js, Express, and React, and experience with PostgreSQL and MongoDB for database management.</p>
        <p>Deployment is just as crucial as development, and my expertise with GitHub, Heroku, and Netlify has refined my ability to manage, host, and iterate projects effectively.</p>

        <h4>The Principles That Drive My Work</h4>
        <p>Success isn’t accidental—it’s a product of theory, practice, and principle working in unison. Whether in Software, infrastructure, or project management, I apply a mindset rooted in efficiency, precision, and continuous refinement.</p>
        <p>There are no shortcuts, no easier ways—only meticulous planning, strategic execution, and a commitment to excellence at every stage.</p>

        <h4>Bringing It All Together</h4>

        <p>Each discipline strengthens the others:</p>
        <ul>
          <li>Software development creates and refines solutions.</li>
          <li>Project management ensures direction and efficiency.</li>
          <li>Process Automation drives optimization and prepares for future initiatives.</li>
          <li>Together, these elements form a continuous cycle of improvement, ensuring that the systems I build aren’t just functional—but timeless, scalable, and crafted with intent.</li>
        </ul>

      </div>
      <button
        onClick={scrollToTop}
        className="button mt-[-5vh]"
      >
        Back to Top
      </button>

    </div>
  );
};

export default Foundation;