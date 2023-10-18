import express from "express";
import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controllers/roomController.js"
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router=express.Router();
//create new hotel
router.post("/:hotelid",verifyAdmin,createRoom)
//update
router.put("/:id",verifyAdmin,updateRoom)
//delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//get
router.get("/:id",getRoom)
//get all
router.get("/",getRooms)
export default router