const tableData = [
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
  {
    card: "Looking for even more project management",
    list: "Project Resources",
    labels: [
      { text: "Step Label", color: "bg-yellow-800" },
      { text: "Priority", color: "bg-red-800" },
      { text: "Design Team", color: "bg-green-800" },
    ],
    rekan: [
      { text: "HK", color: "bg-yellow-800" },
      { text: "NZ", color: "bg-green-800" },
    ],
    tanggal: "19 Oktober 2024",
  },
];

const KontenTable = () => {
  return (
    <div className="inner-member2 text-sm 2xl:text-lg flex flex-col gap-4 p-4 pt-10">
      <h3 className="font-semibold text-sm sm:text-base lg:text-lg 2xl:text-2xl">Table</h3>
      <div className="overflow-x-auto custom-h-scroll">
        <table className="table-auto border-collapse w-full text-sm 2xl:text-lg text-left text-white-700">
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
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-700">
                <td className="px-4 py-2 flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#000000] to-[#290036] hidden lg:block w-5 h-4 rounded"></div>
                  <p className="text-left">{row.card}</p>
                </td>
                <td className="px-4 py-2">{row.list}</td>
                <td className="px-4 py-2">
                  {row.labels.map((label, idx) => (
                    <button key={idx} className={`${label.color} text-white text-xs px-2 py-1 rounded mr-1`}>
                      {label.text}
                    </button>
                  ))}
                </td>
                <td className="px-4 py-2">
                  {row.rekan.map((rekan, idx) => (
                    <span key={idx} className={`${rekan.color} text-white text-xs px-2 py-1 rounded-full mr-1`}>
                      {rekan.text}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2">{row.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KontenTable;