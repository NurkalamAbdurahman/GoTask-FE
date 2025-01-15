import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/icon/GoTask.png";
import Board from "../../assets/images/icon/board.png";
import Member from "../../assets/images/icon/member.png";
import Setting from "../../assets/images/icon/setting.png";
import Table from "../../assets/images/icon/table.png";
import Calendar from "../../assets/images/icon/calendar.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-primary-blue text-white rounded-full shadow-lg focus:outline-none hover:scale-110 transition-transform duration-300"
        onClick={toggleMobileSidebar}
      >
        {isMobileSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        className={`lg:h-screen fixed lg:relative z-40 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-80"
        } bg-latar-blue text-white flex flex-col p-4 gap-4 border-r border-primary-blue ${
          isMobileSidebarOpen ? "left-0" : "-left-full lg:left-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary-blue">
          {!isCollapsed && (
            <div className="p-4 text-2xl xl:text-4xl font-bold flex items-center">
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
          )}
          <button
            className="py-1 px-2 rounded text-white bg-secondary-blue text-sm hover:text-white m-2 xl:text-lg focus:outline-none"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? ">" : "<"}
          </button>
        </div>

        {!isCollapsed && (
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 py-1 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
            />
          </div>
        )}

        <div className="p-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
          <nav className={`${isCollapsed ? "px-0" : "px-4"} flex-1`}>
            <div className="mb-4">
              <h3
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                GoTask Link
              </h3>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img src={Board} alt="" className="object-cover w-3 2xl:w-5" />
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Board
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Member"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img src={Member} alt="" className="object-cover w-3 2xl:w-5" />
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Member
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Setting"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img src={Setting} alt="" className="object-cover w-3 2xl:w-5" />
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Workspace settings
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
                  isCollapsed ? "hidden" : "block"
                } flex justify-between items-center`}
              >
                GoTask Views
                <span className="px-2 py-1 rounded hover:bg-secondary-blue">
                  +
                </span>
              </h3>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Table"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img src={Table} alt="" className="object-cover w-3 2xl:w-5" />
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Table
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Calendar"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img src={Calendar} alt="" className="object-cover w-3 2xl:w-5" />
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Calendar
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
                  isCollapsed ? "hidden" : "block"
                } flex justify-between items-center`}
              >
                Your Boards
                <span className="px-2 py-1 rounded hover:bg-secondary-blue">
                  +
                </span>
              </h3>
              <ul
                className={`${
                  isCollapsed ? "h-auto" : "h-14 overflow-y-auto custom-scroll"
                }`}
              >
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Proyek"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <span className="bg-gradient-to-r from-[#000000] to-[#290036] w-4 h-4 rounded"></span>
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Project Management
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/AbsenApp"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <span className="bg-gradient-to-r from-[#DD08CF] to-[#1500D6] w-4 h-4 rounded"></span>
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Absen App
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/ChatApp"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <span className="bg-gradient-to-r from-[#33a833] to-[#e6ff06] w-4 h-4 rounded"></span>
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Chat App
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/QuizApp"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <span className="bg-gradient-to-r from-[#000000] to-[#0ad1b7] w-4 h-4 rounded"></span>
                    <span className={`xl:text-base ${isCollapsed ? "hidden" : "ml-2"}`}>
                      Quiz App
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {!isCollapsed && (
          <div>
            <button className="w-full px-2 py-1 bg-red-700 rounded-lg hover:bg-red-900 2xl:text-base">
              <a href="/Login">Logout</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
