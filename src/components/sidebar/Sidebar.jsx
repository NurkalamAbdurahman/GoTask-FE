import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/icon/GoTask.png";
import Board from "../../assets/images/icon/board.png";
import Member from "../../assets/images/icon/member.png";
import Table from "../../assets/images/icon/table.png";
import "./Sidebar.css";
import Swal from "sweetalert2";
import { useLogout } from "../LogOut/Logout";
import {
  getWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from "../CRUD/Workspaces/workspaceService";
import { LoadingSpinner } from "../Lainnya/Loading";

const availablecolours = [
  "from-red-900 to-gray-900",
  "from-blue-900 to-gray-900",
  "from-purple-900 via-pink-900 to-gray-900",
  "from-gray-900 to-gray-900",
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleLogout = useLogout();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        title: "Akses Ditolak",
        text: "Token tidak ditemukan. Silakan login terlebih dahulu!",
        showConfirmButton: true,
      }).then(() => {
        navigate("/Login");
      });
    } else {
      const fetchBoards = async () => {
        try {
          const data = await getWorkspaces(token);
          setBoards(data);
        } catch (err) {
          if (!axios.isCancel(err)) {
            console.error("Error fetching boards:", err);
            setError(err.message || "Gagal memuat data workspace");
            setBoards([]);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchBoards();
    }

    return () => {
      source.cancel("Component unmounted, canceling request");
    };
  }, [navigate]);

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
              title: "Berhasil! ✅",
              html: `<p class="text-blue-100">Workspace <strong>${title}</strong> berhasil dibuat</p>`,
              background: "#1B262C",
              customClass: {
                popup: "border-2 border-blue-400",
              },
              timer: 2000,
              showConfirmButton: false,
            });
          } else {
            throw new Error("Response tidak valid dari server");
          }
        } catch (error) {
          console.error("Gagal membuat workspace:", error);
          Swal.fire({
            title: "Gagal! ❌",
            html: `<p class="text-blue-100">Gagal membuat workspace: <br/> <span class="text-red-400">${title}</span></p>`,
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
          const token = localStorage.getItem("token");
          await updateWorkspace(workspace.id, { workspace: newName }, token);

          setBoards((prev) =>
            prev.map((ws) =>
              ws.id === workspace.id ? { ...ws, workspace: newName } : ws
            )
          );

          Swal.fire({
            title: "Berhasil! ✅",
            html: `<p class="text-blue-100">Workspace <strong>${newName}</strong> berhasil diperbarui</p>`,
            background: "#1B262C",
            customClass: {
              popup: "border-2 border-blue-400",
            },
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            title: "Gagal! ❌",
            html: `<p class="text-blue-100">Gagal membuat workspace: <br/> <span class="text-red-400">${newName}</span></p>`,
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
          const token = localStorage.getItem("token");
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
            title: "Gagal! ❌",
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

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-primary-blue text-white rounded-full shadow-lg focus:outline-none hover:scale-110 transition-transform duration-300"
        onClick={toggleMobileSidebar}
      >
        {isMobileSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        className={`lg:h-screen fixed lg:relative z-40 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-80"
        } bg-latar-blue text-white flex flex-col p-4 gap-4 border-r border-primary-blue ${
          isMobileSidebarOpen ? "left-0" : "-left-full lg:left-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary-blue">
          {!isCollapsed && (
            <div className="p-4 text-2xl xl:text-4xl font-bold flex items-center">
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
          )}
          <button
            className="py-1 px-2 rounded text-white bg-secondary-blue text-sm hover:text-white m-2 xl:text-lg focus:outline-none"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? ">" : "<"}
          </button>
        </div>

        <div className="p-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
          <nav className={`${isCollapsed ? "px-0" : "px-4"} flex-1`}>
            <div className="mb-4">
              <h3
                className={`font-bold flex justify-between items-center uppercase mb-2 text-sm 2xl:text-base ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                GoTask Link
              </h3>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img
                      src={Board}
                      alt="Board"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`text-sm 2xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Board
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                <NavLink
                    to={(() => {
                      const workspaceId = localStorage.getItem("workspaceId");
                      return `/Dasboard-Member/${workspaceId}`;
                    })()}
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                    onClick={(e) => {
                      const workspaceId = localStorage.getItem("workspaceId");
                      if (workspaceId) {
                        localStorage.setItem("memberWorkspaceId", workspaceId);
                      } else {
                        e.preventDefault();
                        Swal.fire({
                          title: "Peringatan",
                          text: "Silakan pilih workspace terlebih dahulu!",

                        });
                      }
                    }}
                  >
                    <img
                      src={Member}
                      alt="Member"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`text-sm 2xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Member
                    </span>
                  </NavLink>
                </li>
                {/* <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Setting"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img
                      src={Setting}
                      alt="Setting"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Workspace settings
                    </span>
                  </NavLink>
                </li> */}
              </ul>
            </div>

            <div className="mb-4">
              <h3
                className={`font-bold flex justify-between items-center uppercase mb-2 text-sm 2xl:text-base ${
                  isCollapsed ? "hidden" : "block"
                } flex justify-between items-center`}
              >
                GoTask Views
              </h3>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to={(() => {
                      const workspaceId = localStorage.getItem("workspaceId");
                      return `/Dasboard-Table/${workspaceId}`;
                    })()}
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                    onClick={(e) => {
                      const workspaceId = localStorage.getItem("workspaceId");
                      if (workspaceId) {
                        localStorage.setItem("tableWorkspaceId", workspaceId);
                      } else {
                        e.preventDefault();
                        Swal.fire({
                          title: "Peringatan",
                          text: "Silakan pilih workspace terlebih dahulu!",
                        });
                      }
                    }}
                  >
                    <img
                      src={Table}
                      alt="Table"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`text-sm 2xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Table
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3
                className={`font-bold flex justify-between items-center uppercase mb-2 text-sm 2xl:text-base ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Your Workspaces
                <button
                  onClick={handleAddWorkspaceClick}
                  className="px-2 py-1 rounded hover:bg-secondary-blue"
                >
                  +
                </button>
              </h3>
              <ul
                className={`${
                  isCollapsed ? "h-auto" : "h-60 overflow-y-auto custom-scroll"
                }`}
              >
                {loading ? (
                  <LoadingSpinner />
                ) : error ? (
                  <li className="text-center text-red-500">{error}</li>
                ) : Array.isArray(boards) && boards.length > 0 ? (
                  boards.map((workspace) => (
                    <li key={workspace.id} className="mb-2">
                      <NavLink
                        to={`/Dasboard-Proyek/${workspace.id}`}
                        className={({ isActive }) =>
                          `flex w-full items-center justify-between px-2 py-2 rounded text-xs hover:bg-secondary-blue ${
                            isActive ? "bg-secondary-blue" : ""
                          }`
                        }
                        onClick={() =>
                          localStorage.setItem(
                            "workspaceId",
                            String(workspace.id)
                          )
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            className={`w-4 h-4 bg-gradient-to-r rounded ${workspace.colour}`}
                          ></span>
                          {!isCollapsed && (
                            <span className="text-sm 2xl:text-base">
                              {workspace.workspace}
                            </span>
                          )}
                        </div>

                        
                        {!isCollapsed && (
                          <div className="flex space-x-2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleEditWorkspace(workspace);
                              }}
                              className="text-blue-500 hover:text-blue-700"
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
                                e.preventDefault();
                                handleDeleteWorkspace(workspace);
                              }}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-.894.553L4.382 4H3a1 1 0 000 2h1v9a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-1.382l-.724-1.447A1 1 0 0014 2H6zm2 5a1 1 0 112 0v6a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V7z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li className="text-center">No workspaces found.</li>
                )}
              </ul>
            </div>
          </nav>
        </div>

        {!isCollapsed ? (
          <div>
            <button
              onClick={handleLogout}
              className="w-full px-2 py-1 bg-red-700 rounded-lg hover:bg-red-900 text-sm 2xl:text-base"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="w-full p-2 hover:bg-red-700 rounded-lg transition-colors"
              title="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
