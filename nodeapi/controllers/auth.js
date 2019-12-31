const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require('../models/user');
const expressJwt = require("express-jwt");


exports.sigup = async (req , res) => {
    const userExists = await User.findOne({email: req.body.email});
    if(userExists) return res.status(403).json({
        error: "Email is taken"
    });

    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ message: "Signup success! Please login." });
}; 


exports.signin = (req,res) => {
    // find the user base on the e-mail
    const {email,password} = req.body;
    User.findOne({email}, (err, user) => {
        // if err or no user
        if(err || !user){
            return res.status(401).json({// 401 Unauthorized
                error: "User with that email does not exist. Please signin"
            })  
        }

        // if user is found make sure the email and password match

        // create authenticate method in model and use here
        if(!user.authenticate(password)){
            return res.status(401).json({// 401 Unauthorized
                error: "E-mail and Password do not match"
             })
        } 

    // genarate a token with user id and secret
    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET);

    //persist the token as 't' in cookie with expriry date
    res.cookie('t',token, {expire: new Date( + 9999)});

    //return response with user and token to frontend client
    const {_id,name,email} = user;
    return res.json({token, user:{_id,email,name} });


    }); 
};


exports.signout = (req,res) => {
    res.clearCookie('t');
    return res.json({message: "Sign out success !"});


};


// User must have the ID and secret
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET
});