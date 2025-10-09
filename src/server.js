import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Database from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

dotenv.config();
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());
// db connection
const db = new Database(process.env.DB_URI);
db.connect();
app.get("/", (req, res) => res.send("Course Management Server is running"));

// all routes
app.use("/user", userRouter);



app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
