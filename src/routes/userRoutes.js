import express from "express";
import {
  createUser,
  getAllUsers,
  login,
} from "../controllers/userControllers.js";
import verifyToken from "../middlewares/authMiddlewares.js";
const router = express.Router();

// router.get("/users");
router.get("/all", verifyToken, getAllUsers);
router.post("/post", createUser);
router.post("/login", login);

export default router;
