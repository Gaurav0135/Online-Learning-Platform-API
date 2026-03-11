import Course from "../models/Course.js";

export const createCourse = async(req,res)=>{
    const course = await Course.create(req.body);
    res.json(course);
};

export const getCourses = async(req,res)=>{
    const courses = await Course.find().populate("instructor");
    res.json(courses);
};

export const getCourseById = async(req,res)=>{
    const course = await Course.findById(req.params.id).populate("instructor");
    res.json(course);
};

export const updateCourse = async(req,res)=>{
    const course = await Course.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(course);
};

export const deleteCourse = async(req,res)=>{
    await Course.findByIdAndDelete(req.params.id);
    res.json({message:"Course deleted"});
};

