import express from "express";
import {createHotel, deleteHotel, getHotel, getHotels, updateHotel} from "../controllers/hotelController.js"
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router=express.Router();
//create new hotel
router.post("/",verifyAdmin,createHotel)
//update
router.put("/:id",verifyAdmin,updateHotel)
//delete
router.delete("/:id",verifyAdmin,deleteHotel)
//get
router.get("/:id",getHotel)
//get all
router.get("/",getHotels)
export default router