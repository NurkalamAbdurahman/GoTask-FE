import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8000/api/cards";

export const getCard = async (boardId, token) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/boards/${boardId}`, {
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
    const response = await fetch(`${BASE_API_URL}/boards/${boardId}`, {
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

export const updateCard = async (id, body, token, isFormData = false) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      "X-HTTP-Method-Override": "PUT",
    };

    if (!isFormData) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal update");

    return data;
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};


export const moveCard = async (id, body, token) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${id}/move`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "PUT",
      },
      body,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal memindahkan card");

    return data;
  } catch (error) {
    console.error("Error memindahkan card:", error);
    throw error;
  }
};




export const deleteCard = async (id, token) => {
  try {
    const response = await axios.delete(`${BASE_API_URL}/${id}`, {
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
