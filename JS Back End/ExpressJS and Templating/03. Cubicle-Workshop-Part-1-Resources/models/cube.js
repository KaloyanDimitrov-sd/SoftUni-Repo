const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");
const { saveCube } = require("../controllers/database")

const databaseFile = path.join(__dirname, "..", "config/database.json");

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name || "No name";
        this.description = description;
        this.imageUrl = imageUrl || "placeholder";
        this.difficulty = difficulty || 0;
    };

    save(callback) {
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        };

        saveCube(newCube, callback)

        // function accessDB() {
        //     if(isDBAccessed) {
        //         return setTimeout(accessDB, 0);
        //     };

        //     isDBAccessed = true;

        //     fs.readFile(databaseFile, (err, dbData) => {
        //         if (err) {
        //             throw err;
        //         };
    
        //         const db = JSON.parse(dbData);
        //         db.push(data);
    
        //         fs.writeFile(databaseFile, JSON.stringify(db), error => {
        //             if (error) {
        //                 throw error;
        //             };

        //             isDBAccessed = false
        //             console.log("New cube is successfully stored");
        //         });
    
        //     });
        // };

        // accessDB();
    };
};

module.exports = Cube;