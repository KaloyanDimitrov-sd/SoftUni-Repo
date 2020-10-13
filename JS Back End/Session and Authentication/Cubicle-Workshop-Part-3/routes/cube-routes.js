const env = process.env.NODE_ENV || "development";

const config = require("../config/config")[env];
const jwt = require("jsonwebtoken");
const { saveCube, getCubesById, getCubeAccessories, editCube, deleteCube } = require("../services/cube-service");
const { isAuth, isFullAuth } = require("../services/auth-service");


module.exports = (app) => {
    app.get("/create-cube", isAuth, (req, res) => {
        res.status(200).render("create");
    });

    app.post("/create-cube", isAuth, (req, res) => {
        const token = req.cookies["aid"];
        const decodedObject = jwt.verify(token, config.privateKey);

        let cube = { name, description, imageUrl, difficultyLevel } = req.body;
        cube.creatorId = decodedObject.userId;

        saveCube(cube);

        res.status(302).redirect("/");
    });

    app.get("/cube-details/:id", (req, res) => {
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

    app.get("/delete-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;

        res.status(200).render("deleteCubePage", { id });
    });

    app.post("/delete-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;

        deleteCube(id);
        res.redirect("/");
    });

    app.get("/edit-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;

        res.status(200).render("editCubePage", { id });
    });

    app.post("/edit-cube/:id", isFullAuth, (req, res) => {
        const id = req.params.id;
        const cube = { name, description, imageUrl, diffucultyLevel } = req.body;

        editCube(id, cube);
        res.redirect(`/cube-details/${id}`);
    });
};