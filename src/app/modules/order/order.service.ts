import { number } from "zod";
import OrderModel from "../order.model";
import { ProductModel } from "../product.model";
import { Order } from "./order.interface";

// create order
const createOrderIntoDB=async(order:Order)=>{
   const {productId,quantity}=order;

   const product=await ProductModel.findById(productId);
   const inventory= product?.inventory
   const productQuantity=inventory?.quantity
   let inStock=inventory?.inStock
   if(productQuantity){
      const remainderQuantity=productQuantity-quantity
      if(remainderQuantity>=0&& inStock){
        if(remainderQuantity===0){
            inStock=false
        }
       const updateQuery={$set:{"inventory.quantity":remainderQuantity,"inventory.inStock":inStock}}
       await ProductModel.findByIdAndUpdate(productId,updateQuery)

    //    create a order 
        const newOrder= new OrderModel(order);
        const result=await newOrder.save();
        return result;
      }else{
        return false;
      }

   }

}


// get order 
const findOrderFromDB=async(email:string|any)=>{
    let queryObj={}
    if(email){
        queryObj={email}
    }
    const result=OrderModel.find(queryObj)
    return result
}

export const orderService={
    createOrderIntoDB,
    findOrderFromDB,
}