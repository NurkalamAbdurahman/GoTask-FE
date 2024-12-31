import { useState } from "react";

const Kolab = () => {
  const [activeNav, setActiveNav] = useState("Workspace members");
  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };
  return (
    <div className="inverted-member flex gap-4 lg:gap-10 p-4">
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold">KOLABOLATOR (2)</h3>
      <ul className="flex flex-col lg:w-3/4">
        {["Workspace members", "Guests", "Join requests"].map((navName, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => handleNavClick(navName)}
              className={`px-2 py-1 rounded text-xs sm:text-sm lg:text-base hover:bg-secondary-blue ${
                activeNav === navName ? "bg-secondary-blue" : ""
              }`}
            >
              {navName} ({index === 0 ? "2" : index === 1 ? "1" : "0"})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kolab;
