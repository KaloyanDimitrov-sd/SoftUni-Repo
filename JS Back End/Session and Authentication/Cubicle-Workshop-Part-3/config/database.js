const mongoose = require("mongoose");
const { cubeSchema } = require("../models/cube-model");
const { accessorySchema } = require("../models/accessory-model");
const { userSchema } = require("../models/user-model");

mongoose.connect("mongodb://localhost:27017/cubicle", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Cube = mongoose.model("Cube", cubeSchema);
const Accessories = mongoose.model("Accessories", accessorySchema);
const Users = mongoose.model("Users", userSchema);

module.exports = {
    Cube,
    Accessories,
    Users
};