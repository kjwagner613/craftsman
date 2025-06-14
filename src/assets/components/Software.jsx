import React, { useEffect, useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Software = ({ selected }) => {
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
      <h1>Software</h1>
      <p className="mt-5 mb-[15vh] text-justify" style={{ maxWidth: "var(--max-width)" }}>
        Software development is a natural evolution of my career—a way to solve problems, refine systems, and empower people through technology. Years spent supporting businesses, managing projects, and automating workflows have reinforced one truth: code is more than syntax—it’s the bridge between vision and execution. Regardless of the platform or industry, Software drives transformation, scales solutions, and turns ideas into reality.
        My experience has honed the ability to balance precision with adaptability, ensuring projects meet deadlines, deliver value, and optimize performance. But beyond efficiency, I believe in craftsmanship—writing code with clarity, consideration, and patience, always keeping the end goal in mind.
        Technology should serve people, not complicate their work. My approach prioritizes function, elegance, and purpose—building systems that don’t just work, but work well.
      </p>

      <h2 className="underline"> Applications in Development</h2>
      <section className="text-justify" style={{ maxWidth: "var(--max-width)" }}>
        <ol>
          <li>
            <div className="body-container">
              <p className="proj-titles"><strong>Nursery Resource Demo</strong></p>
              <p className="project-brief" style={{ maxWidth: "var(--max-width)" }}>Developed for a local commercial nursery on speculation. Intended to be the 1st phase with product inventory, business information and client registry with a 2nd phase including a social networking enhancement allowing their clients to collaborate on care, horticulture, projects, issues, and linking in experts as clients require.</p>
              <p className="built-with">Built with the following:</p>
              <p className="technology-used">React client, Express and Node.js backend. JWT authentication, Tailwind, MongoDB, JavaScript, and HTML/CSS.</p>
              <p className="project-link"><a href="https://demo-nursery-site.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Netlify</a> | <a
                  href="https://github.com/kjwagner613/newNursery" target="_blank" rel="noopener">GitHub Repo (client and backend)</a>
              </p>
            </div>
          </li>
        </ol>
      </section>
      <h2 className="underline">Developed Applications</h2>
      <section className="text-justify" style={{ maxWidth: "var(--max-width)" }}>
        <p>You may create your own credentials for any of the below, or you may use "test" for login and
          password to tour them. Except the first two, please use "test@test.com" for username and "test" for password for the Nursery Demo app and
          for the "Champion - My Life Wellness app use "tour" for the user name and "Passw0rd!" </p>
        <h3> <em> If you would like any developed for your use, please let me know.</em></h3>

        <ol>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>Nursery Resource Demo</strong></p>
              <p className="project-brief" style={{ maxWidth: "var(--max-width)" }}>Developed for a local commercial nursery on speculation. Intended to be the 1st phase with product inventory, business information and client registry with a 2nd phase including a social networking enhancement allowing their clients to collaborate on care, horticulture, projects, issues, and linking in experts as clients require.</p>
              <p className="built-with">Built with the following:</p>
              <p className="technology-used">React client, Express and Node.js backend. JWT authentication, Tailwind, MongoDB, JavaScript, and HTML/CSS.</p>
              <p className="project-link"><a href="https://demo-nursery-site.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Netlify</a> | <a
                  href="https://github.com/kjwagner613/newNursery" target="_blank" rel="noopener">GitHub Repo (client and backend)</a>
              </p>
            </div>
          </li>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>Champion - MyLife Wellness Organizer</strong></p>
              <p className="project-brief">Share the burden of designing and maintaining a healthy plan with your loved
                ones.</p>
              <p className="built-with">Built with the following:</p>
              <p className="technology-used">Python, Django, PostgreSQL, HTML/CSS, Bootstrap, Heroku, Whitenoise (to
                serve
                static files)</p>
              <p className="project-link"><a href="https://lifeplan-69c616f99dcc.herokuapp.com/" target="_blank"
                rel="noopener noreferrer">Live App on Heroku</a> | <a
                  href="https://github.com/kjwagner613/MyPlanForLife" target="_blank" rel="noopener">GitHub Repo</a>
              </p>
            </div>
          </li>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>ToDo - A Task List</strong></p>
              <p className="project-brief">Just an easy-to-use task list where you can create tasks quickly, then come
                back to them at a more convenient time to add additional information. It is a front-end REACT
                interface paired with a backend Node.js with an API connection to the Mongo Atlas DB.</p>
              <p className="built-with">Built with the following:</p>
              <p className="technology-used">Netlify for the Frontend - Heroku for the Backend, React, Vite, Node.js,
                Express, MongoDB, HTML/CSS, JavaScript, EJS</p>
              <p className="project-link"><a href="https://kjs-todo-list.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Netlify - Frontend</a> | <a
                  href="https://github.com/kjwagner613/ToDo-List-Frontend" target="_blank" rel="noopener">GitHub
                  Repo Frontend</a> | <a href="https://github.com/kjwagner613/ToDo-List-Backend" target="_blank"
                    rel="noopener">GitHub Repo Backend</a></p>
            </div>
          </li>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>Community Cookbook</strong></p>
              <p className="project-brief">Share your recipes with a community that you select. You can create and keep
                track of your inventory of ingredients, share your recipes with family and friends if you choose,
                and
                if you really trust them, you can even collaborate on recipes together.</p>
              <p className="project-link"><a href="https://wagner-cookbook-944b51777ea1.herokuapp.com/" target="_blank"
                rel="noopener noreferrer">Live App on Heroku </a> | <a
                  href="https://github.com/kjwagner613/wagners-cookbook" target="_blank" rel="noopener">Wagner's
                  Cookbook GitHub Repo</a></p>
            </div>
          </li>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>HSE Good Catch Tracker</strong></p>
              <p className="project-brief">Intended for Health, Safety, and Environmental risk mitigation, employees can
                quickly log any hazards they come across during their day in a system that can notify their safety
                manager, help plan the corrective action, and provide quarterly performance reports.</p>
              <p className="built-with">Built with the following:</p>
              <p className="technology-used">Node.js, Express, MongoDB, EJS Templates, bcrypt for password hashing,
                express-session session management, CSRF for CSRF protection, dotenv, method-override</p>
              <p className="project-link"><a href="https://hse-goodcatch-tracker-a52f04b138c7.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">Live App to Heroku</a> | <a
                  href="https://github.com/kjwagner613/hse-goodcatch-v4" target="_blank" rel="noopener">GitHub Repo
                  For HSE Good Catch</a></p>
            </div>
          </li>
          <li>
            <div className="body-container" style={{ maxWidth: "var(--max-width)" }}>
              <p className="proj-titles"><strong>The Concentration Game</strong></p>
              <p className="project-brief">A fun memory concentration game with vibrant artistry and an engaging theme.
                See if you can identify the three animals that come across your path, then pick them out of a
                collection of all of them. Sounds easy, I know, but I promise you, it is not. Just don't blink at
                the
                wrong time..</p>
              <p className="project-link"><a href="https://kjwagner613.github.io/Concentration-Game/" target="_blank"
                rel="noopener noreferrer">Live Game at GitHub Pages</a> | <a
                  href="https://github.com/kjwagner613/Concentration-Game" target="_blank" rel="noopener">GitHub
                  Repository for Concentration Game</a></p>
            </div>
          </li>
        </ol>
      </section>
      <button
        onClick={scrollToTop}
        className="button"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Software;