const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "Please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports= mongoose.model('goal',goalSchema)
