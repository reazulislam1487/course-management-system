import express from "express";
import {
  courseDeleteById,
  createCourse,
  getCourses,
  updateCourse,
} from "../controllers/courseControllers.js";
import verifyToken from "../middlewares/authMiddlewares.js";
const router = express.Router();
// Course Api
router.post("/create", createCourse);
router.put("/update", updateCourse);
router.get("/all", verifyToken, getCourses);
router.delete("/:id", verifyToken, courseDeleteById);
export default router;
