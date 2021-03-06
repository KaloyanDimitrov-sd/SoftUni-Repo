const env = process.env.NODE_ENV || "development";

const config = require("../config/config")[env];
const jwt = require("jsonwebtoken");
const { saveCube, getCubesById, getCubeAccessories, editCube, deleteCube } = require("../services/cube-service");
const { isAuth, isFullAuth, editDeleteAccess } = require("../services/auth-service");
const { createCubeError } = require("../services/errors");

module.exports = (app) => {
    app.get("/create-cube", isAuth, (req, res) => {
        res.status(200).render("create");
    });

    app.post("/create-cube", isAuth, (req, res) => {
        let cube = { name, description, imageUrl, difficultyLevel } = req.body;
        const errorResult = createCubeError(name, description, imageUrl, difficultyLevel);

        if (errorResult.error) {
            return res.render("create", errorResult);
        }

        const token = req.cookies["aid"];
        const decodedObject = jwt.verify(token, config.privateKey);

        cube.creatorId = decodedObject.userId;

        saveCube(cube);

        res.status(302).redirect("/");
    });

    app.get("/cube-details/:id", editDeleteAccess, (req, res) => {
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

    app.get("/delete-cube/:id", isFullAuth, async (req, res) => {
        const id = req.params.id;
        const cube = await getCubesById(id);

        res.status(200).render("deleteCubePage", cube);
    });

    app.post("/delete-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;

        deleteCube(id);
        res.redirect("/");
    });

    app.get("/edit-cube/:id", isFullAuth, async (req, res) => {
        const id = req.params.id;
        const cube = await getCubesById(id);

        res.status(200).render("editCubePage", cube);
    });

    app.post("/edit-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;
        const cube = { name, description, imageUrl, diffucultyLevel } = req.body;

        editCube(id, cube);
        res.redirect(`/cube-details/${id}`);
    });
};