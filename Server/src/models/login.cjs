const  mongoose = require("mongoose");
const validator = require("validator");

const Customer= mongoose.model ("Customer",{
UserName:{
    type:String,
    required: true,
    trim: true,
    lowercase: true,
    trim: true,
},
Password:{
    type: String,
    required: true,
},
});
 module.exports = Customer;