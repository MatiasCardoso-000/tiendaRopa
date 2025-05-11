import mongoose from "mongoose";
import { type } from "os";
const productSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: {type:Number, default: 0}
});

export default mongoose.model("Product", productSchema);