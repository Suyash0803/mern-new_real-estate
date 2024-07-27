const express=require('express');
const Signup = require('../controller/auth');
// const Login = require('../controller/auth');
const Login=require('../controller/login');
const router=express.Router();


router.post('/signup',Signup);
router.post('/sign-in',Login);
module.exports=router;