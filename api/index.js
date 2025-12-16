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


//---- GET -------------------------------------------------------------------------------//

// Ruta GET para obtener todas las publicaciones

//---- ARTIST --------------//


api.get("/Artist", async (req, res) => {
    try {
        const artists = await Artist.find().lean();
       artists.forEach((artist)=>{
            artist.id = artist._id.toString()
            delete artist._id
        })
        res.json(artists);
    }
    catch (err) {
        console.error("[ERROR] GET /artists:", err);
        res.json({ error: "DB_ERROR" });
    }
});

//---- ROOM --------------//

api.get("/Room", async (req, res) => {
    try {
        const rooms = await Room.find().lean();
        rooms.forEach((room)=>{
            room.id = room._id.toString()
            delete room._id
        })
        res.json(rooms);
    } catch (err) {
        console.error("[ERROR] GET /picture:", err);
        res.json({ error: "DB_ERROR" });
    }
});

//---- PICTURE --------------//

api.get("/picture", async (req, res) => {
    try {
        const pictures = await Picture.find().lean();

        pictures.forEach((picture) => {
            picture.id = picture._id.toString()
            delete picture._id
        })

        res.json(pictures);
    } catch (err) {
        console.error("[ERROR] GET /picture:", err);
        res.json({ error: "DB_ERROR" });
    }
});


//---- POST -------------------------------------------------------------------------------//

// Ruta para crear una nueva publicación (post)
//Pe 
// tición POST se utiliza para enviar datos al servidor


//---- PICTURE --------------//


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

//---- ARTIST --------------//

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


//---- ROOM --------------//

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



//---- DELETE -------------------------------------------------------------------------------//

// Ruta para eliminar una publicación (post) por su ID
// La petición DELETE se utiliza para eliminar recursos del servidor



//---- PICTURE --------------//



//---- ARTIST --------------//

api.delete("/Artist/:id", async (req, res) => {
    try {
        const artistId = req.params.id;

        // Buscar y eliminar el post por su ID
        const deletedArtist = await Artist.findByIdAndDelete(artistId);

        // Si no se encuentra el post, devolver un error 404
        if (!deletedArtist) {
            return res.status(404).json({ error: "POST_NOT_FOUND" });
        }

        // Devolver el post eliminado
        return res.json(deletedArtist);
    } catch (err) {
        console.error("[ERROR] DELETE /Artist/id:", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
    
});


//---- ROOM --------------//

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
        console.error("[ERROR] DELETE /Room/:id:", err);
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

    

    

    






api.delete("/Artist/:id", async (req, res) => {
    try {
        const artistId = req.params.id;

        // Buscar y eliminar el post por su ID
        const deletedArtist = await Artist.findByIdAndDelete(artistId);

        // Si no se encuentra el post, devolver un error 404
        if (!deletedArtist) {
            return res.status(404).json({ error: "POST_NOT_FOUND" });
        }

        // Devolver el post eliminado
        return res.json(deletedArtist);
    } catch (err) {
        console.error("[ERROR] DELETE /Artist/id:", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
    
});




//---- PUT -------------------------------------------------------------------------------//

// Ruta para actualizar una publicación (post) por su ID
// La petición PUT se utiliza para reemplazar/actualizar recursos en el servidor




//---- PICTURE --------------//



//---- ARTIST --------------//

api.put("/Artist/:id", async (req, res) => {
    try {
        const artistId = req.params.id;
        const updateData = req.body;

        // Buscar el post por su ID
        const artist = await Artist.findById(artistId);

        // Si no se encuentra, 404
        if (!artist) {
            return res.status(404).json({ error: "ARTIST_NOT_FOUND" });
        }

        // Aplicar cambios recibidos al documento
        artist.set(updateData);

        // Guardar cambios en la base de datos
        const updatedArtist = await artist.save();

        // Devolver el post actualizado
        return res.json(updatedArtist);
    } catch (err) {
        console.error("[ERROR] PUT /Artist/: id :", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
});



//---- ROOM --------------//


api.put("/Room/:id", async (req, res) => {
    try {
        const roomId = req.params.id;
        const updateData = req.body;

        // Buscar el post por su ID
        const room = await Room.findById(roomId);

        // Si no se encuentra, 404
        if (!room) {
            return res.status(404).json({ error: "ROOM_NOT_FOUND" });
        }

        // Aplicar cambios recibidos al documento
        room.set(updateData);

        // Guardar cambios en la base de datos
        const updatedRoom = await room.save();

        // Devolver el post actualizado
        return res.json(updatedRoom);
    } catch (err) {
        console.error("[ERROR] PUT /Room/:id:", err);
        return res.status(500).json({ error: "DB_ERROR" });
    }
});



// Encendemos el servidor
api.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});