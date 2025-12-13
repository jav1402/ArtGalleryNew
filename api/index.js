import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Artist from "./src/models/artists.model.js";
/* 
Nota: Usamos 'import' gracias a que configuramos "type": "module" 
en package.json.
Es la forma moderna de hacer: const express = require("express");
*/

const api = express(); // Creamos la instancia de la aplicación Express
dotenv.config();
const PORT = process.env.PORT || 3000;

await connectDB();

// Middleware: Permite que lleguen peticiones desde otros dominios (CORS)

api.use(cors());

// Ruta de prueba: Para verificar que el servidor responde
api.get("/", (req, res) => {
    res.send("Hello World!");
});

// Ruta GET para obtener todas las publicaciones
api.get("/Artist", async (req, res) => {
    try {
        const artists = await Artist.find().lean();
        res.json(artists);
    }
    catch (err) {
        console.error("[ERROR] GET /artists:", err);
        res.json({ error: "DB_ERROR"});
    }
});

api.get("/dataGallery", (req, res) => {
  res.json(dataGallery); // Respondemos enviando los datos como JSON
});
// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});