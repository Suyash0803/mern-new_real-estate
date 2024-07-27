const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minLength:4,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:1024,

    },
    phone:{
        type:String,
        required:true,
        minLength:10,
        maxLength:10,
    },


},{timestamps:true});   

const User=mongoose.model('User',userSchema);
module.exports=User;