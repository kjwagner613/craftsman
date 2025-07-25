import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import "./App.css";
import "./index.css";
import AboutMe from "./assets/components/AboutMe";
import Header from "./assets/components/Header";
import Pillars from "./assets/components/Pillars";
import Foundation from "./assets/components/Foundation";
import Contact from "./assets/components/Contact";
import Software from "./assets/components/Software";
import Automation from "./assets/components/Automation";
import ProjectManagement from "./assets/components/ProjectManagement";
import Navbar from "./assets/components/navbar";
import PersistentClouds from './assets/components/PersistentClouds';




function App() {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  // You can move the return statement further down in the function,
  // but it must remain the last statement in the App function.
  // For example, you can add other logic or variables above it:

  // Example: (add any logic here)
  useEffect(() => {
    // Only scroll for sub-sections, not AboutMe or Contact
    if (
      selectedSection !== "AboutMe" &&
      selectedSection !== "Contact"
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedSection]);

	
  return (
    <>
      <Navbar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />

      {/* Persistent clouds - show everywhere except Contact */}
      <PersistentClouds
        setSelectedSection={setSelectedSection}
        show={selectedSection !== "Contact"}
      />


      {/* Overlay for click detection (clipped shape, interactive) */}


      {createPortal((<>

      </>), document.body)}
      <div className="pt-20 flex flex-col w-full min-h-screen">
        <></>


        {/* Initial sections */}
        <div className="w-full flex flex-col items-center">
          {selectedSection === "AboutMe" && (
            <AboutMe setSelectedSection={setSelectedSection} />
          )}
          {selectedSection === "Contact" && (
            <Contact selected={true} />
          )}
        </div>

        {/* Pillars and sub-sections  */}

        {selectedSection !== "AboutMe" && selectedSection !== "Contact" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSection}
              className="w-full flex flex-col items-center z-45 mt-[1in]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Pillars setSelectedSection={setSelectedSection} />

              {selectedSection === "Header" && (       
                  <Header selected={true} />             
              )}

              {selectedSection === "Software" && (              
                  <Software selected={true} />              
              )}

              {selectedSection === "Foundation" && (                
                  <Foundation selected={true} />                
              )}

              {selectedSection === "ProjectManagement" && (               
                  <ProjectManagement selected={true} />               
              )}

              {selectedSection === "Automation" && (                                 
                  <Automation selected={true} />                
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}

export default App;