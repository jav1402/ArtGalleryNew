const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
async function updateArtist(id, updateData) {
  return fetch(`${BASE_URL}/artist/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error updating Artist:", error);
    });
}
export default updateArtist