const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoal} = require('../controllers/GoalController')


//get All goals
router.get('/',getGoals)

//create goal
router.post('/',setGoal)

//update goal
router.put('/:id',updateGoal)



module.exports=router