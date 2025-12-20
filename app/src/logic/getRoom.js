const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function getRoom(){
  // Hacemos la petición a la URL de TU servidor local
  return fetch(`${BASE_URL}/Room`)
    .then((response) => response.json()) // 1. Recibimos respuesta y la convertimos a JSON
    .then((data) => {
      console.log(data); // 2. Vemos los datos por consola (opcional, para debug)
      return data;       // 3. Devolvemos los datos limpios
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error); // Gestión de errores
    });
}

export default getRoom