const express=require("express");
const app=express();
const connectDB=require('./config/ConnectDB');
const adminRoute=require('./routes/adminRoute');
const AuthRoute=require('./routes/AuthRoute');
require('dotenv').config({path:'./config/.env'})  ;        
app.use(express.json());
const port =7000||process.env.PORT 
connectDB();
app.listen(port,()=>{
console.log(`The server is running on port ${port}`)
})
app.use('/admin',adminRoute)
app.use('/auth',AuthRoute)
