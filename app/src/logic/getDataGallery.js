async function getDataGallery(){
  // Hacemos la petición a la URL de TU servidor local
  return fetch("http://localhost:3000/dataGallery")
    .then((response) => response.json()) // 1. Recibimos respuesta y la convertimos a JSON
    .then((data) => {
      console.log(data); // 2. Vemos los datos por consola (opcional, para debug)
      return data;       // 3. Devolvemos los datos limpios
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error); // Gestión de errores
    });
}

export default getDataGallery