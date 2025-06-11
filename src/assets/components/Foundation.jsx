import React from 'react';

const Foundation = (props) => {
  return (
    <div className='container'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>
        Throughout my career, my focus has been aligning technology with evolving business needs—building systems that enhance efficiency, reliability, and adaptability through LEAN principles, integration, and iterative refinement.
      </p>
      <p>
        For nearly a decade, I delivered global solutions by supporting tools I didn’t always use firsthand, yet deeply understood. Whether reconfiguring routers, designing converters, or engineering facility infrastructure, I found that the true leverage of technology lay not just in its deployment, but in its ability to be reshaped as a solution.
      </p>
      <p>
        This realization—amplified during SAP implementations—led me to pursue software development more deeply. Now, I work across frontend and backend technologies, with a foundation in HTML, CSS, and JavaScript, proficiency in Python, Django, Node.js, Express, and React, and experience with PostgreSQL and MongoDB for database management.
      </p>
      <p>
        Deployment is just as crucial as development, and my expertise with GitHub, Heroku, and Netlify has refined my ability to manage, host, and iterate projects effectively.
      </p>
      <h2>The Principles That Drive My Work</h2>
      <p>
        Success isn’t accidental—it’s a product of theory, practice, and principle working in unison. Whether in software, infrastructure, or project management, I apply a mindset rooted in efficiency, precision, and continuous refinement.
        There are no shortcuts, no easier ways—only meticulous planning, strategic execution, and a commitment to excellence at every stage.
      </p>
      <h2>Bringing It All Together</h2>
      <p>
        Each discipline I’ve mastered strengthens the others:
      </p>
      <ul className="list-disc ml-6">
        <li>Software development creates and refines solutions.</li>
        <li>Project management ensures direction and efficiency.</li>
        <li>Process automation drives optimization and prepares for future initiatives.</li>
      </ul>
      <p>
        Together, these elements form a continuous cycle of improvement, ensuring that the systems I build aren’t just functional—but timeless, scalable, and crafted with intent.
      </p>
    </div>
  );
};

export default Foundation;