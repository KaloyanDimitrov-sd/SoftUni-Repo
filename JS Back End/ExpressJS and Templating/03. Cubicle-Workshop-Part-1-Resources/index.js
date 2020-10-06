const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

const configExpress = require('./config/express');
const configRoutes = require('./routes/');

configExpress(app);
configRoutes(app);


app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));