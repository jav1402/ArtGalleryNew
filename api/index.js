import cors from "cors";
import express from "express";
// import dataGallery from "./data/gallery.data.js"
// import dataArtist from "./data/artists.data.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Room from "./src/models/gallery.model.js";
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
api.get("/dataArtist", (req, res) => {
    res.json(dataArtist);
});

api.get("/Rooms", async  (req, res) => {
    try {
        const rooms = await Room.find().lean();
        res.json(rooms);
    } catch (err) {
        console.error("[ERROR] GET /rooms:", err);
        res.json({ error: "DB_ERROR" });
    }
});

// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});