const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
// const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname === "/cats/add-cat" && req.method === "GET") {
        let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

        const index = fs.createReadStream(filePath);

        index.on("data", (data) => {
            let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace("{{catBreeds", catBreedPlaceholder);

            res.write(modifiedData);
        });

        index.on("end", () => {
            res.end();
        });

        index.on("err", (err) => {
            console.log(err);
        });
    } else if (pathname === "/cats/add-breed" && req.method === "GET") {
        let filePath = path.normalize(path.join(__dirname, "../views/addBreed.html"));

        const index = fs.createReadStream(filePath);

        index.on("data", (data) => {
            res.write(data);
        });

        index.on("end", () => {
            res.end();
        });

        index.on("err", (err) => {
            console.log(err);
        });
    } else if (pathname === "/cats/add-breed" && req.method === "POST") {
        let formData = "";

        req.on("data", (data) => {
            formData += data;
        });

        req.on("end", () => {

            let body = qs.parse(formData);

            fs.readFile("./data/breeds.json", (err, data) => {
                if (err) {
                    throw err;
                };

                let breed = JSON.parse(data);
                breed.push(body.breed);
                let json = JSON.stringify(breed);

                fs.writeFile("./data/breeds.json", json, "utf-8", () => {
                    console.log("The breed was loaded successfully");
                });

                res.writeHead(303, {location: "/"});
                res.end();
            });

        });

    } else if (pathname === "/cats/add-cat" && req.method === "POST") {

    } else {
        return true;
    };
};