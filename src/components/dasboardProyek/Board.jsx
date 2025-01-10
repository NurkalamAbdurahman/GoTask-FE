import { useState } from "react";
import FooterD from "./FooterD";

const Board = () => {
  const Lists = ["Project Resources", "To Do", "Pending", "Blocked", "Done"];
  const [cards, setCards] = useState([
    {
      id: 1,
      list: "Project Resources",
      labels: [
        { text: "Copy Label", color: "bg-yellow-700" },
        { text: "Priority", color: "bg-red-700" },
      ],
      image:
        "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Looking for even more project management features?",
      description:
        "lorem insum heheheh? :')",
    },
    {
      id: 2,
      list: "To Do",
      labels: [
        { text: "Design Canva", color: "bg-green-700" },
        { text: "Priority", color: "bg-red-700" },
      ],
      image:
        "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Looking for even more project management features?",
      description:
        "lorem insum heheheh? :')",
    },
    {
      id: 3,
      list: "Pending",
      labels: [
        { text: "Design Canva", color: "bg-green-700" },
        { text: "Priority", color: "bg-red-700" },
      ],
      text: "Looking for even more project management features?",
      description:
        "lorem insum heheheh? :')",
    },
    {
      id: 4,
      list: "Blocked",
      labels: [
      ],
      text: "Looking for even more project management features?",
      description:
        "lorem insum heheheh? :')",
    },
    {
      id: 5,
      list: "Done",
      labels: [
        { text: "Done", color: "bg-green-700" },
      ],
      text: "Looking for even more project management features?",
      description:
        "lorem insum heheheh? :')",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newLabel, setNewLabel] = useState({ text: "", color: "bg-gray-700" });

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleAddCard = (list) => {
    const newCard = {
      id: Date.now(),
      list,
      labels: [],
      image: "",
      text: "New Card",
      description: "",
    };
    setCards([...cards, newCard]);
    setSelectedCard(newCard);
    setShowModal(true);
  };

  const handleSaveCard = () => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedCard.id ? selectedCard : card
      )
    );
    setShowModal(false);
  };

  const handleAddLabel = () => {
    if (newLabel.text) {
      setSelectedCard((prev) => ({
        ...prev,
        labels: [...prev.labels, newLabel],
      }));
      setNewLabel({ text: "", color: "bg-gray-700" });
      setShowLabelModal(false);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col text-xs">
      <div className="overflow-x-auto flex custom-scroll custom-h-scroll">
        <div className="flex space-x-4 p-6">
          {Lists.map((list) => (
            <div
              key={list}
              className="flex flex-col border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg p-4 w-60"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{list}</h2>
                <div className="text-white text-lg cursor-pointer">...</div>
              </div>
              <div className="overflow-y-auto custom-scroll p-1">
                <div className="space-y-4">
                  {cards
                    .filter((card) => card.list === list)
                    .map((card) => (
                      <div
                        key={card.id}
                        className="bg-primary-blue rounded-lg shadow-lg w-full flex flex-col cursor-pointer"
                        onClick={() => handleCardClick(card)}
                      >
                        {card.image && (
                          <img
                            src={card.image}
                            alt="Card Thumbnail"
                            className="w-full object-cover h-20"
                          />
                        )}
                        {card.labels.length > 0 && (
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
                          <p className="text-xs font-semibold">{card.text}</p>
                        </div>
                      </div>
                    ))}
                </div>

                <button
                  className="text-start text-white mt-4 py-2"
                  onClick={() => handleAddCard(list)}
                >
                  + Tambahkan Kartu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-latar-blue text-white p-6 rounded-lg w-[600px] relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-white-700"
            >
              ✕
            </button>

            {selectedCard.image && (
              <img
                src={selectedCard.image}
                alt="Card Thumbnail"
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <div className="flex gap-4 justify-between items-center">
              <div className="w-2/3">
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Gambar
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 text-black"
                    placeholder="Masukkan URL gambar"
                    value={selectedCard.image}
                    onChange={(e) =>
                      setSelectedCard((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 text-black"
                    value={selectedCard.text}
                    onChange={(e) =>
                      setSelectedCard((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }))
                    }
                  />
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Dalam List {selectedCard.list}
                </p>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold">Label</h3>
                  <div className="flex items-center gap-2 mt-2">
                    {selectedCard.labels.map((label, idx) => (
                      <span
                        key={idx}
                        className={`${label.color} text-xs px-2 py-1 rounded text-white`}
                      >
                        {label.text}
                      </span>
                    ))}
                    <button
                      onClick={() => setShowLabelModal(true)}
                      className="bg-gray-200 text-black text-xs px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold flex justify-between">
                    Description
                  </h3>
                  <textarea
                    className="w-full border rounded px-4 py-2 mt-2 text-black"
                    value={selectedCard.description}
                    onChange={(e) =>
                      setSelectedCard((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="w-1/3 flex flex-col justify-between h-96 py-4">
              <div className="flex flex-col gap-2 mb-4">
                  <p>Aksi</p>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Masuk
                  </button>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Tim
                  </button>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Label
                  </button>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Tanggal
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Navigasi</p>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Pindah
                  </button>
                  <button className="bg-blue-500 text-white py-1.5 rounded text-start px-4">
                    Duplikat
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSaveCard}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {showLabelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-latar-blue text-white p-6 rounded-lg w-[400px] relative">
            <button
              onClick={() => setShowLabelModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4">Tambah Label Baru</h3>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Nama Label
              </label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                value={newLabel.text}
                onChange={(e) =>
                  setNewLabel({ ...newLabel, text: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Warna Label
              </label>
              <select
                className="w-full border rounded px-4 py-2"
                value={newLabel.color}
                onChange={(e) =>
                  setNewLabel({ ...newLabel, color: e.target.value })
                }
              >
                <option value="bg-gray-700">Abu-abu</option>
                <option value="bg-red-700">Merah</option>
                <option value="bg-yellow-700">Kuning</option>
                <option value="bg-green-700">Hijau</option>
                <option value="bg-blue-700">Biru</option>
                <option value="bg-purple-700">Ungu</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleAddLabel}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center">
        <FooterD />
      </div>
    </div>
  );
};

export default Board;

