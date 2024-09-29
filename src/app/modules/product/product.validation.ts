import { z } from "zod";

const VariantsValidatorSchema=z.object({
    type:z.string().trim(),
    value:z.string().trim()
})

const InventoryValidatorSchema=z.object({
    quantity:z.number().positive("Quantity must be a positive"),
    inStock:z.boolean(),
})

const ProductValidateSchema=z.object({
    name:z.string().min(2,"Name is at lest 2 character").trim(),
    description:z.string().min(5,"Description is required").trim(),
    price:z.number().positive("Price must be a positive number"),
    category:z.string().trim(),
    tags:z.array(z.string()),
    variants:z.array(VariantsValidatorSchema),
    inventory:InventoryValidatorSchema
})

export default ProductValidateSchema