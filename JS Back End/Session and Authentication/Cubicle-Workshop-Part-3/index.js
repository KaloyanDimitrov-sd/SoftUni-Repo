const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const express = require("express");
const app = express();

const configExpress = require("./config/express");
const configRoutes = require("./routes");
const configAuth = require("./routes/auth-routes");
const configCube = require("./routes/cube-routes");
const configAccesoory = require("./routes/accessory-routes");

configExpress(app);
configAuth(app);
configCube(app);
configAccesoory(app);
configRoutes(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));