import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function App() {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  // You can move the return statement further down in the function,
  // but it must remain the last statement in the App function.
  // For example, you can add other logic or variables above it:

  // Example: (add any logic here)

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#1870d5] via-[#4a90e2] to-[#87ceeb] flex flex-col">
        {/* AboutMe overlay: fades out when Portfolio is clicked */}
        <AnimatePresence initial={false}>
          {selectedSection === "AboutMe" && (
            <AboutMe
              key="about"
              setSelectedSection={setSelectedSection}
            />
          )}
        </AnimatePresence>

        {/* Main Content */}


        <AnimatePresence initial={false}>
          {selectedSection !== "AboutMe" && (
            <motion.div
              key={selectedSection}
              className="w-full flex flex-col items-center z-50 mt-[1in]"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Pillars setSelectedSection={setSelectedSection} />
              {selectedSection === "header" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Header selected={true} />
                </>
              )}

              {selectedSection === "software" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Software selected={true} />
                </>
              )}

              {selectedSection === "foundation" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Foundation selected={true} />
                </>
              )}

              {selectedSection === "projectManagement" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <ProjectManagement selected={true} />
                </>
              )}

              {selectedSection === "automation" && (
                <>
                  {window.scrollTo({ top: 0, behavior: "smooth" })}
                  <Automation selected={true} />
                </>
              )} />}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Other Sections */}
        {selectedSection === "contact" && (
          <div className="w-full max-w-[1300px] min-h-[500px] flex flex-col items-center p-2">
            <Contact selected={true} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;