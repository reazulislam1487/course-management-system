import { Course } from "../model/courseModel.js";
import { Lesson } from "../model/lessonModel.js";

// ➤ Create Lesson
export const createLesson = async (req, res, next) => {
  try {
    const { title, course } = req.body;

    // Check if course exists
    const existingCourse = await Course.findById(course);
    if (!existingCourse)
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });

    const lesson = await Lesson.create({ title, course });

    res.status(201).json({
      success: true,
      message: "Lesson created successfully",
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// ➤ Get All Lessons
export const getLessons = async (req, res, next) => {
  try {
    const lessons = await Lesson.find().populate("course", "title description");
    res.status(200).json({
      success: true,
      message: "Lessons retrieved successfully",
      data: lessons,
    });
  } catch (error) {
    next(error);
  }
};

// ➤ Get Lesson by ID
export const getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate("course");
    if (!lesson)
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });

    res.status(200).json({
      success: true,
      message: "Lesson retrieved successfully",
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// ➤ Update Lesson
export const updateLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!lesson)
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });

    res.status(200).json({
      success: true,
      message: "Lesson updated successfully",
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// ➤ Delete Lesson
export const deleteLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson)
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });

    res.status(200).json({
      success: true,
      message: "Lesson deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
