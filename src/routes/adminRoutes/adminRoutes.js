import express from "express";
import { addArea, addCatagory, adminDeshboard, deleteArea, deleteCatagory, getAllAreas, getAllCatagory, updateArea, updateCatagory } from "../../controllers/adminController/adminController.js";
import { getAdminAllPoints } from "../../controllers/adminController/getAllPoints.js";
import { authorize, protect } from "../../middlewares/authMiddleware.js";


const router = express.Router();


router.get("/deshboard", protect, authorize("admin"), adminDeshboard);

router.post("/addcatagory", protect, authorize("admin"), addCatagory);

router.post("/addarea", protect, authorize("admin"), addArea);

router.get("/allcatagory", getAllCatagory);

router.get("/allarea", getAllAreas);

router.put("/updatecatagory/:id", protect, authorize("admin"), updateCatagory);

router.put("/updatearea/:id", protect, authorize("admin"), updateArea);

router.delete("/deletecatagory/:id", protect, authorize("admin"), deleteCatagory);

router.delete("/deletearea/:id", protect, authorize("admin"), deleteArea);

router.get("/allcredits", getAdminAllPoints);



export default router;