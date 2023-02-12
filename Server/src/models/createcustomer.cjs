const mongoose= require("mongoose");
const validator = require ("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const CreateCustomer =  mongoose.model("CreateCustomer",{
    
    UserName:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        
    },
        Name:{
        type: String,
        required:true,
        trim: true,
    },
    Password:{
        type: String,
        required:true,
       /*validate(value){
            if(value.length >9){
                throw new Error("number must be 10 digits");
            }

        },*/
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

module.exports = CreateCustomer;