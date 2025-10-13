import express from "express";
import {
  courseDeleteById,
  createCourse,
  getCourses,
} from "../controllers/courseControllers.js";
const router = express.Router();

router.post("/create", verifyToken, createCourse);
router.get("/all", verifyToken, getCourses);
router.delete("/:id", verifyToken, courseDeleteById);
export default router;
