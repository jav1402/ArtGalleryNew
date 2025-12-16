const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function getPictures() {
    return fetch(`${BASE_URL}/picture`)
    .then ((response) => response.json())
    .then((data)=> {
        console.log("data en getpicture", data);
        return data
    })
.catch((error)=> {
    console.error("Error fetching pictures:", error);
});
}

export default getPictures