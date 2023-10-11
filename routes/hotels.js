import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {createHotel, updateHotel} from "../controllers/hotelController.js"

const router=express.Router();
//create new hotel
router.post("/",createHotel)
//update
router.put("/:id",updateHotel)
//delete
router.delete("/:id",async(req,res)=>{
    try {
    await Hotel.findByIdAndDelete(
         req.params.id,
         )
         res.status(200).json("Hotel has been deleted")
    }  catch (err) {
        res.status(500).json(err)
       }
 })
//get
router.get("/:id",async(req,res)=>{
    try {
   const hotel= await Hotel.findById(
         req.params.id,
         )
         res.status(200).json(hotel)
    }  catch (err) {
        res.status(500).json(err)
       }
 })
//get all
router.get("/",async(req,res,next)=>{
 
    try {
   const hotels= await Hotel.find(
         )
         res.status(200).json(hotels)
    } catch (err) {
    next(err)
    }
 })
export default router