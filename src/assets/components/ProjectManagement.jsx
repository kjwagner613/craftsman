import React, { useEffect, useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ProjectManagement = ({ selected }) => {
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
    <>
      <div className={`flex flex-col items-center w-4/5 transition-opacity transition-transform duration-700 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
        <h1>Project Management</h1>
        <div className="mt-5 mb-[5vh] text-justify" style={{ maxWidth: "var(--max-width)" }}>
          <h2>Project Management & Software Development</h2>
          <p>Project management is the bridge between vision and execution, integrating people, processes, and technology to achieve a shared objective. Having worked alongside top industry professionals, I’ve learned that no two projects are alike—each requires agility, strategic planning, and proactive risk mitigation to ensure successful outcomes.</p>

          <h2>Software Development & Project Management Alignment</h2>
          <p>While some view planning in Software development as a formality, I see the Software Development Life Cycle (SDLC) as an iterative, milestone-driven process, closely aligned with project management.</p>
          <p>In highly regulated industries, I’ve structured SDLC phases to reflect tangible project milestones:</p>
          <ul style={{ lineHeight: 2, textAlign: "justify", fontFamily: "var(--font-main)", fontSize: "var(--font-size-small)" }}>
            <li>
              <span style={{ whiteSpace: "nowrap" }}>
                Requirements &rarr; Stakeholder Alignment
              </span>
            </li>
            <li>
              <span style={{ whiteSpace: "nowrap" }}>
                Development &rarr; Team Execution
              </span>
            </li>
            <li>
              <span style={{ whiteSpace: "nowrap" }}>
                Testing &rarr; Risk Mitigation
              </span>
            </li>
            <li>
              <span style={{ whiteSpace: "nowrap" }}>
                Deployment &rarr; Delivery &amp; Implementation
              </span>
            </li>
            <li>
              <span style={{ whiteSpace: "nowrap" }}>
                Maintenance &rarr; Long-Term Optimization
              </span>
            </li>
          </ul>
          <p>Software development isn’t just about writing code—it’s about managing teams, resources, and evolving progress in harmony.</p>
          <h2>History in Project Management</h2>
          <p>My journey into project management began in 1996 at Electric Entertainment, where I led a high-stakes emergency relocation requiring the entire company to move between the close of business Friday and reopening Monday. I handled systems engineering, infrastructure design, installation, scheduling, budgeting, and resource allocation, ensuring seamless continuity. This experience reinforced a key truth: effective project management depends on continuous stakeholder communication.</p>

          <p>Since then, I’ve led major infrastructure projects, including:</p>
          <ul style={{ lineHeight: 2, textAlign: "justify", fontFamily: "var(--font-main)", fontSize: "var(--font-size-small)" }}>
            <li>NBC Burbank: KNBC Post-Production facility upgrade ($1.5M)</li>
            <li>Cimarron Bacon Obirien: AVID non-linear editing conversion ($1M)</li>
            <li>Storm Studios: Online broadcast asset distribution</li>
          </ul>
          <p>Additionally, I pursued PMI training & certification (PMBOK v5, 2015-2016) to further refine my project management expertise.</p>
          <p>At Freudenberg Medical, I expanded my project management scope:</p>
          <ul style={{ lineHeight: 2, textAlign: "justify", fontFamily: "var(--font-main)", fontSize: "var(--font-size-small)" }}>
            <li>Created PMO for the newly projectized CPIM department.</li>
            <li>Developed custom SharePoint PM tools & trained new PMs using Microsoft Power Platform.</li>
            <li>Managed up to 7 concurrent medium to large IT projects at a time.</li>
            <li>Led the cloud migration across 6 global sites.</li>
            <li>Oversaw Microsoft Copilot rollout, ensuring smooth adoption across the organization.</li>
          </ul>
        </div>
        <button
          onClick={scrollToTop}
          className="button mt-[-4vh]"
        >
          Back to Top
        </button>
      </div>
    </>
  );
};

export default ProjectManagement;