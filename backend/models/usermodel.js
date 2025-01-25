//user schema
var mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profilePic: {
      type: String,
      default:"https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('user', userSchema)
