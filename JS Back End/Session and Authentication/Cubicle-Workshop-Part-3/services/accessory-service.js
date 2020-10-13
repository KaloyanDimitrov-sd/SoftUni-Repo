const { Accessories } = require("../config/database");

function getNotAttachedAccessoriesById(id) {
    return Accessories.find({
        _id: { $nin: id}
    }).lean();
};

function saveAccessory(accessory) {
    new Accessories({
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl
    }).save();
};

module.exports = {
    getNotAttachedAccessoriesById,
    saveAccessory
};