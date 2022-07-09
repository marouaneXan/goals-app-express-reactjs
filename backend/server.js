const express=require('express')
const dotenv=require('dotenv').config()
const PORT =5000

const app=express()
app.listen(PORT,()=>{
    console.log('Server connected with the PORT '+PORT)
})
