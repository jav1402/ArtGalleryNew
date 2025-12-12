import cors from "cors";
import express from "express";
import dataGallery from "./data/gallery.data.js"
import dataArtist from "./data/artists.data.js";
/* 
Nota: Usamos 'import' gracias a que configuramos "type": "module" 
en package.json.
Es la forma moderna de hacer: const express = require("express");
*/

console.log("Datos de posts cargados:", dataGallery);

const api = express(); // Creamos la instancia de la aplicación Express
const PORT = 3000;     // Definimos el puerto donde escuchará el servidor


// Middleware: Permite que lleguen peticiones desde otros dominios (CORS)

api.use(cors());

// Ruta de prueba: Para verificar que el servidor responde
api.get("/", (req, res) => {
    res.send("Hello World!");
});

// Ruta GET para obtener todas las publicaciones
api.get("/dataArtist", (req, res) => {
    res.json(dataArtist);
});

api.get("/dataGallery", (req, res) => {
  res.json(dataGallery); // Respondemos enviando los datos como JSON
});
// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});