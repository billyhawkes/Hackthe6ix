import mongoose from "mongoose";
const { Schema } = mongoose;

//import user
import User from "../models/userModel.js";

const PostSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
});

const Post = mongoose.model("posts", PostSchema);

export default Post;
