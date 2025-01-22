require('dotenv').config()
const express=require('express')
const app=express()
const {PORT}=process.env
const connectDB=require('./database')

connectDB()

app.listen(PORT ||3000,()=>{
    console.log(`Server is running on port ${PORT}`)
})