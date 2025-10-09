import { User } from "../model/userModel.js";

export const getUsers = async (req, res) => {
  res.json({
    message: "Successfully get users",
    data: [],
  });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User({ name, email, password });
  await user.save();
  res.json({
    message: "user created successfully",
    data: user,
  });
};
