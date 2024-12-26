import { create } from "zustand";

// global State
export const useCourseStore = create((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  createCourse: async (newCourse) => {
    if (!newCourse.title || !newCourse.price || !newCourse.image) {
      return { success: false, message: "please fill in all fields." };
    }
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
    const data = await res.json();
    set((state) => ({ courses: [...state.courses, data.data] }));
    return { success: true, message: "course created successfully." };
  },
  fetchCourses:async()=>{
    const res=await fetch("/api/courses");
    const data=await res.json();
    set({courses:data.data})
  },
  deleteCourse:async(cid)=>{
    const res=await fetch(`/api/courses/${cid}`,{
      method:"DELETE",
    });
    const data=await res.json();
    if(!data.success) return {success:false,message:data.message};
    set(state=>({courses:state.courses.filter(course=>course._id!==cid )}))
    return {success:true,message:data.message};
  },
  updateCourse:async(cid,updatedCourse)=>{
    const res =await fetch(`/api/courses/${cid}`,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    });
    const data=await res.json();
    if(!data.success) return {success:false,message:data.message};
    set(state=>({
      courses:state.courses.map(course=>course._id===cid ? data.data :course)
    }));
    return {success:true,message:data.message};

  }
}));
