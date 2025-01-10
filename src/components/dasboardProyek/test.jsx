import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import FooterD from "./footerD";

const Board = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [newCardText, setNewCardText] = useState("");
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardImage, setNewCardImage] = useState("");
  const [newCardLabels, setNewCardLabels] = useState([]);
  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("bg-gray-700");
  const [cards, setCards] = useState({});
  const [currentList, setCurrentList] = useState(null);

  const Lists = ["Project Resources", "To Do", "Pending", "Blocked", "Done"];

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("kanbanCards")) || {};
    setCards(storedCards);
  }, []);

  const saveToLocalStorage = (updatedCards) => {
    localStorage.setItem("kanbanCards", JSON.stringify(updatedCards));
  };

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      const newCard = {
        id: Date.now(),
        title: newCardTitle,
        text: newCardText,
        image: newCardImage,
        labels: newCardLabels,
      };

      const updatedCards = {
        ...cards,
        [currentList]: [...(cards[currentList] || []), newCard],
      };

      setCards(updatedCards);
      saveToLocalStorage(updatedCards);

      setNewCardText("");
      setNewCardTitle("");
      setNewCardImage("");
      setNewCardLabels([]);
      setShowModal(false);
    }
  };

  const handleAddLabel = () => {
    if (labelName.trim()) {
      setNewCardLabels([
        ...newCardLabels,
        { text: labelName, color: labelColor },
      ]);
      setLabelName("");
      setLabelColor("bg-gray-700");
      setShowLabelModal(false);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const updatedCards = Array.from(cards[source.droppableId]);
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);

      const updatedState = {
        ...cards,
        [source.droppableId]: updatedCards,
      };

      setCards(updatedState);
      saveToLocalStorage(updatedState);
    } else {
      const sourceList = Array.from(cards[source.droppableId] || []);
      const destinationList = Array.from(cards[destination.droppableId] || []);
      const [movedCard] = sourceList.splice(source.index, 1);

      destinationList.splice(destination.index, 0, movedCard);

      const updatedState = {
        ...cards,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destinationList,
      };

      setCards(updatedState);
      saveToLocalStorage(updatedState);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col text-xs">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="overflow-x-auto flex custom-scroll custom-h-scroll">
          <div className="flex space-x-4 p-6">
            {Lists.map((list) => (
              <Droppable key={list} droppableId={list}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg p-4 w-60"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">{list}</h2>
                    </div>
                    <div className="overflow-y-auto custom-scroll p-1">
                      <div className="space-y-4">
                        {(cards[list] || []).map((card, index) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-primary-blue rounded-lg shadow-lg w-full flex flex-col"
                              >
                                {card.image && (
                                  <img
                                    src={card.image}
                                    alt="Card Thumbnail"
                                    className="w-full object-cover h-20 rounded-t-lg cursor-pointer"
                                  />
                                )}
                                <div className="p-2">
                                  {card.labels && (
                                    <div className="flex flex-wrap gap-1">
                                      {card.labels.map((label, idx) => (
                                        <span
                                          key={idx}
                                          className={`${label.color} text-white text-xs px-2 py-0.5 rounded`}
                                        >
                                          {label.text}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  {card.title && (
                                    <h3 className="text-sm font-bold mb-2">
                                      {card.title}
                                    </h3>
                                  )}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                      {provided.placeholder}
                      <button
                        className="text-start text-white mt-4 py-2"
                        onClick={() => {
                          setCurrentList(list);
                          setShowModal(true);
                        }}
                      >
                        + Tambahkan Kartu
                      </button>
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Tambahkan Kartu</h2>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600"
              placeholder="Judul kartu"
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
            />
            <textarea
              className="w-full mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600"
              rows="4"
              placeholder="Deskripsi kartu"
              value={newCardText}
              onChange={(e) => setNewCardText(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded"
                onClick={() => setShowModal(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleAddCard}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {showLabelModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Tambahkan Label</h2>
            <input
              type="text"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600"
              placeholder="Nama label"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
            />
            <select
              className="w-full mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600"
              value={labelColor}
              onChange={(e) => setLabelColor(e.target.value)}
            >
              <option value="bg-gray-700">Abu-abu</option>
              <option value="bg-red-700">Merah</option>
              <option value="bg-green-700">Hijau</option>
              <option value="bg-blue-700">Biru</option>
              <option value="bg-yellow-700">Kuning</option>
              <option value="bg-purple-700">Ungu</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded"
                onClick={() => setShowLabelModal(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleAddLabel}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
