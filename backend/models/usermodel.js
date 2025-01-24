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
    profilePic:{
        type:String,
        default:'https://res.cloudinary.com/dxkufsejm/image/upload/v1633663664/blank-profile-picture-973460_640_ewvq6s.png'
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model('user', userSchema)
