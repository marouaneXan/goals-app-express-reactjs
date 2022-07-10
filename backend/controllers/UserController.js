const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

// @desc Register user
// @route POST api/user
// @access public
const registerUser=asyncHandler(async (req,res)=>{
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
