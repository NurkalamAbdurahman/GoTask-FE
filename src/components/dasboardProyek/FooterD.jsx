import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, inviteUser } from "../CRUD/Users/userService";
import Swal from "sweetalert2";
import {
  getWorkspaces,
  updateWorkspace,
} from "../CRUD/Workspaces/workspaceService";
import { LoadingSpinner } from "../Lainnya/Loading";

const FooterD = () => {
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUsername = localStorage.getItem("username");
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  const token = localStorage.getItem("token");
  const workspaceId = localStorage.getItem("workspaceId");

  useEffect(() => {
    const fetchData = async () => {
      if (!token || !workspaceId) {
        setError("Token atau Workspace ID tidak ditemukan");
        setLoading(false);
        return;
      }

      try {
        const workspaces = await getWorkspaces(token);
        if (!workspaces || workspaces.length === 0) {
          throw new Error("Tidak ada workspace tersedia");
        }

        const selectedWorkspace = workspaces.find(
          (w) => String(w.id) === workspaceId
        );

        if (!selectedWorkspace) {
          throw new Error("Workspace tidak ditemukan");
        }

        setWorkspace(selectedWorkspace);

        const usersData = await getUser(token);
        const filteredUsers = (usersData || []).filter(
          (user) => user.username !== currentUsername
        );
        setUsers(filteredUsers);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Terjadi kesalahan saat mengambil data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, workspaceId, currentUsername]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workspaces = await getWorkspaces(token);
        const selectedWorkspace = workspaces.find(
          (w) => String(w.id) === workspaceId
        );

        if (selectedWorkspace) {
          setWorkspace(selectedWorkspace);
          setMembers(selectedWorkspace.member || []);
        }
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, workspaceId]);

  const handleEditWorkspace = () => {
    Swal.fire({
      title: "✏️ Edit Workspace",
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Nama Workspace</label>
            <input id="swal-edit-workspace" 
                   class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
                   value="${workspace.workspace}">
          </div>
        </div>
      `,
      background: "#1B262C",
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-blue-400",
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colors",
      },
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const input = document.getElementById("swal-edit-workspace");
        const value = input.value.trim();
        if (!value) {
          Swal.showValidationMessage("Nama workspace tidak boleh kosong!");
          return false;
        }
        return value;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newName = result.value;
        try {
          await updateWorkspace(workspace.id, { workspace: newName }, token);
          setWorkspace((prev) => ({ ...prev, workspace: newName }));
          Swal.fire({
            title: "Berhasil! ✅",
            text: `Workspace "${newName}" berhasil diperbarui`,
            background: "#1B262C",
            customClass: {
              title: "text-blue-100",
              popup: "border-2 border-blue-400",
            },
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            title: "Gagal! ❌",
            text: error.message || "Terjadi kesalahan saat memperbarui",
            background: "#1B262C",
            customClass: {
              title: "text-blue-100",
              popup: "border-2 border-red-400",
            },
          });
        }
      }
    });
  };

  const handleShareProject = async () => {
    if (!users || users.length === 0) {
      Swal.fire({
        title: "Tidak Ada User",
        text: "Tidak ada user yang tersedia untuk diundang",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "👥 Share Project",
      html: `
        <div>
          <label class="block text-sm font-medium text-blue-100 mb-1">
            Pilih Anggota
          </label>
          <select 
            id="swal-username" 
            class="w-full px-4 py-2 rounded-lg bg-primary-blue focus:ring-blue-500 text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmZjMGRmIiBkPSJNMTIgMTUuNWwzLjUtMy41aC03eiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]"
          >
            ${users
              .map(
                (user) => `
              <option value="${user.username}" class="bg-primary-blue hover:bg-blue-600 text-blue-300 text-sm">
                ${user.username}
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
          Swal.showValidationMessage("Username harus diisi!");
          return false;
        }

        try {
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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil! 🎉",
          text: `User @${result.value} berhasil diundang ke workspace`,
          background: "#1B262C",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleMemberClick = (member) => {
    Swal.fire({
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
              member.division || "Belum di atur"
            }</span></p>
            <p><span class="font-semibold text-white">Kelas:</span> <span class="text-gray-400">${
              member.class || "Belum diatur"
            }</span></p>
            <p><span class="font-semibold text-white">Email:</span> <span class="text-gray-400">${
              member.email || "Tidak tersedia"
            }</span></p>
          </div>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: false,
      background: "#1B262C",
      customClass: {
        popup: "rounded-xl border-2 border-blue-400 shadow-lg",
      },
    });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="border border-primary-blue bg-secondary-blue bg-opacity-10 px-4 py-3 my-4 flex flex-wrap justify-between items-center w-full lg:w-3/4 bg-blur-lg rounded-2xl gap-4">
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <button
          onClick={handleEditWorkspace}
          className="text-white text-sm font-medium hover:underline"
        >
          {workspace?.workspace || "Workspace"}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/Dasboard-Proyek")}
            className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
          >
            Board
          </button>
          <NavLink
            to={`/Dasboard-Table/${workspaceId}`}
            className="bg-gray-700 text-white px-4 py-1 rounded-lg hover:bg-gray-800"
            onClick={(e) => {
              if (!workspaceId) {
                e.preventDefault();
                Swal.fire(
                  "Peringatan",
                  "Silakan pilih workspace terlebih dahulu!",
                  "warning"
                );
              } else {
                localStorage.setItem("tableWorkspaceId", workspaceId);
              }
            }}
          >
            Table
          </NavLink>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex -space-x-2">
          {members.map((memberId, index) => {
            const user = users.find((user) => user.id === memberId);
            if (user) {
              const initials = user.username
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase();

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleMemberClick(user)}
                >
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {initials}
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {user.username}
                    <div className="absolute w-2 h-2 bg-gray-700 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              );
            }
          })}

          {currentUsername && (
            <div
              className="relative group"
            >
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                {currentUsername
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                {currentUsername}
                <div className="absolute w-2 h-2 bg-gray-700 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleShareProject}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default FooterD;
