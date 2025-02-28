import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getWorkspaces, updateWorkspace } from "../CRUD/Workspaces/workspaceService";

const FooterD = () => {
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const token = localStorage.getItem("token");
  const workspaceId = localStorage.getItem("workspaceId");

  // Ambil detail workspace dari API, berdasarkan workspaceId yang tersimpan di localStorage
  useEffect(() => {
    const fetchWorkspaceDetail = async () => {
      try {
        const data = await getWorkspaces(token);
        const foundWorkspace = data.find(
          (ws) => ws.id.toString() === workspaceId
        );
        if (!foundWorkspace) {
          throw new Error("Workspace tidak ditemukan");
        }
        setWorkspace(foundWorkspace);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token && workspaceId) {
      fetchWorkspaceDetail();
    } else {
      setLoading(false);
      setError("Token atau Workspace ID tidak ditemukan");
    }
  }, [token, workspaceId]);

  // Fungsi untuk mengedit judul workspace menggunakan SweetAlert2
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
          // Panggil API untuk mengupdate workspace
          await updateWorkspace(workspace.id, newName, token);
          // Perbarui state workspace dengan judul baru
          setWorkspace((prev) => ({ ...prev, workspace: newName }));
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

  const handleShareProject = () => {
    Swal.fire({
      title: "Share Project",
      html: `<input id="swal-username" type="text" class="swal2-input" placeholder="Masukkan username anggota">`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Add Member",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const username = document.getElementById("swal-username").value;
        if (!username || !username.trim()) {
          Swal.showValidationMessage("Username tidak boleh kosong!");
        }
        return username;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const username = result.value;
        console.log("Member added:", username);
        Swal.fire({
          icon: "success",
          title: "Member Added",
          text: `Member dengan username ${username} telah ditambahkan.`,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  if (loading) return <p>Loading workspace...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="border border-primary-blue bg-secondary-blue bg-opacity-10 px-4 py-2 my-4 flex flex-wrap justify-between items-center w-full lg:w-3/4 bg-blur-lg rounded-lg">
      <div className="flex flex-wrap items-center justify-between space-x-3 w-full lg:w-auto mb-2 lg:mb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
          {/* Tombol judul yang dapat diklik untuk mengedit workspace */}
          <button
            onClick={() => handleEditWorkspace(workspace)}
            className="text-white text-sm font-medium hover:underline focus:outline-none"
          >
            {workspace.workspace}
          </button>
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
        <div className="flex items-center -space-x-2">
          {/* Contoh avatar anggota */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-black border-2 border-white">
            NZ
          </div>
        </div>
        <button
          onClick={handleShareProject}
          className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default FooterD;
