const User = require('../models/user');
const ErrorHandler = require('../utils/error');
const Signup=async(req,res,next)=>{
    const {name,email,password,confirm_password,phone}=req.body;
    if(!name){
        return res.status(422).json({error:"Name is required"});
    }
    if(!email){
        return res.status(422).json({error:"Email is required"});
    }
    if(!password){
        return res.status(422).json({error:"Password is required"});
    }
    if(!confirm_password){
        return res.status(422).json({error:"Confirm Password is required"});
    }
    if(confirm_password!==password){
        return res.status(422).json({error:"Password and Confirm Password should be same"});
    }
    if(!phone){
        return res.status(422).json({error:"Phone is required"});
    }
    const newUser=new User({name,email,password,confirm_password,phone});

    await newUser.save().then(()=>{
        res.status(200).json({message:"User is registered successfully"});
    }).catch((err)=>{
        next(ErrorHandler(500,'error in saving data'));
    })
    
}
module.exports=Signup;