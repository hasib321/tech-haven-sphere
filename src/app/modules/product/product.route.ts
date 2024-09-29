import express, { Request, Response } from "express"
import productController from "./product.controller";
const router= express.Router();

// insert product route
router.post("/",productController.insertProduct)

router.get("/",productController.getAllProduct)

const productRoute=router
export default productRoute;