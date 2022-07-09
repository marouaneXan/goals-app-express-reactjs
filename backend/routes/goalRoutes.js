const express = require('express')
const router = express.Router()


// Get all goals
router.get('/',(req,res)=>{
    res.status(200).json({msg:'all goals'})
})



module.exports=router