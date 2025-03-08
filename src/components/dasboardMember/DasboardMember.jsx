/* eslint-disable no-unused-vars */
import "./Dasboard.css";
import { useState, useEffect } from "react";
import { getUser, inviteUser } from "../CRUD/Users/userService";
import { UserPlus, Users } from "lucide-react";
import Swal from "sweetalert2";

const DasboardMember = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const workspaceId = localStorage.getItem("workspaceId");
  const currentUsername = localStorage.getItem("username");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!token) throw new Error("Token tidak ditemukan");

        const userData = await getUser(token);
        const filteredUsers = userData.filter(
          (user) => user.username !== currentUsername
        );

        setMembers(filteredUsers);
        setFilteredMembers(filteredUsers);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, [token, currentUsername]);

  useEffect(() => {
    const filtered = members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchTerm, members]);

  const showProfileModal = (member) => {
    Swal.fire({
      customClass: {
        popup:
          "bg-[#1B262C] text-white rounded-xl shadow-2xl p-0 overflow-hidden",
      },
      html: `
        <div class="flex flex-col items-center p-6">
          <div class="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg mb-5">
            ${member.name.charAt(0).toUpperCase()}
          </div>
  
          <h2 class="text-3xl font-extrabold mb-2">${member.name}</h2>
          <p class="text-base text-gray-400 mb-1">@${member.username}</p>
  
          <div class="w-full my-4 border-t border-gray-600"></div>
  
          <div class="w-full text-left text-sm space-y-2">
            <p><span class="font-semibold text-white">Divisi:</span> <span class="text-gray-400">${
              member.division || "Belum diatur"
            }</span></p>
            <p><span class="font-semibold text-white">Kelas:</span> <span class="text-gray-400">${
              member.class || "Belum diatur"
            }</span></p>
            <p><span class="font-semibold text-white">Email:</span> <span class="text-gray-400">${
              member.email || "Tidak tersedia"
            }</span></p>
          </div>
  
          <div class="mt-6 w-full flex justify-end">
            <button id="closeProfileModal" class="px-4 py-2 bg-primary-blue hover:bg-secondary-blue rounded-lg text-white font-semibold">
              Tutup
            </button>
          </div>
        </div>
      `,
      showConfirmButton: false,
      didOpen: () => {
        document
          .getElementById("closeProfileModal")
          .addEventListener("click", () => Swal.close());
      },
      showCloseButton: true,
    });
  };

  const handleShareProject = async () => {
    try {
      if (!token || !workspaceId) {
        Swal.fire({
          title: "Akses Ditolak",
          text: "Token atau Workspace ID tidak ditemukan. Silakan login dan pilih workspace terlebih dahulu!",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
  
      let users = [];
      try {
        users = await getUser(token);
      } catch (error) {
        console.error("Gagal mengambil daftar pengguna:", error);
        Swal.fire({
          title: "Error",
          text: "Gagal memuat daftar pengguna.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
  
      if (!users.length) {
        Swal.fire({
          title: "Tidak Ada Pengguna",
          text: "Tidak ada pengguna yang tersedia untuk diundang.",
          icon: "info",
          confirmButtonText: "OK",
        });
        return;
      }
  
      const { value: username } = await Swal.fire({
        title: "👥 Share Project",
        html: `
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">
              Pilih Anggota
            </label>
            <select 
              id="swal-username" 
              class="w-full px-4 py-2 rounded-lg bg-primary-blue focus:ring-blue-500 text-white appearance-none"
            >
              ${users
                .map(
                  (user) => `
                <option class="bg-primary-blue hover:bg-blue-600 text-blue-300 text-sm" value="${user.username}">
                  👤 ${user.username}
                </option>
              `
                )
                .join("")}
            </select>
          </div>
        `,
        background: "#1B262C",
        showCancelButton: true,
        confirmButtonText: "Tambah Member",
        preConfirm: async () => {
          const select = document.getElementById("swal-username");
          const username = select.value.trim();
  
          if (!username) {
            Swal.showValidationMessage("Username harus dipilih!");
            return false;
          }
  
          try {
            // Memanggil fungsi inviteUser dengan format yang benar
            await inviteUser(workspaceId, username, token);
            return username;
          } catch (error) {
            Swal.showValidationMessage(
              error.response?.data?.message ||
              error.message ||
              "Gagal mengundang user"
            );
            return false;
          }
        },
      });
  
      if (username) {
        Swal.fire({
          title: "Berhasil! 🎉",
          text: `User @${username} berhasil diundang ke workspace`,
          background: "#1B262C",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire({
        title: "Error",
        text: "Terjadi kesalahan saat membagikan proyek.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="lg:h-screen overflow-hidden w-full 2xl:text-lg p-3 flex flex-col gap-2 py-5">
      <div className="flex w-full flex-col-reverse lg:flex-row relative justify-center items-center gap-2">
        <div className="w-full lg:w-1/2">
          <div className="inverted-member text-xs flex flex-col items-start justify-center gap-2 p-4">
            <h3 className="font-semibold text-lg lg:text-2xl uppercase">
              Kolaborator
            </h3>
            <p className="text-sm lg:text-base leading-relaxed text-gray-400">
              🤝 Ide hebat lahir dari pikiran yang terhubung.
              <br />
              Ayo kolaborasi, wujudkan sesuatu yang luar biasa!
            </p>
          </div>
        </div>
        <div className="hidden w-14 h-14 absolute -bottom-8 bg-primary-blue text-white rounded-full lg:flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-2">
          <div className="inverted-profil flex justify-between items-center p-5 gap-4">
            <div className="ml-4 w-1/2">
              <div className="text-lg lg:text-2xl font-bold">GoTask</div>
              <div className="text-sm lg:text-base text-gray-400">
                Projek IT Club
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-2">
              <button
                onClick={handleShareProject}
                className="bg-blue-500 text-white w-full px-2 py-1 rounded-lg hover:bg-blue-600"
              >
                Invite Members
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 mt-5">
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Workspace Member</h1>
        <p className="text-sm lg:text-base text-gray-400 mb-4 leading-relaxed">
          Anggota Ruang Kerja dapat menjelajahi, bergabung, dan berkontribusi
          <br />
          di semua papan yang tersedia, serta bebas membuat papan baru sesuai
          kebutuhan tim.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Filter dengan nama"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-2 text-sm lg:text-base border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
          />
          {filteredMembers.length === 0 ? (
            <div className="text-center py-6 bg-blue-50 rounded-xl text-gray-600">
              Tidak ada anggota ditemukan
            </div>
          ) : (
            filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col lg:flex-row justify-between items-center border-y border-white py-2 gap-4"
              >
                <div className="flex gap-2 w-full lg:w-2/3">
                  <div className="logo bg-green-600 w-9 h-9 flex justify-center items-center text-xs rounded-full text-white">
                    <p>{member.name.charAt(0).toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-base font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">
                      @{member.username} • {member.division || "Divisi belum diatur"} • Kelas{" "}
                      {member.class || "Tidak tersedia"}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-between lg:justify-center items-center gap-2">
                  <button
                    onClick={() => showProfileModal(member)}
                    className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2"
                  >
                    <Users size={16} /> Lihat profil
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DasboardMember;
