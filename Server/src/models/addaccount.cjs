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
        type: String,
        required: true,
      
    },
    NationalId:{
        type: String,
        required: true, 
        trim: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Account:{
        type: String,
        required: true,
        },

});

module.exports = AddAccount;