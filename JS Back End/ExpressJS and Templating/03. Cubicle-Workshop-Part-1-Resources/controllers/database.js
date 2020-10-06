const fs = require("fs");
const { get } = require("http");
const path = require("path");

const databaseFile = path.join(__dirname, "..", "config/database.json");

let isDBAccessed = false;


const saveCube = (cube, callback) => {
    if(isDBAccessed) {
        return setTimeout(saveCube(cube), 0);
    };
    isDBAccessed = true;

    getCubes((cubes) => {
        cubes.push(cube);

        fs.writeFile(databaseFile, JSON.stringify(cubes), error => {
            if (error) {
                throw error;
            };

            isDBAccessed = false
            console.log("New cube is successfully stored");
            callback()
        });
    });

};

const getCube = (id, callback) => {
    getCubes(cubes => {
        const cube = cubes.filter(c => c.id === id)[0];
        callback(cube);
    });
};

const getCubes = (callback) => {
    fs.readFile(databaseFile, (err, dbData) => {
        if (err) {
            throw err;
        }

        const cubes = JSON.parse(dbData);
        callback(cubes);
    });
};

module.exports = {
    getCube,
    getCubes,
    saveCube
}