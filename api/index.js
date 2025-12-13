import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Room from "./src/models/gallery.model.js";
import Artist from "./src/models/artists.model.js";
import Picture from "./src/models/picture.model.js";
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
api.use(express.json())

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
        res.json({ error: "DB_ERROR" });
    }
});

api.get("/Rooms", async (req, res) => {
    try {
        const rooms = await Room.find().lean();
        res.json(rooms);
    } catch (err) {
        console.error("[ERROR] GET /picture:", err);
        res.json({ error: "DB_ERROR" });
    }
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
api.post("/picture", async (req, res) => {
    try {
        const pictureData = req.body;
        console.log("PictureData", pictureData)
        const newPicture = new Picture(pictureData);
        const savedPicture = await newPicture.save();
        res.status(201).json(savedPicture);
    } catch (err) {
        console.error("[ERROR] POST /picture:", err);
        res.status(500).json({ error: "DB_ERROR" });
    }
})

// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});