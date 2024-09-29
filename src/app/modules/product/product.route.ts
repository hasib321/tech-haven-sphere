import express, { Request, Response } from "express"
import productController from "./product.controller";
const router= express.Router();

// insert product route
router.post("/",productController.insertProduct)

router.get("/",(req:Request,res:Response)=>{
   res.send("hello product");
})

const productRoute=router
export default productRoute;