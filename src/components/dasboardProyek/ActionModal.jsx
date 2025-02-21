import React from "react";

const ActionModal = ({ isOpen, onClose, onCopyCard, onMoveCard, onDuplicateCard }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-latar-blue text-white p-6 rounded-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white"
        >
          ✕
        </button>
        <h3 className="text-lg font-semibold mb-4">Actions</h3>

        <div className="flex flex-col gap-2">
          <button
            onClick={onCopyCard}
            className="bg-blue-500 text-white py-1.5 rounded text-start px-4"
          >
            Copy Card
          </button>
          <button
            onClick={onMoveCard}
            className="bg-blue-500 text-white py-1.5 rounded text-start px-4"
          >
            Move Card
          </button>
          <button
            onClick={onDuplicateCard}
            className="bg-blue-500 text-white py-1.5 rounded text-start px-4"
          >
            Duplicate Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;