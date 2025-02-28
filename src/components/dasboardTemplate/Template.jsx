import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

const Template = () => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBoards = async () => {
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

  const handleAddWorkspaceClick = () => {
    Swal.fire({
      title: "Buat Workspace Baru",
      html: `
        <input id="swal-input-title" class="swal2-input" placeholder="Masukkan judul workspace">
        <select id="swal-input-color" class="swal2-input">
          <option value="">Pilih warna</option>
          <option value="${availableColors[0]}">Merah-Kuning</option>
          <option value="${availableColors[1]}">Biru-Hijau</option>
          <option value="${availableColors[2]}">Ungu-Pink-Merah</option>
          <option value="${availableColors[3]}">Abu-Abu-Hitam</option>
        </select>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const title = document.getElementById("swal-input-title").value;
        const color = document.getElementById("swal-input-color").value;
        if (!title.trim()) {
          Swal.showValidationMessage("Judul tidak boleh kosong");
        }
        return { title: title.trim(), color };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { title, color } = result.value;
        try {
          const token = localStorage.getItem("token");
          const response = await createWorkspace(title, color, token);
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
      }
    });
  };

  const handleDeleteWorkspace = async (workspace) => {
    Swal.fire({
      title: "Hapus Workspace",
      text: `Hapus workspace "${workspace.workspace}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteWorkspace(workspace.id, token);
          setBoards((prev) => prev.filter((ws) => ws.id !== workspace.id));
          Swal.fire("Berhasil", "Workspace dihapus", "success");
        } catch (error) {
          Swal.fire("Error", error.message, "error");
        }
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

  return (
    <div className="flex flex-wrap justify-start mt-5 items-center gap-5 p-2 overflow-y-auto custom-scroll">
      <div className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] border-2 p-4 border-primary-blue bg-secondary-blue bg-opacity-10 h-28 rounded-md">
        <div className="h-3/4 flex justify-center items-center">
          <button onClick={handleAddWorkspaceClick}>+</button>
        </div>
        <div className="h-1/4 flex justify-start items-start">
          <p>Buat board baru</p>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : boards.length > 0 ? (
        boards.map((workspace) => (
          <div
            key={workspace.id}
            className="w-full sm:w-[48%] md:w-[48%] xl:w-[32%] flex flex-col gap-1 cursor-pointer"
          >
            <NavLink
              to={`/Dasboard-Proyek/${workspace.id}`}
              onClick={() => localStorage.setItem("workspaceId", workspace.id)}
            >
              <div className={`w-full p-4 h-28 rounded-md ${workspace.color || "bg-gray-700"}`}>
                <div className="flex justify-start items-center">
                  <p>{workspace.workspace}</p>
                </div>
              </div>
            </NavLink>
            <div className="flex justify-between items-center">
              <span className="border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md px-3">
                {workspace.username}
              </span>
              <div className="flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditWorkspace(workspace);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-1.414.586H4a1 1 0 01-1-1v-2.586a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0z" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteWorkspace(workspace);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-.894.553L4.382 4H3a1 1 0 000 2h1v9a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-1.382l-.724-1.447A1 1 0 0014 2H6zm2 5a1 1 0 112 0v6a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v6a1 1 0 11-2 0V7z"
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
          <p>Belum ada workspace</p>
        </div>
      )}
    </div>
  );
};

export default Template;
