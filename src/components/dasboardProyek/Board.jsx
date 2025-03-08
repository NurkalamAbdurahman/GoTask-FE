/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FooterD from "./FooterD";
import Swal from "sweetalert2";
import {
  getWorkspaces,
} from "../CRUD/Workspaces/workspaceService";
import {
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
} from "../CRUD/Boards/boardService";
import {
  getCard,
  createCard,
  updateCard,
  deleteCard,
  moveCard,
} from "../CRUD/Cards/cardService";
import { LoadingSpinner } from "../Lainnya/Loading";

const labels = ["🔥 Urgent", "⚡ Prioritas", "🐢 Sloww", "🌴 Nyantai"];

const labelColours = {
  "🔥 Urgent": "bg-red-500 text-white",
  "⚡ Prioritas": "bg-yellow-400 text-black",
  "🐢 Sloww": "bg-green-500 text-white",
  "🌴 Nyantai": "bg-blue-500 text-white",
};

const Board = () => {
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);
  const [workspaceColour, setWorkspaceColour] = useState(""); 


  const workspaceId = localStorage.getItem("workspaceId");
  const token = localStorage.getItem("token");

  const saveBoardIdToLocalStorage = (id) => {
    const existingBoardIds = JSON.parse(localStorage.getItem("boardIDs")) || [];
    if (!existingBoardIds.includes(id)) {
      existingBoardIds.push(id);
      localStorage.setItem("boardIDs", JSON.stringify(existingBoardIds));
    }
  };

  const removeBoardIdFromLocalStorage = (id) => {
    const existingBoardIds = JSON.parse(localStorage.getItem("boardIDs")) || [];
    const updatedBoardIds = existingBoardIds.filter((item) => item !== id);
    localStorage.setItem("boardIDs", JSON.stringify(updatedBoardIds));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const workspaceId = localStorage.getItem("workspaceId");
        const token = localStorage.getItem("token");
  
        if (!workspaceId || !token) {
          throw new Error("Workspace ID or Token is missing!");
        }
  
        const workspaces = await getWorkspaces(token);
  
        const currentWorkspace = workspaces.find(
          (ws) => ws.id === parseInt(workspaceId)
        );
  
        if (currentWorkspace && currentWorkspace.colour) {
          setWorkspaceColour(currentWorkspace.colour);
        }
  
        const boards = await getBoard(workspaceId, token);
        setLists(boards);
  
        const allCards = [];
        for (const board of boards) {
          const cards = await getCard(board.id, token);
          const transformedCards = cards.map((card) => ({
            ...card,
            labels: card.label
              ? Array.isArray(card.label)
                ? card.label
                : [card.label]
              : [],
            board_id: board.id,
          }));
          allCards.push(...transformedCards);
        }
        setCards(allCards);
      } catch (err) {
        console.error("Error fetching boards or cards:", err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  // Membuat board baru
  const handleCreateBoard = async () => {
    if (!workspaceId || !token) {
      Swal.fire({
        title: "Error",
        text: "Workspace atau token tidak ditemukan.",
        background: "#1B262C",
      });
      return;
    }
  
    const { value: nama } = await Swal.fire({
      title: "📋 Buat List Baru",
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Nama List</label>
            <input id="swal-board-name" 
                   class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
                   placeholder="Contoh: Todo List">
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
      confirmButtonText: "Buat",
      cancelButtonText: "Batal",
      focusConfirm: false,
      preConfirm: () => {
        const input = document.getElementById("swal-board-name");
        const value = input.value.trim();
  
        if (!value) {
          Swal.showValidationMessage("Nama list wajib diisi!");
          return false;
        }
        return value;
      },
    });
  
    if (nama) {
      try {
        Swal.showLoading();
  
        const payload = { nama };
        const data = await createBoard(payload, workspaceId, token);
  
        saveBoardIdToLocalStorage(data.board.id);
        setLists((prev) => [
          ...prev,
          {
            id: data.board.id,
            nama: data.board.nama,
          },
        ]);
  
        Swal.close();
  
        Swal.fire({
          title: "Berhasil! 🎉",
          html: `<p class="text-blue-100">List <strong class="text-blue-400">${data.board.nama}</strong> berhasil dibuat</p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-blue-400",
          },
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.close();
  
        Swal.fire({
          title: "Gagal! ❌",
          html: `<p class="text-blue-100">Error: <span class="text-red-400">${
            err?.message || "Gagal membuat list baru"
          }</span></p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-red-400",
          },
        });
        console.error("Create board error:", err);
      }
    }
  };
  

  // Edit board
  const handleUpdateBoard = async (board) => {
    try {
      const { value: newName } = await Swal.fire({
        title: "✏️ Edit Nama Board",
        html: `
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-blue-100 mb-1">Nama Board</label>
              <input id="swal-board-name" 
                     class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
                     value="${board.nama}">
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
        showCancelButton: true,
        confirmButtonText: "Simpan Perubahan",
        cancelButtonText: "Batal",
        focusConfirm: false,
        preConfirm: () => {
          const input = document.getElementById("swal-board-name");
          const value = input.value.trim();

          if (!value) {
            Swal.showValidationMessage("Nama board tidak boleh kosong!");
            return false;
          }
          return value;
        },
      });

      if (newName) {
        await updateBoard(board.id, { nama: newName }, token);

        setLists((prev) =>
          prev.map((b) => (b.id === board.id ? { ...b, nama: newName } : b))
        );

        Swal.fire({
          title: "Berhasil! ✅",
          html: `<p class="text-blue-100">Board telah diperbarui ke <strong class="text-blue-400">${newName}</strong></p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-blue-400",
          },
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Gagal! ❌",
        html: `<p class="text-blue-100">Error: <span class="text-red-400">${
          err.message || "Terjadi kesalahan saat memperbarui board"
        }</span></p>`,
        background: "#1B262C",
        customClass: {
          popup: "border-2 border-red-400",
        },
      });
      console.error("Update board error:", err);
    }
  };

  // Hapus board
  const handleDeleteBoard = async (board) => {
    Swal.fire({
      title: "⚠️ Hapus Board",
      html: `<p class="text-blue-100">Anda yakin ingin menghapus board <strong class="text-red-400">"${board.nama}"</strong> secara permanen?</p>`,
      background: "#1B262C",
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-red-400",
        confirmButton:
          "bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold transition-colours",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colours",
      },
      showCancelButton: true,
      confirmButtonText: "Hapus Permanen",
      cancelButtonText: "Batal",
      focusConfirm: false,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBoard(board.id, token);
          removeBoardIdFromLocalStorage(board.id);
          setLists((prev) => prev.filter((b) => b.id !== board.id));

          Swal.fire({
            title: "Terhapus! 🗑️",
            html: `<p class="text-blue-100">Board <strong>${board.nama}</strong> berhasil dihapus</p>`,
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
            html: `<p class="text-blue-100">Gagal menghapus board: <span class="text-red-400">${error.message}</span></p>`,
            background: "#1B262C",
            customClass: {
              popup: "border-2 border-red-400",
              title: "text-red-400",
            },
          });
          console.error("Delete board error:", error);
        }
      }
    });
  };

  // Membuat kartu baru
  const handleAddCard = async (boardId) => {
    const { value: title } = await Swal.fire({
      title: "➕ Tambah Kartu Baru",
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Judul Kartu</label>
            <input id="swal-card-title" 
                   class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
                   placeholder="Contoh: Implementasi Fitur Login">
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
      showCancelButton: true,
      confirmButtonText: "Tambah Kartu",
      cancelButtonText: "Batal",
      focusConfirm: false,
      preConfirm: () => {
        const input = document.getElementById("swal-card-title");
        const value = input.value.trim();

        if (!value) {
          Swal.showValidationMessage("Judul kartu wajib diisi!");
          return false;
        }
        return value;
      },
    });

    if (title) {
      try {
        const response = await createCard(boardId, title, token);
        setCards((prev) => [...prev, response.card]);

        Swal.fire({
          title: "Berhasil! 🎉",
          html: `<p class="text-blue-100">Kartu <strong class="text-blue-400">"${title}"</strong> berhasil ditambahkan</p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-blue-400",
          },
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire({
          title: "Gagal! ❌",
          html: `<p class="text-blue-100">Error: <span class="text-red-400">${
            err.message || "Gagal menambahkan kartu"
          }</span></p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-red-400",
          },
        });
        console.error("Error adding card:", err);
      }
    }
  };

  // Edit kartu
  const handleUpdateCard = async (card) => {
    let uploadedFile = null;

    const { value: formValues } = await Swal.fire({
      title: "✏️ Edit Kartu",
      html: `
        <div class="space-y-4 text-left">
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Cover Image</label>
            <div class="flex gap-2">
              <button
                type="button"
                onclick="document.getElementById('swal-cover-file').click()"
                class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colours text-blue-100"
              >
                📁 Choose File
              </button>
              <input
                type="file"
                id="swal-cover-file"
                accept="image/*"
                style="display: none;"
              />
            </div>
          </div>
          <p id="swal-cover-status" class="text-green-400 text-sm"></p>
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Label Prioritas</label>
            <div class="grid grid-cols-2 gap-2">
              ${labels
                .map(
                  (label) => `
                <button
                  type="button"
                  data-label="${label}"
                  class="swal-label-btn w-full py-2 rounded-lg font-semibold text-sm ${labelColours[label]} hover:opacity-80 transition-all"
                >
                  ${label}
                </button>
              `
                )
                .join("")}
            </div>
            <input type="hidden" id="swal-label" value="${card.label || ""}" />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Judul</label>
            <input
              id="swal-title"
              type="text"
              class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all"
              value="${card.title || ""}"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-blue-100 mb-1">Deskripsi</label>
            <textarea
              id="swal-deskripsi"
              class="w-full px-4 py-2 rounded-lg bg-[#0F4C75] border-2 border-[#1B6CA8] focus:border-[#3282B8] text-blue-100 placeholder-blue-300 transition-all h-32"
            >${card.deskripsi || ""}</textarea>
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
      confirmButtonText: "Simpan Perubahan",
      cancelButtonText: "Batal",
      didOpen: () => {
        const fileInput = document.getElementById("swal-cover-file");
        const labelInput = document.getElementById("swal-label");
        const coverStatus = document.getElementById("swal-cover-status");

        document.querySelectorAll(".swal-label-btn").forEach((btn) => {
          if (btn.dataset.label === card.label) {
            btn.classList.add("ring", "ring-offset-2", "ring-white");
          }

          btn.addEventListener("click", () => {
            labelInput.value = btn.dataset.label;

            document
              .querySelectorAll(".swal-label-btn")
              .forEach((b) =>
                b.classList.remove("ring", "ring-offset-2", "ring-white")
              );
            btn.classList.add("ring", "ring-offset-2", "ring-white");
          });
        });

        fileInput.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (file) {
            uploadedFile = file;
            coverStatus.textContent = "✅ Berhasil ditambahkan";
          }
        });
      },

      preConfirm: () => {
        let title = document.getElementById("swal-title").value.trim();
        const deskripsi = document
          .getElementById("swal-deskripsi")
          .value.trim();
        const label = document.getElementById("swal-label").value.trim();
        const cover = uploadedFile ? "file" : "";

        if (!title) {
          title = card.title?.trim();
        }

        if (!title) {
          Swal.showValidationMessage("Judul kartu tidak boleh kosong!");
          return false;
        }
        console.log("Form Values =>", { title, deskripsi, cover, label });
        return { title, deskripsi, cover, label };
      },
    });

    if (formValues) {
      try {
        const formData = new FormData();
    
        if (formValues.title) formData.append("title", formValues.title);
        if (formValues.deskripsi) formData.append("deskripsi", formValues.deskripsi);
        if (formValues.label) formData.append("label", formValues.label);
        if (uploadedFile) formData.append("cover", uploadedFile, uploadedFile.name);
    
        console.log("FormData entries:", [...formData.entries()]);
    
        const updatedCard = await updateCard(card.id, formData, token, true);
    
        setCards((prev) =>
          prev.map((c) => (c.id === card.id ? updatedCard : c))
        );
    
        Swal.fire({
          title: "Berhasil! ✅",
          html: `<p class="text-blue-100">Kartu berhasil diperbarui</p>`,
          background: "#1B262C",
          customClass: { popup: "border-2 border-blue-400" },
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire({
          title: "Gagal! ❌",
          html: `<p class="text-blue-100">Error: <span class="text-red-400">${
            err.message || "Gagal memperbarui kartu"
          }</span></p>`,
          background: "#1B262C",
          customClass: { popup: "border-2 border-red-400" },
        });
      }
    }
    
  };

  // Hapus kartu
  const handleDeleteCard = async (card) => {
    const confirmResult = await Swal.fire({
      title: "⚠️ Hapus Kartu",
      html: `<p class="text-blue-100">Anda yakin ingin menghapus kartu <strong class="text-red-400">"${card.title}"</strong> secara permanen?</p>`,
      background: "#1B262C",
      customClass: {
        title: "text-2xl font-bold text-blue-100",
        popup: "rounded-xl border-2 border-red-400",
        confirmButton:
          "bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold transition-colours",
        cancelButton:
          "bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition-colours",
      },
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
      focusConfirm: false,
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        await deleteCard(card.id, token);
        setCards((prev) => prev.filter((c) => c.id !== card.id));

        Swal.fire({
          title: "Terhapus! 🗑️",
          html: `<p class="text-blue-100">Kartu <strong>${card.title}</strong> berhasil dihapus</p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-blue-400",
          },
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire({
          title: "Gagal! ❌",
          html: `<p class="text-blue-100">Error: <span class="text-red-400">${
            err.message || "Gagal menghapus kartu"
          }</span></p>`,
          background: "#1B262C",
          customClass: {
            popup: "border-2 border-red-400",
            title: "text-red-400",
          },
        });
        console.error("Delete card error:", err);
      }
    }
  };

  // Drag and drop
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over) return;
  
    const activeId = active.id;
    const overId = over.id;
    const activeCard = cards.find((card) => card.id === activeId);
    const overCard = cards.find((card) => card.id === overId);
  
    if (!activeCard || !overCard) return;
  
    if (activeCard.board_id === overCard.board_id) {
      setCards((cards) => {
        const oldIndex = cards.findIndex((card) => card.id === activeId);
        const newIndex = cards.findIndex((card) => card.id === overId);
        return arrayMove(cards, oldIndex, newIndex);
      });
    } else {
      try {
        await moveCard(
          activeCard.id,
          JSON.stringify({
            new_board_id: overCard.board_id,
          }),
          token
        );
  
        setCards((cards) =>
          cards.map((card) =>
            card.id === activeId
              ? { ...card, board_id: overCard.board_id }
              : card
          )
        );
  
        console.log(
          `Card ${activeCard.id} berhasil dipindah ke board ${overCard.board_id}`
        );
      } catch (error) {
        console.error("Gagal memindahkan card:", error);
      }
    }
  };

  const SortableItem = ({ id, children }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`flex items-center p-1 mb-1 bg-secondary-blue rounded-md shadow-xs text-sm ${
          isDragging
            ? "shadow-sm bg-blue-100"
            : "hover:shadow-xs hover:bg-blue-400"
        }`}
      >
        <div
          {...attributes}
          {...listeners}
          className="p-1 mr-1 bg-blue-100 rounded cursor-grab hover:bg-blue-200 transition-colours duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColour"
          >
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
          </svg>
        </div>
        {children}
      </div>
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className={`h-screen bg-gray-900 text-white bg-gradient-to-r ${workspaceColour} flex flex-col text-xs`}>
        <div className="overflow-x-auto flex custom-scroll custom-h-scroll">
          <div className="flex space-x-4 p-6">
            {isLoading ? (
              <LoadingSpinner />
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              lists.map((list) => (
                <div
                  key={list.id}
                  className="flex flex-col border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg p-4 w-72"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{list.nama}</h2>
                    <div className="text-white text-lg cursor-pointer flex justify-end gap-2">
                      <button
                        onClick={() => handleUpdateBoard(list)}
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
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteBoard(list)}
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
                  </div>
                  <div className="overflow-y-auto custom-scroll p-1 max-h-[70vh]">
                    <SortableContext
                      items={cards
                        .filter((card) => card.board_id === list.id)
                        .map((card) => card.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-4">
                        {cards
                          .filter((card) => card.board_id === list.id)
                          .map((card) => (
                            <SortableItem key={card.id} id={card.id}>
                              <div className="bg-primary-blue rounded-lg shadow-lg w-full flex flex-col cursor-pointer">
                                {card.cover && (
                                  <img
                                    src={`http://127.0.0.1:8000/storage/${card.cover}`}
                                    alt="Thumbnail"
                                    className="w-full object-cover h-20"
                                  />
                                )}
                                <div className="flex flex-wrap gap-1 p-2">
                                  {card.label && (
                                    <span
                                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                                        labelColours[card.label]
                                      }`}
                                    >
                                      {card.label}
                                    </span>
                                  )}
                                </div>
                                <div className="p-2">
                                  <p className="text-xs font-semibold text-white">
                                    {card.title}
                                  </p>
                                  <div className="flex justify-end gap-1 mt-2">
                                    <button
                                      onClick={() => handleUpdateCard(card)}
                                      className="text-blue-300 hover:text-blue-500"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-1.414.586H4a1 1 0 01-1-1v-2.586a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0z" />
                                      </svg>
                                    </button>
                                    <button
                                      className="text-red-400 hover:text-red-600"
                                      onClick={() => handleDeleteCard(card)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
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
                                </div>
                              </div>
                            </SortableItem>
                          ))}
                      </div>
                    </SortableContext>

                    <button
                      className="text-start text-white mt-4 py-2"
                      onClick={() => handleAddCard(list.id)}
                    >
                      + Tambahkan Kartu
                    </button>
                  </div>
                </div>
              ))
            )}
            <div>
              <div className="flex flex-col border border-primary-blue justify-center items-center bg-secondary-blue bg-opacity-10 rounded-lg py-2 text-center w-60">
                <button
                  className="text-lg font-semibold text-center"
                  onClick={handleCreateBoard}
                >
                  + Tambahkan List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <FooterD />
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
