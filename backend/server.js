
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import coursesRoutes from "./routes/course.route.js"

dotenv.config();

const app = express();

const PORT=process.env.PORT || 5000
app.use(express.json()); // allows us to accept JSON data from the req.body

app.use("/api/courses",coursesRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log('server started at port'+PORT);
})

