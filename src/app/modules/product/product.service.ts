
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




const productService={
    insertProductIntoDB,
    getProductFromBB,
}

export default productService;