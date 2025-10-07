import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Course Management Server is running"));

app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
