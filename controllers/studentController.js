import Student from "../models/Student.js";

export const createStudent = async (req, res) =>{
    try{
        const student = await Student.create(req.body);
        req.status(201).json(student);
    }
    catch(error){
        res.status(500).json(error);
    }
};

export const getStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(error){
        res.status(500).json(error);
    }
};

export const getStudentById = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.json(student);
    }catch(error){
        res.status(500).json(error);
    }
};

export const updateStudent = async (req,res)=>{
    try{
        const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(student);
    }catch(error){
        res.status(500).json(error);
    }
};

export const deleteStudent = async (req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.json({message:"Student deleted"});
    }catch(error){
        res.status(500).json(error);
    }
};