import express from "express"
import { orderController } from "./order.controller";
const router=express.Router();
// create order
router.post("/",orderController.createOrder);
// get order
router.get("/",orderController.findOrder);


export const orderRoute=router;