import { useState } from "react";

const Template = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardGradient, setNewBoardGradient] = useState("from-[#000000] to-[#290036]");
  const [newBoardMembers, setNewBoardMembers] = useState("");
  const [boards, setBoards] = useState([
    { title: "Project Management", gradient: "from-[#000000] to-[#290036]", members: "Nurkalam & Rafli" },
    { title: "Absent App", gradient: "from-[#DD08CF] to-[#1500D6]", members: "M. Rafli & Khulika" },
    { title: "Chat App", gradient: "from-[#33a833] to-[#e6ff06]", members: "Sandi & Riyan" },
    { title: "Quiz App", gradient: "from-[#000000] to-[#0ad1b7]", members: "Dava & Wandi" },
    { title: "test App", gradient: "from-[#000000] to-[#456]", members: "? & ?" },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewBoardTitle("");
    setNewBoardGradient("from-[#000000] to-[#290036]");
    setNewBoardMembers("");
  };

  const handleAddBoard = () => {
    if (newBoardTitle && newBoardMembers) {
      const newBoard = {
        title: newBoardTitle,
        gradient: newBoardGradient,
        members: newBoardMembers,
      };
      setBoards([...boards, newBoard]);
      handleCloseModal();
    } else {
      alert("Judul dan anggota board harus diisi!");
    }
  };

  return (
    <div className="flex flex-wrap justify-start mt-5 items-center 2xl:text-lg text-xs gap-5 lg:h-80 2xl:h-auto p-2 overflow-y-auto custom-scroll">
      <div className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] border-2 p-4 border-primary-blue bg-secondary-blue bg-opacity-10 h-28 rounded-md">
        <div className="h-3/4 flex justify-center text-xl items-center">
          <button onClick={handleOpenModal}>+</button>
        </div>
        <div className="h-1/4 flex justify-start items-start text-start">
          <p>Buat board baru</p>
        </div>
      </div>

      {boards.map((card, index) => (
        <div key={index} className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] flex flex-col gap-1">
          <div className={`w-full p-4 bg-gradient-to-r ${card.gradient} h-28 rounded-md`}>
            <div className="h-3/4 flex justify-end text-xl items-start">
              <button>+</button>
            </div>
            <div className="h-1/4 flex justify-start items-start text-start">
              <p>{card.title}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
              <p>{card.members}</p>
            </div>
            <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
              +
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-latar-blue p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Buat Board Baru</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Judul Board</label>
                <input
                  type="text"
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
                  placeholder="Masukkan judul board"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Gradient</label>
                <select
                  value={newBoardGradient}
                  onChange={(e) => setNewBoardGradient(e.target.value)}
                  className="w-full px-3 py-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
                >
                  <option className="bg-latar-blue" value="from-[#000000] to-[#290036]">Hitam ke Ungu</option>
                  <option className="bg-latar-blue" value="from-[#DD08CF] to-[#1500D6]">Merah Muda ke Biru</option>
                  <option className="bg-latar-blue" value="from-[#33a833] to-[#e6ff06]">Hijau ke Kuning</option>
                  <option className="bg-latar-blue" value="from-[#000000] to-[#0ad1b7]">Hitam ke Cyan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Anggota</label>
                <input
                  type="text"
                  value={newBoardMembers}
                  onChange={(e) => setNewBoardMembers(e.target.value)}
                  className="w-full px-3 py-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
                  placeholder="Masukkan anggota (contoh: Nurkalam & Rafli)"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={handleAddBoard}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;