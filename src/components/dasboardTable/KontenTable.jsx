const KontenTable = () => {
  return (
    <div className="inner-member2 text-sm flex flex-col gap-4 p-4 pt-10">
      <h3 className="font-semibold text-sm">Table</h3>
      <table className="table-auto border-collapse w-full text-sm text-left text-white-700">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2">Card</th>
            <th className="px-4 py-2">List</th>
            <th className="px-4 py-2">Label</th>
            <th className="px-4 py-2">Rekan</th>
            <th className="px-4 py-2">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#000000] to-[#290036] w-5 h-4 rounded"></div>
              <p className="text-left">
                Looking for even more project management
              </p>
            </td>
            <td className="px-4 py-2">
              Project Resources
            </td>
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
            <td className="px-4 py-2">
              19 Oktober 2024
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#000000] to-[#290036] w-5 h-4 rounded"></div>
              <p className="text-left">
                Looking for even more project management
              </p>
            </td>
            <td className="px-4 py-2">
              Project Resources
            </td>
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
            <td className="px-4 py-2">
              19 Oktober 2024
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#000000] to-[#290036] w-5 h-4 rounded"></div>
              <p className="text-left">
                Looking for even more project management
              </p>
            </td>
            <td className="px-4 py-2">
              Project Resources
            </td>
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
            <td className="px-4 py-2">
              19 Oktober 2024
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KontenTable;
