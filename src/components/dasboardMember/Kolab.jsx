import { useState } from "react";

const Kolab = () => {
  const [activeNav, setActiveNav] = useState("Workspace members");
  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };
  return (
    <div className="inverted-member flex gap-10 p-4">
      <h3 className="w-1/4 font-semibold text-sm">KOLABOLATOR (2)</h3>
      <ul className="w-3/4">
        <li>
          <a
            href="#"
            onClick={() => handleNavClick("Workspace members")}
            className={`px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
              activeNav === "Workspace members" ? "bg-secondary-blue" : ""
            }`}
          >
            Workspace members (2)
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavClick("Guests")}
            className={`px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
              activeNav === "Guests" ? "bg-secondary-blue" : ""
            }`}
          >
            Guests (1)
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleNavClick("Join requests")}
            className={`px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
              activeNav === "Join requests" ? "bg-secondary-blue" : ""
            }`}
          >
            Join requests (0)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Kolab;
