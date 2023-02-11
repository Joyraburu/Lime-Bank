const mongoose= require("mongoose");
const validator = require ("validator");

const AddAccount =  mongoose.model("AddAccount",{
    
    UserName:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        trim: true,
    },
        Name:{
        type: String,
        required:true,
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
    NationalId:{
        type: Number,
        required: true, 
        trim: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Account:{
        type: Number,
        required: true,
        },

});

module.exports = AddAccount;