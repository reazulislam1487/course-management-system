import { Course } from "../model/courseModel.js";

// create Course by Admin
export const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// teacher can update only title and description
export const updateCourse = async (req, res, next) => {
  const { id, title, description } = req.body;
  try {
    const updatedData = await Course.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          description,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Course Update Successfully",
      data: updatedData,
    });
  } catch (error) {
    next(error);
  }
};
// get all courses
export const getCourses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, searchTerm = "" } = req.query;

    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    };

    const courses = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

// get all courses
export const getCourses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, searchTerm = "" } = req.query;

    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    };

    const courses = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};
// Delete Course by Id
export const courseDeleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({ message: "Course deleted successfully", data: deletedCourse });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
