const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc Register user
// @route POST api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //check for empty fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user exist
  const userExist = await user.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already exist");
  }
  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const HashPassword = await bcrypt.hash(password, salt);

  //Create user
  const User = await user.create({
    name,
    email,
    password: HashPassword,
  });
  if (User) {
    res.status(201).json({
      _id: User.id,
      name: User.name,
      email: User.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Register user
// @route POST api/user
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });
  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User.id,
      name: User.name,
      email: User.email,
    });
  }else{
    res.status(400);
    throw new Error("Invalid user data");
  }
});
module.exports = {
  registerUser,
  loginUser,
};
