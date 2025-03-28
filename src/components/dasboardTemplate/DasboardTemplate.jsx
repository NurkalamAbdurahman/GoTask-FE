import "./Dasboard.css";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from "../CRUD/Workspaces/workspaceService";
import { LoadingSpinner } from "../Lainnya/Loading";
import { getUser } from "../CRUD/Users/userService";

const availablecolours = [
  "from-red-900 to-gray-900",
  "from-blue-900 to-gray-900",
  "from-purple-900 via-pink-900 to-gray-900",
  "from-gray-900 to-gray-900",
];

const DasboardTemplate = () => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Terbaru");
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBoards, setFilteredBoards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [usernameFilter, setUsernameFilter] = useState("semua");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) throw new Error("Token tidak ditemukan");
        const userData = await getUser(token);
        const matchedUser = userData.find(
          (user) => user.username === localStorage.getItem("username")
        );
        setCurrentUser(matchedUser || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchBoards = async () => {
      setLoading(true);
      try {
        const data = await getWorkspaces(token);
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format from server");
        }
        setBoards(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setBoards([]);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchBoards();
    else navigate("/login");
  }, [token, navigate]);

  useEffect(() => {
    const applyFiltersAndSorting = () => {
      let result = [...boards];

      if (searchQuery) {
        result = result.filter((workspace) =>
          workspace.workspace.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (usernameFilter !== "semua") {
        result = result.filter(
          (workspace) => workspace.username === usernameFilter
        );
      }

      switch (sortOption) {
        case "Terbaru":
          result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          break;
        case "Terlama":
          result.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
          break;
        default:
          break;
      }

      setFilteredBoards(result);
    };

    applyFiltersAndSorting();
  }, [boards, searchQuery, sortOption, usernameFilter]);

  // Ambil daftar username unik untuk filter
  const uniqueUsernames = [
    ...new Set(boards.map((workspace) => workspace.username)),
  ];

  const handleAddWorkspaceClick = () => {
    Swal.fire({
      title: "🎨 Buat Workspace Baru",
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Judul Workspace</label>
            <input id="swal-input-title" 
                   class="w-full px-4 py-2 rounded-lg bg-primary-blue focus:ring-blue-500 text-white placeholder-blue-300 transition-all" 
                   placeholder="Masukkan nama workspace">
          </div>
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Pilih Warna Tema</label>
            <select id="swal-input-colour" 
                    class="w-full px-4 py-2 rounded-lg bg-primary-blue focus:ring-blue-500 text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmZjMGRmIiBkPSJNMTIgMTUuNWwzLjUtMy41aC03eiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]">
              <option value="${availablecolours[3]}" class="bg-primary-blue hover:bg-blue-600">Default</option>
              <option value="${availablecolours[0]}" class="bg-primary-blue hover:bg-blue-600">Merah-black</option>
              <option value="${availablecolours[1]}" class="bg-primary-blue hover:bg-blue-600">Biru-black</option>
              <option value="${availablecolours[2]}" class="bg-primary-blue hover:bg-blue-600">Ungu-Pink-black</option>
            </select>
          </div>
        </div>
      `,
      background: "#1B262C",
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-blue-400",
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-colours",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colours",
      },
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Buat",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const title = document.getElementById("swal-input-title").value;
        const colour = document.getElementById("swal-input-colour").value;
        if (!title.trim()) {
          Swal.showValidationMessage("Judul tidak boleh kosong");
        }
        return { title: title.trim(), colour };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { title, colour } = result.value;
        try {
          const token = localStorage.getItem("token");
          const response = await createWorkspace(title, colour, token);
          const newWorkspace = response.workspace;
          console.log("Workspace berhasil dibuat:", newWorkspace);
          if (newWorkspace && newWorkspace.id && newWorkspace.workspace) {
            setBoards([...boards, newWorkspace]);
            Swal.fire({
              title: "Berhasil! 🎉",
              text: response.message,
              timer: 2000,
              showConfirmButton: false,
              background: "#1B262C",
              customClass: {
                title: "text-2xl font-bold text-blue-100",
                popup: "rounded-xl border-2 border-blue-400",
              },
            });
          } else {
            throw new Error("Response tidak valid dari server");
          }
        } catch (error) {
          console.error("Gagal membuat workspace:", error);
          Swal.fire({
            title: "Gagal Membuat Workspace",
            text:
              error.response?.data?.message ||
              error.message ||
              "Terjadi kesalahan saat membuat workspace. Silakan coba lagi.",
          });
        }
      }
    });
  };

  const handleDeleteWorkspace = (workspace) => {
    Swal.fire({
      title: "⚠️ Hapus Workspace",
      html: `<p class="text-blue-100">Anda yakin ingin menghapus <strong class="text-red-400">"${workspace.workspace}"</strong> secara permanen?</p>`,
      background: "#1B262C",
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-red-400",
        confirmButton:
          "bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold transition-colors",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colors",
      },
      showCancelButton: true,
      confirmButtonText: "Hapus Permanen",
      cancelButtonText: "Batal",
      focusConfirm: false,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteWorkspace(workspace.id, token);
          setBoards((prev) => prev.filter((ws) => ws.id !== workspace.id));

          Swal.fire({
            title: "Terhapus! 🗑️",
            html: `<p class="text-blue-100">Workspace <strong>${workspace.workspace}</strong> berhasil dihapus</p>`,
            background: "#1B262C",
            customClass: {
              popup: "border-2 border-blue-400",
            },
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            title: "Gagal! ⚠️",
            html: `<p class="text-blue-100">Gagal menghapus workspace: <br/> <span class="text-red-400">Anda Tidak Memiliki AKSES!!!</span></p>`,
            background: "#1B262C",
            customClass: {
              popup: "border-2 border-red-400",
              title: "text-red-400",
            },
          });
          console.error("Delete error:", error);
        }
      }
    });
  };

  const handleEditWorkspace = (workspace) => {
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

          setBoards((prev) =>
            prev.map((ws) =>
              ws.id === workspace.id ? { ...ws, workspace: newName } : ws
            )
          );

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
            html: `<p class="text-blue-100">Gagal mengupdate workspace: <br/> <span class="text-red-400">Anda Tidak Memiliki AKSES!!!</span></p>`,
            background: "#1B262C",
            customClass: {
              title: "text-blue-100",
              popup: "border-2 border-red-400",
            },
          });
          console.error("Update error:", error);
        }
      }
    });
  };

  const showProfileModal = () => {
    if (!currentUser) return;

    Swal.fire({
      customClass: {
        popup:
          "bg-[#1B262C] text-white rounded-xl shadow-2xl p-0 overflow-hidden",
      },
      html: `
        <div class="flex flex-col items-center p-6">
          <div class="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg mb-5">
            ${currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "?"}
          </div>

          <h2 class="text-3xl font-extrabold mb-2">${
            currentUser.name || "Tidak tersedia"
          }</h2>
          <p class="text-base text-gray-400 mb-1">@${
            currentUser.username || "Tidak tersedia"
          }</p>

          <div class="w-full my-4 border-t border-gray-600"></div>

          <div class="w-full text-left text-sm space-y-2">
            <p><span class="font-semibold text-white">Divisi:</span> <span class="text-gray-400">${
              currentUser.division || "Belum diatur"
            }</span></p>
            <p><span class="font-semibold text-white">Kelas:</span> <span class="text-gray-400">${
              currentUser.class || "Belum diatur"
            }</span></p>
            <p><span class="font-semibold text-white">Email:</span> <span class="text-gray-400">${
              currentUser.email || "Tidak tersedia"
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

  return (
    <div className="lg:h-screen overflow-hidden h-auto w-full p-3">
      <div className="flex w-full lg:relative flex-col lg:flex-row justify-center items-center gap-2">
        <div className="lg:w-1/2 w-full">
          <div className="inner-dasboard w-full px-8 py-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="flex items-center font-semibold text-base sm:text-lg lg:text-xl uppercase mb-4 border-b border-gray-700 pb-2">
              Board
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start transition-colors duration-200 hover:text-blue-400">
                <span className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm 2xl:text-lg text-gray-400">
                  Tetap terorganisir: Semua tugasmu jadi lebih mudah dilacak.
                </span>
              </li>
              <li className="flex items-start transition-colors duration-200 hover:text-blue-400">
                <span className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm 2xl:text-lg text-gray-400">
                  Meningkatkan produktivitas: Fokus pada tugas paling penting.
                </span>
              </li>
              <li className="flex items-start transition-colors duration-200 hover:text-blue-400">
                <span className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm 2xl:text-lg text-gray-400">
                  Bekerja sama dengan tim: Ajak rekan untuk kolaborasi dalam
                  satu papan.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-14 h-14 absolute hidden top-[4.8rem] bg-primary-blue text-white rounded-full lg:flex items-center justify-center text-2xl font-bold">
          G
        </div>

        <div className="lg:w-1/2 flex flex-col w-full gap-2">
          <div className="inverted-profil flex justify-between items-center p-5 bg-secondary-blue/10 rounded-md shadow-sm">
            <div className="flex flex-col">
              <p className="text-xl 2xl:text-2xl font-bold text-white">
                GoTask
              </p>
              <p className="text-sm 2xl:text-lg text-gray-400">
                Projek IT Club
              </p>
            </div>
            <button
              onClick={showProfileModal}
              className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5H9v2H7v2h2v2h2v-2h2V7h-2z" />
              </svg>
              <span className="text-sm 2xl:text-lg ">Lihat Profil</span>
            </button>
          </div>

          <div className="inverted-search bg-secondary-blue/10 rounded-md flex justify-center items-center flex-col shadow-sm">
            <div className="p-4 flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label className="font-medium text-sm text-gray-200 tracking-wide">
                  Pencarian
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.65 10.65a7.5 7.5 0 006.5 6.5z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Cari Boards"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-sm rounded-md 
                   bg-secondary-blue text-white placeholder-gray-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Sort */}
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium text-sm text-gray-200 tracking-wide">
          Urutkan berdasarkan
        </label>
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full py-2 px-3 text-sm rounded-md bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 appearance-none"
          >
            <option value="Terbaru">Terbaru</option>
            <option value="Terlama">Terlama</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium text-sm text-gray-200 tracking-wide">
          Filter berdasarkan
        </label>
        <div className="relative">
          <select
            value={usernameFilter}
            onChange={(e) => setUsernameFilter(e.target.value)}
            className="w-full py-2 px-3 text-sm rounded-md bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 appearance-none"
          >
            <option value="semua">Semua</option>
            {uniqueUsernames.map((username) => (
              <option key={username} value={username}>
                {username}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-start mt-5 items-center gap-5 p-2 overflow-y-auto custom-scroll h-80">
        <div className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] p-4 h-28 rounded-md bg-secondary-blue/10 border border-primary-blue/30 shadow-sm">
          <div className="h-3/4 flex justify-center items-center">
            <button
              onClick={handleAddWorkspaceClick}
              className="text-3xl text-white hover:text-blue-400 transition-colors"
            >
              +
            </button>
          </div>
          <div className="h-1/4 flex items-start">
            <p className="text-white text-sm">Buat board baru</p>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredBoards.length > 0 ? (
          filteredBoards.map((workspace) => (
            <div
              key={workspace.id}
              className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] flex flex-col gap-1 cursor-pointer"
            >
              <NavLink
                to={`/Dasboard-Proyek/${workspace.id}`}
                onClick={() =>
                  localStorage.setItem("workspaceId", workspace.id)
                }
              >
                <div
                  className={`w-full p-4 h-28 rounded-md shadow-sm bg-gradient-to-r ${
                    workspace.colour || "bg-gray-700"
                  }`}
                >
                  <div className="flex justify-start items-center">
                    <p className="text-white text-sm font-semibold">
                      {workspace.workspace}
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className="flex justify-between items-center mt-1">
                <span className="border border-primary-blue/30 bg-secondary-blue/10 rounded-md px-3 py-1 text-sm text-white">
                  {workspace.username}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditWorkspace(workspace);
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-1.414.586H4a1 1 0 01-1-1v-2.586a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteWorkspace(workspace);
                    }}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-.894.553L4.382 4H3a1 1 0 000 2h1v9a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-1.382 l-.724-1.447A1 1 0 0014 2H6zm2 5a1 1 0 112 0v6a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-4">
            <p className="text-white">Belum ada workspace</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DasboardTemplate;
