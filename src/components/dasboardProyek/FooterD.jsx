import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditTitleModal from "./EditTitleModal";

const FooterD = () => {
  const [isEditTitleModalOpen, setIsEditTitleModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("Project Management");
  const [isPrivacyDropdownOpen, setIsPrivacyDropdownOpen] = useState(false);
  const [privacyStatus, setPrivacyStatus] = useState("Private");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState([
    { inisial: "NZ", nama: "Nurkalam Z", mail: "Nurkalamaz@gmail.com", role: "Owner" },
    { inisial: "RI", nama: "Rafli Insan", mail: "rubliii@gmail.com", role: "Member" },
  ]);
  const navigate = useNavigate();

  const handleSaveTitle = () => {
    setIsEditTitleModalOpen(false);
  };

  const handleShare = () => {
    if (email.trim()) {
      setMembers([...members, { inisial: email[0].toUpperCase(), nama: email, mail: email, role: "Member" }]);
      setEmail("");
    }
  };

  return (
    <div className="border border-primary-blue bg-secondary-blue bg-opacity-10 px-4 py-2 my-4 flex flex-wrap justify-between items-center w-full lg:w-3/4 bg-blur-lg rounded-lg">
      <div className="flex flex-wrap items-center justify-between space-x-3 w-full lg:w-auto mb-2 lg:mb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
          <button
            onClick={() => setIsEditTitleModalOpen(true)}
            className="text-white text-sm font-medium hover:underline focus:outline-none"
          >
            {projectTitle}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsPrivacyDropdownOpen(!isPrivacyDropdownOpen)}
              className="text-gray-400 text-sm focus:outline-none hover:underline"
            >
              {privacyStatus}
            </button>
            {isPrivacyDropdownOpen && (
              <div className="absolute mt-1 bg-white rounded shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setPrivacyStatus("Public");
                    setIsPrivacyDropdownOpen(false);
                  }}
                >
                  Public
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setPrivacyStatus("Private");
                    setIsPrivacyDropdownOpen(false);
                  }}
                >
                  Private
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={() => navigate("/Dasboard-Proyek")}
            className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition"
          >
            Board
          </button>
          <button
            onClick={() => navigate("/Dasboard-Table")}
            className="text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-gray-700 transition"
          >
            Table
          </button>
        </div>
      </div>

      <div className="flex items-center border-t lg:border-t-0 lg:border-l border-white pt-2 lg:pt-0 lg:pl-2 space-x-4 w-full lg:w-auto">
        <div className="flex items-center -space-x-1">
          {members.map((member, index) => (
            <div
              key={index}
              className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-black"
            >
              {member.inisial}
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition"
        >
          Share
        </button>
      </div>

      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-latar-blue p-6 rounded-lg shadow-lg w-96 text-white">
            <h2 className="text-lg font-semibold mb-4">Share Project</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full p-2 border text-black rounded mb-4"
            />
            <button
              onClick={handleShare}
              className="bg-blue-500 px-4 py-2 rounded w-full hover:bg-blue-600 transition"
            >
              Add Member
            </button>
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="mt-2 text-white text-sm hover:underline block w-full text-center"
            >
              Close
            </button>
            <h3 className="text-sm font-medium mt-4 mb-2">Members:</h3>
            <ul className="space-y-2">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4"
                >
                  <div className="flex gap-2 w-full">
                    <div className="logo bg-yellow-600 w-9 h-9 flex justify-center items-center text-xs rounded-full">
                      <p>{member.inisial}</p>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">
                        {member.nama}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {member.mail}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end lg:justify-end items-end gap-2">
                      {member.role}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}

      <EditTitleModal
        isOpen={isEditTitleModalOpen}
        onClose={() => setIsEditTitleModalOpen(false)}
        title={projectTitle}
        onTitleChange={setProjectTitle}
        onSave={handleSaveTitle}
      />
    </div>
  );
};

export default FooterD;