import Lesson from "../models/Lesson.js";

export const createLesson = async(req,res)=>{
    const lesson = await Lesson.create(req.body);
    res.json(lesson);
};

export const getLessons = async(req,res)=>{
    const lessons = await Lesson.find().populate("course");
    res.json(lessons);
};

export const getLessonById = async(req,res)=>{
    const lesson = await Lesson.findById(req.params.id).populate("course");
    res.json(lesson);
};

export const updateLesson = async(req,res)=>{
    const lesson = await Lesson.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(lesson);
};

export const deleteLesson = async(req,res)=>{
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({message:"Lesson deleted"});
};