const mongoose = require("mongoose");
const { Schema } = mongoose;

const DESCRIPTION_MAX_LENGTH = 200;

const cubeSchema = new Schema({
    name: {
        type: String,
        minlength: [2, "Name is too short"],
        maxlength: [30, "Name is too long"],
        required: [true, "Please fill a valid name"]
    },
    description: {
        type: String,
        maxlength: [DESCRIPTION_MAX_LENGTH, `Description cannot be longer than ${DESCRIPTION_MAX_LENGTH} symbols.`],
        required: [true, "Please fill a valid description"]
    },
    imageUrl: {
        type: String,
        match: [/^https?:\/\//, "Please fill a valid address"],
        required: [true, "Please fill a valid address"]
    },
    difficultyLevel: {
        type: Number,
        min: [1, "Difficulty must be an integer value between 1 and 6."],
        max: [6, "Difficulty must be an integer value between 1 and 6."],
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        },
        required: [true, "Please fill a difficulty lelvel"]
    },
    accessories: [{ type: Schema.Types.ObjectId, ref: "Accessory"}]
});

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
})

module.exports = {
    cubeSchema,
    accessorySchema
};