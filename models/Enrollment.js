import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },

  enrollDate: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

export default mongoose.model("Enrollment", enrollmentSchema);