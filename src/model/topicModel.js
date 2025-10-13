import mongoose from "mongoose";

// Topic Model
const topicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    quiz: [
      {
        question: { type: String },
        options: [String],
        answer: { type: String },
      },
    ],
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", topicSchema);
