import dotenv from 'dotenv';
import path from 'path'

// config dotenv
dotenv.config({path:path.join(process.cwd(),'.env')})

export default{
    port:process.env.PORT,
    db_connection_str:process.env.DB_CONNECTION_STR
}