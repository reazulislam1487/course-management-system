import { Lesson } from "../model/lessonModel.js";
import { Topic } from "../model/topicModel.js";

// Create Topic
export const createTopic = async (req, res, next) => {
  try {
    const { title, content, quiz, lesson } = req.body;

    const existingLesson = await Lesson.findById(lesson);
    if (!existingLesson)
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });

    const topic = await Topic.create({ title, content, quiz, lesson });

    // Push topic ID to lesson
    existingLesson.topics.push(topic._id);
    await existingLesson.save();

    res.status(201).json({
      success: true,
      message: "Topic created successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

//  Get All Topics
export const getTopics = async (req, res, next) => {
  try {
    const topics = await Topic.find().populate("lesson", "title");
    res.status(200).json({
      success: true,
      message: "Topics retrieved successfully",
      data: topics,
    });
  } catch (error) {
    next(error);
  }
};

//  Get Topic by ID
export const getTopicById = async (req, res, next) => {
  try {
    const topic = await Topic.findById(req.params.id).populate(
      "lesson",
      "title"
    );
    if (!topic)
      return res
        .status(404)
        .json({ success: false, message: "Topic not found" });

    res.status(200).json({
      success: true,
      message: "Topic retrieved successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

//  Update Topic
export const updateTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!topic)
      return res
        .status(404)
        .json({ success: false, message: "Topic not found" });

    res.status(200).json({
      success: true,
      message: "Topic updated successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

//  Delete Topic
export const deleteTopic = async (req, res, next) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic)
      return res
        .status(404)
        .json({ success: false, message: "Topic not found" });

    res.status(200).json({
      success: true,
      message: "Topic deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
