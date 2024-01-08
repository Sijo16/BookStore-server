import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import bookRoutes from "./routes/bookRoutes.js"
const app = express()

app.use(express.json())
app.use(cors());

//middleware
app.use('/book',bookRoutes);


try
{
   mongoose.connect("mongodb://localhost:27017/test")
   .then(console.log("Connection Established"))
   app.listen(3002,()=>{
      console.log("Server Running");
   })
}
catch(error)
{
   console.log(error);
}
 
