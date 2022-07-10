const asyncHandler = require("express-async-handler");
const goal = require("../models/goalModel");

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
  if (!req.body.text) {
    res.status(404);
    throw new Error("please add a text field");
  }
  await goal.create({
    text: req.body.text,
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
