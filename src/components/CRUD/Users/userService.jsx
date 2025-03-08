import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8000/api";

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Gagal mengambil daftar pengguna");
  }
};

export const inviteUser = async (workspaceId, username, token) => {
  try {
    console.log("Mengundang user dengan data:", { workspaceId, username });

    const response = await axios.post(
      `${BASE_API_URL}/workspaces/${workspaceId}/invite`,
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Undangan berhasil:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error inviting user:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Gagal mengundang user");
  }
};
