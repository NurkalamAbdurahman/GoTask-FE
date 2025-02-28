import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8000/api/boards";
const API_URL = "http://127.0.0.1:8000/api/cards";

export const getCard = async (boardId, token) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/${boardId}/cards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw new Error("Gagal mengambil kartu");
  }
};

export const createCard = async (boardId, title, token) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${boardId}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal menambahkan kartu");
    }

    return response.json();
  } catch (err) {
    console.error("Error in createCard:", err);
    throw err;
  }
};

// cardService.js
export const updateCard = async (id, updatedData, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal memperbarui card");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};

// export const updateCard = async (id, updatedData, token) => {
//   try {
//     const response = await axios.put(
//       `${API_URL}/${id}`,
//       updatedData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error updating card:", error);
//     throw new Error("Gagal memperbarui kartu");
//   }
// };

export const deleteCard = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting card:", error);
    throw new Error("Gagal menghapus kartu");
  }
};
