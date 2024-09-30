import mongoose, { Schema } from "mongoose";
import { Order } from "./order/order.interface";

const OrderSchema=new Schema<Order>({
    email:{
        type:String,
        lowercase:true,
        trim:true,
        unique:true,
    },
    productId:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number
    }
})

const OrderModel= mongoose.model("order",OrderSchema);
export default OrderModel;