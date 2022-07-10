const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getMe} = require('../controllers/UserController')
const {protect} = require('../middleware/authMiddleware')

//Register
router.post('/register',registerUser)

//Login
router.post('/login',loginUser)

//get user informations
router.get('/',protect,getMe)

module.exports=router