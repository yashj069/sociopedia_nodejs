import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/Posts.js";

const router = express.Router();

// READ
router.get("/", getFeedPosts);
router.get("/:userId/posts", getUserPosts);

// UPDATE
router.patch("/:id/like", likePost);

export default router;
