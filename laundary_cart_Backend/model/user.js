const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true},
    phone:{type:Number,
    required:true,
    unique:true},
    stateName:String,
    district:String,
    pincode:Number,
    address:String,
    password:String
});
const User = mongoose.model('user',UserSchema)
module.exports = User
