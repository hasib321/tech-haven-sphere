import { z } from "zod"
const OrderValidationSchema=z.object({
    email:z.string().email(),
    productId:z.string(),
    price:z.number().positive("Please enter a positive number"),
    quantity:z.number().positive()
})

export default OrderValidationSchema;