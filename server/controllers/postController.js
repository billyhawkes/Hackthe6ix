import express from "express";
const router = express.Router();
import { auth } from "./userController.js";

// Models
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// Home Feed
router.get("/feed", async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
});

// Creating a New Post
router.post("/new", auth, async (req, res) => {
    const { title, category, description, cost } = req.body;
    const user = await User.findById(req.user);

    // Not all fields
    if (!title || !category || !description || !cost)
        return res.status(400).json({ msg: "Not all fields filled" });

    const newPost = new Post({
        title,
        category,
        description,
        cost,
        userId: user._id,
        userName: user.firstName + " " + user.lastName,
    });

    newPost.save();

    res.json({
        userId: user._id,
        userName: user.firstName + " " + user.lastName,
    });
});

router.get("/:tagId", async (req, res) => {
    const post = await Post.findById(req.params.tagId);

    res.json({
        title: post.title,
        category: post.category,
        description: post.description,
        cost: post.cost,
        userId: post.user._id,
        userName: post.user.firstName + " " + post.user.lastName,
    });
});

router.delete("/:tagId", auth, async (req, res) => {
    Post.findOneAndDelete(
        { _id: req.params.tagId },

        (err, result) => {
            if (err) return res.send(500, err);
            console.log("got deleted");
            res.redirect("/feed");
        }
    );
});

export default router;
