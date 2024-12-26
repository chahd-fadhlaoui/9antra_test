import express from 'express'

import { createCourse, deleteCourse, getCourses, updateCourse } from '../controllers/course.controller.js';

const router =express.Router();
// get all courses 
router.get("/",getCourses)

//add course 
router.post("/",createCourse)

//delete course 
router.delete("/:id",deleteCourse)

// update course 
router.put("/:id",updateCourse)
export default router;