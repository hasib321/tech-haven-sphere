import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

const main=async()=>{
  try{
  
    // db connection
    await mongoose.connect(config.db_connection_str as string)
    .then(()=>{
        console.log("db connection success")
    }).catch((error)=>{
        console.log("db connection failed")
    })
    // start server 
    app.listen(config.port,()=>{
        console.log(`app is running port ${config.port}...`)
    })
  }catch(err){
     console.log(err);
  }
}
main();