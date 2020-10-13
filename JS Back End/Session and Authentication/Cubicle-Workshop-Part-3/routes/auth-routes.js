const { createUser, verifyUser, isGuest, isAuth, logout } = require("../services/auth-service");

module.exports = (app) => {

    app.get("/login", isGuest, (req, res) => {
        res.render("loginPage");
    });

    app.post("/login", isGuest, async (req, res) => {
        const status = await verifyUser(req, res);

        if (status) {
            return res.status(302).redirect("/");
        };

        res.status(302).redirect("/");

    });

    app.get("/register", isGuest, (req, res) => {
        res.render("registerPage");
    });

    app.post("/register", isGuest, async (req, res) => {
        const status = await createUser(req, res);

        if (status) {
            return res.status(302).redirect("/");
        };

        res.status(302).redirect("/");

    });

    app.get("/logout", isAuth, logout)

};