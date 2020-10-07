const Cube = require("../models/cube");
const { save, getCubes, getCubesById, searchCubes } = require("../services/cube-service");

module.exports = (app) => {
    app.get("/", (req, res) => {
        getCubes()
            .then(cubes => {
                res.status(200).render("index", { cubes });
            })
            .catch(error => {
                throw new Error(error);
            });
    });

    app.get("/search", (req, res) => {
        searchCubes(req.query.search, req.query.from, req.query.to)
                .then(searchResult => {
                    if (Object.keys(searchResult.cubes).length === 0) {
                        res.status(404).render("error", {
                            statusCode: 404,
                            statusMessage: "No cubes found in database.",
                            statusImageUrl: "http://clipart-library.com/new_gallery/843798_sad-smileys-png.png"
                            });
                    } else {
                        res.status(200).render("index", {
                            cubes: searchResult.cubes,
                            search: searchResult.search
                        });
                    };

                })
                .catch(error => {
                    throw new Error(error);
                });
    });

    app.get("/about", (req, res) => {
        res.status(200).render("about");
    });

    app.get("/create", (req, res) => {
        res.status(200).render("create");
    });

    app.post("/create", (req, res) => {
        let { name, description, imageUrl, difficultyLevel } = req.body;

        let cube = new Cube(name, description, imageUrl, difficultyLevel);
        save(cube);

        res.status(302).redirect("/");
    });

    app.get("/details/:id(\\d+)", (req, res) => {
        getCubesById(parseInt(req.params.id))
            .then(cube => {
                res.status(200).render("details", { cube });
            })
            .catch(err => {
                res.status(403).render("error", {
                    statusCode: 403,
                    statusMessage: "Forbidden",
                    statusImageUrl: "http://clipart-library.com/new_gallery/843798_sad-smileys-png.png"
                    });
            });
    });

    app.all("*", (req, res) => {
        res.status(404).render("error", {
            statusCode: 404,
            statusMessage: "Not Found",
            statusImageUrl: "http://clipart-library.com/new_gallery/843798_sad-smileys-png.png"
            });
    });
};