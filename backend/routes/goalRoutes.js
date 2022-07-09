const express = require('express')
const router = express.Router()
const {getGoals,setGoal} = require('../controllers/GoalController')


//get All goals
router.get('/',getGoals)

//create goal
router.post('/',setGoal)



module.exports=router