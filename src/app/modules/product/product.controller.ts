import { Request, Response } from "express";
import productService from "./product.service";

const insertProduct=async(req:Request,res:Response)=>{
  try{
    const product=req.body;
    const result = await productService.insertProductIntoDB(product)
    res.status(200).json({
        "success":true,
        "message": "Product created successfully!",
        "data":result,
    })
  }catch(error){
    res.status(500).json({
        "success":false,
        "message": "Product created failed!",
    })
    console.log(error);
  }
}



const productController={
    insertProduct,
}

export default productController;