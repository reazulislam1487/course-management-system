import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
