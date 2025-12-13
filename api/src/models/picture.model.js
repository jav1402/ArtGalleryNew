import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, required: false},
    imageUrl: {type: String, required: true},
    description: {type: String,required: false}
});

export default mongoose.model ("Picture", pictureSchema, "Pictures");