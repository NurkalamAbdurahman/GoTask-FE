import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/icon/GoTask.png";
import Board from "../../assets/images/icon/board.png";
import Member from "../../assets/images/icon/member.png";
import Setting from "../../assets/images/icon/setting.png";
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

const availableColors = [
  "bg-gradient-to-r from-red-500 to-yellow-500",
  "bg-gradient-to-r from-blue-500 to-green-500",
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  "bg-gradient-to-r from-gray-500 via-gray-700 to-black",
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
        icon: "warning",
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

  const handleCreateWorkspace = async (workspaceName) => {
    try {
      const token = localStorage.getItem("token");
      const defaultColor = availableColors[0];
      const response = await createWorkspace(
        workspaceName,
        defaultColor,
        token
      );
      const newWorkspace = response.workspace;
      console.log("Workspace berhasil dibuat:", newWorkspace);
      if (newWorkspace && newWorkspace.id && newWorkspace.workspace) {
        setBoards([...boards, newWorkspace]);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: response.message,
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        throw new Error("Response tidak valid dari server");
      }
    } catch (error) {
      console.error("Gagal membuat workspace:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Membuat Workspace",
        text:
          error.response?.data?.message ||
          error.message ||
          "Terjadi kesalahan saat membuat workspace. Silakan coba lagi.",
      });
    }
  };

  const handleAddWorkspaceClick = () => {
    Swal.fire({
      title: "Buat Workspace Baru",
      input: "text",
      inputPlaceholder: "Masukkan nama workspace",
      showCancelButton: true,
      confirmButtonText: "Buat",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return "Nama workspace tidak boleh kosong!";
        }
      },
    }).then((result) => {
      if (result.isConfirmed && result.value.trim()) {
        handleCreateWorkspace(result.value.trim());
      }
    });
  };

  const handleEditWorkspace = (workspace) => {
    Swal.fire({
      title: "Edit Workspace",
      input: "text",
      inputValue: workspace.workspace,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return "Nama workspace tidak boleh kosong!";
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed && result.value.trim()) {
        const newName = result.value.trim();
        try {
          const token = localStorage.getItem("token");
          await updateWorkspace(workspace.id, newName, token);
          setBoards((prevBoards) =>
            prevBoards.map((ws) =>
              ws.id === workspace.id ? { ...ws, workspace: newName } : ws
            )
          );
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Workspace berhasil diperbarui",
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Error updating workspace:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Gagal memperbarui workspace. Silakan coba lagi.",
          });
        }
      }
    });
  };

  const handleDeleteWorkspace = (workspace) => {
    Swal.fire({
      title: "Hapus Workspace",
      text: `Anda yakin ingin menghapus workspace "${workspace.workspace}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await deleteWorkspace(workspace.id, token);
          setBoards((prevBoards) =>
            prevBoards.filter((ws) => ws.id !== workspace.id)
          );
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Workspace berhasil dihapus",
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Error deleting workspace:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Gagal menghapus workspace. Silakan coba lagi.",
          });
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

        {!isCollapsed && (
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 py-1 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
            />
          </div>
        )}

        <div className="p-2 border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
          <nav className={`${isCollapsed ? "px-0" : "px-4"} flex-1`}>
            <div className="mb-4">
              <h3
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
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
                      className={`xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Board
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Member"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img
                      src={Member}
                      alt="Member"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`xl:text-base ${
                        isCollapsed ? "hidden" : "ml-2"
                      }`}
                    >
                      Member
                    </span>
                  </NavLink>
                </li>
                <li className="mb-2">
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
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
                  isCollapsed ? "hidden" : "block"
                } flex justify-between items-center`}
              >
                GoTask Views
                <span className="px-2 py-1 rounded hover:bg-secondary-blue">
                  +
                </span>
              </h3>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/Dasboard-Table"
                    className={({ isActive }) =>
                      `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                        isActive ? "bg-secondary-blue" : ""
                      }`
                    }
                  >
                    <img
                      src={Table}
                      alt="Table"
                      className="object-cover w-3 2xl:w-5"
                    />
                    <span
                      className={`xl:text-base ${
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
                className={`font-bold uppercase text-sm mb-2 xl:text-lg ${
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
                  isCollapsed ? "h-auto" : "h-14 overflow-y-auto custom-scroll"
                }`}
              >
                {loading ? (
                  <li className="text-center">Loading workspaces...</li>
                ) : error ? (
                  <li className="text-center text-red-500">{error}</li>
                ) : Array.isArray(boards) && boards.length > 0 ? (
                  boards.map((workspace) => (
                    <li
                      key={workspace.id}
                      className="mb-2 flex items-center justify-between"
                    >
                      <NavLink
                        to={`/Dasboard-Proyek/${workspace.id}`}
                        className={({ isActive }) =>
                          `flex items-center px-2 py-1 rounded text-xs hover:bg-secondary-blue ${
                            isActive ? "bg-secondary-blue" : ""
                          }`
                        }
                        onClick={() =>
                          localStorage.setItem("workspaceId", workspace.id)
                        }
                      >
                        <div>
                          <span
                            className={`bg-gradient-to-r ${workspace.color} w-4 h-4 rounded`}
                          ></span>
                          <span
                            className={`xl:text-base ${
                              isCollapsed ? "hidden" : "ml-2"
                            }`}
                          >
                            {workspace.workspace}
                          </span>
                        </div>
                      </NavLink>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditWorkspace(workspace)}
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
                          onClick={() => handleDeleteWorkspace(workspace)}
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
              className="w-full px-2 py-1 bg-red-700 rounded-lg hover:bg-red-900 2xl:text-base"
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
