import express, { Request, Response } from "express"
import productController from "./product.controller";
const router= express.Router();

// insert product route
router.post("/",productController.insertProduct)
// retrieve all product route
router.get("/",productController.getAllProduct)
// retrieve single product route
router.get("/:id",productController.getSingleProduct)
// update product
router.put("/:id",productController.updateProduct)


const productRoute=router
export default productRoute;