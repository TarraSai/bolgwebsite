//token generate function

const jwt = require("jsonwebtoken");

 const generateToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
    profilePic: user.profilePic,
  };
  return jwt.sign(payload, process.env.SERCET_KEY, {
    expiresIn: "2d",
  });
};

module.exports = { generateToken };