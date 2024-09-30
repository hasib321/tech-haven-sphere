import OrderModel from "../order.model";
import { Order } from "./order.interface";

// create order
const createOrderIntoDB=async(order:Order)=>{
   const newOrder= new OrderModel(order);
   const result=await newOrder.save();
   return result;
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