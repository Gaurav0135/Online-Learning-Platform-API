import express from "express";
import {
enrollStudent,
getEnrollments,
deleteEnrollment
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", enrollStudent);
router.get("/", getEnrollments);
router.delete("/:id", deleteEnrollment);

export default router;