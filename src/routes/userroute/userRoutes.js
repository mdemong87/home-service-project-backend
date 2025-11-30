import express from "express";
import { getAllUsers, getUser, updateUser } from '../../controllers/userController/userController.js';
import { protect } from "../../middlewares/authMiddleware.js";


const router = express.Router();



router.get("/allusers", protect, getAllUsers);
router.get("/user/:id", protect, getUser);
router.put("/user/:id", protect, updateUser);



export default router;