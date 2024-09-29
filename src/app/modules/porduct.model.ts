import mongoose, { Schema } from "mongoose";
import { Product,Variants,Inventory } from "./product/product.interface";

const VariantsSchema= new Schema<Variants>({
      type:{type:String,trim:true},
      value:{type:String,trim:true},
    }
 )
const InventorySchema=new Schema<Inventory>({
    quantity:{type:Number},
    inStock:{type:Boolean},
   })

const ProductSchema=new Schema<Product>({
    name:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true},
    price:{type:Number,required:true},
    category:{type:String,required:true,trim:true},
    tags:{type:[String],trim:true},
    variants:{type:[VariantsSchema]},
    inventory :{type:InventorySchema,required:true}
})


const ProductModel=mongoose.model('product',ProductSchema);
export default ProductModel;