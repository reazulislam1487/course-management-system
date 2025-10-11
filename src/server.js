import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Database from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import courseRouters from "./routes/coursesRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import topicRoutes from "./routes/topicRoutes.js";
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
app.use("/user", userRouters);
app.use("/course", courseRouters);
app.use("/lesson", lessonRoutes);
app.use("/lesson", topicRoutes);

// Global error handler
app.use(globalErrorHandler);
app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
