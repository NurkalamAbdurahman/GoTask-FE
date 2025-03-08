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


const createWorkspace = async (workspaceName, colour = "#111827", token) => {
  const response = await axios.post(
    API_URL,
    {
      workspace: workspaceName,
      colour: colour,
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


  const updateWorkspace = async (id, data, token) => {
    const response = await axios.put(
      `${API_URL}/${id}`,
      data,
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


const inviteUserToWorkspace = async (workspaceId, username, token) => {
  try {
    const response = await fetch(`${API_URL}/workspaces/${workspaceId}/invite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Gagal mengundang member");
    }

    return data;
  } catch (error) {
    console.error("Error inviting user:", error);
    throw error;
  }
};



export { getWorkspaces, createWorkspace, updateWorkspace, deleteWorkspace, inviteUserToWorkspace };