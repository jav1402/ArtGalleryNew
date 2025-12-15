const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function deletedRoom(id) {
  return fetch(`${BASE_URL}/Room/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
}

export default deletedRoom;