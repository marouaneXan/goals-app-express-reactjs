const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name field"],
    },
    email: {
      type: String,
      require: [true, "Please add a email field"],
    },
    password: {
      type: String,
      require: [true, "Please add a password field"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
