import express from "express";
import { createUser } from "../controllers/userControllers.js";
const router = express.Router();

// router.get("/users");
router.post("/user", createUser);

export default router;
