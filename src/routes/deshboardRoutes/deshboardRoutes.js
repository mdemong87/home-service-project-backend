import express from "express";
import { deshboardcontroller } from "../../controllers/deshboardcontroller/deshboardcontroller.js";

const router = express.Router();



router.get("/deshboard", deshboardcontroller);



export default router;