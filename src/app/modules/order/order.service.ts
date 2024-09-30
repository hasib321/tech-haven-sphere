
// create a order

import OrderModel from "../order.model";
import { Order } from "./order.interface";

const createOrderIntoDB=async(order:Order)=>{
   const newOrder= new OrderModel(order);
   const result=await newOrder.save();
   return result;
}


export const orderService={
    createOrderIntoDB,
}