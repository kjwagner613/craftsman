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
      className="fixed top-[-2%] left-[-1%] w-[100vw] text-white border-indigo-700 py-6 z-150 overflow-hidden"
      style={{
        height: "15rem",
        backgroundImage: "url('/sunFade.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ul className="absolute top-[-75%] flex h-full items-end px-8 pb-10 space-x-8 list-none leading-4 text-white text-lg z-150">
        {navItems.map(({ label, section }) => (
          <li key={section}>
            <button
              onClick={() => setSelectedSection(section)}
              className="bg-transparent text-white border-none underline hover:text-blue-400 cursor-pointer p-0 m-0"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;