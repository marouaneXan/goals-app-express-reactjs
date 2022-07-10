const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getMe} = require('../controllers/UserController')

//Register
router.post('/register',registerUser)

//Login
router.post('/login',loginUser)

//get user informations
router.get('/',getMe)

module.exports=router