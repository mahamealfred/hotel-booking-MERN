import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();
dotenv.config()

// const connect=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("Connected to MongoDb.")
//       } catch (error) {
//         throw error;
//       }
// }
// mongoose.connection.on("disconected",()=>{
//     console.log("MongoDB disconnected")
// })
const connectionString = process.env.MONGO_DB;
const dbConnect = async (next) => {
  const connect = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`mongodb connected on: ${connect.connection.host}`);
};

//middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://127.0.0.1:3000'}));
app.enable('trust proxy');
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
   dbConnect();
    console.log("Connected to Backend.");
})