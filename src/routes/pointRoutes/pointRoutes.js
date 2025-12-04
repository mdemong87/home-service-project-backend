import express from "express";
import { getAllPoints } from '../../controllers/pointController/pointController.js';


const router = express.Router();


router.get("/allcredits", getAllPoints);




export default router;