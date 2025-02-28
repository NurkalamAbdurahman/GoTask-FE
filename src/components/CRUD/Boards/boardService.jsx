import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8000/api/workspaces";

export const getBoard = async (workspaceId, token) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/${workspaceId}/boards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createBoard = async (payload, token) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/${payload.workspace_id}/boards`,
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

export const deleteBoard = async (id, token) => {
  const response = await axios.delete(`http://127.0.0.1:8000/api/boards/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data;
};

