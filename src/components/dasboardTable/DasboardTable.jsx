/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import { getCard } from "../CRUD/Cards/cardService";
import { getBoard } from "../CRUD/Boards/boardService";
import { getWorkspaces } from "../CRUD/Workspaces/workspaceService";
import { LoadingSpinner } from "../Lainnya/Loading";
import { getUser, inviteUser } from "../CRUD/Users/userService";

const DashboardTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("Terlama");
  const [filteredData, setFilteredData] = useState([]);
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");
  const workspaceId = localStorage.getItem("workspaceId");

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!workspaceId || !token) {
          throw new Error("Workspace ID atau Token tidak ditemukan!");
        }

        const workspaces = await getWorkspaces(token);
        const currentWorkspace = workspaces.find(
          (ws) => ws.id.toString() === workspaceId
        );

        if (!currentWorkspace) {
          throw new Error("Workspace tidak ditemukan!");
        }

        const workspaceColor =
          currentWorkspace?.color ||
          "bg-gradient-to-r from-gray-500 via-gray-700 to-black";

        const boards = await getBoard(workspaceId, token);
        const boardsWithCards = await Promise.all(
          boards.map(async (board) => {
            const cards = await getCard(board.id, token);
            return cards.map((card) => ({
              ...card,
              labels: card.label
                ? Array.isArray(card.label)
                  ? card.label
                  : [card.label]
                : [],
              rekan: card.rekan
                ? Array.isArray(card.rekan)
                  ? card.rekan
                  : [card.rekan]
                : [],
              boardName: board.nama,
              color: workspaceColor,
            }));
          })
        );

        const allCards = boardsWithCards.flat();
        setData(allCards);
        setFilteredData(allCards);

        const usersData = await getUser(token);
        setUsers(usersData || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        Swal.fire({
          title: "Error",
          text: err.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [workspaceId, token]);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return order === "Terbaru" ? dateB - dateA : dateA - dateB;
    });
    setFilteredData(sortedData);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredData.map((card) => ({
        Card: card.title || card.nama,
        List: card.boardName,
        Label: card.labels.join(", "),
        Rekan: card.rekan.join(", "),
        Tanggal: formatDate(card.created_at),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Kartu");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(dataBlob, "TaskManagement.xlsx");
  };

  const handleFeedback = () => {
    Swal.fire({
      title: "💡 Berikan Saran",
      background: "#1B262C",
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Judul</label>
            <input id="title" 
                   class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
                   placeholder="Masukkan judul saran">
          </div>
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Deskripsi</label>
            <textarea id="description" 
                      class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all h-32"
                      placeholder="Tuliskan deskripsi lengkap"></textarea>
          </div>
        </div>
      `,
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-blue-400",
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colors",
      },
      showCancelButton: true,
      confirmButtonText: "Kirim",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        if (!title?.trim() || !description?.trim()) {
          Swal.showValidationMessage("Judul dan Deskripsi tidak boleh kosong!");
          return false;
        }

        return {
          title: title.trim(),
          description: description.trim(),
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, description } = result.value;
        const recipientEmail = "test@gmail.com";
        const subject = encodeURIComponent(`[Feedback] ${title}`);
        const body = encodeURIComponent(
          `${description}\n\n---\nSent from MyApp`
        );
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        Swal.fire({
          title: "Terima kasih! 🎉",
          text: "Saran berhasil dikirim!",
          background: "#1B262C",
          customClass: {
            title: "text-blue-100",
            popup: "border-2 border-blue-400",
            confirmButton: "bg-blue-500 hover:bg-blue-600",
          },
        });
      }
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
  
      // Ambil daftar pengguna
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
  
      // Jika tidak ada user tersedia
      if (!users.length) {
        Swal.fire({
          title: "Tidak Ada Pengguna",
          text: "Tidak ada pengguna yang tersedia untuk diundang.",
          icon: "info",
          confirmButtonText: "OK",
        });
        return;
      }
  
      // Menampilkan dialog untuk memilih anggota
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
    <div className="lg:h-screen overflow-hidden w-[100%] 2xl:text-lg p-3 flex flex-col gap-2 py-5">
      <div className="flex w-full flex-col-reverse lg:flex-row relative justify-center items-center gap-2 ">
        <div className="w-full lg:w-1/2">
          <div className="inverted-member text-xs flex gap-4 p-4">
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl uppercase">
              Table <span>({filteredData.length})</span>
            </h3>
            <div className="w-full flex flex-col gap-2 px-4">
              <button
                onClick={exportToExcel}
                className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg"
              >
                Simpan sebagai excel
              </button>
              <div className="flex justify-center gap-2">
                <button
                  onClick={handleFeedback}
                  className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg"
                >
                  Berikan saran
                </button>
                <select
                  className="bg-secondary-blue w-40 text-center hover:bg-primary-blue py-1 text-xs rounded-lg"
                  value={sortOrder}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="Terbaru">Terbaru</option>
                  <option value="Terlama">Terlama</option>
                </select>
              </div>
            </div>
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
      <div className="inner-member2 text-sm 2xl:text-lg flex flex-col gap-4 p-4 pt-10 lg:h-5/6">
        <div className="overflow-y-auto custom-scroll">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <table className="min-w-full table-auto border-collapse text-sm 2xl:text-lg text-left text-white">
              <thead>
                <tr className="border-b border-gray-300 text-white">
                  <th className="px-4 py-2 whitespace-nowrap">Card</th>
                  <th className="px-4 py-2 whitespace-nowrap">List</th>
                  <th className="px-4 py-2 whitespace-nowrap">Label</th>
                  <th className="px-4 py-2 whitespace-nowrap">Rekan</th>
                  <th className="px-4 py-2 whitespace-nowrap">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((card) => (
                  <tr
                    key={card.id}
                    className="border-b border-gray-300 hover:bg-gray-700"
                  >
                    <td className="px-4 py-2 flex items-center gap-2">
                      <div
                        className={`${card.color} hidden lg:block w-5 h-4 rounded`}
                      ></div>
                      <span>{card.title || card.nama}</span>
                    </td>
                    <td className="px-4 py-2">{card.boardName}</td>
                    <td className="px-4 py-2">
                      {card.labels.length > 0 ? (
                        card.labels.map((label, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-1"
                          >
                            {label}
                          </span>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {card.rekan.length > 0 ? (
                        card.rekan.map((rekan, idx) => (
                          <span
                            key={idx}
                            className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-1"
                          >
                            {rekan}
                          </span>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td className="px-4 py-2">{formatDate(card.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
