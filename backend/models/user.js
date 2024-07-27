const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt'); // Import bcrypt

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        minLength: 4,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
        maxLength: 1024,
    },
    confirm_password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
        maxLength: 1024,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        minLength: 10,
        maxLength: 10,
    },
}, { timestamps: true });

// Static method to find and validate a user
userSchema.statics.findAndValidate = async function (email, password) {
    const foundUser = await this.findOne({ email });
    if (!foundUser) {
        return false; // User not found
    }
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
};

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
