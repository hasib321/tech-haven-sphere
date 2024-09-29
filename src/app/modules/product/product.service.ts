
import mongoose, { Schema } from "mongoose";
import { ProductModel } from "../product.model";
import { Product } from "./product.interface";


const insertProductIntoDB=async(product:Product)=>{
    const result=await ProductModel.create(product)
    return result;
}



const productService={
    insertProductIntoDB,
}

export default productService;