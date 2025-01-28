require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const {PORT}=process.env
const connectDB=require('./database')
const router=require('./routers/userRouter')
const uploadRoutes = require("./routers/uploadRoutes");
const bodyParser = require('body-parser')
connectDB()
//routers
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/blog',router)
app.use("/api", uploadRoutes);
app.listen(PORT ||3000,()=>{
    console.log(`Server is running on port ${PORT}`)
})