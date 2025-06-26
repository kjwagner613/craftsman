import { useState } from "react";
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


function App() {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  // You can move the return statement further down in the function,
  // but it must remain the last statement in the App function.
  // For example, you can add other logic or variables above it:

  // Example: (add any logic here)

  return (
    <>
      <Navbar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      {/* Cloud image (fully visible, not clipped) */}
      <div
        style={{
          position: "fixed !important",
          top: "-1vh",
          left: "0",
          width: "700px",
          height: "500px",
          backgroundImage: "url('/Cumulus_cloud.png')",
          backgroundSize: "cover",
          zIndex: 10,
          animation: "moveCloud 50s linear infinite",
          pointerEvents: "none", // don't block anything
        }}

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
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Header selected={true} />
                </>
              )}

              {selectedSection === "Software" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Software selected={true} />
                </>
              )}

              {selectedSection === "Foundation" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Foundation selected={true} />
                </>
              )}

              {selectedSection === "ProjectManagement" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <ProjectManagement selected={true} />
                </>
              )}

              {selectedSection === "Automation" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Automation selected={true} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}

export default App;