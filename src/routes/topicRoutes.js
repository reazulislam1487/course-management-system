import express from "express";
import {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
} from "../controllers/topicController.js";

const router = express.Router();

router.post("/create", verifyToken, createTopic);
router.get("/all", verifyToken, getTopics);
router.get("/:id", verifyToken, getTopicById);
router.put("/:id", verifyToken, updateTopic);
router.delete("/:id", verifyToken, deleteTopic);

export default router;
