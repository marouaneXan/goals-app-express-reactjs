const jwt=require('jwtwebtoken')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')

const protect=asyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        // Get token from header
        token=req.headers.authorization.split(' ')[1]
        //Verify token
    }
})

module.exports={
    protect
}