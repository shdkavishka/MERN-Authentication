const User = require('../models/User')
const {hashPassword,comparePassword} = require('../helpers/auth')

const test = (req,res) =>{
    res.json("test is working")
}

//Register user
const registerUser = async (req, res) =>{
    try {
        const {name, email, password} = req.body;
        //check if name was enterd
        if(!name){
            return res.json({error: "Please enter name"})
        };
        //check is password is good
        if(!password || password.length < 6)
        {
            return res.json({error: "Please enter password 6+ chars long"})
        }
        //check if email is good
        if(!email){
            return res.json({error: "Please enter email"})
        }
        const exist = await User.findOne({email});
        if(exist)
        {
            return res.json({error: "Email already exists"})
        }
        //hash password
        const hashPass = await hashPassword(password);
        //create user
        const user = await User.create({
            name, 
            email,
            password:hashPass
        });

        return res.json(user)
    }
        catch (error) {

        console.log(error)
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email and password" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if password matches
        const match = await comparePassword(password, user.password);
        if (match) {
            // Password matches, return success message or user data
            return res.json({ message: "Login successful", user });
        } else {
            // Password doesn't match
            return res.status(401).json({ error: "Incorrect password" });
        }
    } catch (error) {
        // Handle any unexpected errors
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}