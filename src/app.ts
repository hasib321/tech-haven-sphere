import express, { NextFunction, Request, Response } from "express";
import cors from "cors"
import productRoute from "./app/modules/product/product.route";
const app = express();


app.use(cors())
// body pauser
app.use(express.json());
app.use(express.text())


app.get("/",(req:Request,res:Response)=>{
   res.send("hello world")
   console.log("hello world")
})

app.use('/api/products',productRoute)

// notFound handler
const notFoundHandlers=(req:Request,res:Response,next:NextFunction)=>{
   res.status(404).json({
     "success": false,
     "message": "Route not found"
   })
}

app.use(notFoundHandlers)

// default error handlers
const defaultErrorHandlers=(error:any,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({
        "success": false,
        "message": "Something was wrong"
      })
      console.log(error)
}

app.use(defaultErrorHandlers);

export default app;