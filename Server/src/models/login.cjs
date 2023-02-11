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
    type: Number,
    required: true,
    length: 10,
    validate(value){
        if(value >10){
            throw new Error("number must be 10 digits");
        }
    },
},
});
 module.exports = Customer;