//user controllers
const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
 const signup= async(req, res) => {
    const {username,email,password} = req.body
    console.log(username,email,password)
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try{
const userExit= await User.findOne({email:email})
if(userExit){
    return res.status(400).json({message:'User already exist'})
    }
    const hashpassword= await bcrypt.hash(password,10)
    const user = new User({username,email,password:hashpassword})
    user.save()
}
    catch(err){
        console.log("error at sigin ",err)
        return res.status(400).json({message:'Something went wrong at the server'})
        
    }

}
const signin= async(req, res) => {
    const {email,password} = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try{
const userExit= await User.findOne({email:email})
if(!userExit){
    return res.status(400).json({message:'User does not exist'})
}
    const passwordCheck= await bcrypt.compare(password,userExit.password)
    if(!passwordCheck){
        return res.status(400).json({message:'Invalid email or password'})
    }
    return res.status(200).json({message:'Login successful'})
    }catch(err){
        console.log("error at sigup ",err)
        return res.status(400).json({message:'Something went wrong at the server'})
        
    }
}
module.exports = { signin,signup } 