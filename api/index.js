import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
<<<<<<< HEAD
import Artist from "./src/models/artists.model.js";
=======
import Picture from "./src/models/picture.model.js";
>>>>>>> 9fad6f3a3e4979da6f62d9b234486d0f066aba4a
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
api.get("/picture", async (req, res) => {
    try {
        const pictures = await Picture.find().lean();
        res.json(pictures);
    } catch (err) {
        console.error("[ERROR] GET /picture:", err);
        res.json({ error: "DB_ERROR" });
    }
});
// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});