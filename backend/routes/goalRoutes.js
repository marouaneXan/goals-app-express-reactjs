const express = require('express')
const router = express.Router()
const {getGoals,getSingleGoal,setGoal,updateGoal,deleteGoal} = require('../controllers/GoalController')


//get All goals
router.get('/',getGoals)

//get All goals
router.get('/:id',getSingleGoal)

//create goal
router.post('/',setGoal)

//update goal
router.put('/:id',updateGoal)

//delete goal
router.delete('/:id',deleteGoal)



module.exports=router