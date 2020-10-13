const mongoose = require("mongoose");
const { Schema } = mongoose;

const DESCRIPTION_MAX_LENGTH = 200;

const accessorySchema = new Schema({
    name: {
        type: String,
        minlength: [2, "Name is too short"],
        maxlength: [30, "Name is too long"],
        required: [true, "Please fill a valid name"]
    },
    imageUrl: {
        type: String,
        match: [/^https?:\/\//, "Please fill a valid address"],
        required: [true, "Please fill a valid address"]
    },
    description: {
        type: String,
        maxlength: [DESCRIPTION_MAX_LENGTH, `Description cannot be longer than ${DESCRIPTION_MAX_LENGTH} symbols.`],
        required: [true, "Please fill a valid description"]
    },
    cubes: [{ type: Schema.Types.ObjectId, ref: "Cube"}]
});

module.exports = {
    accessorySchema
};