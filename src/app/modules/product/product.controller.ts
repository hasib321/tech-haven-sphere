import { Request, Response } from "express";
import productService from "./product.service";
import ProductValidateSchema from "./product.validation";
import { string } from "zod";

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


const getSingleProduct=async(req:Request,res:Response)=>{
  try{
    const productId:string=req.params.id;
    const result=await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      "success": true,
      "message": "Products fetched successfully!",
      "data":result,
    })
  }catch(error){
    res.status(500).json({
      "success":false,
      "message": "retrieve failed or in valid product id",
   })
   console.log(error);
  }
}

// update product
const updateProduct=async(req:Request,res:Response)=>{
    try{
      const product=req.body;
      const productId=req.params.id;
      const validateProduct=ProductValidateSchema.parse(product);
      const result = await productService.updateProductFromDb(productId,validateProduct);
      res.status(200).json({
        "success": true,
        "message": "Product updated successfully!",
        "data":result,
      })

    }catch(error){
      res.status(500).json({
        "success":false,
        "message": "Product update failed",
     })
      console.log(error);
    }
    
}

// update product
const deleteProduct=async(req:Request,res:Response)=>{
    try{
      const productId=req.params.id;
      const result = await productService.deleteProductFromDb(productId)
      if(result){
        res.status(200).json({
          "success": true,
          "message": "Product deleted successfully!",
          "data":null,
        })
      }else{
        res.status(200).json({
          "success": false,
          "message": "Product not found in db",
        })
      }
  

    }catch(error){
      res.status(500).json({
        "success":false,
        "message": "Product delete failed",
     })
      console.log(error);
    }

}


const productController={
    insertProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}

export default productController;