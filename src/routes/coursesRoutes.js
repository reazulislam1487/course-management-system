import express from "express";
import { createCourse, getCourses } from "../controllers/courseControllers.js";
const router = express.Router();

router.post("/create", createCourse);
router.get("/all", getCourses);
export default router;
