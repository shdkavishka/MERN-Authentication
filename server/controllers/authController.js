const User = require('../models/User')
const {hashPassword,comparePassword} = require('../helpers/auth')

const test = (req,res) =>{
    res.json("test is working")
}


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
        // const hashedPassword = await hashPassword(password);
        //create user
        const user = await User.create({
            name, 
            email,
            password
        });
978+9
        return res.json(user)
    }
        catch (error) {

        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}