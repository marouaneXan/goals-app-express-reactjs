const express = require('express')
const router = express.Router()
const {getGoals,getSingleGoal,setGoal,updateGoal,deleteGoal} = require('../controllers/GoalController')
const {protect}=require('../middleware/authMiddleware')

//get All goals
router.get('/',getGoals)

//get All goals
router.get('/:id',getSingleGoal)

//create goal
router.post('/',protect,setGoal)

//update goal
router.put('/:id',protect,updateGoal)

//delete goal
router.delete('/:id',protect,deleteGoal)



module.exports=router