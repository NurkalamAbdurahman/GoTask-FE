import { useState } from "react";
import Logo from "../../assets/images/icon/GoTask.png"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen ${
        isCollapsed ? "w-16" : "w-80"
      } bg-latar-blue text-white flex overflow-y-auto flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between ">
        {!isCollapsed && (
          <div className="p-4 text-2xl font-bold flex items-center">
            <img src={Logo} alt="" />
          </div>
        )}
        <button
          className="p-2 text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>

      {!isCollapsed && (
        <div className="p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 py-1 border-2 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
          />
        </div>
      )}

      {!isCollapsed && (
        <div className="p-4 flex items-center border-2 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg m-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold">
            G
          </div>
          <div className="ml-4">
            <div className="font-bold">GoTask</div>
            <div className="text-sm text-gray-400">Projek IT</div>
          </div>
        </div>
      )}

      <div className="p-2 m-4 border-2 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
      <nav className="flex-1 px-4">
        <div className="mb-4">
          <h3
            className={`text-gray-400 uppercase text-sm mb-2 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            GoTask Link
          </h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Board
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Member
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Workspace settings
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3
            className={`text-gray-400 uppercase text-sm mb-2 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            GoTask Views
          </h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Table
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Calendar
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3
            className={`text-gray-400 uppercase text-sm mb-2 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            Your Boards
          </h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Project Management
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-gray-700"
              >
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>
                  Tes
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>


      {/* Create Button */}
      {!isCollapsed && (
        <div className="p-4">
          <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Create
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
