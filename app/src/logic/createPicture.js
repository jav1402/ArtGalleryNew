const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function createPicture(pictureData){
    return fetch (`${BASE_URL}/picture`, { //fech function javasc para enviar o recibir datos
        method: "POST",
        headers: { "Content-Type": "application/json" }, //dice a servidor que es un JSON
        body: JSON.stringify(   pictureData), //objeto del formiulario y convierte de javascript a texto plano
    })
    .then ((    response) => response.json()) //todo bien. respuesta del servidor
    .catch ((error) => { //captura error y lo muestra
        console.error("Error creating post:", error);
    });
}

export default createPicture
