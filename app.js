import express from "express";
import dotenv from "dotenv";
import connectionDb from "./config/connectiondb.js";

import studentRoutes from "./routes/studentRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";

dotenv.config();

const app = express();

connectionDb();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api/students", studentRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/enrollments", enrollmentRoutes);

app.listen(process.env.PORT,()=>{
console.log(`Server running on port ${process.env.PORT}`);
});
