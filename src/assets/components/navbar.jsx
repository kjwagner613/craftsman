
import { motion } from "framer-motion";

const Navbar = ({ setSelectedSection }) => {
  const navItems = [
    { label: "Home", section: "AboutMe" },
    { label: "About Me", section: "Header" },
    { label: "Contact", section: "Contact" },
    { label: "Software Development", section: "Software" },
    { label: "Project Management", section: "ProjectManagement" },
    { label: "Automation", section: "Automation" },
    { label: "Foundation", section: "Foundation" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full text-white py-4 z-50 pointer-events-none"
      style={{
        top: "0vh",
        left: "-1vw",
        width: "calc(100% + 2vw)", // Adjust width to cover the full viewport
        height: "25vh",
        backgroundImage: "url('/newSun8.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-auto">
        <ul className="flex flex-row items-center justify-center space-x-4 list-none text-white text-sm lg:text-base px-2 mt-[1rem]">
          {navItems.map(({ label, section }) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSection(section);
                }}
                className="text-white hover:text-blue-400 cursor-pointer px-2 py-1 text-xs lg:text-sm"
              >
                {label}
              </a>


            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;