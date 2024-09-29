import { Request, Response } from "express";
import productService from "./product.service";
import ProductValidateSchema from "./product.validation";

// insert product
const insertProduct=async(req:Request,res:Response)=>{
  try{
    const product=req.body;
    const validateProduct=ProductValidateSchema.parse(product);
    const result = await productService.insertProductIntoDB(validateProduct)
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

// get all product

const getAllProduct=async(req:Request,res:Response)=>{
     try{
      const result=await productService.getProductFromBB();
      res.status(200).json({
        "success": true,
        "message": "Products fetched successfully!",
        "data":result,
      })

     }catch(error){
      res.status(500).json({
          "success":false,
          "message": "All products retrieve failed",
      })
      console.log(error);
     }
}

const productController={
    insertProduct,
    getAllProduct,
}

export default productController;