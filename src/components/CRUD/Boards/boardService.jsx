import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8000/api/boards";

export const getBoard = async (workspaceId, token) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/workspaces/${workspaceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createBoard = async (payload, workspaceId, token) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/workspaces/${workspaceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};


export const updateBoard = async (id, updatedData, token) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal memperbarui board");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating board:", error);
    throw error;
  }
};

export const deleteBoard = async (id, token) => {
  const response = await axios.delete(`${BASE_API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data;
};

