import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: { type: Number, default: 0 },
    feedbacks: [{ type: String }],
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
