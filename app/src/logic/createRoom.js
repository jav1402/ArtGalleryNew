// Fichero: src/logic/createPost.js
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function createRoom(roomData) {
    return fetch(`${BASE_URL}/Room`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roomData),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error creating post:", error);
        });
}

export default createRoom;