import { useState } from "react";
import Logo from "../../assets/images/icon/GoTask.png";
import Board from "../../assets/images/icon/board.png";
import Member from "../../assets/images/icon/member.png";
import Setting from "../../assets/images/icon/setting.png";
import Table from "../../assets/images/icon/table.png";
import Calendar from "../../assets/images/icon/calendar.png";
import "./Sidebar.css"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen ${
        isCollapsed ? "w-20" : "w-80"
      } bg-latar-blue text-white flex flex-col p-4 gap-4 transition-all border-r border-primary-blue duration-300`}
    >
      <div className="flex items-center justify-between border-b border-primary-blue ">
        {!isCollapsed && (
          <div className="p-4 text-2xl font-bold flex items-center">
            <img src={Logo} alt="" />
          </div>
        )}
        <button
          className="py-1 px-2 rounded text-white bg-primary-blue text-sm hover:text-white m-2 focus:outline-none"
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

      {!isCollapsed && (
        <div className="p-4 flex items-center border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold">
            G
          </div>
          <div className="ml-4">
            <div className="font-bold">GoTask</div>
            <div className="text-sm text-gray-400">Projek IT</div>
          </div>
        </div>
      )}

      <div className="p-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
        <nav className={`${isCollapsed ? "px-0" : "px-4"} flex-1`}>
          <div className="mb-4">
            <h3
              className={`font-bold uppercase text-sm mb-2 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              GoTask Link
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <img src={Board} alt="" className="object-cover w-3" />
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Board
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <img src={Member} alt="" className="object-cover w-3" />
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Member
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <img src={Setting} alt="" className="object-cover w-3" />
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Workspace settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3
              className={`font-bold uppercase text-sm mb-2 ${
                isCollapsed ? "hidden" : "block"
              } flex justify-between items-center`}
            >
              GoTask Views
              <span className="px-2 py-1 rounded hover:bg-secondary-blue">
                +
              </span>
            </h3>
            <ul className={`${isCollapsed ? "h-auto" : "h-14 overflow-y-auto custom-scroll"}`}>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <img src={Table} alt="" className="object-cover w-3" />
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Table
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <img src={Calendar} alt="" />
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Calendar
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3
              className={`font-bold uppercase text-sm mb-2 ${
                isCollapsed ? "hidden" : "block"
              } flex justify-between items-center`}
            >
              Your Boards
              <span className="px-2 py-1 rounded hover:bg-secondary-blue">
                +
              </span>
            </h3>
            <ul className={`${isCollapsed ? "h-auto" : "h-14 overflow-y-auto custom-scroll"}`}>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <span className="bg-gradient-to-r from-[#000000] to-[#290036] w-4 h-4 rounded"></span>
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Project Management
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <span className="bg-gradient-to-r from-[#DD08CF] to-[#1500D6] w-4 h-4 rounded"></span>
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Absen App
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <span className="bg-gradient-to-r from-[#33a833] to-[#e6ff06] w-4 h-4 rounded"></span>
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Chat App
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue"
                >
                  <span className="bg-gradient-to-r from-[#000000] to-[#0ad1b7] w-4 h-4 rounded"></span>
                  <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                    Quiz App
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {!isCollapsed && (
        <div>
          <button className="w-full px-2 py-1 bg-red-700 rounded-lg hover:bg-red-900">
            <a href="/Login">Logout</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
