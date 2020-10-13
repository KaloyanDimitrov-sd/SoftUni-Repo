const { getCubesById, updateCube } = require("../services/cube-service");
const { getNotAttachedAccessoriesById, saveAccessory } = require("../services/accessory-service");
const { isAuth } = require("../services/auth-service");

module.exports = (app) => {

    app.get("/create-accessory", isAuth, (req, res) => {
        res.status(200).render("createAccessory");
    });

    app.post("/create/accessory", isAuth, (req, res) => {
        let accessory = { name, description, imageUrl } = req.body;

        saveAccessory(accessory);

        res.status(200).render("createAccessory");
    });

    app.get("/attach-accessory/:id", isAuth, async (req, res) => {
        const cube = await getCubesById(req.params.id);

        const accessories = await getNotAttachedAccessoriesById(cube.accessories);

        res.status(200).render("attachAccessory", { cube, accessories });

    });

    app.post("/attach-accessory/:id", isAuth, async (req, res) => {

        updateCube(req.params.id, req.body.accessory);

        res.status(302).redirect(`/attach-accessory/${req.params.id}`);

    });
};