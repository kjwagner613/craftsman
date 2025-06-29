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
    <div className="w-full   text-center" style={{ maxWidth: "var(--max-width)" }}>
      <div className="flex flex-col items-center mb-8">
        <h1>Automation</h1>
        <div className="w-[90vw] max-w-[1000px]  text-justify">
          <h2>Business Process Automation</h2>
          <p>Technology should simplify work, not complicate it. Throughout my career, I have been the go-to problem solver, ensuring that processes are optimized, systems are intuitive, and businesses operate with efficiency.</p>
          <h2>History in Automation</h2>
          <p>From the moment I joined Freudenberg Medical as Master Data Migration Manager I was part of the SAP implementation team, and our project was integrating SAP at all their sites, each site having unique requirements and challenges. Early on I gained a reputation as being helpful and knowledgeable as I assisted stakeholders with the nuances of making their data fit the SAP template.</p>
          <p>When I later co-founded their PMO, I had become the trusted resource for over 1,200 users seeking "out-of-catalog" assistance in Software configuration. As Cloud Specialist, I implemented solutions in automation that streamlined workflows and reduced inefficiencies across the organization.</p>
          <p>SAP implementations are high-stakes, with costs second only to the risk of a failed rollout. To mitigate this, I worked exclusively within the corporate tech stack, leveraging Microsoft products under their E5 license to ensure long-term scalability and security. Every site continues to operate successfully, reinforcing the value of automation-driven efficiency.</p>
          <h2>Some of the Processes I have Automated with Microsoft Power Platform</h2>
          <p><em>Systems developed that cut unnecessary steps, saved time, and improved accuracy for key business functions:</em></p>
          <ul style={{ lineHeight: 2, textAlign: "justify", fontFamily: "var(--font-main)", fontSize: "var(--font-size-small)" }}>
            <li><strong>HR New Employee Onboarding</strong> → Streamlined employee setup for a seamless transition.</li>
            <li><strong>HSE Good Catch Site Reporting</strong> → Automated risk logging and notifications for safety managers.</li>
            <li><strong>Project Management Metrics</strong> → Generated performance tracking dashboards for leadership.</li>
            <li><strong>GROWTTH Kaizen Certification Metrics</strong> → Centralized progress tracking for continuous improvement.</li>
            <li><strong>CPIM PMO Metric Presentations</strong> → Created automated reporting pipelines for executive visibility.</li>
            <li><strong>Client Access for Product Development</strong> → Designed secure portals to enhance customer collaboration.</li>
          </ul>
        </div>
        <button
         style={{
              backgroundColor: "transparent", // or any color you prefer
              color: "#8b4513",
              border: "none",
              padding: "1.2rem 1.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "var(--font-size-body)",
              fontFamily: "var(--font-main)",
              margin: "1rem 0"
            }}
          onClick={scrollToTop}
          className="button mt-[5vh]"
        >
          Back to Top
        </button>
      </div>
    </div>

  );
};

export default Automation;