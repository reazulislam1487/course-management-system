import mongoose from "mongoose";

// Lesson Model
const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    topics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Topic" }],
  },
  { timestamps: true }
);

export const Lesson = mongoose.model("Lesson", lessonSchema);
