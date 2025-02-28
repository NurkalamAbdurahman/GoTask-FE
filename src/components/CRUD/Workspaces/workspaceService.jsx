import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/workspaces";

const getWorkspaces = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data;
};

const createWorkspace = async (workspaceName, color, token) => {
    const response = await axios.post(
      API_URL,
      {
        workspace: workspaceName,
        color: color,
        owner_id: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );
    return response.data;
  };

const updateWorkspace = async (id, newName, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    { workspace: newName },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );
  return response.data;
};

const deleteWorkspace = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data;
};

export { getWorkspaces, createWorkspace, updateWorkspace, deleteWorkspace };