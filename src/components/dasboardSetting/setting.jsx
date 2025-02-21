import { useState } from "react";

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(""); // Track active modal
  const [options, setOptions] = useState({
    "keanggotaan ruang kerja": "Siapa pun",
    "penghapusan Board": "Admin saja",
    "pembuatan anggota": "Anggota terbatas",
    "berbagi board dengan tamu": "Anggota terbatas",
  });

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveModal(""); // Reset active modal
  };

  const handleSave = () => {
    console.log(`${activeModal} Pilihan disimpan:`, options[activeModal]);
    setIsModalOpen(false);
  };

  const handleOptionChange = (value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [activeModal]: value,
    }));
  };

  const modalOptions = {
    "keanggotaan ruang kerja": ["Siapa pun", "Admin saja", "Anggota terbatas"],
    "penghapusan Board": ["Admin saja", "Anggota terbatas", "Siapa pun"],
    "pembuatan anggota": ["Anggota terbatas", "Admin saja", "Siapa pun"],
    "berbagi board dengan tamu": ["Tamu terbatas", "Admin saja", "Siapa pun"],
  };

  return (
    <div className="inner-member2 text-sm 2xl:text-lg flex flex-col gap-4 p-4 pt-10">
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Pembatasan keanggotaan ruang kerja
          </h3>
        </div>
        <div className="lg:w-2/4">
          <p>
            <span>{options["keanggotaan ruang kerja"]}</span> dapat ditambahkan ke Ruang Kerja ini.
          </p>
        </div>
        <div className="lg:w-1/4">
          <button
            onClick={() => handleOpenModal("keanggotaan ruang kerja")}
            className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg"
          >
            Ubah
          </button>
        </div>
      </div>
      {/* Section 2 */}
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Pembatasan penghapusan Board
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p><span>{options["penghapusan Board"]}</span> anggota Workspace dapat menghapus papan publik.</p>
          <p>
            <span>{options["penghapusan Board"]}</span> anggota Workspace dapat menghapus papan Workspace yang
            terlihat.
          </p>
          <p><span>{options["penghapusan Board"]}</span> anggota Workspace dapat menghapus papan pribadi.</p>
        </div>
        <div className="lg:w-1/4">
          <button
            onClick={() => handleOpenModal("penghapusan Board")}
            className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg"
          >
            Ubah
          </button>
        </div>
      </div>

      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Pembatasan pembuatan anggota
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p><span>{options["pembuatan anggota"]}</span> anggota Workspace dapat membuat papan publik.</p>
          <p>
            <span>{options["pembuatan anggota"]}</span> anggota Workspace dapat membuat papan Workspace yang
            terlihat.
          </p>
          <p><span>{options["pembuatan anggota"]}</span> anggota Workspace dapat membuat papan pribadi.</p>
        </div>
        <div className="lg:w-1/4">
          <button
            onClick={() => handleOpenModal("pembuatan anggota")}
            className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg"
          >
            Ubah
          </button>
        </div>
      </div>

      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Berbagi board dengan tamu
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p>
          <span>{options["berbagi board dengan tamu"]}</span> dapat mengirim atau menerima undangan ke forum di Ruang
            Kerja ini.
          </p>
        </div>
        <div className="lg:w-1/4">
          <button
            onClick={() => handleOpenModal("berbagi board dengan tamu")}
            className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg"
          >
            Ubah
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-latar-blue p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Pilih Opsi - {activeModal}</h2>
            <div className="space-y-2">
              {modalOptions[activeModal]?.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={option}
                    checked={options[activeModal] === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
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

export default Setting;