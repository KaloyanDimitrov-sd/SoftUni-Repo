const { Cube, Accessories } = require("../config/database");

function getCubes() {
    return Cube.find({}).lean();
};

function getAccessories() {
    return Accessories.find({}).lean();
};

function getCubesById(id) {
    return Cube.findById(id).lean();
};

function getNotAttachedAccessoriesById(id) {
    return Accessories.find({
        _id: { $nin: id}
    }).lean();
};

function searchCubes(search, difficultyFrom, difficultyTo) {
    let fromDifficultyParsed = parseInt(difficultyFrom);
    let toDifficultyParsed = parseInt(difficultyTo);

    if (difficultyFrom === "") {
        fromDifficultyParsed = 1;
    };

    if (difficultyTo === "") {
        toDifficultyParsed = 6;
    };

    let result = new Promise(async (resolve,reject) => {
        let cubes = await Cube.find({
            $or: [
                { name: { $regex: search } },
                { description: { $regex: search } }
            ],
            difficultyLevel: { $gte: fromDifficultyParsed, $lte: toDifficultyParsed }
        }).lean();
        resolve({cubes, search});
    });

    return result;
};

function save(cube) {
    new Cube({
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficultyLevel: cube.difficultyLevel
    }).save();
};

function saveAccessory(accessory) {
    new Accessories({
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl
    }).save();
};

const updateCube = async (cubeId, accessoryId) => {
    await Cube.findByIdAndUpdate(cubeId, {
        $addToSet: {
            accessories: [accessoryId]
        }
    });

    await Accessories.findByIdAndUpdate(accessoryId, {
        $addToSet: {
            cubes: [cubeId]
        }
    })

};

async function getCubeAccessories(cubeId) {
    const cube = await Cube.findById(cubeId);
    const accessories = await Accessories.find({
        _id: { $in: cube.accessories }
    });
    return accessories;
};

module.exports = {
    save,
    saveAccessory,
    getCubes,
    getAccessories,
    getCubesById,
    getNotAttachedAccessoriesById,
    searchCubes,
    updateCube,
    getCubeAccessories
};