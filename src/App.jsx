import { useState } from "react";
import "./App.css";
import "./index.css";
import Pillars from "./assets/components/Pillars";
import Foundation from "./assets/components/Foundation";
import Contact from "./assets/components/Contact";
import Header from "./assets/components/Header";
import Software from "./assets/components/Software";
import Automation from "./assets/components/Automation";
import ProjectManagement from "./assets/components/ProjectManagement";

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1870d5] to-[#87ceeb] flex flex-col items-center">
      {/* Pillars Component - Handles Section Selection */}
      <Pillars setSelectedSection={setSelectedSection} />

      {/* Smoothly Reveal Selected Section */}
      <div className="w-[1300px] container mx-auto p-4">
        {selectedSection === "foundation" && <Foundation />}
        {selectedSection === "projectManagement" && <ProjectManagement />}
        {selectedSection === "automation" && <Automation />}
        {selectedSection === "software" && <Software />}
        {selectedSection === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
