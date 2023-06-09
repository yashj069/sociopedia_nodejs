import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/users.js";

const router = express.Router();

// READ

router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);

// UPDATE

router.patch("/:id/:friendId", addRemoveFriend);

export default router;
