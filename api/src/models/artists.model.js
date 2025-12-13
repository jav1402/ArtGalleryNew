import mongoose from "mongoose";
const artistSchema =new mongoose.Schema({
    name: { type: String, required: true},
    description: {type: String, required: true},
    image: { type: String, required: false}
});
export default mongoose.model("Artist", artistSchema, "Artists");