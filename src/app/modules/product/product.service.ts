
import mongoose, { Schema } from "mongoose";
import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

// insert product db
const insertProductIntoDB=async(product:Product)=>{
    const result=await ProductModel.create(product)
    return result;
}

// get all product from db
const getProductFromBB=async()=>{
    const result=await ProductModel.find({});
    return result;
}

// retrieve single product by id
const getSingleProductFromDB=async(id:string)=>{
   const result=await ProductModel.findById(id);
   return result
}

// update product by id in db
const updateProductFromDb=async(id:string,product:Product)=>{
    const result=await ProductModel.findByIdAndUpdate(id,{$set:product},{new:true})
    return result
}



const productService={
    insertProductIntoDB,
    getProductFromBB,
    getSingleProductFromDB,
    updateProductFromDb,
}

export default productService;