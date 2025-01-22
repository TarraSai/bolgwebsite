require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const {PORT}=process.env
const connectDB=require('./database')
const router=require('./routers/userRouter')
connectDB()
//routers
app.use(express.json())
app.use(cors())
app.use('/blog',router)
app.listen(PORT ||3000,()=>{
    console.log(`Server is running on port ${PORT}`)
})