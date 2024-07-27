const User=require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Login=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email){
        return res.status(422).json({error:"Email is required"});
    }
    if(!password){
        return res.status(422).json({error:"Password is required"});
    }
    const user=await User.findOne({email});
    if(!user){
        return next(ErrorHandler(422,'Invalid Email or Password'));
    }
    
    const isValid = await bcrypt.compareSync(password, user.password);
    if(!isValid){
        return next (ErrorHandler(422,'Invalid Email or Password'));
    }
    const token=jwt.sign({id:user._id},"123456");
    const {password:pass,...rest}=user._doc;
    res.cookie('token',token,{expire:new Date()+24*60*60,httpOnly:true});
    res.status(200).json(rest);
    // res.json({})
}

module.exports=Login;