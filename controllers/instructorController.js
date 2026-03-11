import Instructor from "../models/Instructor.js";

export const createInstructor = async(req,res)=>{
    const instructor = await Instructor.create(req.body);
    res.json(instructor);
};

export const getInstructors = async(req,res)=>{
    const instructors = await Instructor.find();
    res.json(instructors);
};

export const getInstructorById = async(req,res)=>{
    const instructor = await Instructor.findById(req.params.id);
    res.json(instructor);
};

export const updateInstructor = async(req,res)=>{
    const instructor = await Instructor.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(instructor);
};

export const deleteInstructor = async(req,res)=>{
    await Instructor.findByIdAndDelete(req.params.id);
    res.json({message:"Instructor deleted"});
};
