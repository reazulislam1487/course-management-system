import express from "express";
import { createUser, login } from "../controllers/userControllers.js";
const router = express.Router();

// router.get("/users");
router.post("/post", createUser);
router.post("/login", login);

export default router;
