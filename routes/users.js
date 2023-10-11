import express from "express";
import {} from "../controllers/hotelController.js"
import User from "../models/User.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyTokens.js";

const router=express.Router();
//update
router.put("/:id", updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser)
//get
router.get("/:id",getUser)
//get all
router.get("/",getUsers)
export default router