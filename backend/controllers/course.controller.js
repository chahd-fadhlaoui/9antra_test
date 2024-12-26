import mongoose from "mongoose"
import Course from "../models/course.model.js"

export const getCourses= async (req,res) => {
    try {
      const courses = await Course.find({})  
      res.status(200).json({success:true,data:courses})
    } catch (error) {
        console.log("error in fetching courses :",error.message)
        res.status(500).json({success:false,message:"server error"})

    }
}

export const createCourse=async (req,res) => {
    const course= req.body; // user will this data 
    if (!course.title || !course.price || !course.image){
       return res.status(400).json({success:false,message:"Please provide all fields "});
    }
        const newCourse= new Course(course);
        try {
            await newCourse.save();
            res.status(201).json({success:true,data:newCourse});
        } catch (error) {
            console.log("error create course ",error.message)
            res.status(500).json({success:false,message:"server error "});

        }
   
}
export const deleteCourse=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false ,message:"course not found "})

    }
    try {
      await Course.findByIdAndDelete(id);  
      res.status(200).json({success:true,message:"Course deleted "})
    } catch (error) {
        console.log("error in delete courses :",error.message)
        res.status(500).json({success:false ,message:"server error "})

    }
}

export const updateCourse= async (req,res)=>{
    const {id}= req.params;

    const course=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false ,message:"course not found "})

    }

    try {
       const UpdatedCourse= await Course.findByIdAndUpdate(id,course,{new:true})
       res.status(200).json({success:true,data:UpdatedCourse})
    } catch (error) {
        res.status(500).json({success:false ,message:"server error "})

    }
}