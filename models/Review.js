import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

  rating: {
    type: Number,
    required: true
  },

  comment: {
    type: String
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }

}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);