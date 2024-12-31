const KontenTable = () => {
  return (
    <div className="inner-member2 text-sm flex flex-col gap-4 p-4 pt-10">
      <h3 className="font-semibold text-sm sm:text-base lg:text-lg">Table</h3>
      <div className="overflow-x-auto custom-h-scroll">
        <table className="table-auto border-collapse w-full text-sm text-left text-white-700">
          <thead>
            <tr className="border-b border-gray-300 text-white">
              <th className="px-4 py-2 whitespace-nowrap">Card</th>
              <th className="px-4 py-2 whitespace-nowrap">List</th>
              <th className="px-4 py-2 whitespace-nowrap">Label</th>
              <th className="px-4 py-2 whitespace-nowrap">Rekan</th>
              <th className="px-4 py-2 whitespace-nowrap">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 hover:bg-gray-700">
              <td className="px-4 py-2 flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#000000] to-[#290036] hidden lg:block w-5 h-4 rounded"></div>
                <p className="text-left">
                  Looking for even more project management
                </p>
              </td>
              <td className="px-4 py-2">Project Resources</td>
              <td className="px-4 py-2">
                <button className="bg-yellow-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Step Label
                </button>
                <button className="bg-red-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Priority
                </button>
                <button className="bg-green-800 text-white text-xs px-2 py-1 rounded">
                  Design Team
                </button>
              </td>
              <td className="px-4 py-2">
                <span className="bg-yellow-800 text-white text-xs px-2 py-1 rounded-full mr-1">
                  HK
                </span>
                <span className="bg-green-800 text-white text-xs px-2 py-1 rounded-full">
                  NZ
                </span>
              </td>
              <td className="px-4 py-2">19 Oktober 2024</td>
            </tr>
            <tr className="border-b border-gray-300 hover:bg-gray-700">
              <td className="px-4 py-2 flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#000000] to-[#290036] hidden lg:block w-5 h-4 rounded"></div>
                <p className="text-left">
                  Looking for even more project management
                </p>
              </td>
              <td className="px-4 py-2">Project Resources</td>
              <td className="px-4 py-2">
                <button className="bg-yellow-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Step Label
                </button>
                <button className="bg-red-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Priority
                </button>
                <button className="bg-green-800 text-white text-xs px-2 py-1 rounded">
                  Design Team
                </button>
              </td>
              <td className="px-4 py-2">
                <span className="bg-yellow-800 text-white text-xs px-2 py-1 rounded-full mr-1">
                  HK
                </span>
                <span className="bg-green-800 text-white text-xs px-2 py-1 rounded-full">
                  NZ
                </span>
              </td>
              <td className="px-4 py-2">19 Oktober 2024</td>
            </tr>
            <tr className="border-b border-gray-300 hover:bg-gray-700">
              <td className="px-4 py-2 flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#000000] to-[#290036] hidden lg:block w-5 h-4 rounded"></div>
                <p className="text-left">
                  Looking for even more project management
                </p>
              </td>
              <td className="px-4 py-2">Project Resources</td>
              <td className="px-4 py-2">
                <button className="bg-yellow-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Step Label
                </button>
                <button className="bg-red-800 text-white text-xs px-2 py-1 rounded mr-1">
                  Priority
                </button>
                <button className="bg-green-800 text-white text-xs px-2 py-1 rounded">
                  Design Team
                </button>
              </td>
              <td className="px-4 py-2">
                <span className="bg-yellow-800 text-white text-xs px-2 py-1 rounded-full mr-1">
                  HK
                </span>
                <span className="bg-green-800 text-white text-xs px-2 py-1 rounded-full">
                  NZ
                </span>
              </td>
              <td className="px-4 py-2">19 Oktober 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KontenTable;
