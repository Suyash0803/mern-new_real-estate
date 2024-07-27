const express=require('express');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/real-est',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log('Error:',err.message);
});

const app=express();

app.listen(3000,()=>{
    console.log('Server is running at port 3000');
});