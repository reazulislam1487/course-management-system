import express from "express";
import {
  createLesson,
  getLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
} from "../controllers/lessonController.js";

const router = express.Router();

router.post("/", verifyToken, createLesson);
router.get("/", verifyToken, getLessons);
router.get("/:id", verifyToken, getLessonById);
router.put("/:id", verifyToken, updateLesson);
router.delete("/:id", verifyToken, deleteLesson);

export default router;
