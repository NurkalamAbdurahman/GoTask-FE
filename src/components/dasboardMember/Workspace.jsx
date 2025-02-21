import { useState } from "react";

const Workspace = () => {
  const [activeTab, setActiveTab] = useState("Workspace members");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getTitle = () => {
    switch (activeTab) {
      case "Workspace members":
        return "Workspace members (2)";
      case "Guests":
        return "Guests (1)";
      case "Join requests":
        return "Join requests (0)";
      default:
        return "Workspace members (2)";
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Workspace members":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-start gap-4 text-xs sm:text-sm lg:text-base justify-center border-b border-white py-4">
              <p className="lg:w-1/4 font-medium">Workspace members</p>
              <p className="lg:w-2/4">
                Anggota Ruang Kerja dapat melihat dan bergabung dengan semua papan yang terlihat di Ruang Kerja dan membuat papan baru di Ruang Kerja.
              </p>
              <div className="lg:w-1/4">
                <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs sm:text-sm rounded-lg">
                  Lihat detail
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-4 text-xs sm:text-sm lg:text-base justify-center border-b border-white py-4">
              <p className="lg:w-1/4 font-medium">Undang anggota untuk bergabung dengan Anda</p>
              <p className="lg:w-2/4">
                Siapa pun yang memiliki tautan undangan dapat bergabung dengan Ruang Kerja ini. Anda juga dapat menonaktifkan dan membuat tautan undangan
                baru untuk Ruang Kerja ini kapan saja.
              </p>
              <div className="lg:w-1/4">
                <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs sm:text-sm rounded-lg">
                  Undang dengan tautan
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Filter dengan nama"
                className="w-full px-5 py-1 border text-xs sm:text-sm border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
              />
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4">
                <div className="flex gap-2 w-full lg:w-1/2">
                  <div className="logo bg-yellow-600 w-9 h-9 flex justify-center items-center text-xs rounded-full">
                    <p>NZ</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Nurkalam Abdurahman</p>
                    <p className="text-xs sm:text-sm text-gray-500">@nurkalam.az@gmail.com • Terakhir aktif Oktober 2024</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-center items-center gap-2">
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4">
                <div className="flex gap-2 w-full lg:w-1/2">
                  <div className="logo bg-green-600 w-9 h-9 flex justify-center items-center text-xs rounded-full">
                    <p>RK</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Rafli Insan Karim</p>
                    <p className="text-xs sm:text-sm text-gray-500">@rubliiiii@gmail.com • Terakhir aktif Oktober 2024</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-center items-center gap-2">
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (3)
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Guests":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-start gap-4 text-xs sm:text-sm lg:text-base justify-center border-b border-white py-4">
              <p className="lg:w-1/4 font-medium">Guests</p>
              <p className="lg:w-2/4">
                Tamu dapat melihat dan bergabung dengan papan yang dibagikan kepada mereka, tetapi tidak dapat membuat papan baru di Ruang Kerja ini.
              </p>
              <div className="lg:w-1/4">
                <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs sm:text-sm rounded-lg">
                  Lihat detail
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Filter dengan nama"
                className="w-full px-5 py-1 border text-xs sm:text-sm border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
              />
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4">
                <div className="flex gap-2 w-full lg:w-1/2">
                  <div className="logo bg-blue-600 w-9 h-9 flex justify-center items-center text-xs rounded-full">
                    <p>TG</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Tamu Guest</p>
                    <p className="text-xs sm:text-sm text-gray-500">@tamu.guest@gmail.com • Terakhir aktif September 2024</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-center items-center gap-2">
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Lihat boards (1)
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Hapus tamu
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Join requests":
        return (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-start gap-4 text-xs sm:text-sm lg:text-base justify-center border-b border-white py-4">
              <p className="lg:w-1/4 font-medium">Join Requests</p>
              <p className="lg:w-2/4">
                Permintaan bergabung dari pengguna yang ingin menjadi anggota Ruang Kerja ini.
              </p>
              <div className="lg:w-1/4">
                <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs sm:text-sm rounded-lg">
                  Lihat detail
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Filter dengan nama"
                className="w-full px-5 py-1 border text-xs sm:text-sm border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
              />
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4">
                <div className="flex gap-2 w-full lg:w-1/2">
                  <div className="logo bg-purple-600 w-9 h-9 flex justify-center items-center text-xs rounded-full">
                    <p>JR</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">John Doe</p>
                    <p className="text-xs sm:text-sm text-gray-500">@john.doe@gmail.com • Permintaan bergabung pada Oktober 2024</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-between lg:justify-center items-center gap-2">
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Terima
                  </button>
                  <button className="bg-secondary-blue w-full lg:w-1/3 hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg">
                    Tolak
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:p-5 p-5 py-7">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{getTitle()}</h3>

      <ul className="flex gap-4 text-xs sm:text-sm lg:text-base">
        {["Workspace members", "Guests", "Join requests"].map((tabName, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => handleTabClick(tabName)}
              className={`px-2 py-1 rounded hover:bg-secondary-blue ${
                activeTab === tabName ? "bg-secondary-blue" : ""
              }`}
            >
              {tabName} ({index === 0 ? "2" : index === 1 ? "1" : "0"})
            </a>
          </li>
        ))}
      </ul>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Workspace;