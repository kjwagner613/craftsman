import React, { useEffect, useState } from 'react';

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
      <h1 className="text-3xl font-bold text-center">Automation</h1>
      <p className="mt-2 text-lg text-justify max-w-[800px]"> <h2>Business Process Automation</h2>
        <p>Technology should simplify work, not complicate it. Throughout my career, I have been the go-to problem solver, ensuring that processes are optimized, systems are intuitive, and businesses operate with efficiency.</p>
        <h2>History in Automation</h2>
        <p>From the moment I joined Freudenberg Medical as Master Data Migration Manager, I naturally became the person teams relied on for custom solutions, whether for SAP conversion tasks or broader IT challenges. As part of the SAP implementation team, I traveled between sites, assisting stakeholders and refining operations.</p>
        <p>When I later built the PMO, I had become the trusted resource for over 1,200 users seeking "out-of-catalog" assistance in software configuration. As Cloud Specialist, I didn’t just advise—I implemented solutions that streamlined workflows and reduced inefficiencies across the organization.</p>
        <p>SAP implementations are high-stakes, with costs second only to the risk of a failed rollout. To mitigate this, I worked exclusively within the corporate tech stack, leveraging Microsoft products under the E5 license to ensure long-term scalability and security. Every site continues to operate successfully, reinforcing the value of automation-driven efficiency.</p>
        <h2>Automated Processes Using Microsoft Power Platform</h2>
        <p><em>Systems developed that cut unnecessary steps, saved time, and improved accuracy for key business functions:</em></p>

        <p>HR New Employee Onboarding → Streamlined employee setup for a seamless transition.</p>
        <p>HSE Good Catch Site Reporting → Automated risk logging and notifications for safety managers.</p>
        <p>Project Management Metrics → Generated performance tracking dashboards for leadership.</p>
        <p>GROWTTH Kaizen Certification Metrics → Centralized progress tracking for continuous improvement.</p>
        <p>CPIM PMO Metric Presentations → Created automated reporting pipelines for executive visibility.</p>
        <p>Client Access for Product Development → Designed secure portals to enhance customer collaboration.</p>
      </p>
    </div>
  );
};

export default Automation;