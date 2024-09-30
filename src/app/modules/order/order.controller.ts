import { Request, Response } from "express";
import { orderService } from "./order.service";
import OrderValidationSchema from "./order.validation";

// create Order
const createOrder=async(req:Request,res:Response)=>{
  try{
    const order=req.body;
    const validOrder=OrderValidationSchema.parse(order)
    const result=await orderService.createOrderIntoDB(validOrder);
    if(result){
        res.status(200).json({
            "success":true,
            "message": "Order created successfully!",
            "data":result
        })
    }else{
        res.status(500).json({
            "success":false,
            "message": "Order insufficient stock.",
        })
    }
  }catch(error){
    res.status(500).json({
        "success":false,
        "message": "Order create failed",
        "data":""
    })
    console.log(error)
  }

}

// get order
const findOrder=async(req:Request,res:Response)=>{
    try{
      const email=req.query?.email;
      const result=await orderService.findOrderFromDB(email);
      console.log(email)
      if(result.length>0){
        let message="Orders fetched successfully!";
        if(email){
            message=`Orders fetched successfully for user ${email}!`
        }
      res.status(200).json({
          "success":true,
          "message": message,
          "data":result
      })
     }else{
        res.status(500).json({
            "success":false,
            "message": "Order created successfully!",
        })
     }
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
    findOrder,
}