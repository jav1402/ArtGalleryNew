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

api.use(express.json()); // Necesario para leer el req.body, útil para rutas POST/PUT


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

api.get("/Room", async (req, res) => {
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

api.post("/Artist", async (req, res) => {
    try {
        const artistData = req.body;
        const newArtist = new Artist(artistData);
        const savedArtist = await newArtist.save();
        res.status(201).json(savedArtist);
    } catch (err) {
        console.log("[ERROR] POST /Artist:", err);
        res.status(500).json({ error: "DB_ERROR" });
    }
});


// Ruta para crear una nueva publicación (post)
// La petición POST se utiliza para enviar datos al servidor

api.post("/Room", async (req, res) => {
    try {
        const roomData = req.body;

        const newRoom = new Room(roomData); // Crear una nueva instancia del modelo Post con los datos del cuerpo de la solicitud

        const savedRoom = await newRoom.save(); // Guardar el nuevo post en la base de datos
        res.status(201).json(savedRoom); // Devolver el post guardado con un estado 201 (Creado)
    } catch (err) {
        console.error("[ERROR] POST /Room:", err);
        res.status(500).json({ error: "DB_ERROR" });
    }
});

// Ruta para eliminar una publicación (post) por su ID
// La petición DELETE se utiliza para eliminar recursos del servidor
api.delete("/Room/:id", async (req, res) => {
    try {
        const roomId = req.params.id;

        // Buscar y eliminar el post por su ID
        const deletedRoom = await Room.findByIdAndDelete(roomId);

        // Si no se encuentra el post, devolver un error 404
        if (!deletedRoom) {
            return res.status(404).json({ error: "POST_NOT_FOUND" });
        }

        // Devolver el post eliminado
        return res.json(deletedRoom);
    } catch (err) {
        console.error("[ERROR] DELETE /posts/:id:", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
});
api.delete("/picture/:id", async (req, res) => {
    try {
        const pictureId = req.params.id;
        const deletedPicture = await Picture.findByIdAndDelete(pictureId);
        if (!deletedPicture) {
            return res.status(404).json({ error: "POST_NOT_FOUND" });
        }
        return res.json(deletedPicture);
    } catch (err) {
        console.error("[ERROR] DELETE /posts/:id:", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
});
// Utilizamos el put para reemplazar o actualizar en el servidor
api.put("/picture/:id", async (req, res) => {
    try {
        const pictureId = req.params.id; //extrae el número de id a modificar
        const updateData = req.body;
        const picture = await Picture.findById(pictureId);
        // Si no encuentra la "picture por su id" devuelve error 404.
        if (!picture) {
            return res.status(404).json({ error: "POST_NOT_FOUND" });
        }
    picture.set(updateData);//aplica los cambios al documento

    const updatedPicture = await picture.save();
    return res.json(updatedPicture);
    } catch (err) {
    console.error("[ERROR] PUT /picture/:id", err);
    return res.status(500).json({ error: "DB_ERROR" });
    }
});

    

    

    





// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});