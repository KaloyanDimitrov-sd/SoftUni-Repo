const mongoose = require("mongoose");
const { cubeSchema, accessorySchema } = require("../models/cube");

mongoose.connect("mongodb://localhost:27017/cubicle", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Cube = mongoose.model("Cube", cubeSchema);
const Accessories = mongoose.model("Accessories", accessorySchema);

module.exports = {
    Cube,
    Accessories
};