import express from "express";
import {
  courseDeleteById,
  createCourse,
  getCourses,
} from "../controllers/courseControllers.js";
const router = express.Router();

router.post("/create", createCourse);
router.get("/all", getCourses);
router.delete("/:id", courseDeleteById);
export default router;
