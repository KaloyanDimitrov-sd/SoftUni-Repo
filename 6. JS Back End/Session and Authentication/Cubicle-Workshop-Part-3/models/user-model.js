const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [5, "Name is too short"],
        maxlength: [30, "Name is too long"],
        required: [true, "Please fill a valid name"],
        unique: [true, "This username already exist"],
        match: [/^\w*$/, "Username should consist only English letters and digits"]
    },
    password: {
        type: String,
        required: true,
        // match: [/^\w*$/, "Password should consist only English letters and digits"]
    }
});

module.exports = { userSchema };