import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Database from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import courseRouter from "./routes/coursesRoutes.js";
import globalErrorHandler from "./middlewares/errorHandler.js";

const app = express();

dotenv.config();
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());
// db connection
const db = new Database(process.env.DB_URI, { dbName: "course_management" });
db.connect();
app.get("/", (req, res) => res.send("Course Management Server is running"));

// all routes
app.use("/user", userRouter);
app.use("/course", courseRouter);

// Global error handler
app.use(globalErrorHandler);
app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
