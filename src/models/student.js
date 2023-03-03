const mongoose = require("mongoose");
const validator = require("validator");

// student schema 

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        unique: true,
        unique: [true, "email id is already present"],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        required: true,
        min: 10,
   
        unique: true,
        
    },
    address:{
        type:String,
        required: true,
        // min: 10,
        // max: 10,
     
    }

})

// creating a new collection

const Student= new mongoose.model('Student',studentSchema);

module.exports = Student;