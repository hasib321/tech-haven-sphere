import { Request, Response } from "express";
import { orderService } from "./order.service";
import OrderValidationSchema from "./order.validation";

// create Order
const createOrder=async(req:Request,res:Response)=>{
  try{
    const order=req.body;
    const validOrder=OrderValidationSchema.parse(order)
    const result=await orderService.createOrderIntoDB(validOrder);
    res.status(200).json({
        "success":true,
        "message": "Order created successfully!",
        "data":result
    })
  }catch(error){
    res.status(500).json({
        "success":false,
        "message": "Order create failed",
        "data":""
    })
    console.log(error)
  }

}

export const orderController={
    createOrder,
}