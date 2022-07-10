const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");
const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')

// @desc Register user
// @route POST api/user
// @access public
const registerUser=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    res.json({msg:'register user'})
})

// @desc Register user
// @route POST api/user
// @access public
const loginUser=asyncHandler(async (req,res)=>{
    res.json({msg:'login user'})
})
module.exports={
    registerUser,
    loginUser
}
