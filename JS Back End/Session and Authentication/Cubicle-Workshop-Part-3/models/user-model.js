const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [2, "Name is too short"],
        maxlength: [30, "Name is too long"],
        required: [true, "Please fill a valid name"]
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = { userSchema };