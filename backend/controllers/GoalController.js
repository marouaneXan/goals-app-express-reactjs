const asyncHandler = require("express-async-handler");
const goal = require("../models/goalModel");
// @desc  Get goals
// @route  GET api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await goal.find();
  res.status(200).json(goals);
});

// @desc  Set goals
// @route  POST api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("please add a text field");
  }
  res.status(200).json({ msg: "Goal created successfully" });
});

module.exports = {
  getGoals,
  setGoal,
};
