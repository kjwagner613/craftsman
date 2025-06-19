const Navbar = ({ setSelectedSection }) => (
  <nav className="h-10 fixed top-[-2%] left-[-0%] h-[10%] w-full bg-gray-900 border-indigo-700 text-white py-6 z-50">
    <ul className="flex h-10 justify-left bg-gradient-to-r from-[rgb(89,167,226)] to-[rgb(176,204,255)] space-x-8 list-none leading-4 text-lg" >
      <li>
        <button
          onClick={() => setSelectedSection("AboutMe")}
          className="bg-transparent border-none text-white underline hover:text-blue-400 cursor-pointer p-0 m-0"
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
  </nav>
);

export default Navbar;