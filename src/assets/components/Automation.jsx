import React, { useEffect, useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Automation = ({ selected }) => {
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
      <h1>Automation</h1>
      <p className="mt-2 mb-[15vh] text-justify" style={{ maxWidth: "var(--max-width)" }}>
        <h2>Business Process Automation</h2>
        <p>Technology should simplify work, not complicate it. Throughout my career, I have been the go-to problem solver, ensuring that processes are optimized, systems are intuitive, and businesses operate with efficiency.</p>
        <h2>History in Automation</h2>
        <p>From the moment I joined Freudenberg Medical as Master Data Migration Manager I was part of the SAP implementation team, and our project was integrating SAP at all their sites, each site having unique requirements and challenges. Early on I gained a reputation as being helpful and knowledgeable as I assisted stakeholders with the nuances of making their data fit the SAP template.</p>
        <p>When I later co-founded their PMO, I had become the trusted resource for over 1,200 users seeking "out-of-catalog" assistance in Software configuration. As Cloud Specialist, I implemented solutions in automation that streamlined workflows and reduced inefficiencies across the organization.</p>
        <p>SAP implementations are high-stakes, with costs second only to the risk of a failed rollout. To mitigate this, I worked exclusively within the corporate tech stack, leveraging Microsoft products under their E5 license to ensure long-term scalability and security. Every site continues to operate successfully, reinforcing the value of automation-driven efficiency.</p>
        <h2>Automated Processes Using Microsoft Power Platform</h2>
        <p><em>Systems developed that cut unnecessary steps, saved time, and improved accuracy for key business functions:</em></p>
        <ul style={{ listStyleType: "none", textAlign: "justify" }}>
          <li>- <strong>HR New Employee Onboarding</strong> → Streamlined employee setup for a seamless transition.</li>
          <li>- <strong>HSE Good Catch Site Reporting</strong> → Automated risk logging and notifications for safety managers.</li>
          <li>- <strong>Project Management Metrics</strong> → Generated performance tracking dashboards for leadership.</li>
          <li>- <strong>GROWTTH Kaizen Certification Metrics</strong> → Centralized progress tracking for continuous improvement.</li>
          <li>- <strong>CPIM PMO Metric Presentations</strong> → Created automated reporting pipelines for executive visibility.</li>
          <li>- <strong>Client Access for Product Development</strong> → Designed secure portals to enhance customer collaboration.</li>
        </ul>
      </p>
      <button
        onClick={scrollToTop}
        className="button"
      >
        Back to Top
      </button>
    </div>

  );
};

export default Automation;