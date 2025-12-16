const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function deletePicture(id) {
  return fetch(`${BASE_URL}/picture/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting picutre:", error);
    });
}

export default deletePicture;