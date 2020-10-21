const port = 3000;
const express = require('express')


const app = express()

require('./routing')(app)
require('./config/express')(app)

// app.use('/', indexRouter);
// indexRouter(app);

app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`))