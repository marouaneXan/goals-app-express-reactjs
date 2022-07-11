const asyncHandler = require("express-async-handler");
const goal = require("../models/goalModel");
const user = require("../models/userModel");

// @desc  Get goals
// @route  GET api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await goal.find();
  res.status(200).json(goals);
});

// @desc  Get goals
// @route  GET api/goals/id
// @access Public
const getSingleGoal = asyncHandler(async (req, res) => {
    const Goal = await goal.findById(req.params.id);
    res.status(200).json(Goal);
  });

// @desc  Set goals
// @route  POST api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  const {text}=req.body
  if (!text) {
    res.status(404);
    throw new Error("please add a text field");
  }
  await goal.create({
    text,
    user:req.user.id
  });
  res.status(200).json({ msg: "Goal created successfully" });
});

// @desc  update goals
// @route  PUT api/goals/id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const Goal = await goal.findById(req.params.id);
  if (!Goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  //Check user
  const User=await user.findById(req.user.id)
  if(!User){
    res.status(401)
    throw new Error('User not found')
  }
  //make sure the loggerd in user matches the goal user 
  if(Goal.use.toString()!==user.id){
    res.status(401)
    throw new Error('User not authorized')
  }
  await goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  res.status(200).json({ msg: "Goal updated successfully" });
});

// @desc  update goals
// @route  PUT api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const Goal = await goal.findById(req.params.id);
  if (!Goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "Goal deleted successfully" });
});

module.exports = {
  getGoals,
  getSingleGoal,
  setGoal,
  updateGoal,
  deleteGoal
};
