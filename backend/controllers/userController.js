//user controllers
const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
const { generateToken } = require("../middleware/Tokengenarate");
const signup = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const userByEmail = await User.findOne({ email: email });
        const userByUsername = await User.findOne({ username: username });

        if (userByEmail && userByUsername) {
          return res
            .status(400)
            .json({ message: "Email and Username are already in use" });
        } else if (userByEmail) {
          return res.status(400).json({ message: "Email is already in use" });
        } else if (userByUsername) {
          return res
            .status(400)
            .json({ message: "Username is already in use" });
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: hashpassword })
        user.save()
        return res.status(200).json({ message: 'User created successfully' })
    }
    catch (err) {
        console.log("error at sigin ", err)
        return res.status(400).json({ message: 'Something went wrong at the server' })

    }

}
const signin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const userExit = await User.findOne({ email: email })
        if (!userExit) {
            return res.status(400).json({ message: 'User does not exist' })
        }
        const passwordCheck = await bcrypt.compare(password, userExit.password)
        if (!passwordCheck) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }
       const token = generateToken(userExit);
console.log(token)
        return res.status(200).json({ message: 'Login successful', token: token })
    } catch (err) {
        console.log("error at sigup ", err)
        return res.status(400).json({ message: 'Something went wrong at the server' })

    }
}
 
const googleAuth = async (req, res) => {
    const {email,displayName,photoURL} = req.body;
    try {
      const user = await User.findOne({ email: email });    
      if (user) {
        const token = generateToken(user);
        return res
          .status(200)
          .json({ message: "Login successful", token: token });
      } else {

        const hashpassword= await bcrypt.hash("mypasswordispassword", 10);
        const newUser = new User({
          username: displayName.toLowerCase().replace(/ /g, "")+Math.floor(Math.random()*1000),
          email,
          password: hashpassword,
          profilePic: photoURL,
        });
        await newUser.save();
        const token = generateToken(newUser);
        return res
          .status(200)
          .json({ message: "Login successful", token: token });
      }
}catch(error){
        console.log(error)
      }
    }

module.exports = { signin, signup, googleAuth }; 