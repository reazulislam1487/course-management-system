import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  const { name, email } = req.user;
  console.log(name);
  try {
    const users = await User.find();
    res.json({
      message: "Successfully get users",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(403).json({
        message: "user already exist",
        success: false,
        data: {
          name: existUser.name,
        },
      });
    }
    const hashedPassword = await bycrpt.hash(password, 10);

    const user = await User({ name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({
      message: "user created successfully",
      success: true,
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        userId: user._id,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    // user check
    if (!user) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }
    // user verify by jwt
    const result = await bycrpt.compare(password, user?.password);
    if (result) {
      const token = jwt.sign(
        { name: user?.name, email: user?.email, userId: user?._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        message: "successfully login",
        success: true,
        accessToken: token,
        data: {
          name: user?.name,
          email: user?.email,
          userId: user?._id,
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
