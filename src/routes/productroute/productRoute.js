import express from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from '../../controllers/productController/productController.js';
import { protect } from "../../middlewares/authMiddleware.js";
import upload from "../../middlewares/upload.js";


const router = express.Router();



router.get("/allproducts", protect, getAllProduct);

router.get("/singleProduct/:id", protect, getSingleProduct);

router.post("/createProduct", protect, upload.fields([
    { name: "license", maxCount: 1 },
    { name: "insurance", maxCount: 1 },
    { name: "serviceImages", maxCount: 4 },
]), createProduct);

router.put("/updateProduct/:id", protect, updateProduct);

router.delete("/deleteProduct/:id", protect, deleteProduct);



export default router;