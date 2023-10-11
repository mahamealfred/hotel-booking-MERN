import express from "express";
import {createHotel, deleteHotel, getHotel, getHotels, updateHotel} from "../controllers/hotelController.js"
import Hotel from "../models/Hotel.js";

const router=express.Router();
//create new hotel
router.post("/",createHotel)
//update
router.put("/:id",updateHotel)
//delete
router.delete("/:id",deleteHotel)
//get
router.get("/:id",getHotel)
//get all
router.get("/",getHotels)
export default router