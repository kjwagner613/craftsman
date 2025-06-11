import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./assets/components/Header";
import Pillars from "./assets/components/Pillars";
import Foundation from "./assets/components/Foundation";
import Contact from "./assets/components/Contact";
import Software from "./assets/components/Software";
import Automation from "./assets/components/Automation";
import ProjectManagement from "./assets/components/ProjectManagement";

function App() {
  // Show Software section by default
  const [selectedSection, setSelectedSection] = useState('header');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1870d5] to-[#87ceeb] flex flex-col items-center">
      {/* Top row: Pillars */}
      <div className="flex justify-center py-8">
        <Pillars setSelectedSection={setSelectedSection} />
      </div>
      {/* Second row: Section content */}
<div className="w-full max-w-[1300px] min-h-[500px] flex flex-col items-center p-2">
        {selectedSection === "header" && <Header selected={true} />}
        {selectedSection === "software" && <Software selected={true} />}
        {selectedSection === "foundation" && <Foundation selected={true} />}
        {selectedSection === "projectManagement" && <ProjectManagement selected={true} />}
        {selectedSection === "automation" && <Automation selected={true} />}
        {selectedSection === "contact" && <Contact selected={true} />}
      </div>
    </div>
  );
}

export default App;