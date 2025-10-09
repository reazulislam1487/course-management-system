import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    instructor: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export default Course = mongoose.model("Course", courseSchema);
