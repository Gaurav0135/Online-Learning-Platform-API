import Enrollment from "../models/Enrollment.js";

export const enrollStudent = async(req,res)=>{
    const enrollment = await Enrollment.create(req.body);
    res.json(enrollment);
};

export const getEnrollments = async(req,res)=>{
    const enrollments = await Enrollment.find()
    .populate("student")
    .populate("course");

    res.json(enrollments);
};

export const deleteEnrollment = async(req,res)=>{
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({message:"Enrollment removed"});
};