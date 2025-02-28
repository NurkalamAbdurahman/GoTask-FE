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
  getBoard,
  createBoard,
  deleteBoard,
} from "../CRUD/Boards/boardService";
import {
  getCard,
  createCard,
  updateCard,
  deleteCard,
} from "../CRUD/Cards/cardService";

const Board = () => {
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  const workspaceId = localStorage.getItem("workspaceId");
  const token = localStorage.getItem("token");

  // Menyimpan ID board ke localStorage
  const saveBoardIdToLocalStorage = (id) => {
    const existingBoardIds = JSON.parse(localStorage.getItem("boardIDs")) || [];
    if (!existingBoardIds.includes(id)) {
      existingBoardIds.push(id);
      localStorage.setItem("boardIDs", JSON.stringify(existingBoardIds));
    }
  };

  // Menghapus ID board dari localStorage
  const removeBoardIdFromLocalStorage = (id) => {
    const existingBoardIds = JSON.parse(localStorage.getItem("boardIDs")) || [];
    const updatedBoardIds = existingBoardIds.filter((item) => item !== id);
    localStorage.setItem("boardIDs", JSON.stringify(updatedBoardIds));
  };

  // Ambil board dari API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const workspaceId = localStorage.getItem("workspaceId");
        const token = localStorage.getItem("token");

        if (!workspaceId || !token) {
          throw new Error("Workspace ID or Token is missing!");
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
  }, [workspaceId, token]);

  // Membuat board baru
  const handleCreateBoard = async () => {
    const { value: nama } = await Swal.fire({
      title: "Buat List Baru",
      input: "text",
      inputPlaceholder: "Masukkan nama list baru",
      showCancelButton: true,
      confirmButtonText: "Buat",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value) {
          return "Nama list tidak boleh kosong!";
        }
      },
    });

    if (nama) {
      try {
        const payload = { nama, workspace_id: workspaceId };
        const data = await createBoard(payload, token);
        console.log("List baru berhasil dibuat:", data);

        saveBoardIdToLocalStorage(data.board.id);
        setLists((prevLists) => [
          ...prevLists,
          { id: data.board.id, nama: data.board.nama },
        ]);
        Swal.fire("Berhasil!", "List baru berhasil dibuat.", "success");
      } catch (err) {
        console.error("Error creating new list:", err);
        Swal.fire("Error", "Gagal membuat list baru", "error");
      }
    }
  };

  // Hapus board
  const handleDeleteBoard = async (board) => {
    Swal.fire({
      title: "Hapus Board",
      text: `Hapus Board "${board.nama}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBoard(board.id, token);
          removeBoardIdFromLocalStorage(board.id);
          setLists((prev) => prev.filter((b) => b.id !== board.id));
          Swal.fire("Berhasil", "Board dihapus", "success");
        } catch (error) {
          Swal.fire("Error", error.message, "error");
        }
      }
    });
  };

  // Membuat kartu baru
  const handleAddCard = async (boardId) => {
    const { value: title } = await Swal.fire({
      title: "Tambah Kartu Baru",
      input: "text",
      inputPlaceholder: "Masukkan judul kartu...",
      showCancelButton: true,
      confirmButtonText: "Tambah",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value) {
          return "Judul kartu tidak boleh kosong!";
        }
      },
    });

    if (title) {
      try {
        const response = await createCard(boardId, title, token);
        console.log("Kartu berhasil ditambahkan:", response);

        setCards((prevCards) => [...prevCards, response.card]);
        Swal.fire("Berhasil!", "Kartu berhasil ditambahkan.", "success");
      } catch (err) {
        console.error("Gagal menambahkan kartu:", err);
        Swal.fire("Error", err.message || "Gagal menambahkan kartu", "error");
      }
    }
  };

  // Edit kartu
  const handleUpdateCard = async (card) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Kartu",
      html: `
      <div class="text-left">
        <div class="mb-4">
          <label class="block text-sm font-semibold mb-1">Gambar</label>
          <input
            id="swal-cover"
            type="text"
            class="w-full border rounded px-4 py-2 text-black"
            placeholder="Masukkan URL gambar"
            value="${card.cover || ""}"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold mb-1">Judul</label>
          <input
            id="swal-title"
            type="text"
            class="w-full border rounded px-4 py-2 text-black"
            value="${card.title || ""}"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold mb-1">Deskripsi</label>
          <textarea
            id="swal-deskripsi"
            class="w-full border rounded px-4 py-2 text-black"
          >${card.deskripsi || ""}</textarea>
        </div>
      </div>
    `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
      customClass: {
        container: "bg-latar-blue",
        popup: "bg-latar-blue text-white",
        title: "text-white",
        confirmButton: "bg-blue-500 text-white px-4 py-2 rounded",
        cancelButton: "bg-red-500 text-white px-4 py-2 rounded",
      },
      preConfirm: () => {
        return {
          cover: document.getElementById("swal-cover").value,
          title: document.getElementById("swal-title").value,
          deskripsi: document.getElementById("swal-deskripsi").value,
        };
      },
    });

    if (formValues) {
      try {
        const updatedCard = { ...card, ...formValues };
        await updateCard(card.id, updatedCard, token);
        setCards((prevCards) =>
          prevCards.map((c) => (c.id === card.id ? updatedCard : c))
        );
        Swal.fire("Berhasil", "Kartu berhasil diperbarui", "success");
      } catch (err) {
        console.error("Error updating card:", err);
        Swal.fire("Error", "Gagal memperbarui kartu", "error");
      }
    }
  };

  // Hapus kartu
  const handleDeleteCard = async (card) => {
    try {
      await deleteCard(card.id, token);
      setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
      Swal.fire("Berhasil", "Kartu berhasil dihapus", "success");
    } catch (err) {
      console.error("Error deleting card:", err);
      Swal.fire("Error", "Gagal menghapus kartu", "error");
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
        await updateCard(
          activeCard.id,
          { board_id: overCard.board_id, title: activeCard.title },
          token
        );
        setCards((cards) =>
          cards.map((card) =>
            card.id === activeId
              ? { ...card, board_id: overCard.board_id }
              : card
          )
        );
      } catch (error) {
        console.error("Gagal memindahkan card ke board lain:", error);
      }
    }
  };

  const SortableItem = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div ref={setNodeRef} style={style}>
        <div {...attributes} {...listeners} className="drag-handle">
          Drag Handle
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
      <div className="h-screen bg-gray-900 text-white flex flex-col text-xs">
        <div className="overflow-x-auto flex custom-scroll custom-h-scroll">
          <div className="flex space-x-4 p-6">
            {isLoading ? (
              <p>Loading board lists...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              lists.map((list) => (
                <div
                  key={list.id}
                  className="flex flex-col border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg p-4 w-60"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{list.nama}</h2>
                    <div className="text-white text-lg cursor-pointer flex justify-end gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
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
                  <div className="overflow-y-auto custom-scroll p-1">
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
                                    src={card.cover}
                                    alt="Card Thumbnail"
                                    className="w-full object-cover h-20"
                                  />
                                )}
                                {card.labels && card.labels.length > 0 && (
                                  <div className="flex flex-wrap gap-1 p-2">
                                    {card.labels.map((label, idx) => (
                                      <span
                                        key={idx}
                                        className={`${label.color} text-xs text-white px-2 py-0.5 rounded`}
                                      >
                                        {label.text}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                <div className="p-2">
                                  <p className="text-xs font-semibold">
                                    {card.title}
                                  </p>
                                  <div className="flex justify-end gap-1">
                                    <button
                                      onClick={() => handleUpdateCard(card)}
                                      className="text-blue-500 hover:text-blue-700"
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
                                      className="text-red-500 hover:text-red-700"
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
