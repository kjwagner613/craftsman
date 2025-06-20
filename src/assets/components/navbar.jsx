import { motion } from "framer-motion";
import { useState } from "react";


const Navbar = ({ setSelectedSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-[-2%] left-0 w-full text-white border-indigo-700 py-6 z-50 overflow-hidden">
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ height: isHovered ? "20rem" : "14rem" }}
        transition={{
          duration: isHovered ? 0.4 : 0.1, // fast collapse
          ease: "easeInOut"
        }}

      >
        <ul
          className="flex h-[20%] justify-left space-x-8 list-none leading-4 text-white text-lg"
          style={{
            backgroundImage: "url('/sun.webp')",
            transition: "transform 0.5s ease-out",
          }}
        >
          <li>
            <button
              onClick={() => setSelectedSection("AboutMe")}
              className="bg-transparent text-white border-none underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("Contact")}
              className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("Software")}
              className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Software Development
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("ProjectManagement")}
              className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Project Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("Automation")}
              className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Automation
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("Foundation")}
              className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              Foundation
            </button>
          </li>
        </ul>
      </motion.nav>
    </nav>
  );
}

export default Navbar;