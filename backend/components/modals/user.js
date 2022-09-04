const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fname: { 
            type: String, 
            required: true 
        },
        lname: { 
            type: String, 
            required: true 
        },
        uname: { 
            type: String, 
            required: true, 
            unique: true 
        },
        dob: { 
            type: String, 
            required: true 
        },
        mail: { 
            type: String, 
            required: true, 
            unique: true 
        },
        contact: { 
            type: String, 
            required: true, 
            unique: true 
        },
        role: { 
            type: String, 
            required: true
        },
        password: { 
            type: String, 
            required: true, 
            unique: true 
        },
        confirm: { 
            type: String, 
            required: true, 
            unique: true 
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model("USER", userSchema);
