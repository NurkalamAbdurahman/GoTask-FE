import { useState } from "react";

const FooterD = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="border border-primary-blue bg-secondary-blue bg-opacity-10 px-4 py-2 my-4 flex flex-wrap justify-between items-center w-full lg:w-3/4 bg-blur-lg rounded-lg">
      {/* Bagian Kiri */}
      <div className="flex flex-wrap items-center justify-between space-x-3 w-full lg:w-auto mb-2 lg:mb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
          <span className="text-white text-sm font-medium">Project Management</span>
          <span className="text-gray-400 text-sm">Private</span>
        </div>

        {/* Tombol untuk Mobile */}
        <div className="lg:hidden relative">
          <button
            className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition flex items-center space-x-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Menu</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 bottom-full mb-2 w-32 bg-white rounded shadow-lg">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Board</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Table</button>
            </div>
          )}
        </div>

        {/* Tombol untuk Tablet & Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition">
            Board
          </button>
          <button className="text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-gray-700 transition">
            Table
          </button>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex items-center border-t lg:border-t-0 lg:border-l border-white pt-2 lg:pt-0 lg:pl-2 space-x-4 w-full lg:w-auto">
        <div className="flex items-center -space-x-1">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            NZ
          </div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            AS
          </div>
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            LT
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition">
          Share
        </button>
      </div>
    </div>
  );
};

export default FooterD;