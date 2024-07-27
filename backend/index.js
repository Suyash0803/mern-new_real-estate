const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/real-est', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error:', err.message);
});

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/api/v1', authRoutes);

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || 'Internal Server Error';
    res.status(status).json({
        success:false,
        status,
        message
    })
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
