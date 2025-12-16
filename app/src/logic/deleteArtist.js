const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
async function deletedArtist(id) {
  return fetch(`${BASE_URL}/Artist/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
}
export default deletedArtist;