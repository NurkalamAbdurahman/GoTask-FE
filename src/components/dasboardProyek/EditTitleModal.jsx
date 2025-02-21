import React from "react";

const EditTitleModal = ({ isOpen, onClose, title, onTitleChange, onSave }) => { 
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
        <h3 className="text-lg font-semibold mb-4">Edit Project Title</h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded px-4 py-2 text-black"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTitleModal;