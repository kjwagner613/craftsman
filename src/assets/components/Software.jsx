import React, { useEffect, useState } from 'react';
import { commonStyles, typography, combineClasses } from '../../utils';



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
    <div className={`flex flex-col items-center transition-opacity transition-transform duration-700 ease-in-out 
      ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
      <h1>Software Development</h1>
      <p className="mt-5 text-justify w-[90vw] max-w-[1000px] ">
        Software development is a natural evolution of my career—a way to solve problems, refine systems, and empower people through technology. Years spent supporting businesses, managing projects, and automating workflows have reinforced one truth: code is more than syntax—it’s the bridge between vision and execution. Regardless of the platform or industry, Software drives transformation, scales solutions, and turns ideas into reality.</p>
      <p className="mt-5 text-justify w-[90vw] max-w-[1000px] ">My experience has honed the ability to balance precision with adaptability, ensuring projects meet deadlines, deliver value, and optimize performance. But beyond efficiency, I believe in craftsmanship—writing code with clarity, consideration, and patience, always keeping the end goal in mind.</p>
      <p className="mt-5 mb-[5vh] text-justify w-[90vw] max-w-[1000px] ">Technology should serve people, not complicate their work. My approach emphasizes function, elegance, and purpose—building systems that don’t just work, but work well. That mindset proved essential during an SAP implementation across multiple sites from California to China. I developed interim solutions to bridge the gap between the customized SAP template and day-to-day operational needs. These “temporary tools” were meant to sunset once SAP delivered equivalent features—but even years later, many remained in active use, valued for their simplicity and alignment with real-world workflows.</p>

      <h2 className="underline">Coding Experience</h2>
      <section className="langList">
        <div className={commonStyles.containerCard}>
          <p className={typography.projTitle}>Languages and Technologies</p>
          <p className={typography.projBrief}>I am experienced in a wide range of programming languages and technologies, which I have used in various projects. Below is a list of some of the languages and technologies I am proficient in:</p>
        </div>
        <div className={commonStyles.container}>
          <ul className={combineClasses(typography.fieldLabel, "grid grid-cols-3 gap-x-8 gap-y-1 pl-5 list-none text-gray-700 text-base")}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Django</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Azure</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>CSS-in-JS</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>Agile Methodologies</li>
            <li>Test-Driven Development (TDD)</li>
            <li>Continuous Integration/<br />Continuous Deployment (CI/CD)</li>
          </ul>
        </div>
      </section>

      <h2 className="underline"> Applications in Development</h2>
      <section className="text-justify">
        <ol>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>Enhanced Task List</strong></p>
              <p className={typography.projBrief}>An improved task list application with enhanced features for better user experience, inlucding additional fields, updated user interface and critical task notification.</p>
              <p className={typography.projBuiltWith}>Built with the following:</p>
              <p className={typography.projTech}>Netlify for the Frontend - Heroku for the Backend, now migrated to Azure, React, Vite, Node.js,
                Express, MongoDB, HTML/CSS, JavaScript, EJS</p>
              <p className={typography.projLink}><a href="https://kjwactivetaskmanager.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Azure - Client</a> | <a
                  href="https://github.com/kjwagner613/myKJWtaskList" target="_blank" rel="noopener">GitHub
                  Repo Client and Server</a></p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>DAG Form Field Inheritance Interface</strong></p>
              <p className={typography.projBrief}>Initally developed as a React-based coding challenge solution for an application to Avantos, this project implements a simplified interface for managing field prefill logic across a Directed Acyclic Graph (DAG) of forms. It focuses on modular architecture, clean UX, and extensibility by design.</p>
              <p className={typography.projBuiltWith}><em>Built with the following technology and Features:</em></p>
              <p className={typography.projTech}>React client, Express, Node.js, Form Graph Rendering, Dynamic Source Picker, Inline Transform Options, Test Runner, Pluggalbe Architecture, TypeScript, and HTML/CSS.</p>
              <p className={typography.projFurtherDev}><em>Continued Development:</em></p>
              <p className="further-dev-inprogress">Further development to truncate connections to make them dynamically configurable for either internal testing or API connection to any DAG form service.</p>
              <p className="project-link">
                <a href="https://dag-form-field-interface.netlify.app/" target="_blank"
                  rel="noopener noreferrer">Live App on Netlify</a> |
                <a
                  href="https://github.com/kjwagner613/field-trip" target="_blank" rel="noopener">GitHub Repo</a>
              </p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>Nursery Resource Demo</strong></p>
              <p className={typography.projBrief}>Developed for a local commercial nursery on speculation. Intended to be the 1st phase with product inventory, business information and client registry with a 2nd phase including a social networking enhancement allowing their clients to collaborate on care, horticulture, projects, issues, and linking in experts as clients require.</p>
              <p className={typography.projBuiltWith}>Built with the following:</p>
              <p className={typography.projTech}>React client, Express and Node.js backend. JWT authentication, Tailwind, MongoDB, JavaScript, and HTML/CSS.</p>
              <p className={typography.projLink}><a href="https://demo-nursery-site.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Netlify</a> | <a
                  href="https://github.com/kjwagner613/newNursery" target="_blank" rel="noopener">GitHub Repo (client and backend)</a>
              </p>
            </div>
          </li>
        </ol>
      </section>
      <h2 className="underline">Developed Applications</h2>
      <section className={commonStyles.containerCard}>
        <p>You may create your own credentials for any of the below, or you may use "test" for login and
          password to tour them. Except the first two, please use "test@test.com" for username and "test" for password for the Nursery Demo app and
          for the "Champion - My Life Wellness app use "tour" for the user name and "Passw0rd!" </p>
        <h3> <em> If you would like any developed for your use, please let me know.</em></h3>

        <ol>

          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>Champion - MyLife Wellness Organizer</strong></p>
              <p className={typography.projBrief}>Share the burden of designing and maintaining a healthy plan with your loved
                ones.</p>
              <p className={typography.projBuiltWith}>Built with the following:</p>
              <p className={typography.projTech}>Python, Django, PostgreSQL, HTML/CSS, Bootstrap, Heroku, Whitenoise (used to serve static files directly from the Python backend)</p>
              <p className={typography.projLink}><a href="https://lifeplan-69c616f99dcc.herokuapp.com/" target="_blank"
                rel="noopener noreferrer">Live App on Heroku</a> | <a
                  href="https://github.com/kjwagner613/MyPlanForLife" target="_blank" rel="noopener">GitHub Repo</a>
              </p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>ToDo - A Task List</strong></p>
              <p className={typography.projBrief}>Just an easy-to-use task list where you can create tasks quickly, then come
                back to them at a more convenient time to add additional information. It is a front-end REACT
                interface paired with a backend Node.js with an API connection to the Mongo Atlas DB.</p>
              <p className={typography.projBuiltWith}>Built with the following:</p>
              <p className={typography.projTech}>Netlify for the Frontend - Heroku for the Backend, React, Vite, Node.js,
                Express, MongoDB, HTML/CSS, JavaScript, EJS</p>
              <p className={typography.projLink}><a href="https://kjs-todo-list.netlify.app/" target="_blank"
                rel="noopener noreferrer">Live App on Netlify - Frontend</a> | <a
                  href="https://github.com/kjwagner613/ToDo-List-Frontend" target="_blank" rel="noopener">GitHub
                  Repo Frontend</a> | <a href="https://github.com/kjwagner613/ToDo-List-Backend" target="_blank"
                    rel="noopener">GitHub Repo Backend</a></p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>Community Cookbook</strong></p>
              <p className={typography.projBrief}>Share your recipes with a community that you select. You can create and keep
                track of your inventory of ingredients, share your recipes with family and friends if you choose,
                and
                if you really trust them, you can even collaborate on recipes together.</p>
              <p className={typography.projLink}><a className="Link-wrapper" href="https://community-cookbook.azurewebsites.net/" target="_blank"
                rel="noopener noreferrer">Live App on Azure </a> | <a
                  href="https://github.com/kjwagner613/wagners-cookbook" target="_blank" rel="noopener">Wagner's
                  Cookbook GitHub Repo</a></p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>HSE Good Catch Tracker</strong></p>
              <p className={typography.projBrief}>Intended for Health, Safety, and Environmental risk mitigation, employees can
                quickly log any hazards they come across during their day in a system that can notify their safety
                manager, help plan the corrective action, and provide quarterly performance reports.</p>
              <p className={typography.projBuiltWith}>Built with the following:</p>
              <p className={typography.projTech}>Node.js, Express, MongoDB, EJS Templates, bcrypt for password hashing,
                express-session session management, CSRF for CSRF protection, dotenv, method-override</p>
              <p className={typography.projLink}><a href="https://hse-goodcatch-tracker-a52f04b138c7.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">Live App to Heroku</a> | <a
                  href="https://github.com/kjwagner613/hse-goodcatch-v4" target="_blank" rel="noopener">GitHub Repo
                  For HSE Good Catch</a></p>
            </div>
          </li>
          <li>
            <div className={commonStyles.containerCard}>
              <p className={typography.projTitle}><strong>The Concentration Game</strong></p>
              <p className={typography.projBrief}>A fun memory concentration game with vibrant artistry and an engaging theme.
                See if you can identify the three animals that come across your path, then pick them out of a
                collection of all of them. Sounds easy, I know, but I promise you, it is not. Just don't blink at
                the
                wrong time..</p>
              <p className={typography.projLink}><a href="https://kjwagner613.github.io/Concentration-Game/" target="_blank"
                rel="noopener noreferrer">Live Game at GitHub Pages</a> | <a
                  href="https://github.com/kjwagner613/Concentration-Game" target="_blank" rel="noopener">GitHub
                  Repository for Concentration Game</a></p>
            </div>
          </li>
        </ol>
      </section>
      <button
        onClick={scrollToTop}
        className="button mt-[5vh]"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Software;