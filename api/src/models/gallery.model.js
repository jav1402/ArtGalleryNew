import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { type: String, required: true },
    description: { type: String, required: true },
});


//El primero establece el nombre del modelo, el plural es el nomnre de la coleccion con la que hacemos la relacciión//
export default mongoose.model("Room", gallerySchema, "Rooms");