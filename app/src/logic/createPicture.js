const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function createPicture(pictureData){
    return fetch (`${BASE_URL}/picture`, {
        method: "POST",
        headers: { "Content- Type": "application/json" },
        body: JSON. stringify(pictureData),
    })
    .then ((response) => response.json())
    .catch ((error) => {
        console.error("Error creating post:", error);
    });
}

export default createPicture
