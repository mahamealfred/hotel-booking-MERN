import express from "express";
import {countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router=express.Router();
//create new hotel
router.post("/",verifyAdmin,createHotel)
//update
router.put("/:id",verifyAdmin,updateHotel)
//delete
router.delete("/:id",verifyAdmin,deleteHotel)
//get
router.get("/find/:id",getHotel)
//get all
router.get("/",getHotels)

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms)
export default router