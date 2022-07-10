const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
  {
    use:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User'
    },
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
