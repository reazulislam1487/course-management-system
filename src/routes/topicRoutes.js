import express from "express";
import {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
} from "../controllers/topicController.js";

const router = express.Router();

router.post("/", verifyToken, createTopic);
router.get("/", verifyToken, getTopics);
router.get("/:id", verifyToken, getTopicById);
router.put("/:id", verifyToken, updateTopic);
router.delete("/:id", verifyToken, deleteTopic);

export default router;
