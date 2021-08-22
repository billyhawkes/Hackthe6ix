import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true },
});

const Post = mongoose.model("posts", PostSchema);
export default Post;