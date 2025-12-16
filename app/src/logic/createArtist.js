// Fichero: src/logic/createArtist.js
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function createArtist(artistData) {
    return fetch(`${BASE_URL}/Artist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artistData),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error creating artist:", error);
        });
}

export default createArtist;