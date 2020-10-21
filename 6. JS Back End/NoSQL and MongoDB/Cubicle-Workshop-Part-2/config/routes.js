const { save, saveAccessory, getCubes, getNotAttachedAccessoriesById, getCubesById, searchCubes, updateCube, getCubeAccessories } = require("../services/cube-service");

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

    app.get("/create", (req, res) => {
        res.status(200).render("create");
    });

    app.get("/create-accessory", (req, res) => {
        res.status(200).render("createAccessory");
    });

    app.post("/create/accessory", (req, res) => {
        let accessory = { name, description, imageUrl } = req.body;

        saveAccessory(accessory);

        res.status(200).render("createAccessory");
    });

    app.get("/attach-accessory/:id", async (req, res) => {
        const cube = await getCubesById(req.params.id);

        const accessories = await getNotAttachedAccessoriesById(cube.accessories);

        res.status(200).render("attachAccessory", { cube, accessories });

    });

    app.post("/attach-accessory/:id", async (req, res) => {

        updateCube(req.params.id, req.body.accessory);

        res.status(302).redirect(`/attach-accessory/${req.params.id}`);

    });

    app.post("/create", (req, res) => {
        let cube = { name, description, imageUrl, difficultyLevel } = req.body;

        save(cube);

        res.status(302).redirect("/");
    });

    app.get("/details/:id", (req, res) => {
        getCubesById(req.params.id)
            .then(async (cube) => {
                let accessories = await getCubeAccessories(cube._id);

                if (accessories.length === 0) {
                    accessories = false;
                };

                res.status(200).render("updatedDetailsPage", { cube, accessories });
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