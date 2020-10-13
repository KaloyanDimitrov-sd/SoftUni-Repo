const { Cube, Accessories } = require("../config/database");

function getCubes() {
    return Cube.find({}).lean();
};

function getCubesById(id) {
    return Cube.findById(id).lean();
};

function saveCube(cube) {
    new Cube({
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficultyLevel: cube.difficultyLevel,
        creatorId: cube.creatorId
    }).save();
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
    });

};

async function getCubeAccessories(cubeId) {
    const cube = await Cube.findById(cubeId);
    const accessories = await Accessories.find({
        _id: { $in: cube.accessories }
    });
    return accessories;
};

const editCube = async (id, cube) => {
    await Cube.findByIdAndUpdate(id, cube);
};

const deleteCube = async (id) => {
    await Cube.findByIdAndRemove(id);
};

module.exports = {
    getCubes,
    getCubesById,
    saveCube,
    searchCubes,
    updateCube,
    getCubeAccessories,
    editCube,
    deleteCube
};