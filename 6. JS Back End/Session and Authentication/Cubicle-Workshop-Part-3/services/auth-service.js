const env = process.env.NODE_ENV || "development";

const config = require("../config/config")[env];
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users, Cube } = require("../config/database");

function createJWT(data) {
    const token = jwt.sign(data, config.privateKey);

    return token;
};

async function createUser(req, res) {
    const { username, password } = req.body;

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const userObject = await new Users({
        username,
        password: hash
    }).save();

    const token = createJWT({ userId: userObject._id, username: userObject.username });

    res.cookie("aid", token);

    return true;
};

async function verifyUser(req, res) {
    const { username, password } = req.body;

    const user = await Users.findOne({ username });

    if (user === null) {
        return false;
    };

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = createJWT({ userId: user._id, username: user.username });

        res.cookie("aid", token);
    };

    return status;
};

function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies["aid"];
        jwt.verify(token, config.privateKey);
        res.locals.isLoggedIn = true;
    } catch (e) {
        res.locals.isLoggedIn = false;
    }

    next();
};

function isAuth(req, res, next) {
    try {
        const token = req.cookies["aid"];
        jwt.verify(token, config.privateKey);
        next();
    } catch (e) {
        res.status(401).redirect("/");
    };
};

function isGuest(req, res, next) {
    try {
        const token = req.cookies["aid"];
        jwt.verify(token, config.privateKey);
        res.redirect("/");
    } catch (e) {
        next();
    };
};

function logout(req, res) {
    res.clearCookie("aid");
    res.redirect("/");
};

async function isFullAuth(req, res, next) {
    try {
        const id = req.params.id;
        const token = req.cookies["aid"];
        const userObj = jwt.verify(token, config.privateKey);

        const cube = await Cube.findById(id);

        if(cube.creatorId == userObj.userId) {
            return next();
        };

        res.status(401).redirect("/");
        
    } catch (e) {
        res.status(401).redirect("/");
    };
};

async function editDeleteAccess(req, res, next) {
    try {
        res.locals.editDeleteAccess = false;
        const id = req.params.id;
        const token = req.cookies["aid"];
        const userObj = jwt.verify(token, config.privateKey);

        const cube = await Cube.findById(id);

        if(cube.creatorId == userObj.userId) {
            res.locals.editDeleteAccess = true;
            return next();
        };
    } catch (e) {
        res.locals.editDeleteAccess = false;
    }

    next();
};

module.exports = {
    createUser,
    verifyUser,
    isLoggedIn,
    isAuth,
    isGuest,
    logout,
    isFullAuth,
    editDeleteAccess
};