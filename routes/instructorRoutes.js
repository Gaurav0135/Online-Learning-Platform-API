import express from "express";
import {
createInstructor,
getInstructors,
getInstructorById,
updateInstructor,
deleteInstructor
} from "../controllers/instructorController.js";

const router = express.Router();

router.post("/", createInstructor);
router.get("/", getInstructors);
router.get("/:id", getInstructorById);
router.put("/:id", updateInstructor);
router.delete("/:id", deleteInstructor);

export default router;