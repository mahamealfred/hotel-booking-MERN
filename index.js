import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
const app=express();
dotenv.config()

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDb.")
      } catch (error) {
        throw error;
      }
}
mongoose.connection.on("disconected",()=>{
    console.log("MongoDB disconnected")
})


//middleware
app.use(express.json())
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/hotels",hotelsRoute)
app.use("/api/v1/rooms",roomsRoute)
app.use("/api/v1/users",usersRoute)

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500;
  const errorMessage=err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  })
})
app.listen(8000,()=>{
    connect();
    console.log("Connected to Backend")
})