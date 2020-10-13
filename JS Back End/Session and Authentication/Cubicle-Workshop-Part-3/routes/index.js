const { getCubes, searchCubes } = require("../services/cube-service");

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
                if (searchResult.cubes.length === 0) {
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

    app.all("*", (req, res) => {
        res.status(404).render("error", {
            statusCode: 404,
            statusMessage: "Not Found",
            statusImageUrl: "http://clipart-library.com/new_gallery/843798_sad-smileys-png.png"
        });
    });
};